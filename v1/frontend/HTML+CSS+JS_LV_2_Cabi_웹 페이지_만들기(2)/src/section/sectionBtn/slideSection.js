import { changeSection } from "../changeSection.js";

export const prevSectionSlide = (data, state) => {
  // go to previous section
  // if first section, go to last section
  const currentIndex = data.findIndex((item) => item.section === state.section);
  const previousIndex = currentIndex - 1;
  if (previousIndex < 0) {
    changeSection(data[data.length - 1], state);
  } else {
    changeSection(data[previousIndex], state);
  }
};

export const nextSectionSlide = (data, state) => {
  // go to next section
  // if last section, go to first section
  const currentIndex = data.findIndex((item) => item.section === state.section);
  const nextIndex = currentIndex + 1;
  if (nextIndex >= data.length) {
    changeSection(data[0], state);
  } else {
    changeSection(data[nextIndex], state);
  }
};
