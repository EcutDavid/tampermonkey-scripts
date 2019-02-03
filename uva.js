// ==UserScript==
// @name         UVA Online Judge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enhances UVA
// @author       You
// @match        https://uva.onlinejudge.org/index.php?*
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  /*
    Preselect C++ 11
  */
  var options = document.querySelectorAll('table input[name="language"][value="5"]')
  if (options.length > 0) {
    options[0].click()
  }

  /*
    Other stuff
  */
})()