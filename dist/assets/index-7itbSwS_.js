import{a as o}from"./index-Ckh9VWKK.js";const i={init(){const e=document.getElementById("form-recovery");e&&e.addEventListener("submit",async a=>{a.preventDefault();const{showNotification:s}=o();if(e.querySelector("#username").value===""){s({type:"error",title:"Sem dados",message:"Precisa adicionar email"});return}s({type:"success",title:"Dados enviados com sucesso",message:"Os dados foram enviados para seu email"})})}};export{i as default};