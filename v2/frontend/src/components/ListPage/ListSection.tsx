import { useState } from "react";
import { Filter, LIST_SIZE } from "../../constant";
import Message from "./ListInterfaces";
import CategoryButtons from "./section/CategoryButtons";
import MessageList from "./section/MessageList";
import MoreButtons from "./section/MoreButtons";
import { getMessages } from "../../api/messages";
import { useLoaderData } from "react-router";

const ListSection = () => {
  const loaderData = useLoaderData();
  const [items, setItems] = useState<Message[]>(loaderData.data.messages);
  const [nextPage, setNextPage] = useState(loaderData.data.currentPage + 1);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(Filter.TO_EVERYONE);
  const [isLast, setIsLast] = useState(false);

  const fetchItems = async () => {
    if (isLast || isLoading) return;

    try {
      setIsLoading(true);
      const res = await getMessages({
        page: nextPage,
        size: LIST_SIZE,
        category,
      });

      setItems((prev) => [...prev, ...res.data.messages]);
      setNextPage(res.data.currentPage + 1);
      setIsLast(res.data.currentPage + 1 >= res.data.totalLength);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategoryItems = async (newCategory: Filter) => {
    try {
      setIsLoading(true);
      const res = await getMessages({
        page: 0,
        size: LIST_SIZE,
        category: newCategory,
      });

      setItems(res.data.messages);
      setNextPage(res.data.currentPage + 1);
      setIsLast(res.data.currentPage + 1 >= res.data.totalLength);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangedCategory = (newCategory: Filter) => {
    setCategory(newCategory);
    fetchCategoryItems(newCategory);
  };

  return (
    <>
      <CategoryButtons
        currentCategory={category}
        handleChangedCategory={handleChangedCategory}
      />
      <MessageList items={items} isLoading={isLoading} />
      <MoreButtons
        isLoading={isLoading}
        isLast={isLast}
        fetchItems={fetchItems}
      />
    </>
  );
};

export default ListSection;
