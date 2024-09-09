import { data } from "./src/data.js";
import { changeSection } from "./src/section/changeSection.js";
import { printSectionList } from "./src/section/printSectionList.js";
import {
  nextSectionSlide,
  prevSectionSlide,
} from "./src/section/sectionBtn/slideSection.js";

let state = {
  section: "A",
};

// section 출력
printSectionList(data, state);

// 초기 화면 설정
// select first section
changeSection(data[0], state);

// section 이동 버튼
const leftSectionBtn = document.querySelector(".main-section-left");
const rightSectionBtn = document.querySelector(".main-section-right");
leftSectionBtn.addEventListener("click", () => prevSectionSlide(data, state));
rightSectionBtn.addEventListener("click", () => nextSectionSlide(data, state));
