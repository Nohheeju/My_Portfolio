/*  AboutMe 섹션 프로필 클릭 이벤트 */
const profileImg = document.querySelector(".profile img"),
  profileCon = document.querySelector(".profile .profile-con");
// 프로필 클릭 이벤트
profileImg.addEventListener("click", function () {
  profileCon.classList.add("active");
});
profileCon.addEventListener("click", function () {
  this.classList.remove("active");
});

/*  skill 섹션 아이콘 클릭 이벤트 */
const iconImg = document.querySelector(".icon img"),
  iconText = document.querySelector(".icon-text p"),
  miniIcon = document.querySelectorAll(".miniIcon"),
  iconBox = document.querySelectorAll(".miniIcon .icon-box"),
  miniTitle = document.querySelector(".miniTitle p"),
  iconHTML = document.querySelector(".HTML"),
  iconCSS = document.querySelector(".CSS"),
  iconJS = document.querySelector(".JS"),
  iconSCSS = document.querySelector(".SCSS"),
  iconReact = document.querySelector(".React"),
  iconGit = document.querySelector(".Git"),
  iconPs = document.querySelector(".Ps"),
  iconAi = document.querySelector(".Ai"),
  iconFigma = document.querySelector(".Figma");

// 아이콘 이미지의 src 변경 함수
function iconImgSrc(src) {
  iconImg.setAttribute("src", src);
}
// 아이콘에 클래스 추가 이벤트
function iconActive(num) {
  iconBox.forEach(function (item) {
    item.classList.remove("active");
  });
  iconBox[num].classList.add("active");
}
iconActive(0);

// 아이콘 클릭이벤트
miniIcon.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    iconActive(idx);
  });
});

// HTML 아이콘 클릭이벤트
iconHTML.addEventListener("click", function () {
  iconImgSrc("images/icon-HTML5.png");
  miniTitle.innerText = "HTML5";
  iconText.innerText =
    "웹표준과 웹 접근성에 준수하여 올바른 구조로 퍼블리싱 합니다. HTML에 권장하는 마크업 방식과 시맨틱 태크를 사용해 전체 레이아웃을 설계합니다. 퍼블리싱 전에 기획서와 디자인 가이드를 만들고 폰트, 컬러, 사이즈를 동일하고 체계적인 퍼블리싱 작업을 수행합니다.";
});
// CSS 아이콘 클릭이벤트
iconCSS.addEventListener("click", function () {
  iconImgSrc("images/icon-CSS.png");
  miniTitle.innerText = "CSS3";
  iconText.innerText =
    "IE(인터넷익스플로러)를 지원하는 크로스브라우징을 위해 퍼블리싱 작업을 합니다.CSS3에서 제공하는 새로운 속성을 적극적으로 활용하여 다양하고 현대적인 디자인을 적용합니다. IE 지원을 고려하여 호환되지 않는 경우을 생각하며, 사용여부를 판단하여 대안을 마련합니다.";
});
// JS 아이콘 클릭이벤트
iconJS.addEventListener("click", function () {
  iconImgSrc("images/icon-JS.png");
  miniTitle.innerText = "JAVA Script";
  iconText.innerText =
    "내비게이션, 탭 메뉴, 아코디언 등의 상호작용을 구현하기 위해 자바스크립트를 사용합니다. 플러그인 의존 없이 순수한 자바스크립트 코딩을 통해 프로젝트에 필요한 기능들을 정확하게 구현합니다. 문제 해결 능력을 향상시키기 위해 각종 디버깅 도구 및 테스팅 라이브러리를 활용하며, 코드의 품질과 안정성을 항상 유지하고 개선하기 위해 노력합니다.";
});
// SCSS 아이콘 클릭이벤트
iconSCSS.addEventListener("click", function () {
  iconImgSrc("images/icon-SCSS.png");
  miniTitle.innerText = "SCSS";
  iconText.innerText =
    "SCSS의 문법과 모듈화를 잘 활용하여 스타일 작업을 원활히할 수 있습니다.";
});
// React 아이콘 클릭이벤트
iconReact.addEventListener("click", function () {
  iconImgSrc("images/icon-React.png");
  miniTitle.innerText = "React";
  iconText.innerText =
    "React를 사용하여 동적이고 효율적인 웹 애플리케이션을 개발하는 경험이 있습니다. 다양한 프로젝트에서 React를 활용하여 사용자 인터페이스를 구축하고, 컴포넌트 기반 아키텍처를 통한 모듈화된 개발을 수행했습니다. ";
});
// Git 아이콘 클릭이벤트
iconGit.addEventListener("click", function () {
  iconImgSrc("images/icon-Git.png");
  miniTitle.innerText = "Git, GitHub";
  iconText.innerText =
    "소스 코드의 버전 관리 및 협업을 위해 Git을 사용하며, GitHub를 통해 프로젝트를 호스팅하고 협업하는 경험이 있습니다. 브랜치 전략을 이해하고 충돌 해결, 병합 등의 기본적인 Git 기능을 숙지하고 있습니다. 커밋 메시지를 명확하게 작성하여 프로젝트 히스토리를 관리하고 다른 개발자와의 원활한 협업을 지원합니다.";
});
// Ps 아이콘 클릭이벤트
iconPs.addEventListener("click", function () {
  iconImgSrc("images/icon-Ps.png");
  miniTitle.innerText = "Photoshop";
  iconText.innerText = "포토샵을 통해 이미지를 제작하거나 편집할 수 있습니다.";
});
// Ai 아이콘 클릭이벤트
iconAi.addEventListener("click", function () {
  iconImgSrc("images/icon-Ai.png");
  miniTitle.innerText = "Illustration";
  iconText.innerText = "일러스트를 통해 로고나 캐릭터를 제작할 수 있습니다.";
});
// Figma 아이콘 클릭이벤트
iconFigma.addEventListener("click", function () {
  iconImgSrc("images/icon-Figma.png");
  miniTitle.innerText = "Figma";
  iconText.innerText =
    "피그마를 통한 디자인, 프로토타이핑, 협업 등의 다양한 기능을 숙련도 있게 활용합니다. 디자인 파일의 공유, 버전 관리, 피드백 수렴 등을 체계적으로 진행하여 효율적인 협업을 구축합니다.";
});

