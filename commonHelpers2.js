import"./assets/header-a5e4e36f.js";import{S as r}from"./assets/vendor-fd0c1e68.js";const o=document.getElementById("leftArrow"),s=document.getElementById("rightArrow"),e=new r(".benefits-swiper-container",{direction:"horizontal",loop:!1,grabCursor:!0,slidesPerView:1,initialSlide:0,grabCursor:!0,allowTouchMove:!0,speed:500,breakpoints:{1440:{spaceBetween:22}},on:{init:()=>{document.querySelector(".benefits-swiper-container").classList.add("show")},slideChange:()=>{d()}}});function d(){o.disabled=e.isBeginning,s.disabled=e.isEnd}d();o.addEventListener("click",()=>{e.slidePrev()});s.addEventListener("click",()=>{e.slideNext()});const l=document.getElementById("revLeftArrow"),c=document.getElementById("revRightArrow"),t=new r(".reviews-swiper-container",{direction:"horizontal",loop:!1,grabCursor:!0,slidesPerView:1,initialSlide:0,spaceBetween:12,grabCursor:!0,allowTouchMove:!0,speed:500,breakpoints:{1440:{spaceBetween:22}},on:{init:()=>{document.querySelector(".reviews-swiper-container").classList.add("show")},slideChange:()=>{a()}}});function a(){l.disabled=t.isBeginning,c.disabled=t.isEnd}a();l.addEventListener("click",()=>{t.slidePrev()});c.addEventListener("click",()=>{t.slideNext()});const w=document.getElementById("galleryLeftArrow"),u=document.getElementById("galleryRightArrow"),n=new r(".gallery-swiper-container",{direction:"horizontal",loop:!1,grabCursor:!0,slidesPerView:1,initialSlide:0,spaceBetween:20,grabCursor:!0,allowTouchMove:!0,speed:500,breakpoints:{1440:{spaceBetween:0,initialSlide:0}},on:{init:()=>{document.querySelector(".gallery-swiper-container").classList.add("show")},slideChange:()=>{g()}}});function g(){w.disabled=n.isBeginning,u.disabled=n.isEnd}g();w.addEventListener("click",()=>{n.slidePrev()});u.addEventListener("click",()=>{n.slideNext()});document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("cookie-banner"),p=document.getElementById("cookie-accept"),m=document.getElementById("cookie-decline"),y=document.getElementById("cookie-close-btn");p.addEventListener("click",()=>{i.style.display="none"}),m.addEventListener("click",()=>{i.style.display="none"}),y.addEventListener("click",()=>{i.style.display="none"})});
//# sourceMappingURL=commonHelpers2.js.map
