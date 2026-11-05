/* ============================================
   LANGUAGE TOGGLE — lang.js
   UZ/EN bilingual switch
   Default: Uzbek (uz)
   Storage: localStorage key 'lang'
   Attribute: data-lang on <html>
   ============================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'uz';
  const SUPPORTED_LANGS = ['uz', 'en'];

  /**
   * Get saved language or default
   */
  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGS.includes(saved)) {
        return saved;
      }
    } catch (e) {
      // localStorage unavailable
    }
    return DEFAULT_LANG;
  }

  /**
   * Apply language to document
   */
  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);

    // Update toggle button text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      const label = toggleBtn.querySelector('.toggle-label');
      if (label) {
        label.textContent = lang === 'uz' ? 'EN' : 'UZ';
      }
    }

    // Save preference
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage unavailable
    }
  }

  /**
   * Toggle between UZ and EN
   */
  function toggleLang() {
    const current = document.documentElement.getAttribute('data-lang') || DEFAULT_LANG;
    const next = current === 'uz' ? 'en' : 'uz';
    applyLang(next);
  }

  /**
   * Get current language
   */
  function getCurrentLang() {
    return document.documentElement.getAttribute('data-lang') || DEFAULT_LANG;
  }

  // Apply saved language immediately (before DOM ready)
  applyLang(getSavedLang());

  // Initialize toggle button when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleLang);
    }

    // Re-apply to ensure button text is correct
    applyLang(getCurrentLang());
  });

  // Expose API
  window.LangManager = {
    toggle: toggleLang,
    get: getCurrentLang,
    set: applyLang
  };
})();
