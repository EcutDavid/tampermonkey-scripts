// ==UserScript==
// @name         Github
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enhances Github
// @author       You
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

async function assignReview(id) {
  const reviwersBtn = document.querySelector('#reviewers-select-menu summary');
  for (let i = 0; i < 3; i++) {
    reviwersBtn.click();
    await new Promise(res => setTimeout(() => res(), 2000));
  }
  const target = Array.from(document.querySelectorAll('.js-username')).find(d => d.innerText === id);
  console.log(target);
}

(async function () {

})();
