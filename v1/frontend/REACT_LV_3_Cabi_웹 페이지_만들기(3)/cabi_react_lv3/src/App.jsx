import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import '@/assets/css/global.css';
import CabinetSection from '@/components/CabinetSection.jsx';

function App() {
  const [floorData, setFloorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [floorNumber, setFloorNumber] = useState(2);  // 기본으로 2층을 로드
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);  // 섹션 인덱스 관리

  const fetchFloorData = async (floorNumber) => {
    const floor = floorNumber - 2;
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/${floor}`);
      setFloorData(response.data);
      setCurrentSectionIndex(0);  // 층이 변경되면 섹션 인덱스를 초기화
    } catch (error) {
      setError('데이터를 불러오는 데 실패했습니다.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // 섹션 이동 함수
  const handleNextSection = () => {
    if (currentSectionIndex < floorData.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handlePrevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  useEffect(() => {
    fetchFloorData(floorNumber);
  }, [floorNumber]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!floorData) return <p>데이터가 없습니다.</p>;

  const sections = floorData.sections;

  return (
    <>
    <TopNavStyled>
      <TopNavLeftStyled>
        <img src="src/assets/images/logo.svg" alt="Cabi Logo"/>
        <p>Cabi</p>
      </TopNavLeftStyled>
      <TopNavRightStyled>
        <img src="src/assets/images/profile.svg" alt="profile icon"/>
        <img src="src/assets/images/package.svg" alt="package icon"/>
      </TopNavRightStyled>
    </TopNavStyled>
    <MainPageStyled>
      <LeftNavStyled>
        <LeftNavFloorStyled>
          <ul>
            <li>Home</li>
            <LiSelectStyled onClick={() => setFloorNumber(2)} selected={floorNumber === 2}>2층</LiSelectStyled>
            <LiSelectStyled onClick={() => setFloorNumber(3)} selected={floorNumber === 3}>3층</LiSelectStyled>
            <li>5층</li>
          </ul>
        </LeftNavFloorStyled>
        <LeftNavSectionStyled>
          <ul>
            {sections.map((section, index) => (
              <LiSelectStyled key={section.section} selected={index === currentSectionIndex}
                onClick={() => setCurrentSectionIndex(index)}>
                {section.section}
              </LiSelectStyled>
            ))}
          </ul>
        </LeftNavSectionStyled>
      </LeftNavStyled>
      <MainCabinetStyled>
        <SectionNavigationStyled>
          <SectionBtnStyled id="prev-section" onClick={handlePrevSection} disabled={currentSectionIndex === 0}>◀</SectionBtnStyled>
          <CurrentPlaceStyled className="main-cabi__place">
            {floorNumber}층 - {sections[currentSectionIndex]?.section}
          </CurrentPlaceStyled>
          <SectionBtnStyled id="next-section" onClick={handleNextSection} disabled={currentSectionIndex === sections.length - 1}>▶</SectionBtnStyled>
        </SectionNavigationStyled>
        <CabinetSection section={sections[currentSectionIndex]} />
      </MainCabinetStyled>
    </MainPageStyled>

    <BottomNavStyled>
      <ul>
        <li>Home</li>
        <LiSelectStyled onClick={() => setFloorNumber(2)} selected={floorNumber === 2}>2층</LiSelectStyled>
        <LiSelectStyled onClick={() => setFloorNumber(3)} selected={floorNumber === 3}>3층</LiSelectStyled>
        <li>5층</li>
      </ul>
    </BottomNavStyled>
    </>
  )
}

const TopNavStyled = styled.nav`
  background-color: var(--main-color);
  height: 55px;
  width: calc(100% - 4%);
  padding: 0 2%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopNavLeftStyled = styled.div`
  color: white;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 30px;
        height: 30px;
    }

    p {
        font-family: "Do Hyeon";
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        text-align: left;
        padding-left: 20px;
    }
`;

const TopNavRightStyled = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 27px;
    height: 27px;
    cursor: pointer;
  }
`;

const MainPageStyled = styled.div`
  display: flex;
  grid-template-rows: auto 1fr;
  height: calc(100vh - 55px);
`;

const LeftNavStyled = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 1;

  li {
      align-content: center;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      color: var(--text-color);

      cursor: pointer;
      border-radius: 10px;
  }

  li:hover {
  background-color: var(--main-color);
  color: white !important;
  }

  @media all and (min-width: 769px) {
    display: flex;
  }

  @media all and (max-width: 768px) {
    display: none;
  }
`;

const LeftNavFloorStyled = styled.nav`
  display: flex;
  justify-content: center;

  width: 90px;
  height: 100%;
  padding: 30px 10px;
  border-right: 1px solid var(--line-color);

  li {
      width: 70px;
      height: 48px;
      margin-bottom: 40%;
      text-align: center;
  }
`;

const LiSelectStyled = styled.li`
  background-color: ${({ selected }) => (selected ? 'var(--main-color)' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : 'var(--text-color)')} !important;
`;

const LeftNavSectionStyled = styled.section`
  min-width: 240px;
  height: 100%;
  padding: 30px 10px;
  border-right: 1px solid var(--line-color);

  li {
      width: 220px;
      height: 40px;
      margin: 5px 0;
      text-align: left;
      padding-left: 20px;
  }
`;

const MainCabinetStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CurrentPlaceStyled = styled.div`
  color: var(--text-color);
  padding: 30px 0;

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const SectionNavigationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: relative;
  height: 12%;
`;

const SectionBtnStyled = styled.button`
  color: ${({ disabled }) => (disabled ? 'var(--line-color)' : 'var(--sub-color)')} !important;
  background-color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;

  @media all and (min-width: 769px) {
    display: none;
  }

  @media all and (max-width: 768px) {
    display: inline-block;
    padding: 30px;
  }
`;

const BottomNavStyled = styled.nav`
  height: 50px;
  border-top: 1px solid var(--line-color);
  display: flex;
  align-items: center;
  padding: 10px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  li {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    align-content: center;
    text-align: center;
    
    color: var(--text-color);

    width: 70px;
    height: 48px;

    cursor: pointer;
    border-radius: 10px;
  }

  li:hover {
    background-color: var(--main-color);
    color: white !important;
  }

  @media all and (min-width: 769px) {
    display: none;
  }

  @media all and (max-width: 768px) {
    display: flex;
  }
`;

export default App
