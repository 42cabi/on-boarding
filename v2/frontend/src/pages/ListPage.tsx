import { useCallback, useEffect, useState } from "react";
import { Filter, LIST_SIZE } from "../constant";
import { getMessages } from "../api/messages";
import styled from "styled-components";
import MessageList from "../components/ListPage/MessageList";
import Message from "../components/ListPage/ListInterfaces";
import CategoryButtons from "../components/ListPage/CategoryButtons";
import ListTopNav from "../components/ListPage/ListTopNav";

const ListPage = () => {
  const [items, setItems] = useState<Message[]>([]);
  const [nextPage, setNextPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(Filter.TO_EVERYONE);
  const [isLast, setIsLast] = useState(false);

  const fetchItems = useCallback(async () => {
    if (isLast || isLoading) return;

    try {
      setIsLoading(true);
      const res = await getMessages({
        page: nextPage,
        size: LIST_SIZE,
        category,
      });

      if (res.data.messages.length === 0) {
        setIsLast(true);
        return;
      }

      setItems((prev) =>
        nextPage === 0 ? res.data.messages : [...prev, ...res.data.messages]
      );
      setNextPage(res.data.currentPage + 1);
      setIsLast(res.data.currentPage >= res.data.totalLength);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setIsLoading(false);
    }
  }, [category, nextPage]);

  const handleChangedCategory = (category: Filter) => {
    setCategory(category);
    setNextPage(0);
    setItems([]);
    setIsLast(false);
  };

  useEffect(() => {
    fetchItems();
  }, [category]);

  return (
    <div>
      <ListTopNav />

      <header>
        <h1>덕담 보기</h1>
      </header>

      <section>
        {/* <div>
        <div>카테고리: {category}</div>
        <div>페이지: {nextPage}</div>
        </div> */}
        <CategoryButtons
          currentCategory={category}
          handleChangedCategory={handleChangedCategory}
        />
        <MessageList items={items} isLoading={isLoading} />
        <MoreButtonStyled onClick={fetchItems} $isLast={isLast}>
          {isLoading ? `Loading...` : `더보기`}{" "}
        </MoreButtonStyled>
      </section>
    </div>
  );
};

const MoreButtonStyled = styled.button<{ $isLast: boolean }>`
  display: ${(props) => (props.$isLast ? "none" : "block")};
`;

export default ListPage;
