import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// 각 문자가 나타나는 애니메이션 (투명도와 위치 변경)
const reveal = keyframes`
  from { 
    opacity: 0; 
    /* transform: translateY(-10px); */
  }
  to { 
    opacity: 0.5; 
    /* transform: translateY(0); */
  }
`;

// 문자가 모두 타이핑된 후 사라지는 애니메이션
const fadeOut = keyframes`
  from { opacity: 0.5; }
  to { opacity: 0; }
`;

// 문장 컨테이너 스타일
const SentenceContainer = styled.div<{
  top: number;
  left: number;
  animationDuration: number;
}>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 0.5;
  animation: ${fadeOut} ${({ animationDuration }) => animationDuration + 2}s
    forwards;
`;

// 각 문자 스타일
const Char = styled.span<{ delay: number }>`
  opacity: 0;
  animation: ${reveal} 0.3s forwards;
  animation-delay: ${({ delay }) => delay}s;
  color: #fd0000;
  font-size: 3rem;

  font-family: "Horror", sans-serif; /* Horror 폰트 적용 */
`;

// TypingSentence 컴포넌트 인터페이스
interface TypingSentenceProps {
  text: string;
}

const TypingSentence: React.FC<TypingSentenceProps> = ({ text }) => {
  const [key, setKey] = useState<number>(0);

  // 랜덤 위치 생성 함수
  const getRandomPosition = () => {
    const top = Math.random() * 80 + 10; // 화면 상단과 하단에 10% 여유
    const left = Math.random() * 80 + 10; // 화면 좌우에 10% 여유
    return { top, left };
  };

  const [position, setPosition] = useState<{ top: number; left: number }>(
    getRandomPosition()
  );

  // 애니메이션 지속 시간 (타이핑 속도 및 사라지는 시간 조절)
  const animationDuration = text.length * 0.3 + 2; // 타이핑 시간 + 사라지는 시간

  useEffect(() => {
    // 애니메이션이 끝난 후 다시 시작
    const timer = setTimeout(() => {
      setPosition(getRandomPosition());
      setKey((prevKey) => prevKey + 1); // 키 변경을 통해 컴포넌트 재렌더링
    }, animationDuration * 1000); // 타이핑 + 사라지는 시간

    return () => clearTimeout(timer);
  }, [key, animationDuration]);

  return (
    <SentenceContainer
      key={key}
      top={position.top}
      left={position.left}
      animationDuration={animationDuration}
    >
      {text.split("").map((char, index) => (
        <Char key={index} delay={index * 0.3}>
          {char}
        </Char>
      ))}
    </SentenceContainer>
  );
};

export default TypingSentence;
