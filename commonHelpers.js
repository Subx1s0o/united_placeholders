(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c=document.querySelector(".menu-sidebar"),l=document.querySelector(".header-menu-btn"),a=document.querySelector(".menu-close-btn");l.addEventListener("click",()=>{c.classList.add("is-open")});a.addEventListener("click",()=>{c.classList.remove("is-open")});window.addEventListener("resize",function(){window.innerWidth>1280&&document.querySelectorAll(".is-open").forEach(function(t){t.classList.remove("is-open")})});document.querySelectorAll(".form-input").forEach(o=>{o.addEventListener("input",function(){const t=this.validity.valid,i=this.parentElement.querySelector(".valid-indicator"),n=i.querySelector(".valid-icon-checkbox"),e=i.querySelector(".valid-icon-close");t?(i.style.opacity=1,n.style.opacity=1,e.style.opacity=0):(i.style.opacity=1,n.style.opacity=0,e.style.opacity=1),this.value.trim().length>=parseInt(this.getAttribute("minlength"))?i.style.opacity=1:i.style.opacity=0})});function d(o){o.preventDefault();let t;o.target.tagName==="A"?t=o.target.getAttribute("href").substr(1):o.target.tagName==="BUTTON"&&(t=o.target.getAttribute("data-target"));const i=document.getElementById(t);if(i&&t!==""){const e=i.offsetTop-100;window.scrollTo({top:e,behavior:"smooth"})}}document.querySelectorAll(".smooth-scroll").forEach(o=>{o.addEventListener("click",d)});
//# sourceMappingURL=commonHelpers.js.map
