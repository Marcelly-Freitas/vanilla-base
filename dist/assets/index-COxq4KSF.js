import{t as x}from"./turmaEntityService.service-C-A0ySkN.js";import{s as D}from"./studentEntityService.service-Ci6a9HR0.js";import{r as f}from"./registrationEntity.service-TUR9GVoc.js";import{n as _,a as E}from"./index-Ckh9VWKK.js";import{u as N}from"./useDOMManager-kq_JSqPb.js";import{f as T}from"./index-xJp9Kd2E.js";import"./useLocalstorage-BtQVKKxs.js";let y=!1;async function g(){y=!0;const{showNotification:s}=E(),{createRegistrationList:S}=N(),i=document.querySelector(".form-wrapper"),c=document.querySelector(".student-lista-wrapper"),C=document.querySelector(".loading-wrapper"),r=window.location.href.split("/").pop(),{data:o}=await x.getByCode(r),d=document.querySelector("#nomeMateria"),l=document.querySelector("#period"),u=document.querySelector("#nomeProfessor"),m=document.querySelector("#data");d.innerHTML="",l.innerHTML="",u.innerHTML="",m.innerHTML="",d.textContent=o.nome,l.textContent="Período: "+o.semestre,u.textContent="Responsável: "+o.professor,m.textContent="Data: "+new Date().toLocaleDateString();const{data:b}=await D.getAll(),{data:v}=await f.getAll(),p=[...b].filter(a=>![...v].find(t=>t.aluno_id===a.id&&t.turma_id==r&&t.active));if(!p.length)i.textContent="Nenhum aluno disponível para esta turma";else{const a=S(p);c.innerHTML="",c.appendChild(a),a.querySelectorAll("li").forEach(t=>{const e=document.createElement("button"),L=t.querySelector(".actions"),h=t.getAttribute("data-id"),A=t.getAttribute("data-name"),M=t.getAttribute("data-cpf");e.classList.add("btn"),e.classList.add("btn-primary"),e.textContent="Matricular",e.addEventListener("click",async q=>{q.preventDefault();try{e.setAttribute("disabled","disabled"),e.textContent="Carregando...";const n={turma_id:r,aluno_id:h,aluno_cpf:M,turma_nome:o.nome,aluno_name:A};n.id=T.string.uuid(),n.created_at=new Date().toISOString(),n.active=!0;const H=await f.create(n);s({type:"success",title:"Sucesso",message:"Aluno matriculado com sucesso"}),_(null,"/turmas/matricula")}catch{e.setAttribute("disabled","")}}),L.appendChild(e)})}C.classList.add("hidden"),i.classList.remove("hidden")}const F={init(){g(),window.addEventListener("changepage",function(s){y||g()})}};export{F as default};
