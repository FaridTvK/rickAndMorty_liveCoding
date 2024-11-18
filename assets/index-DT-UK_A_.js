(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p="https://rickandmortyapi.com/api",f=`${p}/character`,m=`${p}/location`,y=`${p}/episode`,i=document.getElementById("output"),a=document.getElementById("api-character"),d=document.getElementById("api-location"),l=document.getElementById("api-episode");a==null||a.addEventListener("click",async()=>{try{const n=await(await fetch(f)).json();i.innerHTML="",console.log(n.results),n.results.forEach(s=>{const o=document.createElement("div");o.innerHTML=g(s),i.appendChild(o)})}catch(e){console.error(e)}});function g(e){var s;return`
  <h4>Name:${e.name}</h4>
  <p>Status:${e.status}</p>
  <p>Gender:${e.gender}</p>
  <p>Location:${(s=e==null?void 0:e.location)==null?void 0:s.name}</p>
  <img src="${e.image}" alt="${e.name}"> 
  `}async function h(e){return`
    <p>Name: ${e.name} </p>
    <p>Type: ${e.type} </p>
    <p>Residents: ${await u(e.residents)} </p>
  `}async function u(e){const n=[];for(const s of e)try{const t=await(await fetch(s)).json();console.log(t),n.push(t.name)}catch(o){console.error(o)}return n.join(", ")}d==null||d.addEventListener("click",async()=>{try{const n=await(await fetch(m)).json();i.innerHTML="";for(const s of n.results){const o=document.createElement("div");o.innerHTML=await h(s),i.appendChild(o)}}catch(e){console.error(e)}});l==null||l.addEventListener("click",async()=>{try{const n=await(await fetch(y)).json();i.innerHTML="",await Promise.all(n.results.map(async s=>{console.log(s);const o=document.createElement("div");o.innerHTML=await E(s),i.appendChild(o)}))}catch(e){console.error(e)}});async function E(e){const n=await u(e.characters);return`
  <p>Name:${e.name}</p>
  <p>Air date: ${e.air_date}</p>
  <p>Characters: ${n}</p>
  `}
