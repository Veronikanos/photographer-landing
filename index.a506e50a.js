const t=()=>{if(window.innerWidth>=1024){const t=document.querySelector(".sault-animation"),a=25,n=[];for(let e=0;e<a;e++){const a=document.createElement("div");a.className="circle";const e=Math.floor(3*Math.random())+3;a.style.width=`${e}px`,a.style.height=`${e}px`,t.appendChild(a),n.push(a)}n.forEach((t=>{const a=3*Math.random()+4,n=20*(Math.random()-.5),e=200*Math.random();t.style.transform="translate(0, 0)",t.animate([{opacity:0,transform:"translate(0, 0)"},{opacity:1,transform:`translate(${n}px, ${e}px)`},{opacity:0,transform:`translate(${n}px, 400px)`}],{duration:1e3*a,iterations:1/0,delay:2e3*Math.random(),easing:"ease-in-out",fill:"both"})}))}};document.addEventListener("DOMContentLoaded",(()=>{t()}));
//# sourceMappingURL=index.a506e50a.js.map
