/**
 * GLOWMEDIX CORE JAVASCRIPT
 * Brand: GlowMedix ("Discover Better Beauty.")
 * Production-ready, zero dependencies, vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initSearchModal();
  initNewsletterForm();
  initTableOfContents();
  initAffiliateTracking();
});

/**
 * 1. Sticky Header elevation on scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Navigation Drawer & Overlay
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Close when clicking mobile nav anchor links
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/**
 * 3. Search Modal Dialog
 */
function initSearchModal() {
  const openButtons = document.querySelectorAll('.search-toggle-btn');
  const modal = document.querySelector('.search-modal-overlay');
  const closeBtn = document.querySelector('.search-modal-close');
  const searchInput = document.querySelector('.search-modal-card input');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 100);
  };

  const closeModal = () => {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
}

/**
 * 4. Newsletter Subscription Form Handler
 * Validates real email format and provides genuine feedback
 */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    const input = form.querySelector('.newsletter-input');
    const notice = form.parentElement.querySelector('.newsletter-notice');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!input) return;

      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        showNotice(notice, 'Please provide a valid email address.', 'is-error');
        input.focus();
        return;
      }

      // Check if endpoint is configured or if running in local static demo
      const endpoint = form.getAttribute('action');
      if (endpoint && endpoint !== '#' && !endpoint.includes('javascript:')) {
        // Send real fetch request to WordPress admin-ajax or ESP webhook
        const formData = new FormData(form);
        fetch(endpoint, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            showNotice(notice, data.data?.message || 'Thank you! You are now subscribed to GlowMedix beauty edits.', 'is-success');
            input.value = '';
          } else {
            showNotice(notice, data.data?.message || 'Subscription failed. Please check your email and try again.', 'is-error');
          }
        })
        .catch(() => {
          showNotice(notice, 'Notice: Subscription endpoint unreachable. No message or subscription was dispatched without an active backend.', 'is-error');
          input.value = '';
        });
      } else {
        // Form not yet linked to an active backend/ESP in static mode
        showNotice(notice, 'Notice: Static deployment mode. Newsletter backend is not connected. Inquiries may be directed to help@glowmedix.com.', 'is-info');
        input.value = '';
      }
    });
  });

  function showNotice(el, msg, type) {
    if (!el) return;
    el.className = `newsletter-notice ${type}`;
    el.textContent = msg;
    el.style.display = 'block';
  }
}

/**
 * 5. Dynamic Table of Contents (for Editorial Articles)
 */
function initTableOfContents() {
  const articleContent = document.querySelector('.article-content');
  const tocList = document.querySelector('.toc-list');
  if (!articleContent || !tocList) return;

  const headings = articleContent.querySelectorAll('h2, h3');
  if (headings.length === 0) {
    const tocBox = document.querySelector('.table-of-contents');
    if (tocBox) tocBox.style.display = 'none';
    return;
  }

  // Clear any placeholder
  tocList.innerHTML = '';

  headings.forEach((heading, idx) => {
    let id = heading.id;
    if (!id) {
      id = 'heading-' + idx + '-' + heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      heading.id = id;
    }

    const li = document.createElement('li');
    li.className = heading.tagName.toLowerCase() === 'h3' ? 'toc-sub-item' : 'toc-main-item';
    const a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = heading.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  });
}

/**
 * 6. Affiliate Link Rel & Outbound Click Tracking Helper
 */
function initAffiliateTracking() {
  const affiliateLinks = document.querySelectorAll('a[rel*="sponsored"], .btn-affiliate');
  affiliateLinks.forEach(link => {
    link.addEventListener('click', () => {
      const destination = link.getAttribute('href');
      const productName = link.getAttribute('data-product') || link.innerText;
      
      // Dispatch custom event for Google Analytics / GTM if present
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'affiliate_click', {
          event_category: 'Affiliate',
          event_label: productName,
          transport_type: 'beacon'
        });
      }
    });
  });
}
