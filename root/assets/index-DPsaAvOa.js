import{t as c}from"./turmaEntityService.service-C-A0ySkN.js";import{a as l}from"./index-Ckh9VWKK.js";import{f as d}from"./index-xJp9Kd2E.js";import"./useLocalstorage-BtQVKKxs.js";function r(o,i=!0){if(o){const a=o.querySelectorAll("input, select"),e=o.querySelector("button[type=submit]");i?(a.forEach(t=>{t.setAttribute("disabled","disabled")}),e.setAttribute("disabled","disabled"),e.textContent="Carregando..."):(a.forEach(t=>{t.removeAttribute("disabled")}),e.removeAttribute("disabled"),e.textContent="Atualizar")}}async function m(o){o.preventDefault();const i=document.querySelector("#turma-form"),a=i.querySelectorAll("input, select"),{showNotification:e}=l();if(r(i),a){const t={};a.forEach(s=>{const n=s.getAttribute("name"),u=s.value;t[n]=u}),t.id=d.string.uuid(),t.created_at=new Date().toISOString(),t.active=!0,await c.create(t),e({type:"success",title:"Sucesso",message:"Dados cadastrados com sucesso"}),navigateToRoute(null,"/turmas/visualizar"),r(i,!1)}}const y={init(){window.onFormSubmit=null,window.onFormSubmit=m}};export{y as default};