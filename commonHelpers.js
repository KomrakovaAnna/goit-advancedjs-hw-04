import{a as y,S as b,i as n}from"./assets/vendor-66e1c782.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();document.querySelector(".gallery");const f=o=>o.map(({webformatURL:t,largeImageURL:a,tags:s,likes:e,views:r,comments:i,downloads:h})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
  src="${t}"
  data-source="${a}"
  tags="${s}"
  data-likes="${e}"
  data-views="${r}"
  data-comments="${i}"
  data-downloads="${h}"
  alt="Image description"
    />
  </a>
  <div >
  <ul class="stats">
    <li class="stat-item">
    <div class="stat-header"><strong>Likes</strong></div>
    <div class="stat-value">${e}</div>
    </li>
    <li class="stat-item">
    <div class="stat-header"><strong>Views</strong></div>
    <div class="stat-value">${r}</div>
    </li>
    <li class="stat-item">
    <div class="stat-header"><strong>Comments</strong></div>
    <div class="stat-value">${i}</div>
    </li>
    <li class="stat-item">
    <div class="stat-header"><strong>Downloads</strong></div>
    <div class="stat-value">${h}</div>
    </li>
  </ul>
</div>
</li>`).join(""),S="45172524-3969727cd49dc0a3e64f2f5a7";y.defaults.baseURL="https://pixabay.com";const p=(o,t,a)=>{const s={params:{key:S,q:o,page:t,per_page:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return y.get("/api/",s)},u=document.querySelector(".search__form"),d=document.querySelector(".js__loader"),v=document.querySelector(".gallery"),c=document.querySelector(".load-more__button"),g=15;let l=1,m="";const $=async o=>{try{o.preventDefault(),l=1;const t=o.target.elements.user_query.value.trim();if(c.classList.add("visually-hidden"),d.classList.remove("is-hidden"),t===""){n.error({message:"Input something to search!",position:"topRight"}),d.classList.add("is-hidden"),u.reset(),galleryEl.innerHTML="";return}const{data:a}=await p(t,l,g),{hits:s}=a;if(!s||s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.classList.add("is-hidden"),u.reset(),galleryEl.innerHTML="";return}const e=f(s);v.innerHTML=e,L.refresh(),P(),u.reset(),c.classList.remove("visually-hidden"),d.classList.add("is-hidden")}catch{n.error({message:"Please, try again!",position:"topRight"})}},L=new b(".gallery a",{captionsData:"tags",captionDelay:250}),q=async o=>{try{l+=1,m===""&&console.log("no searchValue");const{data:t}=await p(m,l,g);console.log(l);const{hits:a,totalHits:s}=t;if(console.log(a),console.log(s),s=t.totalHits,a.length===0){c.classList.add("visually-hidden"),n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}const e=f(a,!0);v.insertAdjacentHTML("beforeend",e),L.refresh(),l*g>=s&&c.classList.add("visually-hidden"),P()}catch{n.error({message:"Please, try again!",position:"topRight"})}};function P(){const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}c.addEventListener("click",q);u.addEventListener("submit",$);
//# sourceMappingURL=commonHelpers.js.map
