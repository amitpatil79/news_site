/**
 * i18n – Internationalisation for The Daily Herald
 * Supported languages: English (en) and Marathi (mr)
 */
(function () {
  'use strict';

  var TRANSLATIONS = {
    en: {
      /* Navigation */
      nav_home:          'Home',
      nav_local:         'Local',
      nav_politics:      'Politics',
      nav_business:      'Business',
      nav_technology:    'Technology',
      nav_sports:        'Sports',
      nav_health:        'Health',
      nav_entertainment: 'Entertainment',
      nav_world:         'World',

      /* Header */
      tagline: 'Truth \u00B7 Accuracy \u00B7 Independence',

      /* Breaking ticker */
      breaking:         'Breaking',
      ticker_welcome:   'Welcome to our news site. Stay informed.',

      /* Sections */
      top_stories: 'Top Stories',
      latest_news: 'Latest News',

      /* Search */
      search_placeholder: 'Search articles\u2026',
      search_btn:         '\uD83D\uDD0D Search',

      /* Category labels (mirror of nav, used in filter buttons) */
      cat_all:           'All',
      cat_local:         'Local',
      cat_politics:      'Politics',
      cat_business:      'Business',
      cat_technology:    'Technology',
      cat_sports:        'Sports',
      cat_health:        'Health',
      cat_entertainment: 'Entertainment',
      cat_world:         'World',
      cat_science:       'Science',
      cat_other:         'Other',

      /* Sidebar */
      advertisement: 'Advertisement',
      watch_videos:  '\uD83D\uDCFA Watch Videos',

      /* Empty states */
      no_news:     'No news published yet.',
      no_articles: 'No articles found.',
      no_ads:      'No ads available.',
      no_videos:   'No videos available.',

      /* Article modal */
      by: 'By',

      /* Footer */
      footer_brand:        'The Daily Herald',
      footer_about:        'Your trusted, independent news source since 1985. Committed to factual, balanced journalism that serves the public interest.',
      footer_sections:     'Sections',
      footer_more:         'More',
      footer_contact:      'Contact',
      footer_contact_info: 'newsdesk@dailyherald.example<br>+1 (555) 000-1234<br>123 Press Avenue, News City, NC 12345',
      footer_rights:       'All rights reserved.',
      admin:               'Admin',
      admin_panel:         'Admin Panel'
    },

    mr: {
      /* Navigation */
      nav_home:          '\u092E\u0941\u0916\u094D\u092F\u092A\u0943\u0937\u094D\u0920',
      nav_local:         '\u0938\u094D\u0925\u093E\u0928\u093F\u0915',
      nav_politics:      '\u0930\u093E\u091C\u0915\u093E\u0930\u0923',
      nav_business:      '\u0935\u094D\u092F\u0935\u0938\u093E\u092F',
      nav_technology:    '\u0924\u0902\u0924\u094D\u0930\u091C\u094D\u091E\u093E\u0928',
      nav_sports:        '\u0915\u094D\u0930\u0940\u0921\u093E',
      nav_health:        '\u0906\u0930\u094B\u0917\u094D\u092F',
      nav_entertainment: '\u092E\u0928\u094B\u0930\u0902\u091C\u0928',
      nav_world:         '\u091C\u0917',

      /* Header */
      tagline: '\u0938\u0924\u094D\u092F \u00B7 \u0905\u091A\u0942\u0915\u0924\u093E \u00B7 \u0938\u094D\u0935\u093E\u0924\u0902\u0924\u094D\u0930\u094D\u092F',

      /* Breaking ticker */
      breaking:       '\u0924\u093E\u091C\u0940 \u092C\u093E\u0924\u092E\u0940',
      ticker_welcome: '\u0906\u092E\u091A\u094D\u092F\u093E \u092C\u093E\u0924\u092E\u0940 \u0938\u093E\u0907\u091F\u0935\u0930 \u0938\u094D\u0935\u093E\u0917\u0924 \u0906\u0939\u0947. \u092E\u093E\u0939\u093F\u0924\u0940\u092A\u0942\u0930\u094D\u0923 \u0930\u093E\u0939\u093E.',

      /* Sections */
      top_stories: '\u092E\u0941\u0916\u094D\u092F \u092C\u093E\u0924\u092E\u094D\u092F\u093E',
      latest_news: '\u0924\u093E\u091C\u094D\u092F\u093E \u092C\u093E\u0924\u092E\u094D\u092F\u093E',

      /* Search */
      search_placeholder: '\u0932\u0947\u0916 \u0936\u094B\u0927\u093E\u2026',
      search_btn:         '\uD83D\uDD0D \u0936\u094B\u0927\u093E',

      /* Category labels */
      cat_all:           '\u0938\u0930\u094D\u0935',
      cat_local:         '\u0938\u094D\u0925\u093E\u0928\u093F\u0915',
      cat_politics:      '\u0930\u093E\u091C\u0915\u093E\u0930\u0923',
      cat_business:      '\u0935\u094D\u092F\u0935\u0938\u093E\u092F',
      cat_technology:    '\u0924\u0902\u0924\u094D\u0930\u091C\u094D\u091E\u093E\u0928',
      cat_sports:        '\u0915\u094D\u0930\u0940\u0921\u093E',
      cat_health:        '\u0906\u0930\u094B\u0917\u094D\u092F',
      cat_entertainment: '\u092E\u0928\u094B\u0930\u0902\u091C\u0928',
      cat_world:         '\u091C\u0917',
      cat_science:       '\u0935\u093F\u091C\u094D\u091E\u093E\u0928',
      cat_other:         '\u0907\u0924\u0930',

      /* Sidebar */
      advertisement: '\u091C\u093E\u0939\u093F\u0930\u093E\u0924',
      watch_videos:  '\uD83D\uDCFA \u0935\u094D\u0939\u093F\u0921\u093F\u0913 \u092A\u0939\u093E',

      /* Empty states */
      no_news:     '\u0905\u0926\u094D\u092F\u093E\u092A \u0915\u094B\u0923\u0924\u094D\u092F\u093E\u0939\u0940 \u092C\u093E\u0924\u092E\u094D\u092F\u093E \u092A\u094D\u0930\u0915\u093E\u0936\u093F\u0924 \u0928\u093E\u0939\u0940\u0924.',
      no_articles: '\u0915\u094B\u0923\u0924\u0947\u0939\u0940 \u0932\u0947\u0916 \u0938\u093E\u092A\u0921\u0932\u0947 \u0928\u093E\u0939\u0940\u0924.',
      no_ads:      '\u0915\u094B\u0923\u0924\u094D\u092F\u093E\u0939\u0940 \u091C\u093E\u0939\u093F\u0930\u093E\u0924\u0940 \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u093E\u0939\u0940\u0924.',
      no_videos:   '\u0915\u094B\u0923\u0924\u0947\u0939\u0940 \u0935\u094D\u0939\u093F\u0921\u093F\u0913 \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u093E\u0939\u0940\u0924.',

      /* Article modal */
      by: '\u0926\u094D\u0935\u093E\u0930\u0947',

      /* Footer */
      footer_brand:        'The Daily Herald',
      footer_about:        '\u0967\u0967\u096E\u0967 \u092A\u093E\u0938\u0942\u0928 \u0906\u092A\u0932\u093E \u0935\u093F\u0936\u094D\u0935\u093E\u0938\u0942, \u0938\u094D\u0935\u0924\u0902\u0924\u094D\u0930 \u092C\u093E\u0924\u092E\u0940 \u0938\u094D\u0930\u094B\u0924. \u0938\u093E\u0930\u094D\u0935\u091C\u0928\u093F\u0915 \u0939\u093F\u0924\u093E\u0938\u093E\u0920\u0940 \u0924\u0925\u094D\u092F\u093E\u0924\u094D\u092E\u0915, \u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u092A\u0924\u094D\u0930\u0915\u093E\u0930\u093F\u0924\u0947\u0938\u093E\u0920\u0940 \u0935\u091A\u0928\u092C\u0926\u094D\u0927.',
      footer_sections:     '\u0935\u093F\u092D\u093E\u0917',
      footer_more:         '\u0905\u0927\u093F\u0915',
      footer_contact:      '\u0938\u0902\u092A\u0930\u094D\u0915',
      footer_contact_info: 'newsdesk@dailyherald.example<br>+1 (555) 000-1234<br>123 Press Avenue, News City, NC 12345',
      footer_rights:       '\u0938\u0930\u094D\u0935 \u0939\u0915\u094D\u0915 \u0930\u093E\u0916\u0940\u0935.',
      admin:               '\u092A\u094D\u0930\u0936\u093E\u0938\u0915',
      admin_panel:         '\u092A\u094D\u0930\u0936\u093E\u0938\u0915 \u092A\u0945\u0928\u0947\u0932'
    }
  };

  /* Category English key → i18n key */
  var CAT_KEY_MAP = {
    'All':           'cat_all',
    'Local':         'cat_local',
    'Politics':      'cat_politics',
    'Business':      'cat_business',
    'Technology':    'cat_technology',
    'Sports':        'cat_sports',
    'Health':        'cat_health',
    'Entertainment': 'cat_entertainment',
    'World':         'cat_world',
    'Science':       'cat_science',
    'Other':         'cat_other'
  };

  var currentLang = localStorage.getItem('ns_lang') || 'mr';

  function t(key) {
    var lang = TRANSLATIONS[currentLang];
    if (lang && lang[key] !== undefined) return lang[key];
    return (TRANSLATIONS.en[key] !== undefined) ? TRANSLATIONS.en[key] : key;
  }

  function tCategory(englishCat) {
    var key = CAT_KEY_MAP[englishCat];
    return key ? t(key) : englishCat;
  }

  function getLang() {
    return currentLang;
  }

  function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('ns_lang', lang);
    applyStaticTranslations();
    if (window.app && typeof window.app.refresh === 'function') {
      window.app.refresh();
    }
  }

  function applyStaticTranslations() {
    /* Translate elements marked with data-i18n */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = t(key);
      } else {
        el.textContent = t(key);
      }
    });

    /* Search placeholder needs special handling */
    var searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = t('search_placeholder');

    /* Highlight active language button */
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });

    /* Update <html lang> attribute */
    document.documentElement.lang = 'mr';
  }

  window.i18n = {
    t: t,
    tCategory: tCategory,
    getLang: getLang,
    setLang: setLang,
    applyStaticTranslations: applyStaticTranslations
  };
}());
