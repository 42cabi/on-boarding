const o1 = {
  0: { product: "감탄계 소금구이덮밥", qty: 4, price: 11000 },
  1: { product: "버티컬 마우스", qty: NaN, price: 420, mama_card: false },
  2: { product: "", qty: 100, price: 1200, mama_card: true },
  3: { product: "잼스25 짜장범벅", qty: 13 },
  4: { product: "구구치킨 닭강정 중", price: 8000 },
  5: { product: "코카콜라 제로", qty: 4, price: 1200 },
};

// 위와 같은 객체를 받아서 제품명, 총 지출이 포함된 배열(product와 total (qty * price )를 가지고 있는 object의 배열 === 결과와 동일한 배열)을 반환하는 함수를 작성하라.

const isPosNum = (value) =>
  typeof value === "number" && !isNaN(value) && value > 0 && isFinite(value);

const func = (obj) => {
  const result = [];
  Object.values(obj).forEach((item) => {
    if (!item.hasOwnProperty("product") || item.product === "") return;
    if (!item.hasOwnProperty("qty") || !isPosNum(item.qty)) return;
    if (!item.hasOwnProperty("price") || !isPosNum(item.price)) return;
    item.total = item.qty * item.price;
    result.push({ product: item.product, total: item.total });
  });
  return result;
};

// test
const result = func(o1);
console.log(result);
