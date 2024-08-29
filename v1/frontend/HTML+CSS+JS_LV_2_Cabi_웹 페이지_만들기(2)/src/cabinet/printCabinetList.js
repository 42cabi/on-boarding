import { makeCabinet } from "./makeCabinet.js";

/**
 * cabinet list를 변경하는 함수
 * @param {object} item cabinet list
 * @returns
 */
export const printCabinetList = (item) => {
  // clear cabinet list
  const cabinetList = document.querySelector(".cabinet-list");
  cabinetList.innerHTML = "";
  // if cabinet list is empty
  if (item.length === 0) {
    cabinetList.innerHTML = "No cabinet";
    return;
  }
  // change cabinet list
  item.forEach((cabinet) => {
    const res = makeCabinet(cabinet, () => {});
    cabinetList.appendChild(res);
  });
};
