/* ============================================
   COMMON FUNCTIONS — main.js
   Shared utilities across all pages
   ============================================ */

(function () {
  'use strict';

  /**
   * Get bilingual text based on current language
   * @param {string} uz - Uzbek text
   * @param {string} en - English text
   * @returns {string}
   */
  function t(uz, en) {
    const lang = document.documentElement.getAttribute('data-lang') || 'uz';
    return lang === 'uz' ? uz : en;
  }

  /**
   * Create an element with attributes and children
   * @param {string} tag
   * @param {Object} attrs
   * @param  {...(string|Node)} children
   * @returns {HTMLElement}
   */
  function createElement(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(function ([key, value]) {
        if (key === 'className') {
          el.className = value;
        } else if (key.startsWith('on') && typeof value === 'function') {
          el.addEventListener(key.slice(2).toLowerCase(), value);
        } else {
          el.setAttribute(key, value);
        }
      });
    }
    children.forEach(function (child) {
      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        el.appendChild(child);
      }
    });
    return el;
  }

  /**
   * Load JSON data file
   * @param {string} path - relative path to JSON file
   * @returns {Promise<any>}
   */
  async function loadJSON(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return await response.json();
    } catch (e) {
      console.error('Failed to load ' + path + ':', e);
      return null;
    }
  }

  /**
   * Debounce function
   * @param {Function} fn
   * @param {number} delay
   * @returns {Function}
   */
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(this, args); }, delay);
    };
  }

  /**
   * Format chapter number with leading zero
   * @param {number} num
   * @returns {string}
   */
  function formatChapterNum(num) {
    return num < 10 ? '0' + num : '' + num;
  }

  /**
   * Smooth scroll to element
   * @param {string} selector
   */
  function scrollTo(selector) {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Expose API
  window.App = {
    t: t,
    createElement: createElement,
    loadJSON: loadJSON,
    debounce: debounce,
    formatChapterNum: formatChapterNum,
    scrollTo: scrollTo
  };
})();
