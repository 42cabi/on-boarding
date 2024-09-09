import { printCabinetList } from "../cabinet/printCabinetList.js";

/**
 * section을 변경하는 함수
 * @param {object} item section 객체, section 이름과 cabinet list를 가지고 있음
 * @param {object} state section 정보를 담고 있는 객체
 */
export const changeSection = (item, state) => {
  state.section = item.section;
  // change selected section style
  const sectionList = document.querySelectorAll(".left-section-btn");
  sectionList.forEach((section) => {
    if (section.classList.contains("left-section-btn-selected"))
      section.classList.remove("left-section-btn-selected");
    if (section.innerText === item.section) {
      section.classList.add("left-section-btn-selected");
    }
  });
  // change section title
  const sectionTitle = document.querySelector(".main-section-text");
  sectionTitle.innerHTML = `2층 - ${item.section}`;
  // change cabinet list
  printCabinetList(item.cabinets);
};
