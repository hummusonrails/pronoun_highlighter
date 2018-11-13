const fetch = require('node-fetch');

export const getWebText = (url) => {
  fetch(url)
    .then(res => res.text())
    .then(res => stripHTML(res))
}

const stripHTML = (input) => {
  let strippedHTML = input.replace(/<[^>]+>/g, '');
  console.log(strippedHTML);
}

// CORS proxy server: https://cors-anywhere.herokuapp.com/ for localhost development testing