const c={init(){console.log("turma notas"),document.getElementById("searchButton").addEventListener("click",function(){const e=document.getElementById("searchInput").value.toLowerCase();n(e)});function n(e){document.querySelectorAll(".tableValues tr").forEach(function(t){Array.from(t.children).map(o=>o.textContent.toLowerCase()).some(o=>o.includes(e))?t.style.display="":t.style.display="none"})}}};export{c as default};