
export const NAME = "Ваше Ім’я";
export const EMAIL = "your@email.com";

export const UI = {
  navLabel: "Основна навігація",
  menuOpen: "Відкрити меню",
  menuClose: "Закрити меню",
  contact: "Зв’язатися",
};
export const NAV = [["about", "Про мене"], ["skills", "Навички"], ["projects", "Проєкти"], ["contact", "Контакти"]];
export const STACK = ["JavaScript", "React", "Redux", "Vite", "CSS Modules", "Node.js", "Git"];

export const HERO = {
  status: "Frontend-розробник · відкритий до пропозицій",
  lines: [
    { text: "Створюю сучасні" },
    { text: "інтерфейси,", accent: true },
    { text: "якими приємно користуватися" },
  ],
  sub: "Швидкі, адаптивні веб-інтерфейси на React. Щойно завершив курс Full Stack розробника й шукаю першу команду, де зможу швидко приносити користь.",
  primary: "Переглянути проєкти",
};
export const CHIPS = [["React", "58%", "9%"], ["Redux", "70%", "24%"], ["JavaScript", "80%", "7%"], ["Vite", "66%", "38%"]];

export const ABOUT = {
  main: "Я не просто пишу код — я розбираюся, як він працює, занурююся в бізнес-логіку клієнта й завжди дотримуюся дедлайнів.",
  lead: "Моя сила — жага до знань і розвитку та прагнення створювати нові, сучасні продукти. Я швидко входжу в проєкт, знаходжу причини помилок і пишу код, зрозумілий для команди.",
};

export const SKILLS_SECTION = {
  title: "Мій стек",
  learning: "Зараз вивчаю",
  note: "Розширюю стек: типобезпека та мобільна розробка",
};
export const GROUPS = [
  { title: "Frontend", text: "Будую інтерфейси та стилізую їх", skills: ["JavaScript", "React", "CSS Modules"] },
  { title: "Стан і збірка", text: "Керую даними та налаштовую середовище розробки", skills: ["Redux", "Vite"] },
  { title: "Backend і процеси", text: "Розумію серверну частину та працюю в команді", skills: ["Node.js", "Git"] },
];
export const LEARNING = ["TypeScript", "React Native"];

const cover = (a, b) =>
  `radial-gradient(circle at 28% 30%,${a},transparent 55%),radial-gradient(circle at 78% 72%,${b},transparent 52%),#0a0f1d`;
const text = "Опишіть задачу, ваше рішення та результат — одним-двома реченнями.";

export const PROJECTS_SECTION = { title: "Обрані роботи", live: "Live demo", code: "GitHub" };
export const PROJECTS = [
  { id: "project-1", title: "Назва проєкту", text, tags: ["React", "Redux", "Vite"], bg: cover("#2f7bff", "#7a5cff"), live: "#", repo: "#" },
  { id: "project-2", title: "Назва проєкту", text, tags: ["JavaScript", "CSS Modules"], bg: cover("#1fc6ff", "#2f7bff"), live: "#", repo: "#" },
  { id: "project-3", title: "Назва проєкту", text, tags: ["React", "Node.js"], bg: cover("#7a5cff", "#1fa8ff"), live: "#", repo: "#" },
];

export const CONTACT_SECTION = { title: "Маєте вакансію чи проєкт? Напишіть мені" };
export const SOCIAL = [["GitHub", "#"], ["LinkedIn", "#"], ["Telegram", "#"]];
export const FOOTER = { made: "Зроблено на React і GSAP", top: "Нагору" };
