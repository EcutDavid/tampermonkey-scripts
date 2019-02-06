// ==UserScript==
// @name         ATcoder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enhances Atcoder
// @author       You
// @match        https://atcoder.jp/*
// @grant        none
// ==/UserScript==

(function () {
  /*
    Enable Ctrl + caseID to copy the test case.
  */

  var inputHeaders = []
  document.body.querySelectorAll('h3').forEach(d => {
    console.log(d.innerText)
    if (d.innerText.indexOf("Sample Input ") == 0) {
      inputHeaders.push(d)
    }
  })

  if (inputHeaders.length) {
    function KeyPress(e) {
      var evtobj = window.event ? event : e
      // 49-57 maps 1-9
      if (evtobj.keyCode < 49 || evtobj.keyCode > 57) return
      if (evtobj.ctrlKey) {
        var target = (evtobj.keyCode - 49)
        if (inputHeaders.length > target) {
          var text = inputHeaders[target].nextElementSibling.nextElementSibling.innerText
          navigator.clipboard.writeText(text)
        }
      }
    }

    document.onkeydown = KeyPress
  }

  /*
    Other stuff
  */
})()