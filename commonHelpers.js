(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const s=document.querySelector(".menu-sidebar"),l=document.querySelector(".header-menu-btn"),a=document.querySelector(".menu-close-btn");l.addEventListener("click",()=>{s.classList.add("is-open")});a.addEventListener("click",()=>{s.classList.remove("is-open")});document.querySelectorAll(".form-input").forEach(r=>{r.addEventListener("input",function(){const c=this.validity.valid,t=this.parentElement.querySelector(".valid-indicator"),i=t.querySelector(".valid-icon-checkbox"),e=t.querySelector(".valid-icon-close");c?(t.style.opacity=1,i.style.opacity=1,e.style.opacity=0):(t.style.opacity=1,i.style.opacity=0,e.style.opacity=1),this.value.trim().length>=parseInt(this.getAttribute("minlength"))?t.style.opacity=1:t.style.opacity=0})});function d(r){r.preventDefault();const c=r.target.getAttribute("href"),t=document.querySelector(c);t&&t.scrollIntoView({behavior:"smooth",block:"center"}),document.activeElement.blur()}document.querySelectorAll("a").forEach(r=>{r.addEventListener("click",d)});
//# sourceMappingURL=commonHelpers.js.map
