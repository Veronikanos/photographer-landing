const t=()=>{const t=document.querySelectorAll(".accordion-item");t.forEach((a=>{a.addEventListener("click",(()=>{t.forEach((t=>{t.classList.remove("active")})),a.classList.add("active")}))}))},a=()=>{if(window.innerWidth>=1024){const t=document.querySelector(".sault-animation"),a=40,e=[];for(let n=0;n<a;n++){const a=document.createElement("div");a.className="circle";const n=Math.floor(3*Math.random())+3;a.style.width=`${n}px`,a.style.height=`${n}px`,t.appendChild(a),e.push(a)}e.forEach((t=>{const a=3*Math.random()+4,e=25*(Math.random()-.5),n=300*Math.random();t.style.transform="translate(0, 0)",t.animate([{opacity:0,transform:"translate(0, 0)"},{opacity:1,transform:`translate(${e}px, ${n}px)`},{opacity:0,transform:`translate(${e}px, 400px)`}],{duration:1e3*a,iterations:1/0,delay:2e3*Math.random(),easing:"ease-in-out",fill:"both"})}))}};document.addEventListener("DOMContentLoaded",(()=>{a(),t()}));
//# sourceMappingURL=index.c021e229.js.map