/* Project 섹션 이벤트 */
/* main-project */
const mainProject = document.querySelector("#main-project"),
  closeMain = document.querySelector("#mian-close"),
  LetsKorail = document.querySelector("#LetsKorail"),
  BestSleep = document.querySelector("#BestSleep"),
  WiggleWiggle = document.querySelector("#WiggleWiggle"),
  tabLK = document.querySelector("#LK"),
  tabBS = document.querySelector("#BS"),
  tabWW = document.querySelector("#WW"),
  maintitle = document.querySelector("#maintitle"),
  maincontents = document.querySelector("#maincontents"),
  mainLang = document.querySelector("#mainLang"),
  maintake = document.querySelector("#maintake"),
  mainImg = document.querySelector(".mainProjectImg"),
  LinkPlan = document.querySelector(".Link-plan"),
  LinkDesign = document.querySelector(".Link-design"),
  LinkDemo = document.querySelector(".Link-demo"),
  LinkGithub = document.querySelector(".Link-github"),
  Project = document.querySelector("#Project");

document.addEventListener("DOMContentLoaded", function () {
  if (mainProject !== "acive") {
    tabLK.classList.add("active");
  }
});

closeMain.addEventListener("click", function () {
  hideMain();
});
LetsKorail.addEventListener("click", function () {
  showMain();
  LetsKorailTab();
  LetsKorailTitle();
  LetsKorailContents();
  LetsKorailtake();
  mainImgSrc("images/DesktopMobile-korail.png");
  mainLinkPlan(
    "https://docs.google.com/presentation/d/1JpEptYAKkBtC3qO90mdKiSOr25vrfOKXxBL6hVq0znk/edit?usp=sharing"
  );
  mainLinkDesign(
    "https://www.figma.com/file/26vDQeFz5yqF57lfCnImcP/%EB%85%B8%ED%9D%AC%EC%A3%BC_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?type=design&node-id=0%3A1&mode=dev&t=ZxF6gwNqk7KUlDEq-1"
  );
  mainLinkDemo(
    "https://nohheeju.github.io/Portfolio-LetsKorail/index.html#none"
  );
  mainLinkGithub("https://github.com/Nohheeju/Portfolio-LetsKorail");
  LinkPlan.style.display = "flex";
  LinkDesign.style.display = "flex";
  LinkGithub.style.display = "flex";
});

