import {quotes} from "./quotes.js";
console.log(quotes);

const quotesField = document.querySelector('.quotesField');

if (quotesField) {
    new Typed(quotesField, {
      strings: quotes,
      loop: true,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 2000
    });
  }