import{a as g,S as P,i as n}from"./assets/vendor-66e1c782.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();document.querySelector(".gallery");const f=r=>r.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:s,comments:l,downloads:y})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
  src="${t}"
  data-source="${a}"
  tags="${i}"
  data-likes="${e}"
  data-views="${s}"
  data-comments="${l}"
  data-downloads="${y}"
  alt="Image description"
    />
  </a>
  <div >
  <ul class="stats">
    <li class="stat-item">
    <div class="stat-header">Likes</div>
    <div class="stat-value">${e}</div>
    </li>
    <li class="stat-item">
    <div class="stat-header">Views</div>
    <div class="stat-value">${s}</div>
    </li>
    <li class="stat-item">
    <div class="stat-header">Comments</div>
    <div class="stat-value">${l}</div>
    </li>
    <li class="stat-item">
    <div class="stat-header">Downloads</div>
    <div class="stat-value">${y}</div>
    </li>
  </ul>
</div>
</li>`).join(""),S="45172524-3969727cd49dc0a3e64f2f5a7";g.defaults.baseURL="https://pixabay.com";const p=(r,t,a)=>{const i={params:{key:S,q:r,page:t,per_page:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return g.get("/api/",i)},u=document.querySelector(".search__form"),o=document.querySelector(".js__loader"),v=document.querySelector(".gallery"),d=document.querySelector(".load-more__button"),m=15;let c=1,h="";const $=async r=>{o.classList.remove("is-hidden");try{if(r.preventDefault(),c=1,h=r.target.elements.user_query.value.trim(),d.classList.add("visually-hidden"),h===""){n.error({message:"Input something to search!",position:"topRight"}),o.classList.add("is-hidden"),u.reset(),galleryEl.innerHTML="";return}const{data:t}=await p(h,c,m),{hits:a}=t;if(!a||a.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.classList.add("is-hidden"),u.reset(),galleryEl.innerHTML="";return}const i=f(a);v.innerHTML=i,L.refresh(),b(),u.reset(),o.classList.add("is-hidden"),d.classList.remove("visually-hidden")}catch{n.error({message:"Please, try again!",position:"topRight"})}},L=new P(".gallery a",{captionsData:"tags",captionDelay:250}),q=async r=>{try{c+=1,o.classList.remove("is-hidden");const{data:t}=await p(h,c,m),{hits:a,totalHits:i}=t;if(t.length===0){d.classList.add("visually-hidden"),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),o.classList.add("is-hidden");return}const e=f(a);v.insertAdjacentHTML("beforeend",e),L.refresh(),o.classList.add("is-hidden"),c*m>=i&&(d.classList.add("visually-hidden"),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),b()}catch{n.error({message:"Please, try again!",position:"topRight"})}};function b(){const r=document.querySelector(".gallery-item");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}d.addEventListener("click",q);u.addEventListener("submit",$);
//# sourceMappingURL=commonHelpers.js.map
