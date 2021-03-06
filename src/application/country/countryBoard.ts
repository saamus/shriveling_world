'use strict';
import { Scene, Camera, Raycaster as Raycaster, Mesh, Vector2, Material } from 'three';
import { updateSumUpCriteria, LatLonH, searchCriteria as searchCriteria } from '../common/utils';
import type { ISumUpCriteria, ICriteria as ICriteria } from '../definitions/project';
import { CONFIGURATION } from '../common/configuration';
import { CountryMeshShader } from './countryMeshShader';
import type * as GeoJSON from 'geojson';
export class CountryBoard {
	public countryMeshCollection: CountryMeshShader[] = [];
	public ready = false;
	private readonly _scene: Scene;
	private readonly _camera: Camera;
	private readonly _raycaster: Raycaster;
	private _highlightedCriteria: ICriteria = {};
	private _selectedMeshes: Mesh[] = [];
	private _scale = 1;
	private _show = true;
	private _opacity = 1;
	private _sumUpProperties: ISumUpCriteria = {};
	private _extruded = 1;

	get show(): boolean {
		return this._show;
	}

	set show(value: boolean) {
		this.countryMeshCollection.forEach((country) => {
			country.visible = value;
		});
		this._show = value;
	}

	get extruded(): number {
		return this._extruded;
	}

	set extruded(value: number) {
		this.countryMeshCollection.forEach((country) => {
			country.extruded = value;
		});
		this._extruded = value;
	}

	get scale(): number {
		return this._scale;
	}

	set scale(value: number) {
		this._selectedMeshes.forEach((mesh) => {
			mesh.scale.setScalar(value);
		});
		this.countryMeshCollection.forEach((mesh) => {
			mesh.scale.setScalar(value);
		});
		this._scale = value;
	}

	get lookupCriteria(): ISumUpCriteria {
		return this._sumUpProperties;
	}

	get opacity(): number {
		return this._opacity;
	}

	set opacity(value: number) {
		if (value > 0 && value <= 1) {
			this._opacity = value;
			this.countryMeshCollection.forEach((country) => {
				(<Material>country.material).opacity = value;
			});
		}
	}

	public constructor(scene: Scene, camera: Camera) {
		this._scene = scene;
		this._camera = camera;
		this._raycaster = new Raycaster();
	}

	public async add(geoJson: GeoJSON.FeatureCollection): Promise<void> {
		this.ready = false;
		this.clean();
		const collection = await CountryMeshShader.generator(geoJson);
		collection.forEach((mesh) => {
			this.countryMeshCollection.push(mesh);
			this._scene.add(mesh);
			mesh.visible = this._show;
			mesh.scale.setScalar(this._scale);
			updateSumUpCriteria(this._sumUpProperties, mesh.otherProperties);
		});
		this.ready = true;
	}

	public clean(): void {
		for (let i = this.countryMeshCollection.length - 1; i >= 0; i--) {
			this._scene.remove(this.countryMeshCollection[i]);
			this.countryMeshCollection.splice(i, 1);
		}

		this._selectedMeshes.forEach((mesh) => {
			mesh.visible = false;
		});
		this._sumUpProperties = {};
	}

	public getMeshByMouse(event: MouseEvent, highLight = false): CountryMeshShader {
		let result: CountryMeshShader;
		const mouse = new Vector2();
		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		this._raycaster.setFromCamera(mouse, this._camera);
		const intersects = this._raycaster.intersectObjects(this.countryMeshCollection);
		if (intersects.length > 0) {
			result = <CountryMeshShader>intersects[0].object;
			this.highLight(result.otherProperties, highLight);
		} else {
			this._selectedMeshes.forEach((mesh) => {
				if (!Array.isArray(mesh.material)) {
					mesh.material.visible = false;
				}
			});
		}

		return result;
	}

	public extrude(criteria: ICriteria, value: number): void {
		this._selectedMeshes.forEach((mesh) => {
			mesh.visible = false;
		});
		this.searchMesh(criteria).forEach((mesh) => {
			mesh.extruded = value;
		});
		this._reHighLight();
	}

	public highLight(criteria: ICriteria, light: boolean): void {
		if (criteria !== this._highlightedCriteria) {
			this._highlightedCriteria = criteria;
			this._selectedMeshes.forEach((mesh) => {
				this._scene.remove(mesh);
			});
			this._selectedMeshes = this.searchMesh(criteria).map((mesh) => {
				const geometry = mesh.geometry;
				const out = new Mesh(geometry, CONFIGURATION.highLightedMaterial);
				this._scene.add(out);
				out.scale.setScalar(this._scale);
				return out;
			});
		}

		this._selectedMeshes.forEach((mesh) => {
			if (!Array.isArray(mesh.material)) {
				mesh.material.visible = light;
			}
		});
	}

	public searchMesh(criterias: ICriteria | LatLonH, path = ''): CountryMeshShader[] {
		let resultat: CountryMeshShader[];
		if (criterias instanceof LatLonH) {
			resultat = this.countryMeshCollection.filter((country) => country.isInside(criterias));
		} else {
			resultat = searchCriteria(this.countryMeshCollection, criterias, [], 'otherProperties.' + path);
		}

		return resultat;
	}

	public showCriteria(criterias: ICriteria, state: boolean): void {
		const realState = state && this._show;
		this.searchMesh(criterias).forEach((country) => {
			country.visible = realState;
		});
	}

	private _reHighLight(): void {
		if (this._selectedMeshes.length > 0) {
			let visible = false;
			const temp = this._selectedMeshes[0].material;
			if (!Array.isArray(temp)) {
				visible = temp.visible;
			}

			const criterias = this._highlightedCriteria;
			this._highlightedCriteria = undefined;
			this.highLight(criterias, visible);
		}
	}
}
