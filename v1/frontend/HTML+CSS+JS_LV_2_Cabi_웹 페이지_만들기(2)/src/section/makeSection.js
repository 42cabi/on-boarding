/**
 * section item을 만들어서 반환하는 함수
 * @param {string} name section 이름
 * @param {function} handleSectionClick section 클릭 시 실행할 함수
 * @returns {HTMLLIElement} section item
 */
export const makeSection = (name, handleSectionClick) => {
  const li = document.createElement("li");
  li.className = "left-section-btn";
  li.innerText = name;
  li.addEventListener("click", handleSectionClick);
  return li;
};
