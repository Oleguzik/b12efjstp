import{i as ce,a as d}from"./vendor-cb82152a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const q={showInfo:e=>{H(e)&&D(e,"info")},showSuccess:e=>{H(e)&&D(e,"success")},showError:e=>{H(e)&&D(e,"error")}},H=e=>e.trim().length<=300,D=(e,t="")=>{const a=[];for(;e.length>200;)a.push(e.slice(0,200)),e=e.slice(200);a.push(e),a.forEach((r,i)=>{ce[t]({title:i===0?r:"",message:i===0?"":r,position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0,timeout:5e3,messageLineHeight:"12px"})})};d.defaults.baseURL="https://energyflow.b.goit.study/api";const N={getFilterData:async function({page:e=1,limit:t=8,filter:s="Muscles"}){try{return(await d.get("/filters",{params:{filter:s,page:e,limit:t}})).data}catch(a){return console.log(a),{page:0,totalPages:0,results:[]}}},getExercisesData:async function(e){try{return(await d.get("/exercises",{params:e})).data}catch{return{page:0,totalPages:0,results:[]}}},getQuoteOfTheDay:async function(){try{return(await d.get("/quote")).data}catch{return{author:"",quote:""}}},getExerciseInfo:async function(e=""){try{return(await d.get(`exercises/${e}`)).data}catch(t){return{_id:"",message:t.response.data.message}}},updateExerciseRating:async function({id:e="",rate:t,email:s="",review:a=""}){try{const r=await d.patch(`exercises/${e}/rating`,{rate:t,email:s,review:a});return{result:!0}}catch(r){return{result:!1,message:r.response.data.message}}},subscription:async function(e=""){try{const t=await d.post("/subscription",{email:e});return{result:!0,message:"We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow.You've just taken a significant step towards improving your fitness and well-being."}}catch(t){return console.log(t),{result:!1,message:t.response.data.message}}}},l={quote:"quoteOfTheDay",favorites:"favoritesExercises"},p={async getQuoteOfTheDay(){const e=le(new Date),t=L(l.quote);if(t&&t.date===e)return t;{const s=await N.getQuoteOfTheDay();if(s!=null&&s.quote){const a={...s,date:e};return localStorage.setItem(l.quote,JSON.stringify(a)),a}return s}},getFavorites(){const e=L(l.favorites);return e||[]},addItemToFavorites(e={}){let t=L(l.favorites);t||(t=[]),t.push(e),localStorage.setItem(l.favorites,JSON.stringify(t))},deleteItemFromFavorites(e=""){const t=L(l.favorites);if(t&&e!==""){const s=t.filter(a=>a._id!==e);localStorage.setItem(l.favorites,JSON.stringify(s))}}};function L(e=""){let t=localStorage.getItem(e);if(t)try{t=JSON.parse(t)}catch{t=null}return t}function le(e){const t=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");return`${t}-${s}-${a}`}const S="/b12efjstp/assets/sprite-7989babe.svg",w={exerciseCardMarkup:function(e={},t=!1){const{name:s,burnedCalories:a,time:r,bodyPart:i,target:n,rating:A,_id:O}=e;let M="";return t?M=`<button type="button" class="exercise-card-remove-btn" data-delete-id="${O}" aria-label="Remove exercise from favorites button">
       <svg class="exercise-card-remove-icon" width="16" height="16">
           <use href="${S}#icon-trash-black"></use>
       </svg>
    </button>`:M=`<p class="exercise-card-rating">
      <span class="exercise-card-rating-value">${A}</span>
         <svg class="exercise-card-rating-star" width="18" height="18">
           <use href="${S}#icon-star"></use>
         </svg>
      </p>`,`<li class="exercise-card-item" data-card-id="${O}">
  <div class="exercise-card-actions">
    <div class="exercise-card-workout-container">
      <p class="exercise-card-workout-text">Workout</p>
      ${M}
    </div>
    <button type="button" class="exercise-card-start-btn" data-open-id="${O}" aria-label="Open exercises details window button">
      <span class="exercise-card-start-btn-text">Start</span>
      <svg class="exercise-card-start-btn-icon" width="16" height="16">
        <use href="${S}#icon-arrow-right"></use>
      </svg>
    </button>
  </div>
  <h3 class="exercise-card-header-container">
    <svg class="exercise-card-header-icon" width="24" height="24">
      <use href="${S}#icon-icon-run"></use>
    </svg>
    <span class="exercise-card-header-text"
      >${de(s)}</span
    >
  </h3>
  <ul class="exercises-card-info-list">
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Burned calories:</p>
      <p class="exercise-card-parameter-value">${a} / ${r} min</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Body part:</p>
      <p class="exercise-card-parameter-value">${i}</p>
    </li>
    <li class="exercise-card-info-parameter">
      <p class="exercise-card-parameter-name">Target:</p>
      <p class="exercise-card-parameter-value">${n}</p>
    </li>
  </ul>
  </li>`},filterGroupsMarkup:function({name:e="",filter:t="",imgUrl:s=""}){return`<li class="exercises-gallery-item" style="${`background-image: linear-gradient(
      0deg,
      rgba(16, 16, 16, 0.7) 0%,
      rgba(16, 16, 16, 0.7) 100%
    ),
    url('${s}');`}">
    <a href="" class="exercises-gallery-link" data-name="${e}" aria-label="Select exercises by ${e}">
      <h3 class="exercises-gallery-item-title">${e}</h3>
      <p class="exercises-gallery-item-description">${t}</p>
    </a>
  </li>`},paginationMarkup:function(e=1,t=1){let s="";for(let a=1;a<=e;a++)a!==t-0?s+=`<li class="pagination-item"><a href="" class="pagination-item-link" aria-label="Adress to page number ${a}">${a}</a></li>`:e===1?s+=`<li class="pagination-item pagination-item-hidden">
    <a href="" "Adress to currently active page number ${a}">${a}</a>
  </li>`:s+=`<li class="pagination-item pagination-item-active">
    <a href="" "Adress to currently active page number ${a}">${a}</a>
  </li>`;return s}};function de(e=""){return e[0].toUpperCase()+e.substring(1)}let v=0;const W=document.querySelector(".backdrop"),x=document.querySelectorAll(".feedback-rating-stars-svg"),I=document.querySelector(".feedback-form-rating-value"),C=document.querySelector(".modal-exercise"),f=document.querySelector(".feedback-container"),ue=document.querySelector(".modal-exercise-btn-rating"),me=document.querySelector(".feedback-close-button"),se=document.querySelector(".feedback-form");function ge(){ue.addEventListener("click",ae),me.addEventListener("click",R),se.addEventListener("submit",fe),pe()}function ae(e=""){typeof e=="string"&&(f.dataset.id=e,C.classList.toggle("visually-hidden"),C.classList.toggle("is-open-modal"),f.classList.toggle("visually-hidden"),f.classList.toggle("is-open-modal"),ie())}function R(){se.reset(),re(),ie(!0),f.classList.toggle("visually-hidden"),f.classList.toggle("is-open-modal"),C.classList.toggle("visually-hidden"),C.classList.toggle("is-open-modal"),F()}async function fe(e){e.preventDefault();const t=f.dataset.id,s=parseFloat(I.textContent),a=document.querySelector(".feedback-form-input").value,r=document.querySelector(".feedback-form-textarea").value.trim();if(!t||!s||!a||!r){q.showError("Please fill in all fields!");return}const i={id:t,rate:s,email:a,review:r},n=await N.updateExerciseRating(i);n.result?(q.showSuccess("Thank you! Your opinion is important to us!"),R()):q.showError(n.message)}function pe(){x.forEach(e=>{e.addEventListener("mouseenter",()=>{const t=Array.from(x).indexOf(e);B(t),_(t+1)}),e.addEventListener("mouseleave",()=>{v===0?re():(B(v-1),_(v))}),e.addEventListener("click",()=>{const t=Array.from(x).indexOf(e)+1;v=t,I.textContent=`${v}.0`,B(t-1)})})}function B(e){x.forEach((t,s)=>{s<=e?t.classList.add("feedback-rating-stars-svg-highlight"):t.classList.remove("feedback-rating-stars-svg-highlight")})}function re(){x.forEach(e=>{e.classList.remove("feedback-rating-stars-svg-highlight")}),I.textContent="0.0"}function _(e){I.textContent=`${e}.0`}function ie(e=!1){e?(document.removeEventListener("keyup",z),W.removeEventListener("click",G)):(W.addEventListener("click",G),document.addEventListener("keyup",z))}function G(e){e.target===W&&R()}function z(e){e.code==="Escape"&&R()}let P={};const u=document.querySelector(".backdrop");document.querySelector(".modal-exercise-btn-close");document.querySelector(".modal-exercise-btn");document.querySelector(".modal-exercise-btn-rating");const o=document.querySelector(".modal-exercise"),ve=document.querySelector(".modal-exercise-title"),he=document.querySelector(".mod-exercise-rating-value"),m=document.querySelector(".modal-exercise-list"),ye=document.querySelector(".modal-exercise-instruction-text"),c=document.querySelector(".mod-exercise-span"),xe=document.getElementById("img");function be(){document.querySelector(".modal-exercise-btn-close").addEventListener("click",we),document.querySelector(".modal-exercise-btn").addEventListener("click",Ee),document.querySelector(".modal-exercise-btn-rating").addEventListener("click",qe)}async function Le(e=""){u.classList.add("backdrop-is-open"),o.classList.add("is-open-modal"),o.dataset.isChanged="";const t=await N.getExerciseInfo(e);if(t!=null&&t._id){o.dataset.id=t._id,P=t,Se(t);const s=p.getFavorites().find(a=>a._id===t._id);c.textContent=s?c.dataset.remove:c.dataset.add,F()}else o.dataset.id="",P={},q.showError(t.message)}function Se(e){ke(e.gifUrl),ve.textContent=E(e.name),he.textContent=e.rating.toString().padEnd(3,".0"),$e(),ye.textContent=e.description,m.innerHTML="";let t="";const s=Object.keys(e);if(s.includes("target")&&(t=`<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Target</p>
          <p class="modal-exercise-selected">${E(e.target)}</p>
        </li>`,m.insertAdjacentHTML("beforeend",t)),s.includes("bodyPart")&&(t=` <li class="modal-exercise-item">
    <p class="modal-exercise-subcategory">Body Part</p>
    <p class="modal-exercise-selected">${E(e.bodyPart)}</p>
  </li>`,m.insertAdjacentHTML("beforeend",t)),s.includes("equipment")&&(t=` <li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Equipment</p>
          <p class="modal-exercise-selected">${E(e.equipment)}</p>
        </li>`,m.insertAdjacentHTML("beforeend",t)),s.includes("popularity")&&(t=`<li class="modal-exercise-item">
          <p class="modal-exercise-subcategory">Popular</p>
          <p class="modal-exercise-selected">${e.popularity}</p>
        </li>`,m.insertAdjacentHTML("beforeend",t)),s.includes("time")){const a=`<li class="modal-exercise-item">
            <p class="modal-exercise-subcategory">Burned Calories</p>
            <p class="modal-exercise-selected">${e.burnedCalories}/${e.time} min</p>
          </li>`;m.insertAdjacentHTML("beforeend",a)}}function Ee(){c.textContent===c.dataset.add?(c.textContent=c.dataset.remove,p.addItemToFavorites(P)):(c.textContent=c.dataset.add,p.deleteItemFromFavorites(o.dataset.id)),o.dataset.isFavorites&&(o.dataset.isChanged="true")}function ke(e){xe.style.backgroundImage=`linear-gradient(
      0deg,
      rgba(27, 27, 27, 0.2) 0%,
      rgba(27, 27, 27, 0.2) 100%
    ),
    url(${e})`}function qe(){F(!0),ae(o.dataset.id)}function we(){j()}function V(e){e.target===u&&j()}function J(e){e.code==="Escape"&&j()}function j(){F(!0);const e=300;u.classList.add("hiding"),setTimeout(()=>{u.classList.remove("hiding"),o.classList.remove("is-open-modal"),u.classList.remove("backdrop-is-open")},e),o.dataset.isFavorites&&Fe()}function E(e=""){return e[0].toUpperCase()+e.substring(1)}function $e(){const e=document.querySelectorAll(".mod-exercise-rating");let t,s;for(let n=0;n<e.length;n++){const A=e[n];a(A)}function a(n){r(n),i()}function r(n){t=n.querySelector(".mod-exercise-rating-active"),s=n.querySelector(".mod-exercise-rating-value")}function i(){const n=s.textContent/.05;t.style.width=`${n}%`}}function F(e=!1){e?(document.removeEventListener("keyup",J),u.removeEventListener("click",V)):(u.addEventListener("click",V),document.addEventListener("keyup",J))}const Ce=document.querySelector(".mob-menu-close-nav-button"),Te=document.querySelector(".header-button-nav"),T=document.querySelector(".mobile-menu");Te.addEventListener("click",()=>T.classList.add("is-open"));Ce.addEventListener("click",()=>T.classList.remove("is-open"));T.addEventListener("click",()=>T.classList.remove("is-open"));const Q=document.querySelector(".header-home"),U=document.querySelector(".header-favorites"),Y=document.querySelector(".header");window.location.pathname.endsWith("/favorites.html")?(U.classList.add("active"),Q.classList.remove("active"),Y.classList.remove("header-hero")):(Q.classList.add("active"),U.classList.remove("active"),Y.classList.add("header-hero"));const K=document.querySelector(".mob-menu-home"),X=document.querySelector(".mob-menu-favorites");window.location.pathname.endsWith("/favorites.html")?(X.classList.add("active"),K.classList.remove("active")):(K.classList.add("active"),X.classList.remove("active"));const h=document.querySelector(".scroll-button"),Z=document.querySelector(".scroll-mini"),ee=document.querySelector(".scroll-big");ne();h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{document.documentElement.scrollTop>=300&&h.classList.contains("is-hidden")&&h.classList.remove("is-hidden"),document.documentElement.scrollTop<300&&!h.classList.contains("is-hidden")&&h.classList.add("is-hidden")});window.addEventListener("resize",()=>{ne()});function ne(){document.documentElement.scrollWidth>=1440?(ee.classList.remove("is-undisplayed"),Z.classList.add("is-undisplayed")):(ee.classList.add("is-undisplayed"),Z.classList.remove("is-undisplayed"))}(async()=>{let e=await p.getQuoteOfTheDay();document.querySelector(".quote-author").textContent=e.author,document.querySelector(".quote-text").textContent=e.quote})();be();ge();const k=8;let $=document.documentElement.scrollWidth<768;const te=document.querySelector(".favorites-not-found-exercises"),y=document.querySelector(".favorites-exercises-list"),g=document.querySelector(".pagination-list"),oe=document.querySelector(".modal-exercise");window.location.pathname.endsWith("/favorites.html")&&(y.addEventListener("click",Re),g.addEventListener("click",Ie),oe.dataset.isFavorites="true",window.addEventListener("resize",()=>{$!==document.documentElement.scrollWidth<768&&($=!$,b())}),b());function b(e=1){const t=p.getFavorites();$&&t.length>k?(g.classList.remove("visually-hidden"),g.innerHTML=w.paginationMarkup(Math.ceil(t.length/k)),y.innerHTML=t.slice((e-1)*k,e*k).map(s=>w.exerciseCardMarkup(s,!0)).join("")):(g.classList.add("visually-hidden"),g.innerHTML="",y.innerHTML=t.map(s=>w.exerciseCardMarkup(s,!0)).join("")),t.length>0?(te.classList.add("visually-hidden"),y.classList.remove("visually-hidden")):(te.classList.remove("visually-hidden"),y.classList.add("visually-hidden"))}function Ie(e){e.target.nodeName==="A"&&(e.preventDefault(),b(Number(e.target.innerText)),g.innerHTML=w.paginationMarkup(e.currentTarget.children.length,Number(e.target.innerText)))}function Re(e){const t=e.target.closest(".exercise-card-start-btn");if(t){Le(t.getAttribute("data-open-id"));return}const s=e.target.closest(".exercise-card-remove-btn");if(s){p.deleteItemFromFavorites(s.getAttribute("data-delete-id")),b();return}}function Fe(){oe.dataset.isChanged&&b()}export{N as b,q as m,Le as o,w as r};
//# sourceMappingURL=favorites-aa62cfb8.js.map
