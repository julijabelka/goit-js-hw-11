import"./assets/vendor-b20c67ea.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const i="43233565-271a1074870da79dda90f0013",c="https://pixabay.com";function l(o){const e={key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"},s=new URLSearchParams(e);return fetch(`${c}/api/?${s}`).then(n=>(n.ok||console.error("The word is wrong!"),n.json()))}function u(o){return o.map(e=>`<li class="gallery-item">
                <a class="gallery-link" href='${e.largeImageURL}'>
                  <img class="gallery-image" src='${e.webformatURL}' alt='${e.tags}' />
                </a>
                <div class="stats">
                  <p><span>Likes</span>${e.likes}</p>
                  <p><span>Views</span>${e.views}</p>
                  <p><span>Comments</span>${e.comments}</p>
                  <p><span>Downloads</span>${e.downloads}</p>
                </div>
              </li>`).join("")}const p=document.querySelector(".form"),d=document.querySelector(".gallery");document.querySelector(".loader");p.addEventListener("submit",f);function f(o){o.preventDefault();const e=o.target.queryInput.value;l(e).then(s=>d.innerHTML=u(s.hits))}
//# sourceMappingURL=commonHelpers.js.map
