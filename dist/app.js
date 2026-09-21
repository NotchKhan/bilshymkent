(() => {
const introLoader=document.getElementById("intro-loader");
if(introLoader){const started=performance.now();const dismiss=()=>{const wait=Math.max(0,1300-(performance.now()-started));window.setTimeout(()=>{introLoader.classList.add("is-leaving");window.setTimeout(()=>introLoader.remove(),360);},wait);};if(document.readyState==="complete")dismiss();else window.addEventListener("load",dismiss,{once:true});}
const textTranslations=new Map([
["Перейти к содержанию","Негізгі мазмұнға өту"],["Лицей для юношей · Шымкент","Ұлдарға арналған лицей · Шымкент"],
["О лицее","Лицей туралы"],["Достижения","Жетістіктер"],["Ученикам","Оқушыларға"],["Расписание","Кесте"],["События","Іс-шаралар"],["Ещё","Тағы"],
["Распорядок дня","Күн тәртібі"],["Весь день","Толық күн"],["Подъём","Ояну"],["Уроки","Сабақтар"],["Этюд","Etüt"],["Больше,","Мектептен де"],["чем школа","артық"],
["Контакты","Байланыс"],["Страница лицея","Лицей парақшасы"],["Новости","Жаңалықтар"],["Все новости","Барлық жаңалық"],["1 дек. 2023","1 жел. 2023"],
["Научные проекты: итоги городского этапа","Ғылыми жобалар: қалалық кезең қорытындысы"],["№1 в Шымкенте среди олимпиадных школ","Олимпиадалық мектептер арасында Шымкентте №1"],["Баскетбол: II место на республиканском турнире","Баскетбол: республикалық турнирде II орын"],
["Лицей-интернат «Білім-Инновация» №1 для юношей","«Білім-Инновация» №1 ұлдарға арналған лицей-интернаты"],["Лицей работает в Шымкенте с 1993 года. В учебные дни ученики живут в общежитии. После уроков — кружки и олимпиадная подготовка, вечером — этюд и общие активности.","Лицей Шымкентте 1993 жылдан бері жұмыс істейді. Оқу күндері оқушылар жатақханада тұрады. Сабақтан кейін үйірмелер мен олимпиадалық дайындық, кешке etüt және ортақ іс-шаралар өтеді."],
["В рейтинге олимпиадных школ за 2025–2026 учебный год лицей занял","2025–2026 оқу жылындағы олимпиадалық мектептер рейтингінде лицей"],["1-е место в Шымкенте и 20-е место в Казахстане.","Шымкентте 1-орын, Қазақстанда 20-орын алды."],["Как проходит учебный день","Оқу күні қалай өтеді"],
["Республиканские олимпиады · 2025–2026 учебный год","Республикалық олимпиадалар · 2025–2026 оқу жылы"],["грамота","мадақтама"],["Жанатай Нұрсұлтан — грамота. Нұрғұн Ақсұңқар және Жұматов Қанат — грамота.","Жанатай Нұрсұлтан — мадақтама. Нұрғұн Ақсұңқар және Жұматов Қанат — мадақтама."],
["Учебные дни","Оқу күндері"],["Подъём, сборы и завтрак","Ояну, жиналу және таңғы ас"],["Утренняя гигиена, порядок в комнате, завтрак и подготовка к урокам","Таңғы гигиена, бөлмені реттеу, таңғы ас және сабаққа дайындық"],
["Учебные занятия","Оқу сабақтары"],["Уроки по основному расписанию","Негізгі кесте бойынша сабақтар"],["Кружки и олимпиады","Үйірмелер мен олимпиадалар"],["Олимпиадная подготовка, проекты, секции и факультативы","Олимпиадалық дайындық, жобалар, секциялар және факультативтер"],
["Ужин и отдых","Кешкі ас және демалыс"],["Свободное время перед вечерней подготовкой","Кешкі дайындық алдындағы бос уақыт"],["Etüt / Этюд","Etüt / Өздік дайындық"],["Самостоятельная подготовка и домашние задания","Өздік дайындық және үй тапсырмалары"],
["Вечерние активности","Кешкі іс-шаралар"],["Тост, sohbet, общение и общие лицейские мероприятия","Тост, sohbet, қарым-қатынас және лицейлік іс-шаралар"],["Подготовка ко сну","Ұйқыға дайындық"],["Личная гигиена и порядок в комнате","Жеке гигиена және бөлмені реттеу"],["Отбой","Ұйқы"],["Тишина и отдых до нового учебного дня","Жаңа оқу күніне дейін тыныштық пен демалыс"],
["Жизнь в общежитии","Жатақханадағы өмір"],["В учебные дни","Оқу күндері"],["Ученики живут в лицее: уроки, кружки и вечерний этюд проходят по общему распорядку.","Оқушылар лицейде тұрады: сабақтар, үйірмелер және кешкі etüt ортақ тәртіппен өтеді."],["Расписание отдельных кружков и дежурств уточняется у классного руководителя или воспитателя.","Жекелеген үйірмелер мен кезекшілік кестесін сынып жетекшісінен немесе тәрбиешіден нақтылаңыз."],
["Спортивные достижения","Спорттық жетістіктер"],["Республиканские соревнования · 2026 год","Республикалық жарыстар · 2026 жыл"],
["Чалыш, этюд и полезные ссылки","Çalış, etüt және пайдалы сілтемелер"],["События лицея","Лицей іс-шаралары"],["Новости и результаты учеников","Оқушылардың жаңалықтары мен нәтижелері"],["Школьная страница, объявления и актуальное расписание","Мектеп парақшасы, хабарландырулар және өзекті кесте"],["Таймер для самостоятельной работы","Өздік жұмысқа арналған таймер"],["Информация о сети лицеев и поступлении","Лицейлер желісі және оқуға түсу туралы ақпарат"],
["События и объявления","Іс-шаралар мен хабарландырулар"],["Актуальные даты мероприятий и объявления администрации — на школьной странице EduPage.","Іс-шаралардың өзекті күндері мен әкімшілік хабарландырулары EduPage мектеп парақшасында жарияланады."],["Открыть новости лицея ↗","Лицей жаңалықтарын ашу ↗"],
["Контакты лицея","Лицей байланыстары"],["г. Шымкент, ул. Адырбекова, 135","Шымкент қ., Адырбеков көш., 135"],["Расписание отдельных кружков и даты мероприятий уточняйте у классного руководителя или воспитателя.","Жекелеген үйірмелер кестесі мен іс-шара күндерін сынып жетекшісінен немесе тәрбиешіден нақтылаңыз."],["Изображения — иллюстрации по макету.","Суреттер — макетке арналған иллюстрациялар."],
["Главная","Басты бет"],["Разделы лицея","Лицей бөлімдері"],["Поиск по сайту","Сайттан іздеу"],["Раздел, предмет или имя ученика","Бөлім, пән немесе оқушының аты"],
["Орыс тілі секциясы","Орыс тілі бөлімі"],["Ағылшын тілі секциясы","Ағылшын тілі бөлімі"]
]);
const attributeTranslations=new Map([
["На главную","Басты бетке"],["Логотип Білім-Инновация","Білім-Инновация логотипі"],["Язык сайта","Сайт тілі"],["Поиск по сайту","Сайттан іздеу"],["Открыть меню","Мәзірді ашу"],
["Главное о лицее","Лицей туралы басты ақпарат"],["карусель","айналмалы баннер"],["Предыдущий слайд","Алдыңғы слайд"],["Следующий слайд","Келесі слайд"],["Каталог разделов","Бөлімдер каталогы"],
["Все спортивные достижения","Барлық спорттық жетістіктер"],["Второе место","Екінші орын"],["Третье место","Үшінші орын"],["Подробнее о контактах","Байланыстар туралы толығырақ"],
["Архив достижений за 2023 год","2023 жылғы жетістіктер мұрағаты"],["Итоги конкурса","Байқау қорытындысы"],["Учебная неделя","Оқу аптасы"],["Быстрая навигация","Жылдам навигация"],
["Закрыть меню","Мәзірді жабу"],["Все разделы","Барлық бөлімдер"],["Закрыть поиск","Іздеуді жабу"],["Например, этюд или математика","Мысалы, etüt немесе математика"]
]);
const slides={
kk:[
{title:"Шымкентте<br><em>№1</em>",description:"2025–2026 оқу жылындағы<br>үздік олимпиадалық мектеп.",link:"#achievements",label:"Жетістіктер"},
{title:"Қазақстанда<br><em>ТОП-20</em>",description:"Еліміздің олимпиадалық мектептері<br>рейтингінде 20-орын.",link:"#achievements",label:"Нәтижелер"},
{title:"«Білім ақылды шыңдайды,<br><em>тәрбие тұлғаны қалыптастырады»</em>",description:"Білім мен жақсы мінез<br>әрдайым қатар жүреді.",link:"#about",label:"Лицей туралы"}
],
ru:[
{title:"№1<br><em>в Шымкенте</em>",description:"Лучшая олимпиадная школа города<br>в 2025–2026 учебном году.",link:"#achievements",label:"Достижения"},
{title:"ТОП-20<br><em>в Казахстане</em>",description:"В рейтинге олимпиадных школ страны<br>за 2025–2026 учебный год.",link:"#achievements",label:"Результаты"},
{title:"«Учёба развивает ум,<br><em>воспитанность — человека»</em>",description:"Знания и хороший характер<br>должны идти рядом.",link:"#about",label:"О лицее"}
]};
const messages={kk:{notFound:"Ештеңе табылмады. Басқа сөзді қолданып көріңіз.",description:"Білім-Инновация №1 — Шымкенттегі ұлдарға арналған лицей. Күн тәртібі, жетістіктер, спорт және оқушыларға пайдалы сілтемелер."},ru:{notFound:"Ничего не найдено. Попробуйте другое слово.",description:"Білім-Инновация №1 — лицей для юношей в Шымкенте. Распорядок дня, достижения, спорт и полезные ссылки для учеников."}};
const originalText=new WeakMap(),originalAttributes=new WeakMap();
let currentLanguage="kk",slide=0,searchable=[];
function translateTextNodes(language){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;while((node=walker.nextNode())){if(!originalText.has(node))originalText.set(node,node.nodeValue);const source=originalText.get(node),value=source.trim();node.nodeValue=language==="kk"&&textTranslations.has(value)?source.replace(value,textTranslations.get(value)):source;}}
function translateAttributes(language){document.querySelectorAll("[aria-label],[aria-roledescription],[placeholder],[alt]").forEach(element=>{if(!originalAttributes.has(element)){const values={};for(const name of ["aria-label","aria-roledescription","placeholder","alt"]){if(element.hasAttribute(name))values[name]=element.getAttribute(name);}originalAttributes.set(element,values);}const values=originalAttributes.get(element);for(const [name,source] of Object.entries(values)){element.setAttribute(name,language==="kk"&&attributeTranslations.has(source)?attributeTranslations.get(source):source);}});}
function showSlide(next=slide){const list=slides[currentLanguage];slide=(next+list.length)%list.length;const data=list[slide];document.getElementById("hero-title").innerHTML=data.title;document.getElementById("hero-description").innerHTML=data.description;const link=document.getElementById("hero-link");link.href=data.link;link.querySelector("span").textContent=data.label;document.getElementById("slide-count").textContent=(slide+1)+" / "+list.length;}
function rebuildSearch(){searchable=[...document.querySelectorAll(".detail-section,.achievement-row,.news-section")].map(element=>({target:element.id||element.closest("[id]").id,title:element.querySelector("h2,.achievement-subject strong")?.textContent||"",text:element.textContent.replace(/\s+/g," ").trim()}));}
const searchInput=document.getElementById("site-search"),results=document.getElementById("search-results");
function search(){const query=searchInput.value.toLocaleLowerCase().trim();results.replaceChildren();const matches=searchable.filter(item=>item.title&&(!query||item.text.toLocaleLowerCase().includes(query))).slice(0,12);if(!matches.length){const p=document.createElement("p");p.className="no-results";p.textContent=messages[currentLanguage].notFound;results.append(p);return;}matches.forEach(item=>{const link=document.createElement("a");link.className="search-result";link.href="#"+item.target;const text=document.createElement("span");text.textContent=item.title;link.append(text);link.addEventListener("click",()=>document.getElementById("search-dialog").close());results.append(link);});}
function applyLanguage(language){currentLanguage=language;document.documentElement.lang=language;translateTextNodes(language);translateAttributes(language);document.querySelector('meta[name="description"]').content=messages[language].description;document.querySelectorAll("[data-language]").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.language===language)));showSlide();rebuildSearch();search();}
const dialogs=[...document.querySelectorAll("dialog")];
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>{const dialog=document.getElementById(button.dataset.open);dialog.showModal();if(dialog.id==="search-dialog")searchInput.focus();}));
document.querySelectorAll("[data-close]").forEach(button=>button.addEventListener("click",()=>button.closest("dialog").close()));
dialogs.forEach(dialog=>{dialog.addEventListener("click",event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});dialog.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>dialog.close()));});
document.querySelectorAll("[data-language]").forEach(button=>button.addEventListener("click",()=>applyLanguage(button.dataset.language)));
document.getElementById("slide-prev").addEventListener("click",()=>showSlide(slide-1));
document.getElementById("slide-next").addEventListener("click",()=>showSlide(slide+1));
searchInput.addEventListener("input",search);
const navLinks=[...document.querySelectorAll(".bottom-nav a")];
function updateNavigation(){const hash=location.hash||"#top";navLinks.forEach(link=>{const active=link.getAttribute("href")===hash;link.classList.toggle("active",active);if(active)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");});}
window.addEventListener("hashchange",updateNavigation);updateNavigation();
let navScheduled=false;
function updateScrollNavigation(){navScheduled=false;let target="#top";for(const section of document.querySelectorAll(".detail-section")){if(section.getBoundingClientRect().top<=120)target="#"+section.id;}navLinks.forEach(link=>{const active=link.getAttribute("href")===target;link.classList.toggle("active",active);if(active)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");});document.querySelector(".bottom-nav button").classList.toggle("active",!navLinks.some(link=>link.getAttribute("href")===target));}
window.addEventListener("scroll",()=>{if(!navScheduled){navScheduled=true;requestAnimationFrame(updateScrollNavigation);}},{passive:true});
updateScrollNavigation();
applyLanguage("kk");
})();
