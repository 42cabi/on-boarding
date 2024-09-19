let o1 = {
    0: { product: '감탄계 소금구이덮밥', qty: 4, price: 11000 },
    '1': { product: '버티컬 마우스', qty: NaN, price: 420, mama_card: false },
    2: { product: '', qty: 100, price: 1200, mama_card: true },
    3: { product: '잼스25 짜장범벅', qty: 13 },
    4: { product: '구구치킨 닭강정 중', price: 8000 },
    5: { product: '코카콜라 제로', qty: 4, price: 1200 }
  };
  
  function func(o1) {
      return Object.entries(o1)
          .filter(([key, item]) => {
              // 오류 조건 체크
              return item.product && item.product.trim() !== '' &&
                     typeof item.qty !== 'undefined' && isFinite(item.qty) &&
                     typeof item.price !== 'undefined';
          })
          .reduce((acc, [key, item]) => {
              // 유효한 항목만 처리하여 새로운 객체로 반환
              acc[key] = { product: item.product, total: item.qty * item.price };
              return acc;
          }, {});
  }
  
  let result = func(o1);
  console.log(result);
  