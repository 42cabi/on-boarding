import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Filter, LIST_SIZE } from "../constant";
import { getMessages } from "../api/messages";

const ListPage = () => {
  const [items, setItems] = useState<object[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState(Filter.TO_EVERYONE);

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const res = await getMessages({ page, size: LIST_SIZE, category });
      setItems((items) => [...items, ...res.data.messages]);
      setPage((page) => page + 1);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <Link to="/send">덕담 보내러 가기</Link>
      <h1>덕담 보기</h1>
      <div>
        <button onClick={() => setCategory(Filter.TO_EVERYONE)}>
          To.everyone
        </button>
        <button onClick={() => setCategory(Filter.TO_ME)}>To.me</button>
        <button onClick={() => setCategory(Filter.FROM_ME)}>From.me</button>
      </div>
      <div>
        <div>리스트</div>
        {items.map((item: any, index) => (
          <div key={item.messageId}>
            <div>{item.senderName}</div>
            <div>{item.receiverName}</div>
            <div>{item.context}</div>
            <div>{item.imageUrl}</div>
          </div>
        ))}
      </div>
      <div onClick={fetchItems}>{isLoading ? `Loading...` : `더보기`}</div>
    </>
  );
};

export default ListPage;
