"use strict";(()=>{var e={};e.id=540,e.ids=[540],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5386:(e,r,t)=>{t.r(r),t.d(r,{config:()=>l,default:()=>d,routeModule:()=>p});var a={};t.r(a),t.d(a,{default:()=>s});var o=t(1802),i=t(7153),n=t(6249),u=t(3337);function s(e,r){if("authToken"!==e.headers.authorization)return r.status(401).json({error:"Unauthorized"});let{label:t}=e.query,a=function(e,r){let t=r[e];return t?t.length>2?t.slice(2).map(e=>({Name:e.Name,Description:e.Description})):[]:{error:"Category not found"}}(t,u);if(!a||a.error||0===a.length)return r.status(404).json({error:"Not Found"});r.status(200).json(a)}let d=(0,n.l)(a,"default"),l=(0,n.l)(a,"config"),p=new o.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/subcategories",pathname:"/api/subcategories",bundlePath:"",filename:""},userland:a})}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[735],()=>t(5386));module.exports=a})();