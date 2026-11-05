/* ============================================
   SIDEBAR NAVIGATION — nav.js
   Mobile hamburger menu, active page highlight
   ============================================ */

(function () {
  'use strict';

  /**
   * Initialize sidebar navigation
   */
  function initNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (!menuToggle || !sidebar) return;

    // Toggle sidebar on hamburger click
    menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded',
        sidebar.classList.contains('open') ? 'true' : 'false'
      );
    });

    // Close sidebar on overlay click
    if (overlay) {
      overlay.addEventListener('click', function () {
        closeSidebar();
      });
    }

    // Close sidebar on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
      }
    });

    // Close sidebar when clicking a link (mobile)
    const sidebarLinks = sidebar.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
          closeSidebar();
        }
      });
    });

    // Highlight active page
    highlightActivePage();
  }

  /**
   * Close sidebar (mobile)
   */
  function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuToggle = document.getElementById('menu-toggle');

    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }

  /**
   * Highlight the current page in sidebar
   */
  function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    sidebarLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', initNav);

  // Expose API
  window.NavManager = {
    close: closeSidebar,
    highlightActive: highlightActivePage
  };
})();
