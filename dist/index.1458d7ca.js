var e=document.getElementById("scene");new Parallax(e);const n=document.querySelectorAll(".swiper-slide");let t=document.querySelector(".big");const i=document.querySelector(".next"),r=document.querySelector(".prev"),s=function(){Number(t.innerHTML)>n.length-1&&this.classList.contains("next")&&(t.innerHTML=0),1==Number(t.innerHTML)&&this.classList.contains("prev")&&(t.innerHTML=n.length),this.classList.contains("next")&&(t.innerHTML=Number(t.innerHTML)+1),this.classList.contains("prev")&&(Number(t.innerHTML)>n.length-1&&(t.innerHTML=0),0==Number(t.innerHTML)&&(t.innerHTML=n.length+1),t.innerHTML=Number(t.innerHTML)-1)};i.addEventListener("click",s),r.addEventListener("click",s);new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
//# sourceMappingURL=index.1458d7ca.js.map
