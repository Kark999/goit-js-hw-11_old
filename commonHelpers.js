import{S as c,i as d}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let u=new c(".gallery a");o.form.addEventListener("submit",f);function f(e){e.preventDefault();const s=e.target.elements.search.value;o.loader.classList.remove("hidden"),m(s).then(a=>{if(a.totalHits===0)return o.gallery.innerHTML="",i("Sorry, there are no images matching your search query. Please try again!");const l=p(a.hits);o.gallery.innerHTML=l,u.refresh()}).catch(a=>{i(a)}).finally(()=>{o.loader.classList.add("hidden")}),o.form.reset()}function m(e){const s="https://pixabay.com/api/",a="42141224-180b0a56c10fd436e302d680a",l=new URLSearchParams({key:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${s}?${l}`;return fetch(r).then(t=>t.json())}function y(e){return`<li class="gallery-card">
        <a href="${e.largeImageURL}"
          ><img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
            title=""
          />
        </a>
        <div class="gallery-card-items">
          <p class="gallery-card-info">
            Likes
            <span class="gallery-card-data">${e.likes}</span>
          </p>

          <p class="gallery-card-info">
            Views
            <span class="gallery-card-data">${e.views}</span>
          </p>

          <p class="gallery-card-info">
            Comments
            <span class="gallery-card-data">${e.comments}</span>
          </p>

          <p class="gallery-card-info">
            Downloads
            <span class="gallery-card-data">${e.downloads}</span>
          </p>
        </div>
      </li>`}function p(e){return e.map(y).join("")}function i(e){d.error({message:e})}
//# sourceMappingURL=commonHelpers.js.map
