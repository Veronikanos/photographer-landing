!function(){var t=function(){if(window.innerWidth>=1024){for(var t=document.querySelector(".sault-animation"),a=[],n=0;n<25;n++){var o=document.createElement("div");o.className="circle";var e=Math.floor(3*Math.random())+3;o.style.width="".concat(e,"px"),o.style.height="".concat(e,"px"),t.appendChild(o),a.push(o)}a.forEach((function(t){var a=3*Math.random()+4,n=20*(Math.random()-.5),o=200*Math.random();t.style.transform="translate(0, 0)",t.animate([{opacity:0,transform:"translate(0, 0)"},{opacity:1,transform:"translate(".concat(n,"px, ").concat(o,"px)")},{opacity:0,transform:"translate(".concat(n,"px, 400px)")}],{duration:1e3*a,iterations:1/0,delay:2e3*Math.random(),easing:"ease-in-out",fill:"both"})}))}};document.addEventListener("DOMContentLoaded",(function(){t()}))}();
//# sourceMappingURL=index.86222bf7.js.map
