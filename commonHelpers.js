(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const s=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/int-med-corps.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/act-against-hunger.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/prytula.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/msf.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24.png"}],a=document.querySelector(".donation-list");function u(n,i){function o(r){return r<10?"0"+r:r}return`<li class="donation-list-name">
                <p class="donation-name-number">${o(i+1)}</p>
                <a
                  class="donation-name-link"
                  href="${n.url}"
                  target="_blank"
                  ><img
                    class="donation-name-logo"
                    src="${n.img}"
                    alt="${n.title}"
                  />
                </a>
              </li>`}function c(n){return n.map((i,o)=>u(i,o)).join("")}function g(){const n=c(s);a.insertAdjacentHTML("beforeend",n)}g();
//# sourceMappingURL=commonHelpers.js.map
