const u={init(){console.log("turma notas");function c(){const a=document.getElementById("tabelamateria").getElementsByTagName("tr"),t=[];for(let e=1;e<a.length;e++){const n=a[e].getElementsByTagName("td"),d=n[0].innerText,i=n[1].innerText,b=n[2].innerText,m=n[3].innerText;t.push({aluno:d,prova:i,atividade:b,observacoes:m})}localStorage.setItem("dadosTabelaNotas",JSON.stringify(t)),s("botaosalvar",()=>{location.reload()})}window.salvarInformacoes=c;function l(){const o=localStorage.getItem("dadosTabelaNotas");if(o){const a=JSON.parse(o),t=document.getElementById("tabelamateria");t.getElementsByTagName("tbody")[0].innerHTML="",a.forEach(e=>{const n=t.insertRow();n.innerHTML=`<td contenteditable="true">${e.aluno}</td><td contenteditable="true">${e.prova}</td><td contenteditable="true">${e.atividade}</td><td contenteditable="true">${e.observacoes}</td>`})}}l();function r(){s("botaocancelar",()=>{location.reload()})}window.cancelarEdicao=r;function s(o,a){const t=document.getElementById(o);t.classList.add("blink"),setTimeout(()=>{t.classList.remove("blink"),a&&a()},300)}}};export{u as default};
