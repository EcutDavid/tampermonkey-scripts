// ==UserScript==
// @name         Codeforces
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enhances codeforces
// @author       You
// @match        https://codeforces.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  /*
    Enable Ctrl + caseID to copy the test case.
  */
  var copiers = document.body.querySelectorAll('.input-output-copier')
  if (copiers.length) {
    function KeyPress(e) {
      var evtobj = window.event ? event : e
      // 49-57 maps 1-9
      if (evtobj.keyCode < 49 || evtobj.keyCode > 57) return
      if (evtobj.ctrlKey) {
        var target = (evtobj.keyCode - 49) * 2
        if (copiers.length > target) {
          copiers[target].click()
        }
      }
    }

    document.onkeydown = KeyPress
  }

  /*
    Other stuff
  */
})()
