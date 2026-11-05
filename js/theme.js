/* ============================================
   THEME TOGGLE — theme.js
   Dark/Light mode switch
   Default: Light (no auto-detection)
   Storage: localStorage key 'theme'
   Attribute: data-theme on <html>
   ============================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'theme';
  const DEFAULT_THEME = 'light';
  const SUPPORTED_THEMES = ['light', 'dark'];

  /**
   * Get saved theme or default
   */
  function getSavedTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_THEMES.includes(saved)) {
        return saved;
      }
    } catch (e) {
      // localStorage unavailable
    }
    return DEFAULT_THEME;
  }

  /**
   * Apply theme to document
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update toggle button icon (Lucide renders <svg> inside <i>)
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      const moonIcon = toggleBtn.querySelector('.icon-moon');
      const sunIcon = toggleBtn.querySelector('.icon-sun');
      if (moonIcon && sunIcon) {
        if (theme === 'dark') {
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'inline-flex';
        } else {
          moonIcon.style.display = 'inline-flex';
          sunIcon.style.display = 'none';
        }
      }
    }

    // Save preference
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // localStorage unavailable
    }
  }

  /**
   * Toggle between light and dark
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
  }

  /**
   * Get current theme
   */
  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
  }

  // Apply saved theme immediately (before DOM ready, prevents flash)
  applyTheme(getSavedTheme());

  // Initialize toggle button when DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    // Re-apply to ensure icon state is correct
    applyTheme(getCurrentTheme());
  });

  // Expose API
  window.ThemeManager = {
    toggle: toggleTheme,
    get: getCurrentTheme,
    set: applyTheme
  };
})();