BestSleep.addEventListener("click", function () {
  showMain();
  BestSleepTab();
  BestSleepTitle();
  BestSleepContents();
  BestSleeptake();
  mainImgSrc("images/DesktopMobile-bestsleep.png");
  mainLinkPlan(
    "https://docs.google.com/presentation/d/18FQf8fCpY1Bf_wC7-vB-e9I1WPPG36aV6RwKn6GLbl4/edit?usp=sharing"
  );
  mainLinkDesign(
    "https://www.figma.com/file/HNKJAath2PaTm5LkzHKJO8/%EB%84%A4%EC%9D%B4%EB%B9%84%EC%A6%88?type=design&node-id=330%3A3303&mode=design&t=46o7qHkyp2jLHLpq-1"
  );
  mainLinkDemo("https://nohheeju.github.io/BestSleep/");
  LinkPlan.style.display = "flex";
  LinkDesign.style.display = "flex";
  LinkGithub.style.display = "none";
});

WiggleWiggle.addEventListener("click", function () {
  showMain();
  WiggleWiggleTab();
  WiggleWiggleTitle();
  WiggleWiggleContents();
  WiggleWiggletake();
  mainImgSrc("images/DesktopMobile-wiggle.png");
  mainLinkDesign(
    "https://www.figma.com/file/HNKJAath2PaTm5LkzHKJO8/%EB%84%A4%EC%9D%B4%EB%B9%84%EC%A6%88?type=design&node-id=330%3A3303&mode=design&t=46o7qHkyp2jLHLpq-1"
  );
  mainLinkDemo("https://react-wigglewiggle.netlify.app/");
  mainLinkGithub(
    "https://github.com/Nohheeju/React_wiggle-wiggle?tab=readme-ov-file"
  );
  LinkPlan.style.display = "none";
  LinkDesign.style.display = "none";
  LinkGithub.style.display = "flex";
});

tabLK.addEventListener("click", function () {
  LetsKorailTab();
  LetsKorailTitle();
  LetsKorailContents();
  LetsKorailtake();
  mainImgSrc("images/DesktopMobile-korail.png");
  mainLinkPlan(
    "https://docs.google.com/presentation/d/1JpEptYAKkBtC3qO90mdKiSOr25vrfOKXxBL6hVq0znk/edit?usp=sharing"
  );
  mainLinkDesign(
    "https://www.figma.com/file/26vDQeFz5yqF57lfCnImcP/%EB%85%B8%ED%9D%AC%EC%A3%BC_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?type=design&node-id=0%3A1&mode=dev&t=ZxF6gwNqk7KUlDEq-1"
  );
  mainLinkDemo(
    "https://nohheeju.github.io/Portfolio-LetsKorail/index.html#none"
  );
  mainLinkGithub("https://github.com/Nohheeju/Portfolio-LetsKorail");
  LinkPlan.style.display = "flex";
  LinkDesign.style.display = "flex";
  LinkGithub.style.display = "flex";
});
tabBS.addEventListener("click", function () {
  BestSleepTab();
  BestSleepTitle();
  BestSleepContents();
  BestSleeptake();
  mainImgSrc("images/DesktopMobile-bestsleep.png");
  mainLinkPlan(
    "https://docs.google.com/presentation/d/18FQf8fCpY1Bf_wC7-vB-e9I1WPPG36aV6RwKn6GLbl4/edit?usp=sharing"
  );
  mainLinkDesign(
    "https://www.figma.com/file/HNKJAath2PaTm5LkzHKJO8/%EB%84%A4%EC%9D%B4%EB%B9%84%EC%A6%88?type=design&node-id=330%3A3303&mode=design&t=46o7qHkyp2jLHLpq-1"
  );
  mainLinkDemo("https://nohheeju.github.io/BestSleep/");
  LinkPlan.style.display = "flex";
  LinkDesign.style.display = "flex";
  LinkGithub.style.display = "none";
});
tabWW.addEventListener("click", function () {
  WiggleWiggleTab();
  WiggleWiggleTitle();
  WiggleWiggleContents();
  WiggleWiggletake();
  mainImgSrc("images/DesktopMobile-wiggle.png");
  mainLinkDemo("https://react-wigglewiggle.netlify.app/");
  mainLinkGithub(
    "https://github.com/Nohheeju/React_wiggle-wiggle?tab=readme-ov-file"
  );
  LinkPlan.style.display = "none";
  LinkDesign.style.display = "none";
  LinkGithub.style.display = "flex";
});

