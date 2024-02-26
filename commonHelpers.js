import{b as l}from"./assets/vendor-d8571883.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",function(){function r(){return`
        <div class="menu-header"></div>
        <div class="menu-body">
          <div class="menu-user-profile">
            <p class="menu-user-name"></p>
            <svg class="menu-user-fill" width="22" height="22">
              <use href="./img/icons.svg#user-fill"></use>
            </svg>
          </div>
          <ul id="menu-list" class="menu-nav-list">
            <li class="menu-nav-item">
              <a class="menu-nav-link menu-nav-link-home make-yellow" href="./index.html">Home</a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link menu-nav-link-shop shopping-link" href="../shopping-list.html">
                Shopping List
                <span class="shoping-test">
                  <svg class="menu-nav-icon-shop" width="20" height="20">
                    <use href="./img/icons.svg#uil-cart"></use>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="menu-log-out">
          <button type="button" class="log-out">
            Log out
            <svg class="log-out-icon" width="20" height="20">
              <use href="./img/icons.svg#arrow-narrow-right"></use>
            </svg>
          </button>
        </div>
      `}const t=document.querySelector(".menu-container"),s=r();t.innerHTML=s,l.create(t,{className:"my-lightbox"}).show()});
//# sourceMappingURL=commonHelpers.js.map
