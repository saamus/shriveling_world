import{S as e,i as t,s as i,c as n,a,m as s,t as r,b as o,d as l,G as d,e as f,f as c,g as h,h as u,j as w,k as m,l as b,n as _,o as k,H as g,w as v,x as p,B as x,I as y,J as E}from"./client.32134592.js";import{M as A}from"./menu.2c2312d1.js";var R=(e,t,i,n)=>{let a=65535&e|0,s=e>>>16&65535|0,r=0;for(;0!==i;){r=i>2e3?2e3:i,i-=r;do{a=a+t[n++]|0,s=s+a|0}while(--r);a%=65521,s%=65521}return a|s<<16|0};const Z=new Uint32Array((()=>{let e,t=[];for(var i=0;i<256;i++){e=i;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[i]=e}return t})());var S=(e,t,i,n)=>{const a=Z,s=n+i;e^=-1;for(let i=n;i<s;i++)e=e>>>8^a[255&(e^t[i])];return-1^e};var O=function(e,t){let i,n,a,s,r,o,l,d,f,c,h,u,w,m,b,_,k,g,v,p,x,y,E,A;const R=e.state;i=e.next_in,E=e.input,n=i+(e.avail_in-5),a=e.next_out,A=e.output,s=a-(t-e.avail_out),r=a+(e.avail_out-257),o=R.dmax,l=R.wsize,d=R.whave,f=R.wnext,c=R.window,h=R.hold,u=R.bits,w=R.lencode,m=R.distcode,b=(1<<R.lenbits)-1,_=(1<<R.distbits)-1;e:do{u<15&&(h+=E[i++]<<u,u+=8,h+=E[i++]<<u,u+=8),k=w[h&b];t:for(;;){if(g=k>>>24,h>>>=g,u-=g,g=k>>>16&255,0===g)A[a++]=65535&k;else{if(!(16&g)){if(0==(64&g)){k=w[(65535&k)+(h&(1<<g)-1)];continue t}if(32&g){R.mode=12;break e}e.msg="invalid literal/length code",R.mode=30;break e}v=65535&k,g&=15,g&&(u<g&&(h+=E[i++]<<u,u+=8),v+=h&(1<<g)-1,h>>>=g,u-=g),u<15&&(h+=E[i++]<<u,u+=8,h+=E[i++]<<u,u+=8),k=m[h&_];i:for(;;){if(g=k>>>24,h>>>=g,u-=g,g=k>>>16&255,!(16&g)){if(0==(64&g)){k=m[(65535&k)+(h&(1<<g)-1)];continue i}e.msg="invalid distance code",R.mode=30;break e}if(p=65535&k,g&=15,u<g&&(h+=E[i++]<<u,u+=8,u<g&&(h+=E[i++]<<u,u+=8)),p+=h&(1<<g)-1,p>o){e.msg="invalid distance too far back",R.mode=30;break e}if(h>>>=g,u-=g,g=a-s,p>g){if(g=p-g,g>d&&R.sane){e.msg="invalid distance too far back",R.mode=30;break e}if(x=0,y=c,0===f){if(x+=l-g,g<v){v-=g;do{A[a++]=c[x++]}while(--g);x=a-p,y=A}}else if(f<g){if(x+=l+f-g,g-=f,g<v){v-=g;do{A[a++]=c[x++]}while(--g);if(x=0,f<v){g=f,v-=g;do{A[a++]=c[x++]}while(--g);x=a-p,y=A}}}else if(x+=f-g,g<v){v-=g;do{A[a++]=c[x++]}while(--g);x=a-p,y=A}for(;v>2;)A[a++]=y[x++],A[a++]=y[x++],A[a++]=y[x++],v-=3;v&&(A[a++]=y[x++],v>1&&(A[a++]=y[x++]))}else{x=a-p;do{A[a++]=A[x++],A[a++]=A[x++],A[a++]=A[x++],v-=3}while(v>2);v&&(A[a++]=A[x++],v>1&&(A[a++]=A[x++]))}break}}break}}while(i<n&&a<r);v=u>>3,i-=v,u-=v<<3,h&=(1<<u)-1,e.next_in=i,e.next_out=a,e.avail_in=i<n?n-i+5:5-(i-n),e.avail_out=a<r?r-a+257:257-(a-r),R.hold=h,R.bits=u};const U=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),D=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),I=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),T=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var B=(e,t,i,n,a,s,r,o)=>{const l=o.bits;let d,f,c,h,u,w,m=0,b=0,_=0,k=0,g=0,v=0,p=0,x=0,y=0,E=0,A=null,R=0;const Z=new Uint16Array(16),S=new Uint16Array(16);let O,B,N,C=null,F=0;for(m=0;m<=15;m++)Z[m]=0;for(b=0;b<n;b++)Z[t[i+b]]++;for(g=l,k=15;k>=1&&0===Z[k];k--);if(g>k&&(g=k),0===k)return a[s++]=20971520,a[s++]=20971520,o.bits=1,0;for(_=1;_<k&&0===Z[_];_++);for(g<_&&(g=_),x=1,m=1;m<=15;m++)if(x<<=1,x-=Z[m],x<0)return-1;if(x>0&&(0===e||1!==k))return-1;for(S[1]=0,m=1;m<15;m++)S[m+1]=S[m]+Z[m];for(b=0;b<n;b++)0!==t[i+b]&&(r[S[t[i+b]]++]=b);if(0===e?(A=C=r,w=19):1===e?(A=U,R-=257,C=D,F-=257,w=256):(A=I,C=T,w=-1),E=0,b=0,m=_,u=s,v=g,p=0,c=-1,y=1<<g,h=y-1,1===e&&y>852||2===e&&y>592)return 1;for(;;){O=m-p,r[b]<w?(B=0,N=r[b]):r[b]>w?(B=C[F+r[b]],N=A[R+r[b]]):(B=96,N=0),d=1<<m-p,f=1<<v,_=f;do{f-=d,a[u+(E>>p)+f]=O<<24|B<<16|N|0}while(0!==f);for(d=1<<m-1;E&d;)d>>=1;if(0!==d?(E&=d-1,E+=d):E=0,b++,0==--Z[m]){if(m===k)break;m=t[i+r[b]]}if(m>g&&(E&h)!==c){for(0===p&&(p=g),u+=_,v=m-p,x=1<<v;v+p<k&&(x-=Z[v+p],!(x<=0));)v++,x<<=1;if(y+=1<<v,1===e&&y>852||2===e&&y>592)return 1;c=E&h,a[c]=g<<24|v<<16|u-s|0}}return 0!==E&&(a[u+E]=m-p<<24|64<<16|0),o.bits=g,0},N={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{Z_FINISH:C,Z_BLOCK:F,Z_TREES:z,Z_OK:L,Z_STREAM_END:M,Z_NEED_DICT:$,Z_STREAM_ERROR:j,Z_DATA_ERROR:H,Z_MEM_ERROR:P,Z_BUF_ERROR:K,Z_DEFLATED:G}=N,V=e=>(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24);function Y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const J=e=>{if(!e||!e.state)return j;const t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(852),t.distcode=t.distdyn=new Int32Array(592),t.sane=1,t.back=-1,L},X=e=>{if(!e||!e.state)return j;const t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,J(e)},W=(e,t)=>{let i;if(!e||!e.state)return j;const n=e.state;return t<0?(i=0,t=-t):(i=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?j:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=i,n.wbits=t,X(e))},q=(e,t)=>{if(!e)return j;const i=new Y;e.state=i,i.window=null;const n=W(e,t);return n!==L&&(e.state=null),n};let Q,ee,te=!0;const ie=e=>{if(te){Q=new Int32Array(512),ee=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(B(1,e.lens,0,288,Q,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;B(2,e.lens,0,32,ee,0,e.work,{bits:5}),te=!1}e.lencode=Q,e.lenbits=9,e.distcode=ee,e.distbits=5},ne=(e,t,i,n)=>{let a;const s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),n>=s.wsize?(s.window.set(t.subarray(i-s.wsize,i),0),s.wnext=0,s.whave=s.wsize):(a=s.wsize-s.wnext,a>n&&(a=n),s.window.set(t.subarray(i-n,i-n+a),s.wnext),(n-=a)?(s.window.set(t.subarray(i-n,i),0),s.wnext=n,s.whave=s.wsize):(s.wnext+=a,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=a))),0};var ae={inflateReset:X,inflateReset2:W,inflateResetKeep:J,inflateInit:e=>q(e,15),inflateInit2:q,inflate:(e,t)=>{let i,n,a,s,r,o,l,d,f,c,h,u,w,m,b,_,k,g,v,p,x,y,E=0;const A=new Uint8Array(4);let Z,U;const D=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return j;i=e.state,12===i.mode&&(i.mode=13),r=e.next_out,a=e.output,l=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,d=i.hold,f=i.bits,c=o,h=l,y=L;e:for(;;)switch(i.mode){case 1:if(0===i.wrap){i.mode=13;break}for(;f<16;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if(2&i.wrap&&35615===d){i.check=0,A[0]=255&d,A[1]=d>>>8&255,i.check=S(i.check,A,2,0),d=0,f=0,i.mode=2;break}if(i.flags=0,i.head&&(i.head.done=!1),!(1&i.wrap)||(((255&d)<<8)+(d>>8))%31){e.msg="incorrect header check",i.mode=30;break}if((15&d)!==G){e.msg="unknown compression method",i.mode=30;break}if(d>>>=4,f-=4,x=8+(15&d),0===i.wbits)i.wbits=x;else if(x>i.wbits){e.msg="invalid window size",i.mode=30;break}i.dmax=1<<i.wbits,e.adler=i.check=1,i.mode=512&d?10:12,d=0,f=0;break;case 2:for(;f<16;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if(i.flags=d,(255&i.flags)!==G){e.msg="unknown compression method",i.mode=30;break}if(57344&i.flags){e.msg="unknown header flags set",i.mode=30;break}i.head&&(i.head.text=d>>8&1),512&i.flags&&(A[0]=255&d,A[1]=d>>>8&255,i.check=S(i.check,A,2,0)),d=0,f=0,i.mode=3;case 3:for(;f<32;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}i.head&&(i.head.time=d),512&i.flags&&(A[0]=255&d,A[1]=d>>>8&255,A[2]=d>>>16&255,A[3]=d>>>24&255,i.check=S(i.check,A,4,0)),d=0,f=0,i.mode=4;case 4:for(;f<16;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}i.head&&(i.head.xflags=255&d,i.head.os=d>>8),512&i.flags&&(A[0]=255&d,A[1]=d>>>8&255,i.check=S(i.check,A,2,0)),d=0,f=0,i.mode=5;case 5:if(1024&i.flags){for(;f<16;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}i.length=d,i.head&&(i.head.extra_len=d),512&i.flags&&(A[0]=255&d,A[1]=d>>>8&255,i.check=S(i.check,A,2,0)),d=0,f=0}else i.head&&(i.head.extra=null);i.mode=6;case 6:if(1024&i.flags&&(u=i.length,u>o&&(u=o),u&&(i.head&&(x=i.head.extra_len-i.length,i.head.extra||(i.head.extra=new Uint8Array(i.head.extra_len)),i.head.extra.set(n.subarray(s,s+u),x)),512&i.flags&&(i.check=S(i.check,n,u,s)),o-=u,s+=u,i.length-=u),i.length))break e;i.length=0,i.mode=7;case 7:if(2048&i.flags){if(0===o)break e;u=0;do{x=n[s+u++],i.head&&x&&i.length<65536&&(i.head.name+=String.fromCharCode(x))}while(x&&u<o);if(512&i.flags&&(i.check=S(i.check,n,u,s)),o-=u,s+=u,x)break e}else i.head&&(i.head.name=null);i.length=0,i.mode=8;case 8:if(4096&i.flags){if(0===o)break e;u=0;do{x=n[s+u++],i.head&&x&&i.length<65536&&(i.head.comment+=String.fromCharCode(x))}while(x&&u<o);if(512&i.flags&&(i.check=S(i.check,n,u,s)),o-=u,s+=u,x)break e}else i.head&&(i.head.comment=null);i.mode=9;case 9:if(512&i.flags){for(;f<16;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if(d!==(65535&i.check)){e.msg="header crc mismatch",i.mode=30;break}d=0,f=0}i.head&&(i.head.hcrc=i.flags>>9&1,i.head.done=!0),e.adler=i.check=0,i.mode=12;break;case 10:for(;f<32;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}e.adler=i.check=V(d),d=0,f=0,i.mode=11;case 11:if(0===i.havedict)return e.next_out=r,e.avail_out=l,e.next_in=s,e.avail_in=o,i.hold=d,i.bits=f,$;e.adler=i.check=1,i.mode=12;case 12:if(t===F||t===z)break e;case 13:if(i.last){d>>>=7&f,f-=7&f,i.mode=27;break}for(;f<3;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}switch(i.last=1&d,d>>>=1,f-=1,3&d){case 0:i.mode=14;break;case 1:if(ie(i),i.mode=20,t===z){d>>>=2,f-=2;break e}break;case 2:i.mode=17;break;case 3:e.msg="invalid block type",i.mode=30}d>>>=2,f-=2;break;case 14:for(d>>>=7&f,f-=7&f;f<32;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if((65535&d)!=(d>>>16^65535)){e.msg="invalid stored block lengths",i.mode=30;break}if(i.length=65535&d,d=0,f=0,i.mode=15,t===z)break e;case 15:i.mode=16;case 16:if(u=i.length,u){if(u>o&&(u=o),u>l&&(u=l),0===u)break e;a.set(n.subarray(s,s+u),r),o-=u,s+=u,l-=u,r+=u,i.length-=u;break}i.mode=12;break;case 17:for(;f<14;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if(i.nlen=257+(31&d),d>>>=5,f-=5,i.ndist=1+(31&d),d>>>=5,f-=5,i.ncode=4+(15&d),d>>>=4,f-=4,i.nlen>286||i.ndist>30){e.msg="too many length or distance symbols",i.mode=30;break}i.have=0,i.mode=18;case 18:for(;i.have<i.ncode;){for(;f<3;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}i.lens[D[i.have++]]=7&d,d>>>=3,f-=3}for(;i.have<19;)i.lens[D[i.have++]]=0;if(i.lencode=i.lendyn,i.lenbits=7,Z={bits:i.lenbits},y=B(0,i.lens,0,19,i.lencode,0,i.work,Z),i.lenbits=Z.bits,y){e.msg="invalid code lengths set",i.mode=30;break}i.have=0,i.mode=19;case 19:for(;i.have<i.nlen+i.ndist;){for(;E=i.lencode[d&(1<<i.lenbits)-1],b=E>>>24,_=E>>>16&255,k=65535&E,!(b<=f);){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if(k<16)d>>>=b,f-=b,i.lens[i.have++]=k;else{if(16===k){for(U=b+2;f<U;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if(d>>>=b,f-=b,0===i.have){e.msg="invalid bit length repeat",i.mode=30;break}x=i.lens[i.have-1],u=3+(3&d),d>>>=2,f-=2}else if(17===k){for(U=b+3;f<U;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}d>>>=b,f-=b,x=0,u=3+(7&d),d>>>=3,f-=3}else{for(U=b+7;f<U;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}d>>>=b,f-=b,x=0,u=11+(127&d),d>>>=7,f-=7}if(i.have+u>i.nlen+i.ndist){e.msg="invalid bit length repeat",i.mode=30;break}for(;u--;)i.lens[i.have++]=x}}if(30===i.mode)break;if(0===i.lens[256]){e.msg="invalid code -- missing end-of-block",i.mode=30;break}if(i.lenbits=9,Z={bits:i.lenbits},y=B(1,i.lens,0,i.nlen,i.lencode,0,i.work,Z),i.lenbits=Z.bits,y){e.msg="invalid literal/lengths set",i.mode=30;break}if(i.distbits=6,i.distcode=i.distdyn,Z={bits:i.distbits},y=B(2,i.lens,i.nlen,i.ndist,i.distcode,0,i.work,Z),i.distbits=Z.bits,y){e.msg="invalid distances set",i.mode=30;break}if(i.mode=20,t===z)break e;case 20:i.mode=21;case 21:if(o>=6&&l>=258){e.next_out=r,e.avail_out=l,e.next_in=s,e.avail_in=o,i.hold=d,i.bits=f,O(e,h),r=e.next_out,a=e.output,l=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,d=i.hold,f=i.bits,12===i.mode&&(i.back=-1);break}for(i.back=0;E=i.lencode[d&(1<<i.lenbits)-1],b=E>>>24,_=E>>>16&255,k=65535&E,!(b<=f);){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if(_&&0==(240&_)){for(g=b,v=_,p=k;E=i.lencode[p+((d&(1<<g+v)-1)>>g)],b=E>>>24,_=E>>>16&255,k=65535&E,!(g+b<=f);){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}d>>>=g,f-=g,i.back+=g}if(d>>>=b,f-=b,i.back+=b,i.length=k,0===_){i.mode=26;break}if(32&_){i.back=-1,i.mode=12;break}if(64&_){e.msg="invalid literal/length code",i.mode=30;break}i.extra=15&_,i.mode=22;case 22:if(i.extra){for(U=i.extra;f<U;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}i.length+=d&(1<<i.extra)-1,d>>>=i.extra,f-=i.extra,i.back+=i.extra}i.was=i.length,i.mode=23;case 23:for(;E=i.distcode[d&(1<<i.distbits)-1],b=E>>>24,_=E>>>16&255,k=65535&E,!(b<=f);){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if(0==(240&_)){for(g=b,v=_,p=k;E=i.distcode[p+((d&(1<<g+v)-1)>>g)],b=E>>>24,_=E>>>16&255,k=65535&E,!(g+b<=f);){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}d>>>=g,f-=g,i.back+=g}if(d>>>=b,f-=b,i.back+=b,64&_){e.msg="invalid distance code",i.mode=30;break}i.offset=k,i.extra=15&_,i.mode=24;case 24:if(i.extra){for(U=i.extra;f<U;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}i.offset+=d&(1<<i.extra)-1,d>>>=i.extra,f-=i.extra,i.back+=i.extra}if(i.offset>i.dmax){e.msg="invalid distance too far back",i.mode=30;break}i.mode=25;case 25:if(0===l)break e;if(u=h-l,i.offset>u){if(u=i.offset-u,u>i.whave&&i.sane){e.msg="invalid distance too far back",i.mode=30;break}u>i.wnext?(u-=i.wnext,w=i.wsize-u):w=i.wnext-u,u>i.length&&(u=i.length),m=i.window}else m=a,w=r-i.offset,u=i.length;u>l&&(u=l),l-=u,i.length-=u;do{a[r++]=m[w++]}while(--u);0===i.length&&(i.mode=21);break;case 26:if(0===l)break e;a[r++]=i.length,l--,i.mode=21;break;case 27:if(i.wrap){for(;f<32;){if(0===o)break e;o--,d|=n[s++]<<f,f+=8}if(h-=l,e.total_out+=h,i.total+=h,h&&(e.adler=i.check=i.flags?S(i.check,a,h,r-h):R(i.check,a,h,r-h)),h=l,(i.flags?d:V(d))!==i.check){e.msg="incorrect data check",i.mode=30;break}d=0,f=0}i.mode=28;case 28:if(i.wrap&&i.flags){for(;f<32;){if(0===o)break e;o--,d+=n[s++]<<f,f+=8}if(d!==(4294967295&i.total)){e.msg="incorrect length check",i.mode=30;break}d=0,f=0}i.mode=29;case 29:y=M;break e;case 30:y=H;break e;case 31:return P;case 32:default:return j}return e.next_out=r,e.avail_out=l,e.next_in=s,e.avail_in=o,i.hold=d,i.bits=f,(i.wsize||h!==e.avail_out&&i.mode<30&&(i.mode<27||t!==C))&&ne(e,e.output,e.next_out,h-e.avail_out),c-=e.avail_in,h-=e.avail_out,e.total_in+=c,e.total_out+=h,i.total+=h,i.wrap&&h&&(e.adler=i.check=i.flags?S(i.check,a,h,e.next_out-h):R(i.check,a,h,e.next_out-h)),e.data_type=i.bits+(i.last?64:0)+(12===i.mode?128:0)+(20===i.mode||15===i.mode?256:0),(0===c&&0===h||t===C)&&y===L&&(y=K),y},inflateEnd:e=>{if(!e||!e.state)return j;let t=e.state;return t.window&&(t.window=null),e.state=null,L},inflateGetHeader:(e,t)=>{if(!e||!e.state)return j;const i=e.state;return 0==(2&i.wrap)?j:(i.head=t,t.done=!1,L)},inflateSetDictionary:(e,t)=>{const i=t.length;let n,a,s;return e&&e.state?(n=e.state,0!==n.wrap&&11!==n.mode?j:11===n.mode&&(a=1,a=R(a,t,i,0),a!==n.check)?H:(s=ne(e,t,i,i),s?(n.mode=31,P):(n.havedict=1,L))):j},inflateInfo:"pako inflate (from Nodeca project)"};const se=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var re=function(e){const t=Array.prototype.slice.call(arguments,1);for(;t.length;){const i=t.shift();if(i){if("object"!=typeof i)throw new TypeError(i+"must be non-object");for(const t in i)se(i,t)&&(e[t]=i[t])}}return e},oe=e=>{let t=0;for(let i=0,n=e.length;i<n;i++)t+=e[i].length;const i=new Uint8Array(t);for(let t=0,n=0,a=e.length;t<a;t++){let a=e[t];i.set(a,n),n+=a.length}return i};let le=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){le=!1}const de=new Uint8Array(256);for(let e=0;e<256;e++)de[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;de[254]=de[254]=1;var fe=e=>{let t,i,n,a,s,r=e.length,o=0;for(a=0;a<r;a++)i=e.charCodeAt(a),55296==(64512&i)&&a+1<r&&(n=e.charCodeAt(a+1),56320==(64512&n)&&(i=65536+(i-55296<<10)+(n-56320),a++)),o+=i<128?1:i<2048?2:i<65536?3:4;for(t=new Uint8Array(o),s=0,a=0;s<o;a++)i=e.charCodeAt(a),55296==(64512&i)&&a+1<r&&(n=e.charCodeAt(a+1),56320==(64512&n)&&(i=65536+(i-55296<<10)+(n-56320),a++)),i<128?t[s++]=i:i<2048?(t[s++]=192|i>>>6,t[s++]=128|63&i):i<65536?(t[s++]=224|i>>>12,t[s++]=128|i>>>6&63,t[s++]=128|63&i):(t[s++]=240|i>>>18,t[s++]=128|i>>>12&63,t[s++]=128|i>>>6&63,t[s++]=128|63&i);return t},ce=(e,t)=>{let i,n;const a=t||e.length,s=new Array(2*a);for(n=0,i=0;i<a;){let t=e[i++];if(t<128){s[n++]=t;continue}let r=de[t];if(r>4)s[n++]=65533,i+=r-1;else{for(t&=2===r?31:3===r?15:7;r>1&&i<a;)t=t<<6|63&e[i++],r--;r>1?s[n++]=65533:t<65536?s[n++]=t:(t-=65536,s[n++]=55296|t>>10&1023,s[n++]=56320|1023&t)}}return((e,t)=>{if(t<65534&&e.subarray&&le)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let i="";for(let n=0;n<t;n++)i+=String.fromCharCode(e[n]);return i})(s,n)},he=(e,t)=>{(t=t||e.length)>e.length&&(t=e.length);let i=t-1;for(;i>=0&&128==(192&e[i]);)i--;return i<0||0===i?t:i+de[e[i]]>t?i:t},ue={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var we=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};var me=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const be=Object.prototype.toString,{Z_NO_FLUSH:_e,Z_FINISH:ke,Z_OK:ge,Z_STREAM_END:ve,Z_NEED_DICT:pe,Z_STREAM_ERROR:xe,Z_DATA_ERROR:ye,Z_MEM_ERROR:Ee}=N;function Ae(e){this.options=re({chunkSize:65536,windowBits:15,to:""},e||{});const t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new we,this.strm.avail_out=0;let i=ae.inflateInit2(this.strm,t.windowBits);if(i!==ge)throw new Error(ue[i]);if(this.header=new me,ae.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=fe(t.dictionary):"[object ArrayBuffer]"===be.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(i=ae.inflateSetDictionary(this.strm,t.dictionary),i!==ge)))throw new Error(ue[i])}Ae.prototype.push=function(e,t){const i=this.strm,n=this.options.chunkSize,a=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=t===~~t?t:!0===t?ke:_e,"[object ArrayBuffer]"===be.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;;){for(0===i.avail_out&&(i.output=new Uint8Array(n),i.next_out=0,i.avail_out=n),s=ae.inflate(i,r),s===pe&&a&&(s=ae.inflateSetDictionary(i,a),s===ge?s=ae.inflate(i,r):s===ye&&(s=pe));i.avail_in>0&&s===ve&&i.state.wrap>0&&0!==e[i.next_in];)ae.inflateReset(i),s=ae.inflate(i,r);switch(s){case xe:case ye:case pe:case Ee:return this.onEnd(s),this.ended=!0,!1}if(o=i.avail_out,i.next_out&&(0===i.avail_out||s===ve))if("string"===this.options.to){let e=he(i.output,i.next_out),t=i.next_out-e,a=ce(i.output,e);i.next_out=t,i.avail_out=n-t,t&&i.output.set(i.output.subarray(e,e+t),0),this.onData(a)}else this.onData(i.output.length===i.next_out?i.output:i.output.subarray(0,i.next_out));if(s!==ge||0!==o){if(s===ve)return s=ae.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===i.avail_in)break}}return!0},Ae.prototype.onData=function(e){this.chunks.push(e)},Ae.prototype.onEnd=function(e){e===ge&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=oe(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var Re=function(e,t){const i=new Ae(t);if(i.push(e),i.err)throw i.msg||ue[i.err];return i.result};function Ze(e,t,i){const n=e.slice();return n[8]=t[i],n[10]=i,n}function Se(e){let t,i,n,a=e[8]+"";return{c(){t=f("div"),i=c(a),this.h()},l(e){t=h(e,"DIV",{"data-name":!0,class:!0});var n=u(t);i=w(n,a),n.forEach(m),this.h()},h(){b(t,"data-name",n=e[8]),b(t,"class","svelte-1llrwa3")},m(e,n){_(e,t,n),k(t,i)},p(e,s){1&s&&a!==(a=e[8]+"")&&g(i,a),1&s&&n!==(n=e[8])&&b(t,"data-name",n)},d(e){e&&m(t)}}}function Oe(e){let t,i,n,a,s,r,o,l=e[0],d=[];for(let t=0;t<l.length;t+=1)d[t]=Se(Ze(e,l,t));return{c(){t=f("div"),i=v(),n=f("div");for(let e=0;e<d.length;e+=1)d[e].c();a=v(),s=f("div"),this.h()},l(e){t=h(e,"DIV",{class:!0}),u(t).forEach(m),i=p(e),n=h(e,"DIV",{class:!0});var r=u(n);for(let e=0;e<d.length;e+=1)d[e].l(r);r.forEach(m),a=p(e),s=h(e,"DIV",{class:!0}),u(s).forEach(m),this.h()},h(){b(t,"class","app svelte-1llrwa3"),b(n,"class","dataset svelte-1llrwa3"),b(s,"class","dat svelte-1llrwa3")},m(l,f){_(l,t,f),e[4](t),_(l,i,f),_(l,n,f);for(let e=0;e<d.length;e+=1)d[e].m(n,null);_(l,a,f),_(l,s,f),e[5](s),r||(o=x(n,"click",e[3]),r=!0)},p(e,t){if(1&t){let i;for(l=e[0],i=0;i<l.length;i+=1){const a=Ze(e,l,i);d[i]?d[i].p(a,t):(d[i]=Se(a),d[i].c(),d[i].m(n,null))}for(;i<d.length;i+=1)d[i].d(1);d.length=l.length}},d(l){l&&m(t),e[4](null),l&&m(i),l&&m(n),y(d,l),l&&m(a),l&&m(s),e[5](null),r=!1,o()}}}function Ue(e){let t,i;return t=new A({props:{fixed:!1,$$slots:{default:[Oe]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){a(t.$$.fragment,e)},m(e,n){s(t,e,n),i=!0},p(e,[i]){const n={};2055&i&&(n.$$scope={dirty:i,ctx:e}),t.$set(n)},i(e){i||(r(t.$$.fragment,e),i=!0)},o(e){o(t.$$.fragment,e),i=!1},d(e){l(t,e)}}}var De=function(e,t,i,n){return new(i||(i=Promise))((function(a,s){function r(e){try{l(n.next(e))}catch(e){s(e)}}function o(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,o)}l((n=n.apply(e,t||[])).next())}))};function Ie(){return De(this,void 0,void 0,(function*(){const e=yield this.fetch("datasets/datasets.json");return{datasets:yield e.json()}}))}function Te(e,t,i){var n=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(a,s){function r(e){try{l(n.next(e))}catch(e){s(e)}}function o(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,o)}l((n=n.apply(e,t||[])).next())}))};let a,s,r,{datasets:o}=t;return d((()=>n(void 0,void 0,void 0,(function*(){const e=(yield Promise.all([import("./bigBoard.9d2675b3.js"),__inject_styles(["client-325e7710.css","menu-178d3906.css"])]).then((function(e){return e[0]}))).default;a=new e(s,r)})))),e.$$set=e=>{"datasets"in e&&i(0,o=e.datasets)},[o,s,r,function(e){return n(this,void 0,void 0,(function*(){const t=e.target.dataset.name;if(void 0!==t){const e=yield fetch("datasets/"+t).then((e=>n(this,void 0,void 0,(function*(){return e.arrayBuffer().then((e=>new Uint8Array(e)))})))),i=JSON.parse(new TextDecoder("utf-8").decode(Re(e)));a.cleanAll(i)}}))},function(e){E[e?"unshift":"push"]((()=>{s=e,i(1,s)}))},function(e){E[e?"unshift":"push"]((()=>{r=e,i(2,r)}))}]}export default class extends e{constructor(e){super(),t(this,e,Te,Ue,i,{datasets:0})}}export{Ie as preload};

import __inject_styles from './inject_styles.5607aec6.js';