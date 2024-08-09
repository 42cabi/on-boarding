/* object */
let o1 = {
  0: { product: '감탄계 소금구이덮밥', qty: 4, price: 11000 },
  '1': { 'product': '버티컬 마우스', qty: NaN, price: 420, mama_card: false },
  2: { product: '', qty: 100, price: 1200, mama_card: true },
  3: { product: '잼스25 짜장범벅', qty: 13 },
  4: { product: '구구치킨 닭강정 중', price: 8000 },
  5: { product: '코카콜라 제로', qty: 4, price: 1200 }
};

/* case 1 */
function getTotalInfo(obj) {
  let filteredObj = [];

  for (key in obj) {
    let totalPrice = obj[key].qty * obj[key].price;
    if (obj[key].product && totalPrice) {
      filteredObj.push({ product: obj[key].product, total: totalPrice });
    }
  }
  return filteredObj;
}

/* case 2 */
function getTotalInfo2(obj) {
  let objArr = Object.values(obj);
  let filteredObj = objArr
    .filter(objArr => {
      return objArr.product && objArr.qty && objArr.price;
    })
    .map(objArr => {
      return {
        product: objArr.product,
        total: objArr.qty * objArr.price
      };
    });
  return filteredObj;
}


/* get arr and print */
console.log('=============================[ object ]=============================');
console.log(o1);
console.log('=============================[ result ]=============================');
console.log("<< case 1 >>")
console.log(getTotalInfo(o1));
console.log("\n<< case 2 >>")
console.log(getTotalInfo2(o1));