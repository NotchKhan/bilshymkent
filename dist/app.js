(() => {
const dialogs=[...document.querySelectorAll("dialog")];
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>{ const dialog=document.getElementById(button.dataset.open); dialog.showModal(); if(dialog.id==="search-dialog")document.getElementById("site-search").focus(); }));
document.querySelectorAll("[data-close]").forEach(button=>button.addEventListener("click",()=>button.closest("dialog").close()));
dialogs.forEach(dialog=>{dialog.addEventListener("click",event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});dialog.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>dialog.close()));});
const slides=[
{title:"Добро<br>пожаловать<br><em>в БИЛ №1!</em>",description:"Знания. Дисциплина.<br>Возможности.",link:"#about",label:"О лицее"},
{title:"Достижения<br><em>наших<br>учеников</em>",description:"Олимпиады и научные<br>проекты лицея.",link:"#achievements",label:"Результаты"},
{title:"Каждый день<br><em>в БИЛ №1</em>",description:"Уроки, кружки,<br>этюд и сохбет.",link:"#schedule",label:"Расписание"}
];
let slide=0;
function showSlide(next){slide=(next+slides.length)%slides.length;const data=slides[slide];document.getElementById("hero-title").innerHTML=data.title;document.getElementById("hero-description").innerHTML=data.description;const link=document.getElementById("hero-link");link.href=data.link;link.querySelector("span").textContent=data.label;document.getElementById("slide-count").textContent=(slide+1)+" / "+slides.length;}
document.getElementById("slide-prev").addEventListener("click",()=>showSlide(slide-1));
document.getElementById("slide-next").addEventListener("click",()=>showSlide(slide+1));
const searchInput=document.getElementById("site-search"),results=document.getElementById("search-results");
const searchable=[...document.querySelectorAll(".detail-section,.achievement-row,.news-section")].map(element=>({target:element.id||element.closest("[id]").id,title:element.querySelector("h2,.achievement-subject strong")?.textContent||"",text:element.textContent.replace(/\s+/g," ").trim()}));
function search(){const query=searchInput.value.toLocaleLowerCase().trim();results.replaceChildren();const matches=searchable.filter(item=>item.title && (!query||item.text.toLocaleLowerCase().includes(query))).slice(0,12);if(!matches.length){const p=document.createElement("p");p.className="no-results";p.textContent="Ничего не найдено. Попробуйте другое слово.";results.append(p);return;}matches.forEach(item=>{const link=document.createElement("a");link.className="search-result";link.href="#"+item.target;const text=document.createElement("span");text.textContent=item.title;link.append(text);link.addEventListener("click",()=>document.getElementById("search-dialog").close());results.append(link);});}
searchInput.addEventListener("input",search);search();
const navLinks=[...document.querySelectorAll(".bottom-nav a")];
function updateNavigation(){const hash=location.hash||"#top";navLinks.forEach(link=>{const active=link.getAttribute("href")===hash;link.classList.toggle("active",active);if(active)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");});}
window.addEventListener("hashchange",updateNavigation);updateNavigation();
let navScheduled=false;
function updateScrollNavigation(){
 navScheduled=false;
 let target="#top";
 for(const section of document.querySelectorAll(".detail-section")){if(section.getBoundingClientRect().top<=120)target="#"+section.id;}
 navLinks.forEach(link=>{const active=link.getAttribute("href")===target;link.classList.toggle("active",active);if(active)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");});
 document.querySelector(".bottom-nav button").classList.toggle("active",!navLinks.some(link=>link.getAttribute("href")===target));
}
window.addEventListener("scroll",()=>{if(!navScheduled){navScheduled=true;requestAnimationFrame(updateScrollNavigation);}}, {passive:true});
updateScrollNavigation();
})();
