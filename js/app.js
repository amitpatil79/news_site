/**
 * News Site - Public Frontend
 * Reads data from localStorage (populated by admin panel).
 */

(function () {
  'use strict';

  /* ── Default / seed data ─────────────────────────────────────── */
  const DEFAULT_NEWS = [
    {
      id: 'n1',
      title: 'City Council Approves Major Infrastructure Plan Worth $2 Billion',
      excerpt: 'The city council voted unanimously to approve the largest infrastructure investment in the city\'s history, covering roads, bridges and public transit.',
      content: '<p>The city council voted unanimously on Tuesday to approve the largest infrastructure investment in the city\'s history — a sweeping $2 billion plan that will fund road repairs, bridge renovations, and a significant expansion of the public transit network over the next decade.</p><p>"This is a transformative moment for our city," said Mayor Sarah Johnson at a press conference following the vote. "These investments will create thousands of jobs and improve the daily lives of every resident."</p><p>The plan includes $800 million for road resurfacing across all twelve districts, $600 million for the renovation of seventeen structurally deficient bridges, and $600 million for new bus rapid transit corridors connecting underserved neighborhoods to the city center.</p><p>Construction is expected to begin in the spring, with the first projects — road repairs in the downtown core — slated for completion within eighteen months.</p>',
      category: 'Local',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
      author: 'John Martinez',
      date: '2026-03-24',
      featured: true
    },
    {
      id: 'n2',
      title: 'Technology Giants Announce Joint AI Safety Initiative',
      excerpt: 'Five of the world\'s largest technology companies have pledged $500 million toward a new independent AI safety research institute.',
      content: '<p>Five of the world\'s largest technology companies announced on Monday a joint pledge of $500 million to establish an independent AI safety research institute, in what experts are calling the most significant voluntary commitment to responsible AI development to date.</p><p>The new institute, to be named the Global AI Safety Foundation, will focus on developing technical tools to detect and mitigate risks from advanced AI systems, including bias, misuse, and unintended behaviors.</p><p>"The development of AI is accelerating faster than our ability to understand its risks," said Dr. Elena Vasquez, who will serve as the Foundation\'s inaugural director. "This institute will bring together the world\'s leading researchers to change that."</p><p>The initiative has drawn praise from governments and civil society groups, though some critics argue that an industry-funded body cannot be truly independent.</p>',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
      author: 'Priya Sharma',
      date: '2026-03-23',
      featured: true
    },
    {
      id: 'n3',
      title: 'National Football League Expands to Two New Cities',
      excerpt: 'The NFL announced franchises in two new markets, marking the league\'s first expansion in over two decades.',
      content: '<p>The National Football League announced Wednesday that it will expand to two new cities — Portland, Oregon and San Antonio, Texas — in what will be the league\'s first expansion in more than twenty years. Both new teams are expected to begin play in the 2028 season.</p><p>The expansion was approved by a 30–2 owner vote at the league\'s annual meeting in Phoenix. Each new franchise fee is reported to be $3.5 billion, setting a new record for a professional sports franchise.</p><p>"These are two passionate football markets that have proven time and again their appetite for the game," said Commissioner Roger Ellis. "We\'re thrilled to welcome them into the NFL family."</p><p>Portland and San Antonio beat out bids from a dozen other cities including St. Louis, which lost its Rams franchise in 2016.</p>',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80',
      author: 'Mike Thompson',
      date: '2026-03-23',
      featured: false
    },
    {
      id: 'n4',
      title: 'New Study Links Mediterranean Diet to Reduced Dementia Risk',
      excerpt: 'Researchers from ten universities found that adhering closely to a Mediterranean diet can reduce the risk of dementia by up to 28 percent.',
      content: '<p>A landmark study involving more than 60,000 adults over fifteen years has found that closely following a Mediterranean diet — rich in vegetables, legumes, whole grains, fish, and olive oil — is associated with up to a 28 percent reduction in the risk of developing dementia.</p><p>The research, published in the journal Nature Medicine, was conducted by scientists from ten universities across Europe and North America and is the largest of its kind to date.</p><p>"What we eat has a profound impact on the health of our brains as we age," said lead researcher Dr. Amelia Chen of Oxford University. "These findings add powerful evidence to the case for dietary intervention as a public health strategy."</p><p>The study controlled for factors including physical activity, smoking, education level, and genetic predisposition to Alzheimer\'s disease.</p>',
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
      author: 'Lisa Park',
      date: '2026-03-22',
      featured: false
    },
    {
      id: 'n5',
      title: 'Stock Markets Hit Record Highs on Strong Jobs Data',
      excerpt: 'Wall Street surged to all-time records after government data showed employers added 380,000 jobs last month, far exceeding analyst expectations.',
      content: '<p>U.S. stock markets surged to record highs on Friday after a surprisingly strong jobs report showed employers added 380,000 positions last month — nearly double the 200,000 gain that analysts had anticipated — and the unemployment rate fell to 3.4 percent, its lowest level in fifty years.</p><p>The S&P 500 gained 1.8 percent to close at a new all-time high, while the Dow Jones Industrial Average rose 620 points. The Nasdaq Composite climbed 2.1 percent, led by a rally in technology shares.</p><p>"This is as good as it gets for the labor market," said Karen White, chief economist at First National Securities. "The breadth of job gains across sectors suggests this expansion has real staying power."</p><p>The Federal Reserve is expected to keep interest rates steady at its next meeting following the robust economic data.</p>',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      author: 'Robert Chen',
      date: '2026-03-22',
      featured: false
    },
    {
      id: 'n6',
      title: 'Renowned Filmmaker Announces Ambitious 10-Part Series on Climate Change',
      excerpt: 'Award-winning director Anna Kovacs will spend three years creating a documentary series exploring climate solutions from every continent.',
      content: '<p>Academy Award-winning director Anna Kovacs announced Monday that she will spend the next three years producing a ten-part documentary series that will travel to every continent to examine both the devastating impacts of climate change and the innovative solutions communities are developing in response.</p><p>"I want to tell the stories of the people on the frontlines — the farmers in Bangladesh adapting to rising seas, the engineers in Denmark building offshore wind farms, the Indigenous communities in the Amazon protecting the lungs of our planet," said Kovacs at a press conference in New York.</p><p>The series, tentatively titled Earth in Balance, will be distributed globally through a major streaming platform. Production begins this summer.</p>',
      category: 'Entertainment',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
      author: 'Emma Wilson',
      date: '2026-03-21',
      featured: false
    }
  ];

  const DEFAULT_ADS = [
    {
      id: 'a1',
      title: 'Premium Real Estate',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80',
      link: '#',
      position: 'sidebar'
    },
    {
      id: 'a2',
      title: 'Auto Insurance Quote',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80',
      link: '#',
      position: 'sidebar'
    },
    {
      id: 'a3',
      title: 'Travel the World',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      link: '#',
      position: 'header'
    }
  ];

  const DEFAULT_VIDEOS = [
    {
      id: 'v1',
      title: 'Breaking News: Global Summit on Climate Policy',
      description: 'World leaders gather to discuss new emissions targets.',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 'v2',
      title: 'City Mayor Press Conference – Infrastructure Plan',
      description: 'Live coverage of the mayor\'s announcement.',
      youtubeId: 'ysz5S6PUM-U'
    }
  ];

  /* ── i18n helper (graceful fallback if i18n.js not loaded) ──── */
  function t(key) {
    return (window.i18n && window.i18n.t) ? window.i18n.t(key) : key;
  }
  function tCat(cat) {
    return (window.i18n && window.i18n.tCategory) ? window.i18n.tCategory(cat) : cat;
  }

  /* ── Storage helpers ─────────────────────────────────────────── */
  function getData(key, def) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : def;
    } catch (e) {
      return def;
    }
  }

  function initDefaults() {
    if (!localStorage.getItem('ns_news'))   localStorage.setItem('ns_news',   JSON.stringify(DEFAULT_NEWS));
    if (!localStorage.getItem('ns_ads'))    localStorage.setItem('ns_ads',    JSON.stringify(DEFAULT_ADS));
    if (!localStorage.getItem('ns_videos')) localStorage.setItem('ns_videos', JSON.stringify(DEFAULT_VIDEOS));
  }

  /* ── State ───────────────────────────────────────────────────── */
  let allNews    = [];
  let allAds     = [];
  let allVideos  = [];
  let activeCategory = 'All';
  let searchQuery    = '';
  let modalArticle   = null;

  /* ── DOM refs ────────────────────────────────────────────────── */
  const featuredGrid    = document.getElementById('featured-grid');
  const newsGrid        = document.getElementById('news-grid');
  const categoryFilter  = document.getElementById('category-filter');
  const sidebarAds      = document.getElementById('sidebar-ads');
  const sidebarVideos   = document.getElementById('sidebar-videos');
  const headerAd        = document.getElementById('header-ad');
  const tickerContent   = document.getElementById('ticker-content');
  const modalOverlay    = document.getElementById('news-modal');
  const modalClose      = document.getElementById('modal-close');
  const searchInput     = document.getElementById('search-input');
  const searchBtn       = document.getElementById('search-btn');
  const currentYear     = document.getElementById('current-year');

  /* ── Init ────────────────────────────────────────────────────── */
  function init() {
    initDefaults();
    allNews   = getData('ns_news',   DEFAULT_NEWS);
    allAds    = getData('ns_ads',    DEFAULT_ADS);
    allVideos = getData('ns_videos', DEFAULT_VIDEOS);

    if (currentYear) currentYear.textContent = new Date().getFullYear();

    renderAll();
    bindEvents();

    // Apply translations to static HTML elements after everything is ready
    if (window.i18n && window.i18n.applyStaticTranslations) {
      window.i18n.applyStaticTranslations();
    }
  }

  /* ── Render everything ───────────────────────────────────────── */
  function renderAll() {
    renderHeaderAd();
    renderTicker();
    renderFeatured();
    renderCategoryFilter();
    renderNewsGrid();
    renderSidebarAds();
    renderSidebarVideos();
  }

  /* ── Header ad ───────────────────────────────────────────────── */
  function renderHeaderAd() {
    if (!headerAd) return;
    const ad = allAds.find(a => a.position === 'header');
    if (ad) {
      headerAd.innerHTML = `
        <a href="${escHtml(ad.link)}" target="_blank" rel="noopener">
          <img src="${escHtml(ad.image)}" alt="${escHtml(ad.title)}" loading="lazy">
        </a>`;
      headerAd.classList.remove('hidden');
    } else {
      headerAd.classList.add('hidden');
    }
  }

  /* ── Breaking news ticker ────────────────────────────────────── */
  function renderTicker() {
    if (!tickerContent) return;
    const items = allNews.slice(0, 6).map(n => `<span style="margin-right:60px">📰 ${escHtml(n.title)}</span>`).join('');
    tickerContent.innerHTML = items || `<span>${escHtml(t('ticker_welcome'))}</span>`;
  }

  /* ── Featured news ───────────────────────────────────────────── */
  function renderFeatured() {
    if (!featuredGrid) return;
    const featured = allNews.filter(n => n.featured);
    const main  = featured[0] || allNews[0];
    const sides = (featured.length > 1 ? featured.slice(1) : allNews.slice(1)).slice(0, 2);

    if (!main) {
      featuredGrid.innerHTML = `<p class="empty-state">${escHtml(t('no_news'))}</p>`;
      return;
    }

    let html = `
      <div class="featured-main" onclick="app.openArticle('${main.id}')">
        <img class="news-img" src="${escHtml(main.image)}" alt="${escHtml(main.title)}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'">
        <div class="news-body">
          <span class="news-category">${escHtml(main.category)}</span>
          <h2 class="news-title">${escHtml(main.title)}</h2>
          <p class="news-excerpt">${escHtml(main.excerpt)}</p>
          <p class="news-meta">${escHtml(t('by'))} ${escHtml(main.author)} &nbsp;·&nbsp; ${formatDate(main.date)}</p>
        </div>
      </div>`;

    sides.forEach(n => {
      html += `
        <div class="featured-side" onclick="app.openArticle('${n.id}')">
          <img class="news-img" src="${escHtml(n.image)}" alt="${escHtml(n.title)}" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'">
          <div class="news-body">
            <span class="news-category">${escHtml(n.category)}</span>
            <h3 class="news-title">${escHtml(n.title)}</h3>
            <p class="news-meta">${escHtml(t('by'))} ${escHtml(n.author)} &nbsp;·&nbsp; ${formatDate(n.date)}</p>
          </div>
        </div>`;
    });

    featuredGrid.innerHTML = html;
  }

  /* ── Category filter buttons ─────────────────────────────────── */
  function renderCategoryFilter() {
    if (!categoryFilter) return;
    const categories = ['All', ...new Set(allNews.map(n => n.category))];
    categoryFilter.innerHTML = categories.map(c => `
      <button class="cat-btn${c === activeCategory ? ' active' : ''}"
              onclick="app.setCategory('${escHtml(c)}')">${escHtml(tCat(c))}</button>
    `).join('');
  }

  /* ── News grid ───────────────────────────────────────────────── */
  function renderNewsGrid() {
    if (!newsGrid) return;
    let items = allNews;

    if (activeCategory !== 'All') {
      items = items.filter(n => n.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.excerpt.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q)
      );
    }

    if (!items.length) {
      newsGrid.innerHTML = `<p class="empty-state">${escHtml(t('no_articles'))}</p>`;
      return;
    }

    newsGrid.innerHTML = items.map(n => `
      <div class="news-card" onclick="app.openArticle('${n.id}')">
        <img class="card-img" src="${escHtml(n.image)}" alt="${escHtml(n.title)}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80'">
        <div class="card-body">
          <span class="card-category">${escHtml(n.category)}</span>
          <h3 class="card-title">${escHtml(n.title)}</h3>
          <p class="card-meta">${escHtml(t('by'))} ${escHtml(n.author)} &nbsp;·&nbsp; ${formatDate(n.date)}</p>
        </div>
      </div>
    `).join('');
  }

  /* ── Sidebar ads ─────────────────────────────────────────────── */
  function renderSidebarAds() {
    if (!sidebarAds) return;
    const ads = allAds.filter(a => a.position === 'sidebar');
    if (!ads.length) {
      sidebarAds.innerHTML = `<p style="color:#bbb;font-size:0.82rem;text-align:center">${escHtml(t('no_ads'))}</p>`;
      return;
    }
    sidebarAds.innerHTML = ads.map(a => `
      <div class="ad-item">
        <a href="${escHtml(a.link)}" target="_blank" rel="noopener">
          <img src="${escHtml(a.image)}" alt="${escHtml(a.title)}" loading="lazy"
               onerror="this.style.display='none'">
        </a>
        <p class="ad-title">${escHtml(a.title)}</p>
      </div>
    `).join('');
  }

  /* ── Sidebar videos ──────────────────────────────────────────── */
  function renderSidebarVideos() {
    if (!sidebarVideos) return;
    if (!allVideos.length) {
      sidebarVideos.innerHTML = `<p style="color:#bbb;font-size:0.82rem;text-align:center">${escHtml(t('no_videos'))}</p>`;
      return;
    }
    sidebarVideos.innerHTML = allVideos.map(v => `
      <div class="video-item">
        <div class="video-embed">
          <iframe src="https://www.youtube.com/embed/${escHtml(v.youtubeId)}"
                  title="${escHtml(v.title)}"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen loading="lazy"></iframe>
        </div>
        <p class="video-title">${escHtml(v.title)}</p>
        ${v.description ? `<p class="video-desc">${escHtml(v.description)}</p>` : ''}
      </div>
    `).join('');
  }

  /* ── Article modal ───────────────────────────────────────────── */
  function openArticle(id) {
    const article = allNews.find(n => n.id === id);
    if (!article || !modalOverlay) return;
    modalArticle = article;

    document.getElementById('modal-category').textContent  = article.category;
    document.getElementById('modal-title').textContent     = article.title;
    document.getElementById('modal-meta').textContent      = `${t('by')} ${article.author}  ·  ${formatDate(article.date)}`;
    document.getElementById('modal-img').src               = article.image;
    document.getElementById('modal-img').alt               = article.title;
    document.getElementById('modal-content').innerHTML     = article.content;

    modalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
    modalArticle = null;
  }

  /* ── Filters & search ────────────────────────────────────────── */
  function setCategory(cat) {
    activeCategory = cat;
    renderCategoryFilter();
    renderNewsGrid();
  }

  function runSearch() {
    searchQuery = searchInput ? searchInput.value.trim() : '';
    activeCategory = 'All';
    renderCategoryFilter();
    renderNewsGrid();
  }

  /* ── Event bindings ──────────────────────────────────────────── */
  function bindEvents() {
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeModal();
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
    if (searchBtn)   searchBtn.addEventListener('click', runSearch);
    if (searchInput) searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') runSearch();
    });
  }

  /* ── Utilities ───────────────────────────────────────────────── */
  function escHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatDate(str) {
    if (!str) return '';
    try {
      const locale = (window.i18n && window.i18n.getLang() === 'mr') ? 'mr-IN' : 'en-US';
      return new Date(str + 'T00:00:00').toLocaleDateString(locale, {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    } catch (_) { return str; }
  }

  /* ── Public API ──────────────────────────────────────────────── */
  window.app = {
    openArticle,
    setCategory,
    refresh: renderAll
  };

  /* ── Bootstrap ───────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
