(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const c=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/save-the-children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/project-hope.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/int-med-corps.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/act-against-hunger.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/prytula.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/msf.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/world-vision.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/united24.png"}],g=document.querySelector(".donation-list"),d=document.querySelector(".scroll-btn"),m=document.querySelector(".arrow-btn");let r=0,s=!0;function p(i,n){function l(o){return o<10?"0"+o:o}return`<li class="donation-list-name">
                <p class="donation-name-number">${l(n+1)}</p>
                <a
                  class="donation-name-link"
                  href="${i.url}"
                  target="_blank"
                  ><img
                    class="donation-name-logo"
                    src="${i.img}"
                    alt="${i.title}"
                  />
                </a>
              </li>`}function f(i){return i.map((n,l)=>p(n,l+r)).join("")}function u(){const i=c.slice(r,r+6),n=f(i);g.innerHTML=n}function h(){s=!s,m.style.transform=s?"rotate(0deg)":"rotate(180deg)"}function w(){s?r+6<c.length?r+=3:r=0:r-3>=0?r-=3:r=c.length-6,u()}d.addEventListener("click",()=>{w(),h()});u();
//# sourceMappingURL=commonHelpers.js.map
