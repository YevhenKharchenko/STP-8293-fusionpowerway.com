import"./assets/header-6f184cf7.js";import{S as o}from"./assets/vendor-fd0c1e68.js";const r=document.getElementById("leftArrow"),s=document.getElementById("rightArrow"),t=new o(".benefits-swiper-container",{direction:"horizontal",loop:!1,grabCursor:!0,slidesPerView:1,initialSlide:0,spaceBetween:22,grabCursor:!0,allowTouchMove:!0,speed:500,breakpoints:{1440:{}},on:{init:()=>{document.querySelector(".benefits-swiper-container").classList.add("show")},slideChange:()=>{c()}}});function c(){r.disabled=t.isBeginning,s.disabled=t.isEnd}c();r.addEventListener("click",()=>{t.slidePrev()});s.addEventListener("click",()=>{t.slideNext()});const l=document.getElementById("revLeftArrow"),d=document.getElementById("revRightArrow"),n=new o(".reviews-swiper-container",{direction:"horizontal",loop:!1,grabCursor:!0,slidesPerView:1,initialSlide:0,spaceBetween:12,grabCursor:!0,allowTouchMove:!0,speed:500,breakpoints:{1440:{spaceBetween:22}},on:{init:()=>{document.querySelector(".reviews-swiper-container").classList.add("show")},slideChange:()=>{a()}}});function a(){l.disabled=n.isBeginning,d.disabled=n.isEnd}a();l.addEventListener("click",()=>{n.slidePrev()});d.addEventListener("click",()=>{n.slideNext()});const w=document.getElementById("galleryLeftArrow"),g=document.getElementById("galleryRightArrow"),i=new o(".gallery-swiper-container",{direction:"horizontal",loop:!1,grabCursor:!0,slidesPerView:1,initialSlide:0,spaceBetween:20,grabCursor:!0,allowTouchMove:!0,speed:500,breakpoints:{1440:{spaceBetween:0,initialSlide:0}},on:{init:()=>{document.querySelector(".gallery-swiper-container").classList.add("show")},slideChange:()=>{u()}}});function u(){w.disabled=i.isBeginning,g.disabled=i.isEnd}u();w.addEventListener("click",()=>{i.slidePrev()});g.addEventListener("click",()=>{i.slideNext()});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("cookie-banner"),m=document.getElementById("cookie-accept"),p=document.getElementById("cookie-decline"),v=document.getElementById("cookie-close-btn");localStorage.getItem("cookieConsent")?e.classList.remove("show-cookie-banner"):e.classList.add("show-cookie-banner"),m.addEventListener("click",()=>{localStorage.setItem("cookieConsent","accepted"),e.classList.remove("show-cookie-banner")}),p.addEventListener("click",()=>{localStorage.setItem("cookieConsent","declined"),e.classList.remove("show-cookie-banner")}),v.addEventListener("click",()=>{e.classList.remove("show-cookie-banner")})});
//# sourceMappingURL=commonHelpers2.js.map
