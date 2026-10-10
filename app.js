const E=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const byCourse={};doctors.forEach(d=>(byCourse[d.course]=byCourse[d.course]||[]).push(d));
document.getElementById('docs').innerHTML=Object.keys(byCourse).map(c=>`<h3 class="grp">${E(c)}</h3>`+byCourse[c].map(d=>`<div class="card"><h3>${E(d.name)}</h3><a class="btn" href="mailto:${E(d.email)}">${E(d.email)}</a></div>`).join('')).join('');
document.getElementById('adm').innerHTML=admins.map(a=>`<div class="card"><h3>${E(a.name)}</h3><div class="sub">${E(a.role)}</div><a class="btn" href="${E(a.contact)}">${E(a.label)}</a></div>`).join('');
const groups=["Group A","Group B","Other tables"];let cur=groups[0];
function draw(){
 document.getElementById('tabs').innerHTML=groups.map(t=>`<button class="${t===cur?'on':''}" data-t="${E(t)}">${E(t)}</button>`).join('');
 const list=cur==="Other tables"?other:lectures;const k=cur==="Group B"?"B":"A";
 document.getElementById('crs').innerHTML=list.map(c=>`<div class="card"><h3>${E(c.course)}</h3><div class="sub"><b>${E(c.day)}</b> · ${E(c.time)}<br>${E(c[k])}<br>${E(c.doc)}${c.note?`<br><span class="note">${E(c.note)}</span>`:''}</div></div>`).join('');
 document.querySelectorAll('#tabs button').forEach(b=>b.onclick=()=>{cur=b.dataset.t;draw()});
}
draw();
const secs=["doctors","courses","drive","admins"];
function show(id){if(!secs.includes(id))id="doctors";secs.forEach(x=>{document.getElementById(x).classList.toggle('on',x===id);document.querySelector('nav a[href="#'+x+'"]').classList.toggle('on',x===id)});}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const id=a.getAttribute('href').slice(1);show(id);document.querySelector('main').scrollIntoView({behavior:'smooth'})}));
show(location.hash.slice(1));