function hideMain() {
  mainProject.classList.remove("active");
  Project.classList.add("active");
}
function showMain() {
  mainProject.classList.add("active");
  Project.classList.remove("active");
}
function LetsKorailTab() {
  tabLK.classList.add("active");
  tabBS.classList.remove("active");
  tabWW.classList.remove("active");
}
function BestSleepTab() {
  tabBS.classList.add("active");
  tabLK.classList.remove("active");
  tabWW.classList.remove("active");
}
function WiggleWiggleTab() {
  tabWW.classList.add("active");
  tabLK.classList.remove("active");
  tabBS.classList.remove("active");
}
function LetsKorailTitle() {
  maintitle.innerText = "LetsKorail";
}
function BestSleepTitle() {
  maintitle.innerText = "bestsleep";
}
function WiggleWiggleTitle() {
  maintitle.innerText = "WiggleWiggle";
}
function LetsKorailContents() {
  maincontents.innerText =
    "평소에 기차예매를 이용하면서 홈페이지가 아쉽다고 생각된적이 많아 선정하였습니다. 기존의 홈페이지와 비교했을 때 표예매 탭을 눈에 뜨게 위치와 사이즈를 조정하였습니다. 의미없는, 중복되는 탭은 제거하였고, 사용자에 맞춰서 폰트사이즈와 가독성을 개선하였습니다.";
}
function BestSleepContents() {
  maincontents.innerText =
    "확고한 브랜드 방향성을 반영하지 못한 레이아웃 구성과 타겟층을 고려하지 않은 노후되고 트렌디하지 않은 디자인으로 다소 아쉬운 부분들이 많다고 생각되어 선정하였습니다.  헤더의 사이즈를 조절하고 침대 브랜드를 나타낼 수 있게 레이아웃을 수정하였고, 트렌디한 디지인과 타켓층을 고려하여 디자인 하였습니다.";
}
function WiggleWiggleContents() {
  maincontents.innerText =
    "이 프로젝트에서는 위글위글 쇼핑몰을 리액트 기반으로 진행 했습니다.";
}
function LetsKorailtake() {
  maintake.innerText = "개인";
}
function BestSleeptake() {
  maintake.innerText = "팀";
}
function WiggleWiggletake() {
  maintake.innerText = "개인";
}

function mainImgSrc(src) {
  mainImg.setAttribute("src", src);
}
function mainLinkPlan(href) {
  LinkPlan.setAttribute("href", href);
}
function mainLinkDesign(href) {
  LinkDesign.setAttribute("href", href);
}
function mainLinkDemo(href) {
  LinkDemo.setAttribute("href", href);
}
function mainLinkGithub(href) {
  LinkGithub.setAttribute("href", href);
}

/* sub-project */
const sideProject = document.querySelector("#sideProject");
const closeSide = document.querySelector("#sub-close");
const subProject = document.querySelector("#sub-project");

sideProject.addEventListener("click", function () {
  subProject.classList.add("active");
  Project.classList.remove("active");
});
closeSide.addEventListener("click", function () {
  subProject.classList.remove("active");
  Project.classList.add("active");
});
