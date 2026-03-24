/**
 * News Admin Panel
 * Full CRUD for news articles, advertisements, and YouTube videos.
 * Data stored in localStorage under ns_news / ns_ads / ns_videos.
 * Admin password stored under ns_admin_password (default: admin123).
 */

(function () {
  'use strict';

  /* ── Storage keys ────────────────────────────────────────────── */
  const KEY_NEWS     = 'ns_news';
  const KEY_ADS      = 'ns_ads';
  const KEY_VIDEOS   = 'ns_videos';
  const KEY_PASSWORD = 'ns_admin_password';
  const KEY_SESSION  = 'ns_admin_session';

  /* ── Default password ────────────────────────────────────────── */
  const DEFAULT_PASSWORD = 'admin123';

  /* ── Storage helpers ─────────────────────────────────────────── */
  function load(key, def) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : def;
    } catch (_) { return def; }
  }
  function save(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  /* ── State ───────────────────────────────────────────────────── */
  let news   = [];
  let ads    = [];
  let videos = [];
  let editingId   = null;   // currently editing item id
  let deleteTarget = null;  // { type, id }
  let activeSection = 'dashboard';

  /* ── Session helpers ─────────────────────────────────────────── */
  function isLoggedIn() {
    return sessionStorage.getItem(KEY_SESSION) === 'true';
  }
  function login(password) {
    const storedPw = localStorage.getItem(KEY_PASSWORD) || DEFAULT_PASSWORD;
    return password === storedPw;
  }
  function logout() {
    sessionStorage.removeItem(KEY_SESSION);
    showLoginPage();
  }

  /* ── Pages ───────────────────────────────────────────────────── */
  function showLoginPage() {
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('admin-page').classList.add('hidden');
  }
  function showAdminPage() {
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('admin-page').classList.remove('hidden');
    loadData();
    navigateTo(activeSection);
  }

  /* ── Data loading ─────────────────────────────────────────────── */
  function loadData() {
    news   = load(KEY_NEWS,   []);
    ads    = load(KEY_ADS,    []);
    videos = load(KEY_VIDEOS, []);
    updateStats();
  }

  /* ── Stats ────────────────────────────────────────────────────── */
  function updateStats() {
    setText('stat-news',   news.length);
    setText('stat-ads',    ads.length);
    setText('stat-videos', videos.length);
    setText('stat-featured', news.filter(n => n.featured).length);
  }

  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  /* ── Navigation ──────────────────────────────────────────────── */
  function navigateTo(section) {
    activeSection = section;

    // Update sidebar links
    document.querySelectorAll('.sidebar-nav a[data-section]').forEach(a => {
      a.classList.toggle('active', a.dataset.section === section);
    });

    // Show/hide sections
    document.querySelectorAll('.section-page').forEach(p => {
      p.classList.toggle('active', p.id === 'section-' + section);
    });

    // Update topbar title
    const titles = {
      dashboard:  'Dashboard',
      news:       'News Articles',
      ads:        'Advertisements',
      videos:     'YouTube Videos',
      settings:   'Settings'
    };
    setText('page-title', titles[section] || 'Admin');

    // Render section content
    if (section === 'dashboard') renderDashboardRecent();
    if (section === 'news')      renderNewsTable();
    if (section === 'ads')       renderAdsTable();
    if (section === 'videos')    renderVideosTable();

    // Close mobile sidebar
    document.getElementById('admin-sidebar').classList.remove('open');
  }

  /* ── Dashboard recent articles ───────────────────────────────── */
  function renderDashboardRecent() {
    const tbody = document.getElementById('recent-news-body');
    if (!tbody) return;
    const recent = [...news].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    if (!recent.length) {
      tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#bbb;padding:20px">No articles yet.</td></tr>';
      return;
    }
    tbody.innerHTML = recent.map(n => `
      <tr>
        <td><strong>${escHtml(n.title)}</strong></td>
        <td><span class="badge badge-primary">${escHtml(n.category)}</span></td>
        <td>${formatDate(n.date)}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="adminApp.editNews('${n.id}')">✏️ Edit</button>
          <button class="btn btn-danger btn-sm" style="margin-left:4px" onclick="adminApp.confirmDelete('news','${n.id}')">🗑 Delete</button>
        </td>
      </tr>
    `).join('');
  }

  /* ── NEWS TABLE ──────────────────────────────────────────────── */
  function renderNewsTable(filter) {
    const tbody = document.getElementById('news-tbody');
    if (!tbody) return;
    let items = [...news].sort((a,b) => new Date(b.date) - new Date(a.date));

    if (filter) {
      const q = filter.toLowerCase();
      items = items.filter(n =>
        n.title.toLowerCase().includes(q) ||
        n.category.toLowerCase().includes(q) ||
        (n.author || '').toLowerCase().includes(q)
      );
    }

    if (!items.length) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#bbb;padding:24px">No articles found.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map(n => `
      <tr>
        <td>
          <img class="table-img" src="${escHtml(n.image)}" alt="" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=60'">
        </td>
        <td>
          <strong>${escHtml(n.title)}</strong><br>
          <small style="color:#999">${escHtml(n.excerpt ? n.excerpt.substring(0,80) + '…' : '')}</small>
        </td>
        <td><span class="badge badge-primary">${escHtml(n.category)}</span></td>
        <td>${escHtml(n.author || '')}</td>
        <td>${formatDate(n.date)}</td>
        <td>
          <span class="badge ${n.featured ? 'badge-success' : 'badge-warning'}">${n.featured ? '⭐ Featured' : 'Standard'}</span>
        </td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="adminApp.editNews('${n.id}')">✏️ Edit</button>
          <button class="btn btn-danger btn-sm" style="margin-left:4px" onclick="adminApp.confirmDelete('news','${n.id}')">🗑</button>
        </td>
      </tr>
    `).join('');
  }

  /* ── ADS TABLE ───────────────────────────────────────────────── */
  function renderAdsTable(filter) {
    const tbody = document.getElementById('ads-tbody');
    if (!tbody) return;
    let items = [...ads];

    if (filter) {
      const q = filter.toLowerCase();
      items = items.filter(a => a.title.toLowerCase().includes(q));
    }

    if (!items.length) {
      tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#bbb;padding:24px">No ads yet.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map(a => `
      <tr>
        <td>
          <img class="table-img" src="${escHtml(a.image)}" alt="" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=60'">
        </td>
        <td><strong>${escHtml(a.title)}</strong></td>
        <td>
          <a href="${escHtml(a.link)}" target="_blank" style="color:var(--accent);font-size:0.83rem">
            ${escHtml(a.link.length > 40 ? a.link.substring(0,40) + '…' : a.link)}
          </a>
        </td>
        <td><span class="badge badge-accent">${escHtml(a.position)}</span></td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="adminApp.editAd('${a.id}')">✏️ Edit</button>
          <button class="btn btn-danger btn-sm" style="margin-left:4px" onclick="adminApp.confirmDelete('ads','${a.id}')">🗑</button>
        </td>
      </tr>
    `).join('');
  }

  /* ── VIDEOS TABLE ────────────────────────────────────────────── */
  function renderVideosTable(filter) {
    const tbody = document.getElementById('videos-tbody');
    if (!tbody) return;
    let items = [...videos];

    if (filter) {
      const q = filter.toLowerCase();
      items = items.filter(v => v.title.toLowerCase().includes(q));
    }

    if (!items.length) {
      tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;color:#bbb;padding:24px">No videos yet.</td></tr>';
      return;
    }

    tbody.innerHTML = items.map(v => `
      <tr>
        <td>
          <img class="yt-thumb"
               src="https://img.youtube.com/vi/${escHtml(v.youtubeId)}/mqdefault.jpg"
               alt=""
               onerror="this.style.display='none'">
        </td>
        <td><strong>${escHtml(v.title)}</strong><br><small style="color:#999">${escHtml(v.description || '')}</small></td>
        <td>
          <a href="https://www.youtube.com/watch?v=${escHtml(v.youtubeId)}" target="_blank" style="color:var(--accent);font-size:0.83rem">
            youtube.com/watch?v=${escHtml(v.youtubeId)}
          </a>
        </td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="adminApp.editVideo('${v.id}')">✏️ Edit</button>
          <button class="btn btn-danger btn-sm" style="margin-left:4px" onclick="adminApp.confirmDelete('videos','${v.id}')">🗑</button>
        </td>
      </tr>
    `).join('');
  }

  /* ── NEWS MODAL ──────────────────────────────────────────────── */
  function openNewsModal(id) {
    editingId = id || null;
    const modal  = document.getElementById('news-modal');
    const title  = document.getElementById('nm-title');
    const isEdit = !!id;

    document.getElementById('news-modal-title').textContent = isEdit ? 'Edit Article' : 'Add New Article';

    if (isEdit) {
      const n = news.find(x => x.id === id);
      if (!n) return;
      setValue('nm-headline',  n.title);
      setValue('nm-excerpt',   n.excerpt);
      setValue('nm-content',   n.content);
      setValue('nm-category',  n.category);
      setValue('nm-author',    n.author);
      setValue('nm-date',      n.date);
      setValue('nm-image-url', n.image);
      setChecked('nm-featured', n.featured);
      showImgPreview('nm-img-preview', n.image);
    } else {
      resetForm('news-form');
      setValue('nm-date', getCurrentDateString());
      hideImgPreview('nm-img-preview');
    }

    modal.classList.remove('hidden');
  }

  function saveNews() {
    const headline = getValue('nm-headline').trim();
    const excerpt  = getValue('nm-excerpt').trim();
    const content  = getValue('nm-content').trim();
    const category = getValue('nm-category').trim();
    const author   = getValue('nm-author').trim();
    const date     = getValue('nm-date').trim();
    const image    = getValue('nm-image-url').trim();
    const featured = getChecked('nm-featured');

    if (!headline) { showToast('Headline is required.', 'error'); return; }
    if (!category) { showToast('Category is required.', 'error'); return; }
    if (!content)  { showToast('Content is required.', 'error'); return; }

    if (editingId) {
      const idx = news.findIndex(n => n.id === editingId);
      if (idx > -1) {
        news[idx] = { ...news[idx], title: headline, excerpt, content, category, author, date, image, featured };
        showToast('Article updated successfully!', 'success');
      }
    } else {
      news.unshift({
        id: genId('n'),
        title: headline, excerpt, content, category, author, date, image, featured
      });
      showToast('Article published!', 'success');
    }

    save(KEY_NEWS, news);
    closeNewsModal();
    renderNewsTable();
    updateStats();
    if (activeSection === 'dashboard') renderDashboardRecent();
  }

  function closeNewsModal() {
    document.getElementById('news-modal').classList.add('hidden');
    editingId = null;
  }

  /* ── ADS MODAL ───────────────────────────────────────────────── */
  function openAdModal(id) {
    editingId = id || null;
    document.getElementById('ad-modal-title').textContent = id ? 'Edit Advertisement' : 'Add Advertisement';

    if (id) {
      const a = ads.find(x => x.id === id);
      if (!a) return;
      setValue('am-title',    a.title);
      setValue('am-link',     a.link);
      setValue('am-image-url',a.image);
      setValue('am-position', a.position);
      showImgPreview('am-img-preview', a.image);
    } else {
      resetForm('ad-form');
      hideImgPreview('am-img-preview');
    }

    document.getElementById('ad-modal').classList.remove('hidden');
  }

  function saveAd() {
    const title    = getValue('am-title').trim();
    const link     = getValue('am-link').trim();
    const image    = getValue('am-image-url').trim();
    const position = getValue('am-position');

    if (!title) { showToast('Ad title is required.', 'error'); return; }
    if (!image) { showToast('Image URL is required.', 'error'); return; }

    if (editingId) {
      const idx = ads.findIndex(a => a.id === editingId);
      if (idx > -1) {
        ads[idx] = { ...ads[idx], title, link, image, position };
        showToast('Ad updated!', 'success');
      }
    } else {
      ads.push({ id: genId('a'), title, link, image, position });
      showToast('Ad added!', 'success');
    }

    save(KEY_ADS, ads);
    closeAdModal();
    renderAdsTable();
    updateStats();
  }

  function closeAdModal() {
    document.getElementById('ad-modal').classList.add('hidden');
    editingId = null;
  }

  /* ── VIDEOS MODAL ────────────────────────────────────────────── */
  function openVideoModal(id) {
    editingId = id || null;
    document.getElementById('video-modal-title').textContent = id ? 'Edit Video' : 'Add YouTube Video';

    if (id) {
      const v = videos.find(x => x.id === id);
      if (!v) return;
      setValue('vm-title',  v.title);
      setValue('vm-url',    'https://www.youtube.com/watch?v=' + v.youtubeId);
      setValue('vm-desc',   v.description || '');
    } else {
      resetForm('video-form');
    }

    document.getElementById('video-modal').classList.remove('hidden');
  }

  function saveVideo() {
    const title = getValue('vm-title').trim();
    const url   = getValue('vm-url').trim();
    const desc  = getValue('vm-desc').trim();

    if (!title) { showToast('Title is required.', 'error'); return; }
    if (!url)   { showToast('YouTube URL is required.', 'error'); return; }

    const youtubeId = extractYoutubeId(url);
    if (!youtubeId) { showToast('Could not extract YouTube video ID. Please use a valid YouTube URL.', 'error'); return; }

    if (editingId) {
      const idx = videos.findIndex(v => v.id === editingId);
      if (idx > -1) {
        videos[idx] = { ...videos[idx], title, youtubeId, description: desc };
        showToast('Video updated!', 'success');
      }
    } else {
      videos.push({ id: genId('v'), title, youtubeId, description: desc });
      showToast('Video added!', 'success');
    }

    save(KEY_VIDEOS, videos);
    closeVideoModal();
    renderVideosTable();
    updateStats();
  }

  function closeVideoModal() {
    document.getElementById('video-modal').classList.add('hidden');
    editingId = null;
  }

  /* ── DELETE CONFIRM ──────────────────────────────────────────── */
  function confirmDelete(type, id) {
    deleteTarget = { type, id };
    document.getElementById('confirm-overlay').classList.remove('hidden');
  }

  function executeDelete() {
    if (!deleteTarget) return;
    const { type, id } = deleteTarget;

    if (type === 'news') {
      news = news.filter(n => n.id !== id);
      save(KEY_NEWS, news);
      renderNewsTable();
      if (activeSection === 'dashboard') renderDashboardRecent();
    } else if (type === 'ads') {
      ads = ads.filter(a => a.id !== id);
      save(KEY_ADS, ads);
      renderAdsTable();
    } else if (type === 'videos') {
      videos = videos.filter(v => v.id !== id);
      save(KEY_VIDEOS, videos);
      renderVideosTable();
    }

    updateStats();
    showToast('Deleted successfully.', 'success');
    closeConfirm();
  }

  function closeConfirm() {
    document.getElementById('confirm-overlay').classList.add('hidden');
    deleteTarget = null;
  }

  /* ── SETTINGS ────────────────────────────────────────────────── */
  function savePassword() {
    const current  = getValue('set-current-pw').trim();
    const newPw    = getValue('set-new-pw').trim();
    const confirm  = getValue('set-confirm-pw').trim();
    const stored   = localStorage.getItem(KEY_PASSWORD) || DEFAULT_PASSWORD;

    if (current !== stored) { showToast('Current password is incorrect.', 'error'); return; }
    if (!newPw)             { showToast('New password cannot be empty.', 'error'); return; }
    if (newPw !== confirm)  { showToast('Passwords do not match.', 'error'); return; }

    localStorage.setItem(KEY_PASSWORD, newPw);
    resetForm('settings-form');
    showToast('Password changed successfully!', 'success');
  }

  /* ── TOAST ───────────────────────────────────────────────────── */
  function showToast(message, type) {
    type = type || 'info';
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    toast.innerHTML = `<span>${icons[type] || ''}</span> ${escHtml(message)}`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.4s';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }

  /* ── Image preview ───────────────────────────────────────────── */
  function showImgPreview(previewId, src) {
    const el = document.getElementById(previewId);
    if (!el) return;
    el.src = src;
    el.classList.add('show');
  }

  function hideImgPreview(previewId) {
    const el = document.getElementById(previewId);
    if (el) { el.src = ''; el.classList.remove('show'); }
  }

  function bindImagePreview(inputId, previewId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener('input', function () {
      const url = this.value.trim();
      if (url) showImgPreview(previewId, url);
      else     hideImgPreview(previewId);
    });
  }

  /* ── Form helpers ────────────────────────────────────────────── */
  function getValue(id)       { const el = document.getElementById(id); return el ? el.value : ''; }
  function setValue(id, val)  { const el = document.getElementById(id); if (el) el.value = val; }
  function getChecked(id)     { const el = document.getElementById(id); return el ? el.checked : false; }
  function setChecked(id, v)  { const el = document.getElementById(id); if (el) el.checked = !!v; }
  function resetForm(formId)  { const el = document.getElementById(formId); if (el) el.reset(); }

  /* ── Utils ───────────────────────────────────────────────────── */
  function genId(prefix) {
    return (prefix || 'x') + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function getCurrentDateString() {
    return new Date().toISOString().split('T')[0];
  }

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
      return new Date(str + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      });
    } catch (_) { return str; }
  }

  function extractYoutubeId(url) {
    if (!url) return null;
    // Handle various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
      /^([A-Za-z0-9_-]{11})$/   // bare ID
    ];
    for (const pat of patterns) {
      const m = url.match(pat);
      if (m) return m[1];
    }
    return null;
  }

  /* ── Init ────────────────────────────────────────────────────── */
  function init() {
    // Show correct page
    if (isLoggedIn()) {
      showAdminPage();
    } else {
      showLoginPage();
    }

    /* Login form */
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const pw = document.getElementById('login-password').value;
        if (login(pw)) {
          sessionStorage.setItem(KEY_SESSION, 'true');
          document.getElementById('login-error').style.display = 'none';
          showAdminPage();
        } else {
          const err = document.getElementById('login-error');
          if (err) { err.style.display = 'block'; err.textContent = 'Incorrect password. Please try again.'; }
        }
      });
    }

    /* Sidebar nav */
    document.querySelectorAll('.sidebar-nav a[data-section]').forEach(a => {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo(this.dataset.section);
      });
    });

    /* Mobile sidebar toggle */
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function () {
        document.getElementById('admin-sidebar').classList.toggle('open');
      });
    }

    /* Logout */
    document.getElementById('logout-btn').addEventListener('click', function (e) {
      e.preventDefault();
      logout();
    });

    /* News search */
    const newsSearch = document.getElementById('news-search');
    if (newsSearch) {
      newsSearch.addEventListener('input', function () {
        renderNewsTable(this.value.trim());
      });
    }

    /* Ads search */
    const adsSearch = document.getElementById('ads-search');
    if (adsSearch) {
      adsSearch.addEventListener('input', function () {
        renderAdsTable(this.value.trim());
      });
    }

    /* Videos search */
    const videosSearch = document.getElementById('videos-search');
    if (videosSearch) {
      videosSearch.addEventListener('input', function () {
        renderVideosTable(this.value.trim());
      });
    }

    /* Image URL previews */
    bindImagePreview('nm-image-url', 'nm-img-preview');
    bindImagePreview('am-image-url', 'am-img-preview');

    /* Confirm delete */
    document.getElementById('confirm-yes').addEventListener('click', executeDelete);
    document.getElementById('confirm-no').addEventListener('click',  closeConfirm);

    /* Password save */
    const settingsForm = document.getElementById('settings-form');
    if (settingsForm) {
      settingsForm.addEventListener('submit', function (e) {
        e.preventDefault();
        savePassword();
      });
    }

    /* Visit site link */
    const visitSite = document.getElementById('visit-site');
    if (visitSite) {
      visitSite.addEventListener('click', function (e) {
        e.preventDefault();
        window.open('../index.html', '_blank');
      });
    }
  }

  /* ── Public API (called from HTML onclick) ───────────────────── */
  window.adminApp = {
    openNewsModal,
    editNews:  (id) => openNewsModal(id),
    saveNews,
    closeNewsModal,

    openAdModal,
    editAd:    (id) => openAdModal(id),
    saveAd,
    closeAdModal,

    openVideoModal,
    editVideo: (id) => openVideoModal(id),
    saveVideo,
    closeVideoModal,

    confirmDelete,
    closeConfirm,

    navigateTo
  };

  /* ── Bootstrap ───────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
