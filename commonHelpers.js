import{i as l,S as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function u(e){const o="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"44272946-14b75e2a0f7d5637eb83394ff",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${o}${s}?${i}`;return fetch(t).then(r=>r.json())}function f(e){return`<li class="gallery-item">
            <a class="img-link" href="${e.largeImageURL}">
            <img class="gallery-item-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
                width="360px"
                height="200px"
            />
            <div class="info">
                <p class="info-title">likes <spam class="info-value">${e.likes}</spam> </p>
                <p class="info-title">views <spam class="info-value">${e.views}</spam></p>
                <p class="info-title">comments <spam class="info-value">${e.comments}</spam></p>
                <p class="info-title">downloads <spam class="info-value">${e.downloads}</spam></p>
            </div>
            </a>
            </li>`}function p(e){return e.map(f).join("")}const m=document.querySelector(".form"),a=document.querySelector(".gallery");m.addEventListener("submit",e=>{e.preventDefault();const o=e.currentTarget.elements.inputText.value.trim();if(o===""){l.error({title:"Error",message:"Need to fill the out the search bar",position:"topRight"});return}d(),u(o).then(s=>{if(h(),s.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="";return}const i=p(s.hits);a.innerHTML=i,new c("gallery, a",{captionsData:"alt",captionDelay:250}).refresh()})});function d(){const e=document.querySelector(".loader");a.innerHTML="",e.style.display="block"}function h(){const e=document.querySelector(".loader");e.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
