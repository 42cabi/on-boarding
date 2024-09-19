import React from 'react';
import styled from 'styled-components';
import leftImg from './assets/images/left_img.svg';
import logoImg from './assets/images/logo.svg';
import './App.css'

function App() {
  return (
      <LoginPageStyled>
        <LoginLeftStyled className="login-page--left">
          <div>
            <p>42서울 캐비닛 서비스</p>
            <p style={{ color: 'var(--sub-color)' }}>여러분의 일상을 가볍게</p>
          </div>
          <LoginImgStyled>
            <img src={leftImg} alt="cabi-login-img"/>
          </LoginImgStyled>
          <div>
            <p><span style={{ color: 'var(--main-color)' }}>Cabi</span>로</p>
            <p>일상의 무게를 덜어보세요.</p>
          </div>
        </LoginLeftStyled>
        <LoginRightStyled className="login-page--right">
          <LoginModal>
            <img src={logoImg} alt="cabi-logo"/>
            <div>
              <h1>Cabi</h1>
              <p>여러분의 일상을 가볍게</p>
            </div>
            <LoginBtn>L O G I N</LoginBtn>
          </LoginModal>
        </LoginRightStyled>
      </LoginPageStyled>
  )
}

const LoginPageStyled = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoginLeftStyled = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-left: 7%;

  p {
    font-size: 32px;
    font-weight: 700;
    line-height: 46.34px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const LoginImgStyled = styled.div`
  margin: 40px 0;
`;

const LoginRightStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;
  background-color: var(--main-color);

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const LoginModal = styled.div`
  width: 350px;
        height: 500px;
        background-color: white;
        border-radius: 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 85px 0;
        box-sizing: border-box;

        box-shadow: 10px 10px 40px 0px var(--box-shadow-color);

        img {
            width: 70px;
            height: 70px;
        }

        h1 {
            font-size: 40px;
            font-weight: 400;
            letter-spacing: -0.02em;
            text-align: center;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            color: var(--sub-color);

        }
`;

const LoginBtn = styled.button`
  width: 200px;
  height: 60px;
  background-color: var(--main-color);
  color: white;
  border-radius: 5px;
  
  cursor: pointer;
`;

export default App
