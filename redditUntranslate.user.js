// ==UserScript==
// @name         reddit untranslate
// @namespace   Violentmonkey Scripts
// @version      0.1
// @description  remove translation parameter on reddit links
// @author       sayildiz
// @match        *://*.reddit.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  if (window.location.search.includes("tl=")) {
    const url = new URL(window.location.href);

    url.searchParams.delete("tl");

    window.location.replace(url.toString());
  }
})();
