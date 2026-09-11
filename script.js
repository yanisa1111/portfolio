/* ============================================
   script.js
   Interactive behavior and Thai/English translations.
   ============================================ */

// 1) เมนูบนสุด: เบลอพื้นหลังเมื่อเลื่อนหน้าจอลง
const nav = document.getElementById("site-nav");
function handleNavScroll() {
  nav.classList.toggle("nav-scrolled", window.scrollY > 12);
}
window.addEventListener("scroll", handleNavScroll);
handleNavScroll();

// 2) ทยอยแสดงเนื้อหาเมื่อเลื่อนมาเจอ
const rows = document.querySelectorAll(".row-reveal");
const rowObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.35 }
);
rows.forEach((row, i) => {
  row.style.transitionDelay = `${i * 80}ms`;
  rowObserver.observe(row);
});

const translations = {
  th: {
    "nav.about": "แนะนำตัว",
    "nav.featured": "โปรเจกต์เด่น",
    "nav.projects": "โปรเจกต์อื่น",
    "nav.stack": "เว็บนี้ทำจากอะไร",
    "nav.contact": "ติดต่อ",
    "hero.eyebrow":
      "Computer Science student focused on Full-Stack Development & AI",
    "hero.description":
      'ฉัน <span class="text-paper font-medium">ญาณิศา อินทรวิชา</span> นักศึกษาวิทยาการคอมพิวเตอร์ ชั้นปีที่ 4 สนใจด้าน Full-Stack Development และ AI กำลังมองหาโอกาสสหกิจศึกษา / Junior Developer เพื่อพัฒนาทักษะจากการทำงานจริง',
    "hero.cv": "ดู CV",
    "hero.about": "แนะนำตัว ↓",
    "image.profile": "ใส่รูปโปรไฟล์",
    "image.about": "ใส่รูปแนะนำตัว",
    "image.fix": "แก้ src ใน index.html",
    "about.education":
      'กำลังศึกษาอยู่ชั้นปีที่ 4 คณะเทคโนโลยีสารสนเทศ สาขาวิทยาการคอมพิวเตอร์และพัฒนาซอฟต์แวร์ มหาวิทยาลัยศรีปทุม · <span class="text-paper">GPA 3.05</span>',
    "about.experience":
      'มีประสบการณ์พัฒนาโปรเจกต์ทั้ง <span class="text-paper">Web Application, Backend และ AI/RAG</span> ตั้งแต่การออกแบบระบบไปจนถึงการ Deploy ใช้งานจริง',
    "about.stack":
      'Tech Stack ที่ใช้งาน ได้แก่ <span class="text-paper">React, Node.js, ASP.NET MVC, C#, JavaScript, Python, MySQL, MongoDB, SQLite และ Docker</span>',
    "about.name": "ญาณิศา อินทรวิชา",
    "featured.title": "โปรเจกต์เด่น",
    "featured.problemLabel": "PROBLEM",
    "featured.solutionLabel": "SOLUTION",
    "featured.roleLabel": "MY ROLE",
    "featured.techLabel": "TECH",
    "featured.pipelineLabel": "AI PIPELINE",
    "featured.goalLabel": "GOAL",
    "featured.subtitle": "AI Assistant for Healthcare & Welfare Information",
    "image.screenshot": "ใส่ภาพหน้าจอโปรเจกต์ตรงนี้",
    "image.screenshotShort": "ใส่ภาพหน้าจอตรงนี้",
    "featured.problem":
      "ข้อมูลสิทธิด้านสุขภาพและสวัสดิการมีรายละเอียดจำนวนมาก ทำให้ผู้ใช้งาน โดยเฉพาะผู้สูงอายุ เข้าถึงและทำความเข้าใจข้อมูลได้ยาก",
    "featured.solution":
      'พัฒนา AI Assistant ด้วย <span class="text-paper">Retrieval-Augmented Generation (RAG)</span> เพื่อค้นหาและตอบคำถามจากข้อมูลสิทธิและสวัสดิการที่เกี่ยวข้อง',
    "featured.role":
      "ออกแบบระบบ RAG จัดการข้อมูลและฐานข้อมูล รวมถึงพัฒนาและเชื่อมต่อส่วนต่างๆ ของระบบ AI",
    "featured.goal":
      "ช่วยให้ผู้ใช้งานค้นหาและทำความเข้าใจข้อมูลด้านสุขภาพและสิทธิประโยชน์ได้ง่ายขึ้นผ่าน AI",
    "featured.github": "ดูโค้ดบน GitHub",
    "projects.title": "โปรเจกต์อื่น ๆ",
    "projects.myusafeDescription":
      "ระบบรับเรื่องร้องเรียนออนไลน์สำหรับจัดการข้อมูลและติดตามสถานะคำร้อง พร้อม Backend และฐานข้อมูลสำหรับจัดการข้อมูลผู้ใช้งาน",
    "projects.fasttourDescription":
      "ระบบจองทัวร์ออนไลน์ พัฒนาด้วย ASP.NET MVC พร้อมระบบจัดการข้อมูลและการจองผ่านฐานข้อมูล",
    "projects.webApplication": "Web Application",
    "projects.fullStack": "Full-Stack",
    "stack.title": "เว็บนี้คืออะไร",
    "stack.description":
      "หน้าเว็บหน้าเดียวที่ออกแบบให้คนดู Portfolio อ่านจบและเข้าใจตัวคุณได้อย่างรวดเร็ว เน้นให้ข้อมูลสำคัญขึ้นก่อน อ่านง่ายทั้งบนมือถือและคอมพิวเตอร์",
    "stack.files":
      "index.html (โครงหน้า) · style.css (ดีไซน์/แอนิเมชัน) · script.js (การโต้ตอบ)",
    "stack.styling": "Tailwind CSS ผ่าน CDN + CSS ของเราเองใน style.css",
    "stack.layout": "Single-page, responsive ตั้งแต่ 360px ถึงจอเดสก์ท็อป",
    "stack.motion":
      "Scroll-reveal ด้วย IntersectionObserver ใน script.js เคารพ prefers-reduced-motion",
    "stack.sections": "Hero · แนะนำตัว · Featured Project · Other Projects · Contact",
    "stack.font":
      "Space Grotesk (หัวข้อ) + Inter (เนื้อหา) + IBM Plex Mono (โค้ด/label)",
    "contact.title": "คุยกันได้เลย",
    "contact.description":
      "เปิดรับตำแหน่งสหกิจศึกษา / Junior Full-Stack Developer พร้อมเริ่มงานและเรียนรู้เพิ่มเติมทันที",
    "footer.stack": "HTML + CSS + JS (Tailwind CDN)",
  },
  en: {
    "nav.about": "About me",
    "nav.featured": "Featured project",
    "nav.projects": "Other projects",
    "nav.stack": "About this site",
    "nav.contact": "Contact",
    "hero.eyebrow":
      "Computer Science student focused on Full-Stack Development & AI",
    "hero.description":
      'I am <span class="text-paper font-medium">Yanisa Intharawicha</span>, a fourth-year Computer Science student interested in Full-Stack Development and AI. I am seeking a cooperative education opportunity or Junior Developer role to grow through real-world experience.',
    "hero.cv": "View CV",
    "hero.about": "About me ↓",
    "image.profile": "Add profile photo",
    "image.about": "Add about-me photo",
    "image.fix": "Edit src in index.html",
    "about.education":
      'Fourth-year student in the Faculty of Information Technology, majoring in Computer Science and Software Development at Sripatum University · <span class="text-paper">GPA 3.05</span>',
    "about.experience":
      'Experienced in developing <span class="text-paper">Web Applications, Backend systems, and AI/RAG</span> projects, from system design through real-world deployment.',
    "about.stack":
      'My tech stack includes <span class="text-paper">React, Node.js, ASP.NET MVC, C#, JavaScript, Python, MySQL, MongoDB, SQLite, and Docker</span>.',
    "about.name": "Yanisa Intharawicha",
    "featured.title": "Featured project",
    "featured.problemLabel": "PROBLEM",
    "featured.solutionLabel": "SOLUTION",
    "featured.roleLabel": "MY ROLE",
    "featured.techLabel": "TECH",
    "featured.pipelineLabel": "AI PIPELINE",
    "featured.goalLabel": "GOAL",
    "featured.subtitle": "AI Assistant for Healthcare & Welfare Information",
    "image.screenshot": "Add project screenshot here",
    "image.screenshotShort": "Add screenshot here",
    "featured.problem":
      "Healthcare rights and welfare information can be extensive, making it difficult for users, especially older adults, to access and understand.",
    "featured.solution":
      'Built an AI Assistant with <span class="text-paper">Retrieval-Augmented Generation (RAG)</span> to search and answer questions about relevant rights and welfare information.',
    "featured.role":
      "Designed the RAG system, managed data and databases, and developed and integrated the AI system components.",
    "featured.goal":
      "Help users search for and understand healthcare and benefit information more easily through AI.",
    "featured.github": "View code on GitHub",
    "projects.title": "Other projects",
    "projects.myusafeDescription":
      "An online complaint management system for handling information and tracking request status, with a backend and database for user data.",
    "projects.fasttourDescription":
      "An online tour booking system built with ASP.NET MVC, including data and booking management through a database.",
    "projects.webApplication": "Web Application",
    "projects.fullStack": "Full-Stack",
    "stack.title": "About this site",
    "stack.description":
      "A single-page portfolio designed to help visitors quickly understand who you are. Important information comes first and remains easy to read on mobile and desktop.",
    "stack.files":
      "index.html (structure) · style.css (design/animations) · script.js (interactions)",
    "stack.styling": "Tailwind CSS via CDN + custom CSS in style.css",
    "stack.layout": "Single-page, responsive from 360px to desktop screens",
    "stack.motion":
      "Scroll-reveal with IntersectionObserver in script.js, respecting prefers-reduced-motion",
    "stack.sections": "Hero · About me · Featured Project · Other Projects · Contact",
    "stack.font":
      "Space Grotesk (headings) + Inter (body) + IBM Plex Mono (code/labels)",
    "contact.title": "Let's talk",
    "contact.description":
      "Open to cooperative education or Junior Full-Stack Developer opportunities, ready to work and learn more.",
    "footer.stack": "HTML + CSS + JS (Tailwind CDN)",
  },
};

