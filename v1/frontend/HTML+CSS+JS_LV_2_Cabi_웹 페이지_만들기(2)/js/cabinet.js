import { cabinetDatas } from "./data.js";

const fullUserImg = "./images/user_full.svg";
const availableUserImg = "./images/user_available.svg"

const cabinetMap = new Map();
cabinetDatas.forEach(section => cabinetMap.set(section.section, section.cabinets));

const locationTitle = document.getElementById("location-title");
const cabinetList = document.getElementById("cabinet-list");
const sectionNavList = document.querySelectorAll(".section-nav__item");

// first render
setLocationTitle("A");
cabinetMap.get("A").forEach(obj => createNewCabinet(obj));

sectionNavList.forEach(section => {
  section.addEventListener("click", () => {
    let sectionId;
    if (section.id === "section-a") sectionId = "A";
    else if (section.id === "section-b") sectionId = "B";
    else sectionId = "C";

    sectionNavList.forEach(el => el.classList.remove("item-selected"));
    section.classList.add("item-selected");

    setLocationTitle(sectionId);
    cabinetList.innerHTML = "";
    cabinetMap.get(sectionId).forEach(obj => createNewCabinet(obj));
  });
});

function setLocationTitle(sectionName) {
  locationTitle.innerText = `2층 - ${sectionName}`;
}

function createNewCabinet(cabinetObj) {
  const cabinet = document.createElement("div");
  const isFull = cabinetObj.status === "FULL" ? "full" : "available";
  cabinet.classList.add("cabinet", isFull, "flex-col");

  const cabiInfo = document.createElement("div");
  cabiInfo.classList.add("cabinet__info", "flex-row");
  const userImg = document.createElement("img");
  userImg.src = cabinetObj.status === "FULL" ? fullUserImg : availableUserImg;
  userImg.alt = "Personal Cabinet";
  userImg.className = "cabinet__info__personal";
  const cabiNum = document.createElement("p");
  cabiNum.className = "cabinet__username";
  cabiNum.innerText = cabinetObj.cabinetId;
  cabiInfo.appendChild(userImg);
  cabiInfo.appendChild(cabiNum);

  const cabiUser = document.createElement("p");
  cabiUser.className = "cabinet__username";
  cabiUser.innerText = cabinetObj.user !== null ? cabinetObj.user : "-";

  cabinet.appendChild(cabiInfo);
  cabinet.appendChild(cabiUser);
  cabinetList.appendChild(cabinet);
}