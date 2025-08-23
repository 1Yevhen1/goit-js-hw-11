import{a as d,S as f,i as n}from"./assets/vendor-DvbQR39D.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="https://pixabay.com/api/",m="51935119-94cca84236608ef27f9ff626b";async function y(a){const o={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(p,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const o=a.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img 
          class="gallery-image"
          src="${e.webformatURL}" 
          alt="${e.tags}" 
          loading="lazy"
        />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const u=document.querySelector(".form"),S=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async a=>{a.preventDefault();const o=S.value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}b(),L();try{const e=await y(o);if(!e.hits.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits)}catch(e){n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}finally{w()}});
//# sourceMappingURL=index.js.map