const textTargets = {
  "nav.about": "header nav a:nth-child(1)",
  "nav.featured": "header nav a:nth-child(2)",
  "nav.projects": "header nav a:nth-child(3)",
  "nav.stack": "header nav a:nth-child(4)",
  "nav.contact": 'header > div > a[href="#contact"]',
  "hero.eyebrow": "#top p.font-mono",
  "hero.description": "#top p.mt-6",
  "hero.cv": '#top a[href="#contact"]',
  "hero.about": '#top a[href="#about"]',
  "image.profile": "#top img + div span:first-child",
  "image.about": "#about img + div span:first-child",
  "about.education": "#about .space-y-5 p:nth-child(1)",
  "about.experience": "#about .space-y-5 p:nth-child(2)",
  "about.stack": "#about .space-y-5 p:nth-child(3)",
  "about.name": "#about h2",
  "featured.title": "#featured h2",
  "featured.subtitle": "#featured h3 + p",
  "image.screenshot": "#featured img + div span:first-child",
  "image.screenshotShort": "#projects .card-hover img + div span:first-child",
  "featured.problem": "#featured .grid > div:nth-child(1) > p:last-child",
  "featured.solution": "#featured .grid > div:nth-child(2) > p:last-child",
  "featured.role": "#featured .grid > div:nth-child(3) > p:last-child",
  "featured.goal": "#featured .grid > div:nth-child(6) > p:last-child",
  "featured.github": '#featured a[target="_blank"]',
  "projects.title": "#projects h2",
  "projects.myusafeDescription": "#projects .card-hover:nth-child(1) p.flex-1",
  "projects.fasttourDescription": "#projects .card-hover:nth-child(2) p.flex-1",
  "stack.title": "#stack h2",
  "stack.description": "#stack > div:first-child > p",
  "contact.title": "#contact h2",
  "contact.description": "#contact h2 + p",
  "footer.stack": "#contact > p:last-child",
};

