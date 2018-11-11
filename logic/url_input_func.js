const fetch = require('node-fetch');

export const getWebText = (url) => {
  fetch(url)
    .then(res => res.text())
    .then(body => console.log(body));
}