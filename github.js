// ==UserScript==
// @name         Github
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enhances Github
// @author       You
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  /*
    Enable Ctrl + caseID to nav PR tabs.
    Enable Ctrl + c/C to copy head branch name
  */
  var prTab = document.body.querySelectorAll('.tabnav-pr .tabnav-tab')
  if (prTab.length) {
    function KeyPress(e) {
      var evtobj = window.event ? event : e
      // 49-57 maps 1-9
      if (evtobj.keyCode >= 49 && evtobj.keyCode <= 57) {
        if (evtobj.ctrlKey) {
          var target = (evtobj.keyCode - 49)
          if (prTab.length > target) {
            prTab[target].click()
          }
        }
      }

      // 65 maps to a.
      if (evtobj.keyCode == (65 + 2)) {
        var headBranch = document.querySelector('.commit-ref.head-ref').innerText
        navigator.clipboard.writeText(headBranch)
      }

    }

    document.onkeydown = KeyPress
  }

  /*
    Other stuff
  */
})()