const stackTargets = {
  "stack.files": "#stack .space-y-4 > div:nth-child(1) span:last-child",
  "stack.styling": "#stack .space-y-4 > div:nth-child(2) span:last-child",
  "stack.layout": "#stack .space-y-4 > div:nth-child(3) span:last-child",
  "stack.motion": "#stack .space-y-4 > div:nth-child(4) span:last-child",
  "stack.sections": "#stack .space-y-4 > div:nth-child(5) span:last-child",
  "stack.font": "#stack .space-y-4 > div:nth-child(6) span:last-child",
};

const labelTargets = {
  "featured.problemLabel": "#featured .grid > div:nth-child(1) > p:first-child",
  "featured.solutionLabel": "#featured .grid > div:nth-child(2) > p:first-child",
  "featured.roleLabel": "#featured .grid > div:nth-child(3) > p:first-child",
  "featured.techLabel": "#featured .grid > div:nth-child(4) > p:first-child",
  "featured.pipelineLabel": "#featured .grid > div:nth-child(5) > p:first-child",
  "featured.goalLabel": "#featured .grid > div:nth-child(6) > p:first-child",
  "projects.webApplication": "#projects .card-hover:nth-child(2) > div:last-child > p:first-child",
  "projects.fullStack": "#projects .card-hover:nth-child(1) > div:last-child > p:first-child",
};

