<script context="module" lang="ts">
	export async function preload() {
		const res = await this.fetch(`datasets/datasets.json`);
		const datasets = await res.json();

		return { datasets };
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Menu from '../../components/menu.svelte';
	import { inflate } from 'pako/lib/inflate';
	import type { IListFile } from '../../application/definitions/project';
	let bigBoard;
	let board: HTMLElement;
	let dat: HTMLElement;
	export let datasets;
	import { onDestroy } from 'svelte';

	async function addSet(event: MouseEvent) {
		const name = (event.target as HTMLElement).dataset.name;
		if (name !== undefined) {
			bigBoard.cleanAll();
			addLoader('block');
			const zip = await fetch('datasets/' + name).then(async (raw) =>
				raw.arrayBuffer().then((buf) => new Uint8Array(buf))
			);
			const unzipped: IListFile[] = JSON.parse(new TextDecoder('utf-8').decode(inflate(zip)));
			bigBoard.cleanAll(unzipped);
			if(bigBoard.state =='complete'){
				addLoader('none');
			}
		}
	}
	onMount(async () => {
		const BigBoard = (await import('../../application/bigBoard/bigBoard')).default;
		bigBoard = new BigBoard(board, dat);
		window.bigBoard = bigBoard;
	});
	function addLoader(state : any): void {
		const loader = document.getElementsByClassName('loader') as HTMLElement;
		loader[0].style.display = state;
	}
</script>

<style>
	.app {
		background: #000;
		color: #fff;
		padding: 0;
		margin: 0;
		font-weight: bold;
		overflow: hidden;
	}
	.dataset {
		position: absolute;
		top: 100px;
		z-index: 3;
		color: wheat;
		text-shadow: 2px 2px 4px black;
		cursor: pointer;
	}
	.dataset > div {
		font-size: inherit;
		transition: font-size 1s;
	}
	.dataset > div:hover {
		font-size: x-large;
		transition: font-size 1s;
	}
	.dat {
		top: 50px;
		z-index: 3;
		position: absolute;
		right: 0px;
	}
	.loader {
		display : none;
		width : 100px;
		height : 100px;
		border : 6px solid #e5e5e5;
		border-top : 6px solid #007bff; 
		border-radius : 50%;
		position : absolute;
		top : 50%;
		left : 50%;
		transform : translate(-50%, -50%) rotate(0deg);
		box-shadow : 0 0 2px 1px rgba(0,0,0,0.2);
		animation : move 1s linear infinite;
	}
	@keyframes move {
		100% {transform: translate(-50%, -50%)  rotate(360deg);}
	}
</style>

<Menu fixed={false}>
	<div bind:this={board} class="app" />
	<div class="dataset" on:click={addSet}>
		{#each datasets as dataset, i}
			<div data-name={dataset}>{dataset}</div>
		{/each}
	</div>
	<div class="dat" bind:this={dat} />
	<div class="loader" />
</Menu>
