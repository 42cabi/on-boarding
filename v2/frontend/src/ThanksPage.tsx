import styled from "styled-components";
import dropdownChevronIcon from "./svg/dropdownChevron.svg";
import { useEffect, useState } from "react";
import ThankToBlock, { IItemUsageLog } from "./components/ThankToBlock";
import MultiToggle from "./components/MultiToggle";
import axios from "axios";
import { useNavigate } from "react-router";
import { TitleStyled, UrlSectionStyled } from "./HomePage";

export type ToggleOption = "All" | "Send" | "Receive";

export interface IThanksProps {
  userId: string;
  page: number;
  size: number;
}

const ThanksPage = () => {
  const [isMoreBtnLoading, setIsMoreBtnLoading] = useState<boolean>(false);
  const [data, setData] = useState<IItemUsageLog[]>([]);
  const [selected, setSelected] = useState<ToggleOption>("All");
  const [page, setPage] = useState<number>(-1);
  const [thankLength, setThankLength] = useState<number>(0);

  let size = 5;
  const navigate = useNavigate();

  const getUrl = (option: ToggleOption, page: number, size: number) => {
    switch (option) {
      case "Send":
        return `http://localhost:8080/messages/outbox?&page=${page}&size=${size}`;
      case "Receive":
        return `http://localhost:8080/messages/inbox?&page=${page}&size=${size}`;
      default:
        return `http://localhost:8080/messages?&page=${page}&size=${size}`;
    }
  };

  const handleMoreButtonClick = async () => {
    try {
      const url = getUrl(selected, page + 1, size);
      setIsMoreBtnLoading(true);
      const res = await axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        })
        .then((res) => {
          setData((prevData) => [...prevData, ...res.data.messages]);
          setPage(page + 1);
          setThankLength(res.data.totalLength);
        });
    } catch (error: any) {
      alert(error.response.data.message);
    } finally {
      setIsMoreBtnLoading(false);
    }
  };

  const handleToggleChange = async (selected: ToggleOption) => {
    try {
      const url = getUrl(selected, 0, size);

      const res = await axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          withCredentials: true,
        })
        .then((res) => {
          setData(res.data.messages);
          setThankLength(res.data.totalLength);
          setPage(0);
        });
    } catch (error: any) {}
  };

  useEffect(() => {
    handleMoreButtonClick();
  }, []);

  return (
    <WrapperStyled>
      <UrlSectionStyled onClick={() => navigate("/home")}>
        덕담 보내러가기
      </UrlSectionStyled>
      <TitleStyled>덕담's</TitleStyled>

      <ThanksBoxStyled>
        <ToggleContainerStyled>
          <MultiToggle
            selected={selected}
            setSelected={setSelected}
            handleToggleChange={handleToggleChange}
          />
        </ToggleContainerStyled>
        {data.map((info, index) => (
          <ThankToBlock key={index} info={info} />
        ))}
      </ThanksBoxStyled>

      {thankLength > (page + 1) * size && (
        <ButtonContainerStyled onClick={() => handleMoreButtonClick()}>
          <MoreButtonStyled $isMoreBtnLoading={isMoreBtnLoading}>
            {isMoreBtnLoading ? (
              <span>Loading...</span>
            ) : (
              <>
                더보기
                <ImageStyled>
                  <img src={dropdownChevronIcon} alt="Dropdown Chevron" />
                </ImageStyled>
              </>
            )}
          </MoreButtonStyled>
        </ButtonContainerStyled>
      )}
    </WrapperStyled>
  );
};

export default ThanksPage;

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;
`;

const ThanksBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
`;

const ButtonContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 18px;
    margin-bottom: 2px;
    width: 24px;
    height: 24px;
  }
`;

const MoreButtonStyled = styled.button<{
  $isMoreBtnLoading: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  margin: 20px auto;
  font-weight: 400;
  border: 1px solid var(--sys-main-color);
  border-radius: 30px;
  background-color: var(--white);
  color: var(--sys-main-color);
  position: relative;
  padding: 0 10px;

  svg {
    margin-left: 18px;
    margin-bottom: -2px;
    width: 13px;
    height: 9px;
  }
`;

const ToggleContainerStyled = styled.div``;