const altTranslations = {
  th: {
    "profile.alt": "รูปโปรไฟล์",
    "profile.aboutAlt": "รูปแนะนำตัว",
    "featured.imageAlt": "ภาพหน้าจอระบบ Silver Life Benefit",
    "projects.myusafeAlt": "ภาพหน้าจอระบบ MyUsafe",
    "projects.fasttourAlt": "ภาพหน้าจอระบบ FastTour",
  },
  en: {
    "profile.alt": "Profile photo",
    "profile.aboutAlt": "About-me photo",
    "featured.imageAlt": "Silver Life Benefit system screenshot",
    "projects.myusafeAlt": "MyUsafe system screenshot",
    "projects.fasttourAlt": "FastTour system screenshot",
  },
};

function applyLanguage(language) {
  const dictionary = translations[language];
  Object.entries(textTargets).forEach(([key, selector]) => {
    const element = document.querySelector(selector);
    if (element && dictionary[key]) element.innerHTML = dictionary[key];
  });
  Object.entries(labelTargets).forEach(([key, selector]) => {
    const element = document.querySelector(selector);
    if (element && dictionary[key]) element.innerHTML = dictionary[key];
  });
  Object.entries(stackTargets).forEach(([key, selector]) => {
    const element = document.querySelector(selector);
    if (element && dictionary[key]) element.innerHTML = dictionary[key];
  });
  document
    .querySelectorAll("#top img + div span:nth-child(2), #about img + div span:nth-child(2)")
    .forEach((element) => {
      element.innerHTML = dictionary["image.fix"];
    });

  document.querySelectorAll("[data-i18n-alt]").forEach((image) => {
    const key = image.dataset.i18nAlt;
    if (altTranslations[language][key]) image.alt = altTranslations[language][key];
  });

  document.documentElement.lang = language;
  const toggle = document.getElementById("language-toggle");
  toggle.textContent = language === "th" ? "English" : "ไทย";
  toggle.setAttribute(
    "aria-label",
    language === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"
  );
  localStorage.setItem("portfolio-language", language);
}

const savedLanguage = localStorage.getItem("portfolio-language");
let currentLanguage = savedLanguage === "en" ? "en" : "th";
applyLanguage(currentLanguage);

document.getElementById("language-toggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "th" ? "en" : "th";
  applyLanguage(currentLanguage);
});
