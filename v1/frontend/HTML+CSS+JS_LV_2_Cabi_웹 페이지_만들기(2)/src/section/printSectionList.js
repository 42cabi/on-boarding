import { changeSection } from "./changeSection.js";
import { makeSection } from "./makeSection.js";

/**
 * section을 받아서 section list를 출력하는 함수.
 * @param {object} data section과 cabinet list 정보를 담고 있는 객체
 * @param {object} state section 정보를 담고 있는 객체
 */
export const printSectionList = (data, state) => {
  const sectionList = document.querySelector("#left-section-list");

  data.forEach((item) => {
    const res = makeSection(item.section, () => changeSection(item, state));
    sectionList.appendChild(res);
  });
};
