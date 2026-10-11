/* يبني بطاقات السمنرات من SEMINARS ويرتبها بالأحدث أولاً */
const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const search = document.getElementById("search");
const filtersBox = document.getElementById("filters");
const CATEGORIES = [
  "Data Structures", 
  "Object-Oriented Programming", 
  "Cryptography", 
  "Numerical Analysis", 
  "Authorization & Access Control", 
  "Baath Party Crimes"
];
let activeCat = "الكل";

const sorted = [...SEMINARS].sort((a, b) => new Date(b.date) - new Date(a.date));

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

function render() {
  const q = search.value.trim().toLowerCase();
  grid.innerHTML = "";
  const list = sorted.filter(s =>
    (activeCat === "الكل" || s.category === activeCat) &&
    (s.title + " " + s.description + " " + s.category).toLowerCase().includes(q));
  
  list.forEach(s => {
    const card = el("article", "card");
    
    // شارة أكاديمية عصرية برقم السمنر بدلاً من الأيقونة التقليدية
    const badge = el("div", "seminar-tag", "SEM-" + s.id);
    card.append(badge);

    card.append(el("h3", "", s.title));
    card.append(el("p", "", s.description));
    const meta = el("div", "meta");
    meta.append(el("span", "", "رقم: " + s.id), el("span", "", "التاريخ: " + s.date),
                el("span", "badge", s.category), el("span", "badge", s.status));
    card.append(meta);
    const a = el("a", "btn", "اقرأ السمنر");
    a.href = s.url;
    a.setAttribute("aria-label", "اقرأ السمنر: " + s.title);
    card.append(a);
    grid.append(card);
  });
  empty.hidden = list.length > 0;
}

["الكل", ...CATEGORIES].forEach(c => {
  const b = el("button", c === "الكل" ? "active" : "", c);
  b.type = "button";
  b.onclick = () => {
    activeCat = c;
    filtersBox.querySelectorAll("button").forEach(x => x.classList.toggle("active", x === b));
    render();
  };
  filtersBox.append(b);
});

search.addEventListener("input", render);
document.getElementById("statTotal").textContent = SEMINARS.length;
document.getElementById("statAvail").textContent = SEMINARS.filter(s => s.status === "متاح للقراءة").length;
render();
