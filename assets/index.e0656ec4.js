import{j as l,u as m,r as c,L as f,B as p,R as h,a as d,b as g,c as v}from"./vendor.94db688d.js";const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}};y();const s=l.exports.jsx,u=l.exports.jsxs,x=()=>{const{id:n}=m(),[o,r]=c.exports.useState(),[i,t]=c.exports.useState(!0),e=async()=>{const a=await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${n}`)).json();r(a),t(!1)};return c.exports.useEffect(()=>{e()},[]),s("div",{children:i?s("h1",{children:"Loading..."}):s("div",{children:"Detail"})})},j=({id:n,coverImg:o,title:r,summary:i,genres:t})=>u("div",{children:[s("img",{src:o}),s("h2",{children:s(f,{to:"movie/"+n,children:r})}),s("p",{children:i}),s("ul",{children:t.map(e=>s("li",{children:e},e))})]}),L=()=>{const[n,o]=c.exports.useState(!0),[r,i]=c.exports.useState([]),t=async()=>{const e=await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")).json();i(e.data.movies),o(!1)};return c.exports.useEffect(()=>{t()},[]),console.log(r),s("div",{children:n?s("h1",{children:"Loading..."}):s("div",{children:r.map(e=>s(j,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id))})})},M=()=>s(p,{children:u(h,{children:[s(d,{path:"/movie-ts/",element:s(L,{})}),s(d,{path:"/movie-ts/movie/:id",element:s(x,{})})]})});g.render(s(v.StrictMode,{children:s(M,{})}),document.getElementById("root"));
