export const makeCabinet = (cabinet, handleCabinetClick) => {
  const li = document.createElement("li");
  li.className = "cabinet";

  const info = document.createElement("div");
  info.className = "cabinet-info";

  const icon = document.createElement("div");
  icon.className = "cabinet-icon";
  icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="change-stroke" d="M8 8.00004C9.84095 8.00004 11.3333 6.50766 11.3333 4.66671C11.3333 2.82576 9.84095 1.33337 8 1.33337C6.15906 1.33337 4.66667 2.82576 4.66667 4.66671C4.66667 6.50766 6.15906 8.00004 8 8.00004Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path class="change-stroke" d="M13.7267 14.6667C13.7267 12.0867 11.16 10 8 10C4.84 10 2.27333 12.0867 2.27333 14.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

  const id = document.createElement("p");
  id.className = "cabinet-number";
  id.innerText = cabinet.cabinetId;

  const intra = document.createElement("div");
  intra.className = "cabinet-intra";
  intra.innerText = cabinet.user;

  // full 인지 아닌지 구분
  if (cabinet.status === "AVAILABLE") {
    li.classList.add("cabinet-available");
    icon.classList.add("cabinet-icon-available");
    id.classList.add("cabinet-number-available");
  }

  info.appendChild(icon);
  info.appendChild(id);

  li.appendChild(info);
  li.appendChild(intra);

  addEventListener("click", handleCabinetClick);
  return li;
};
