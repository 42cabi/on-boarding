import { CabinetDatas } from "./data.js";

const sectionA = document.getElementById('left-nav-section__A');
const sectionB = document.getElementById('left-nav-section__B');
const sectionC = document.getElementById('left-nav-section__C');
const sections = [sectionA, sectionB, sectionC];
let currentSectionIndex = 0;  // 현재 선택된 섹션의 인덱스

const mainCabiContainer = document.querySelector('.main-cabi__box-container');
const mainCabiPlace = document.querySelector('.main-cabi__place');
const prevButton = document.getElementById('prev-section');
const nextButton = document.getElementById('next-section');

// 버튼의 활성화/비활성화 상태를 업데이트
function updateNavigationButtons() {
    prevButton.disabled = currentSectionIndex === 0;
    nextButton.disabled = currentSectionIndex === sections.length - 1;
}

// 섹션 클릭 시 섹션 데이터를 로드하고 UI를 업데이트
function handleClickSection(event) {
    // 선택한 섹션의 ID를 가져옴
    const sectionId = event.target.id.split('__')[1];
    currentSectionIndex = sections.findIndex(section => section.id === event.target.id);

    // 선택한 섹션에만 select css 적용
    sections.forEach(section => section.classList.remove('left-nav--select'));
    event.target.classList.add('left-nav--select');
    
    // 해당 섹션의 데이터를 가져옴
    const sectionData = CabinetDatas.find(data => data.section === sectionId);
    
    // main-cabi__place 텍스트 업데이트
    mainCabiPlace.textContent = `2층 - ${sectionId}`;
    
    // 기존 박스들 제거
    mainCabiContainer.innerHTML = '';
    
    // 새로운 박스들 추가
    sectionData.cabinets.forEach(cabinet => {

        const box = document.createElement('div');
        if (cabinet.status === 'AVAILABLE')
            box.className = 'box--available';
        else if (cabinet.status === 'FULL')
            box.className = 'box--full'
        
        const boxTop = document.createElement('div');
        boxTop.className = 'box-top';
        
        const userIcon = document.createElement('img');
        if (cabinet.status === 'AVAILABLE')
            userIcon.src = 'src/assets/images/user.svg';
        else if (cabinet.status === 'FULL')
            userIcon.src = 'src/assets/images/user_full.svg';
        
        const cabinetId = document.createElement('p');
        cabinetId.textContent = cabinet.cabinetId;
        
        boxTop.appendChild(userIcon);
        boxTop.appendChild(cabinetId);
        
        const cabinetInfo = document.createElement('p');
        cabinetInfo.textContent = cabinet.user ? cabinet.user : '-';
        
        box.appendChild(boxTop);
        box.appendChild(cabinetInfo);
        
        mainCabiContainer.appendChild(box);
    });

    updateNavigationButtons();
}

// 좌우 버튼 클릭 시 섹션 이동 처리
function handlePrevSection() {
    if (currentSectionIndex > 0) {
        sections[currentSectionIndex - 1].click();
    }
}

function handleNextSection() {
    if (currentSectionIndex < sections.length - 1) {
        sections[currentSectionIndex + 1].click();
    }
}

prevButton.addEventListener('click', handlePrevSection);
nextButton.addEventListener('click', handleNextSection);

// 처음 페이지 로드 시 A 섹션 디폴트로
document.addEventListener('DOMContentLoaded', () => {
    sectionA.click();
});

sectionA.addEventListener('click', handleClickSection);
sectionB.addEventListener('click', handleClickSection);
sectionC.addEventListener('click', handleClickSection);