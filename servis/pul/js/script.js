"use strict";

for (let i = 0; i < 1; i++) {
  let pul = +prompt("Summani kiriting masalan...", "100");
  if (pul != "" && pul != null && pul != 0 && !isNaN(pul)) {
    let p = pul * 12357.2;
    alert(`${p}`);
  } else {
    i--;
  }
}

// const axios = require('axios');

// // API ga so'rov yuborish uchun funksiya
// async function getPulAyirish(currency) {
//   try {
//     const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${currency}`);
//     const data = response.data;
//     const rate = data.rates[currency];
//     return rate;
//   } catch (error) {
//     console.error('Xatolik yuz berdi:', error);
//     return null;
//   }
// }

// // API dan pul ayirish ma'lumotlarini olish
// getPulAyirish('EUR')
//   .then(rate => {
//     if (rate !== null) {
//       console.log('1 USD', rate, 'EUR ga teng');
//     }
//   });
