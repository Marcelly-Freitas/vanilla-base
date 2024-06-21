const C=()=>{function u(i=[]){const c=document.createElement("ul");if(c.classList.add("lista-mae"),i.length)return i.forEach(a=>{const t=document.createElement("li");t.classList.add("lista-filho"),t.setAttribute("data-id",a.id),t.setAttribute("data-active",a.active);const n=document.createElement("div"),s=document.createElement("div"),e=document.createElement("div"),d=document.createElement("div");n.textContent=a.nome,n.classList.add("font-bold"),n.classList.add("text-primary"),s.textContent=a.semestre,s.classList.add("font-bold"),e.textContent="Responsável: "+a.professor,e.classList.add("font-bold"),d.classList.add("actions"),d.classList.add("flex"),d.classList.add("justify-center"),d.classList.add("gap-2"),t.appendChild(n),t.appendChild(s),t.appendChild(e),t.appendChild(d),c.appendChild(t)}),c}function m(i=[]){const c=document.createElement("ul");if(c.classList.add("lista-mae"),i.length)return i.forEach(a=>{const t=document.createElement("li");t.classList.add("lista-filho"),t.setAttribute("data-id",a.id),t.setAttribute("data-name",a.nome),t.setAttribute("data-cpf",a.cpf),t.setAttribute("data-active",a.active);const n=document.createElement("div"),s=document.createElement("div"),e=document.createElement("div");n.textContent=a.nome,n.classList.add("font-bold"),n.classList.add("text-primary"),s.textContent=a.email,s.classList.add("font-bold"),e.classList.add("actions"),e.classList.add("flex"),e.classList.add("justify-center"),e.classList.add("gap-2"),t.appendChild(n),t.appendChild(s),t.appendChild(e),c.appendChild(t)}),c}function p(i=[]){const c=document.createElement("ul");if(c.classList.add("lista-mae"),i.length)return i.forEach(a=>{const t=document.createElement("li");t.classList.add("lista-filho"),t.setAttribute("data-id",a.id),t.setAttribute("data-name",a.aluno_name),t.setAttribute("data-cpf",a.aluno_cpf),t.setAttribute("data-status",a.status_aluno);const n=document.createElement("div"),s=document.createElement("div"),e=document.createElement("div"),d=document.createElement("div");n.textContent=a.aluno_name,n.classList.add("font-bold"),n.classList.add("text-primary"),s.textContent=a.turma_name,s.classList.add("font-bold"),e.textContent=new Date(a.data).toLocaleDateString(),e.classList.add("font-bold"),d.classList.add("actions"),d.classList.add("flex"),d.classList.add("justify-end"),d.classList.add("gap-2"),t.appendChild(n),t.appendChild(s),t.appendChild(e),t.appendChild(d),c.appendChild(t)}),c}function L(i=[]){const c=document.createElement("ul");if(c.classList.add("lista-mae"),i.length)return i.forEach(a=>{const t=document.createElement("li");t.classList.add("lista-filho"),t.setAttribute("data-id",a.id),t.setAttribute("data-active",a.active);const n=document.createElement("div"),s=document.createElement("div"),e=document.createElement("div");n.textContent=a.aluno_name,n.classList.add("font-bold"),n.classList.add("text-primary"),s.textContent=a.turma_nome,s.classList.add("font-bold"),e.classList.add("actions"),e.classList.add("flex"),e.classList.add("justify-end"),e.classList.add("gap-2"),t.appendChild(n),t.appendChild(s),t.appendChild(e),c.appendChild(t)}),c}function b(i=[]){const c=document.createElement("ul");if(c.classList.add("lista-mae"),i.length)return i.forEach(a=>{const t=document.createElement("li");t.classList.add("lista-filho"),t.setAttribute("data-id",a.id),t.setAttribute("data-active",a.active);const n=document.createElement("div"),s=document.createElement("div"),e=document.createElement("div");n.textContent=a.nome,n.classList.add("font-bold"),n.classList.add("text-primary"),s.textContent=a.email,s.classList.add("font-bold"),e.classList.add("actions"),e.classList.add("flex"),e.classList.add("justify-end"),e.classList.add("gap-2"),t.appendChild(n),t.appendChild(s),t.appendChild(e),c.appendChild(t)}),c}function h(i=null){i&&i.querySelectorAll("li").forEach(a=>{const t=a.querySelector(".actions");t.classList.add("actions-wrapper");const n=a.getAttribute("data-active")==="true",s=document.createElement("button");s.classList.add("btn"),s.classList.add("btn-primary"),s.classList.add("edit-button"),s.textContent="Editar";const e=document.createElement("button");e.classList.add("btn"),e.classList.add("btn-danger"),e.classList.add("delete-button"),e.textContent="Desativar";const d=document.createElement("button");d.classList.add("btn"),d.classList.add("btn-success"),d.classList.add("active-button"),d.textContent="Ativar",t.appendChild(s),n&&t.appendChild(e),n||t.appendChild(d)})}function f(i=[],c=[]){const a=document.createElement("table"),t=document.createElement("thead"),n=document.createElement("tr"),s=document.createElement("tbody");if(a.classList.add("global-el-table"),t.classList.add("global-el-table-head"),s.classList.add("global-el-table-body"),n.classList.add("global-el-table-row"),n.classList.add("header-row"),c.forEach(e=>{const d=document.createElement("th");d.textContent=e.label;const o=Math.floor(c.length),l=Math.floor(100/o);d.setAttribute("min-width",`${l}%`),n.appendChild(d)}),t.appendChild(n),i.length===0){const e=document.createElement("tr"),d=document.createElement("td");d.textContent="Nenhum dado disponível",d.classList.add("text-center"),d.setAttribute("colspan",c.length),e.appendChild(d),s.appendChild(e)}else i.forEach(e=>{const d=document.createElement("tr");d.classList.add("global-el-table-row"),d.classList.add("body-row"),d.setAttribute("data-id",e.id),d.setAttribute("data-active",e.active),c.forEach(o=>{const l=document.createElement("td");l.textContent=e[o.key],d.appendChild(l)}),s.appendChild(d)});return a.appendChild(t),a.appendChild(s),a}function E(i=null){if(i){const c=i.querySelector(".header-row"),a=i.querySelectorAll(".body-row"),t=document.createElement("th");t.setAttribute("width","10%"),c.appendChild(t),a.forEach(n=>{const s=n.getAttribute("data-active")==="true",e=document.createElement("button");e.classList.add("edit-button"),e.innerHTML='<span class="iconify-inline" data-icon="ic:outline-edit"></span>';const d=document.createElement("button");d.classList.add("delete-button"),d.innerHTML='<span class="iconify-inline" data-icon="ic:outline-delete"></span>';const o=document.createElement("button");o.classList.add("active-button"),o.innerHTML='<span class="iconify-inline" data-icon="ic:outline-refresh"></span>';const l=document.createElement("div");l.classList.add("actions-wrapper");const r=document.createElement("td");l.appendChild(e),s&&l.appendChild(d),s||l.appendChild(o),r.appendChild(l),n.appendChild(r)})}}return{createTable:f,createList:b,createTableActions:E,createListActions:h,createAttendanceList:u,createRegistrationList:m,createCancelRegistrationList:L,createSimpleFrequencyListList:p}};export{C as u};
