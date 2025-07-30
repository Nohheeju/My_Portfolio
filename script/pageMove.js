/* 로딩 이벤트 */
const Load = document.querySelector(".loading-wrap");
setTimeout(function () {
  Load.style.display = "none";
}, 3000);

const tip = document.querySelector(".tip");
setTimeout(function () {
  tip.style.display = "block";
}, 3000);
tip.addEventListener("click", function () {
  this.style.display = "none";
  const IntroTitle = document.querySelector(".Intro-titleBox");
  const IntroBtn = document.querySelector(".btn-box");
  IntroTitle.classList.add("move");
  IntroBtn.classList.add("move");
});

/* 이전,다음 버튼 클릭시 나타나는 페이지 */
const prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  pages = document.querySelectorAll(".page"),
  btn = document.querySelectorAll(".btn");

prevBtn.addEventListener("click", function () {
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null && activeIndex > 0) {
    pages[activeIndex].classList.remove("active");
    pages[activeIndex - 1].classList.add("active");
  }
});
prevBtn.addEventListener("mousedown", function () {
  prevBtn.classList.add("active");
});
prevBtn.addEventListener("mouseup", function () {
  prevBtn.classList.remove("active");
});

nextBtn.addEventListener("click", function () {
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null && activeIndex < pages.length - 1) {
    pages[activeIndex].classList.remove("active");
    pages[activeIndex + 1].classList.add("active");
  }
});
nextBtn.addEventListener("mousedown", function () {
  nextBtn.classList.add("active");
});
nextBtn.addEventListener("mouseup", function () {
  nextBtn.classList.remove("active");
});

/* page 이동 button 클릭 식 해당 page로 이동되는 이벤트 */
const Btns = document.querySelectorAll(".Btns"),
  AboutBtn = document.querySelector(".About"),
  SkillBtn = document.querySelector(".Skill"),
  ProjectBtn = document.querySelector(".Project"),
  HomeBtn = document.querySelector(".Home"),
  EpilogueBtn = document.querySelector(".Epilogue"),
  AboutMeBtn = document.querySelector(".AboutMe"),
  MySkillBtn = document.querySelector(".MySkill"),
  MyProjectBtn = document.querySelector(".MyProject");

AboutBtn.addEventListener("click", function () {
  const AboutPage = document.querySelector("#About");
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null) {
    pages[activeIndex].classList.remove("active");
    AboutPage.classList.add("active");
  }
});
AboutBtn.addEventListener("mousedown", function () {
  AboutBtn.classList.add("active");
});
AboutBtn.addEventListener("mouseup", function () {
  AboutBtn.classList.remove("active");
});

SkillBtn.addEventListener("click", function () {
  const SkillPage = document.querySelector("#Skill");
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null) {
    pages[activeIndex].classList.remove("active");
    SkillPage.classList.add("active");
  }
});
SkillBtn.addEventListener("mousedown", function () {
  SkillBtn.classList.add("active");
});
SkillBtn.addEventListener("mouseup", function () {
  SkillBtn.classList.remove("active");
});

ProjectBtn.addEventListener("click", function () {
  const ProjectPage = document.querySelector("#Project");
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null) {
    pages[activeIndex].classList.remove("active");
    ProjectPage.classList.add("active");
  }
});
ProjectBtn.addEventListener("mousedown", function () {
  ProjectBtn.classList.add("active");
});
ProjectBtn.addEventListener("mouseup", function () {
  ProjectBtn.classList.remove("active");
});

HomeBtn.addEventListener("click", function () {
  const HomePage = document.querySelector("#Home");
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null) {
    pages[activeIndex].classList.remove("active");
    HomePage.classList.add("active");
  }
});
EpilogueBtn.addEventListener("click", function () {
  const EpiloguePage = document.querySelector("#Epilogue");
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null) {
    pages[activeIndex].classList.remove("active");
    EpiloguePage.classList.add("active");
  }
});
AboutMeBtn.addEventListener("click", function () {
  const AboutPage = document.querySelector("#About");
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null) {
    pages[activeIndex].classList.remove("active");
    AboutPage.classList.add("active");
  }
});
MySkillBtn.addEventListener("click", function () {
  const SkillPage = document.querySelector("#Skill");
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null) {
    pages[activeIndex].classList.remove("active");
    SkillPage.classList.add("active");
  }
});
MyProjectBtn.addEventListener("click", function () {
  const ProjectPage = document.querySelector("#Project");
  const activeIndex = getActiveIndex(pages);
  if (activeIndex !== null) {
    pages[activeIndex].classList.remove("active");
    ProjectPage.classList.add("active");
  }
});

/* 활성화 되어있는 page를 찾아주는 함수 */
function getActiveIndex(pages) {
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].classList.contains("active")) {
      return i;
    }
  }
  return null;
}

const startBtn = document
  .querySelector(".btn-box")
  .addEventListener("click", function () {
    const HomePage = document.querySelector("#Home");
    HomePage.classList.add("active");
  });
