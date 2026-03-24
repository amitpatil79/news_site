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
      title: 'महापालिकेने $२ अब्ज किमतीच्या विशाल पायाभूत सुविधा योजनेस मंजुरी दिली',
      excerpt: 'महापालिकेने शहराच्या इतिहासातील सर्वात मोठ्या पायाभूत सुविधा गुंतवणुकीस एकमताने मंजुरी दिली, ज्यामध्ये रस्ते, पूल आणि सार्वजनिक वाहतुकीच्या मोठ्या विस्ताराचा समावेश आहे.',
      content: '<p>मंगळवारी महापालिकेने शहराच्या इतिहासातील सर्वात मोठ्या पायाभूत सुविधा गुंतवणुकीस एकमताने मंजुरी दिली — एक व्यापक $२ अब्ज योजना जी पुढील दशकात रस्ते दुरुस्ती, पुलांचे नूतनीकरण आणि सार्वजनिक वाहतूक जाळ्याचा लक्षणीय विस्तार करण्यासाठी निधी पुरवेल.</p><p>"हे आपल्या शहरासाठी एक परिवर्तनकारी क्षण आहे," मतदानानंतर पत्रकार परिषदेत महापौर सारा जॉन्सन म्हणाल्या. "या गुंतवणुकीमुळे हजारो नोकऱ्या निर्माण होतील आणि प्रत्येक रहिवाशाचे दैनंदिन जीवन सुधारेल."</p><p>योजनेत सर्व बारा जिल्ह्यांमध्ये रस्ते पुनर्रचनेसाठी $८०० कोटी, सतरा संरचनात्मकदृष्ट्या दोषपूर्ण पुलांच्या नूतनीकरणासाठी $६०० कोटी, आणि शहर केंद्राशी वंचित परिसर जोडणाऱ्या नवीन बस जलद वाहतूक मार्गांसाठी $६०० कोटी यांचा समावेश आहे.</p><p>बांधकाम वसंत ऋतूमध्ये सुरू होण्याची अपेक्षा आहे, पहिले प्रकल्प — शहरी केंद्रात रस्ते दुरुस्ती — अठरा महिन्यांत पूर्ण होणे अपेक्षित आहे.</p>',
      category: 'Local',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
      author: 'जॉन मार्टिनेझ',
      date: '2026-03-24',
      featured: true
    },
    {
      id: 'n2',
      title: 'तंत्रज्ञान दिग्गजांनी संयुक्त AI सुरक्षा उपक्रमाची घोषणा केली',
      excerpt: 'जगातील पाच सर्वात मोठ्या तंत्रज्ञान कंपन्यांनी नवीन स्वतंत्र AI सुरक्षा संशोधन संस्थेसाठी $५०० कोटी देण्याचे वचन दिले.',
      content: '<p>जगातील पाच सर्वात मोठ्या तंत्रज्ञान कंपन्यांनी सोमवारी एक स्वतंत्र AI सुरक्षा संशोधन संस्था स्थापन करण्यासाठी संयुक्तपणे $५०० कोटी देण्याची घोषणा केली — तज्ञ याला जबाबदार AI विकासाची आजपर्यंतची सर्वात महत्त्वपूर्ण स्वेच्छा बांधिलकी म्हणतात.</p><p>नवीन संस्था, ज्याला ग्लोबल AI सेफ्टी फाउंडेशन असे नाव दिले जाईल, प्रगत AI प्रणालींमधील जोखीम शोधण्यासाठी आणि कमी करण्यासाठी तांत्रिक साधने विकसित करण्यावर लक्ष केंद्रित करेल.</p><p>"AI चा विकास आपल्या जोखीम समजण्याच्या क्षमतेपेक्षा वेगाने होत आहे," डॉ. एलेना वास्क्वेझ, जी फाउंडेशनची पहिली संचालक म्हणून काम करतील, असे म्हणाल्या. "ही संस्था जगातील अग्रगण्य संशोधकांना एकत्र आणेल."</p><p>या उपक्रमाला सरकार आणि नागरी समाज गटांनी प्रशंसा दिली आहे, जरी काही समीक्षकांचे म्हणणे आहे की उद्योगाने वित्तपुरवठा केलेली संस्था खरोखरच स्वतंत्र असू शकत नाही.</p>',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
      author: 'प्रिया शर्मा',
      date: '2026-03-23',
      featured: true
    },
    {
      id: 'n3',
      title: 'नॅशनल फुटबॉल लीगचा दोन नव्या शहरांमध्ये विस्तार',
      excerpt: 'NFL ने दोन नवीन बाजारपेठांमध्ये फ्रँचाइझींची घोषणा केली, लीगच्या दोन दशकांहून अधिक काळातील पहिल्या विस्ताराची नोंद केली.',
      content: '<p>नॅशनल फुटबॉल लीगने बुधवारी घोषणा केली की ती दोन नवीन शहरांमध्ये विस्तार करेल — ओरेगॉनचे पोर्टलँड आणि टेक्सासचे सॅन अँटोनिओ — जे लीगचे वीसहून अधिक वर्षांतील पहिले विस्तार असेल. दोन्ही नवीन संघ २०२८ सत्रात खेळण्यास सुरुवात करणे अपेक्षित आहे.</p><p>विस्तारास फिनिक्समधील लीगच्या वार्षिक बैठकीत ३०-२ मालक मतांनी मंजुरी मिळाली. प्रत्येक नवीन फ्रँचाइझी शुल्क $३.५ अब्ज असल्याचे सांगण्यात येते, व्यावसायिक क्रीडा फ्रँचाइझीसाठी नवीन विक्रम.</p><p>"हे दोन उत्साही फुटबॉल बाजारपेठ आहेत ज्यांनी वेळोवेळी खेळासाठी त्यांची आवड सिद्ध केली आहे," कमिशनर रॉजर एलिस म्हणाले. "त्यांना NFL कुटुंबात स्वागत करताना आम्हाला आनंद होत आहे."</p><p>पोर्टलँड आणि सॅन अँटोनिओने सेंट लुईससह डझनभर इतर शहरांच्या बोलींवर मात केली, ज्याने २०१६ मध्ये त्याची रॅम्स फ्रँचाइझी गमावली होती.</p>',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80',
      author: 'मायकेल थॉम्पसन',
      date: '2026-03-23',
      featured: false
    },
    {
      id: 'n4',
      title: 'नवीन अभ्यासात भूमध्यसागरीय आहार आणि स्मृतिभ्रंशाच्या कमी जोखमीचा संबंध',
      excerpt: 'दहा विद्यापीठांच्या संशोधकांना असे आढळले की भूमध्यसागरीय आहाराचे काटेकोरपणे पालन केल्यास स्मृतिभ्रंशाचा धोका २८ टक्क्यांपर्यंत कमी होऊ शकतो.',
      content: '<p>पंधरा वर्षांत ६०,००० पेक्षा अधिक प्रौढांचा समावेश असलेल्या एका ऐतिहासिक अभ्यासात असे आढळले की भूमध्यसागरीय आहाराचे — भाज्या, शेंगा, संपूर्ण धान्ये, मासे आणि ऑलिव्ह तेल यांनी समृद्ध — काटेकोरपणे पालन केल्यास स्मृतिभ्रंश विकसित होण्याच्या जोखमीत २८ टक्क्यांपर्यंत घट होऊ शकते.</p><p>नेचर मेडिसिन या जर्नलमध्ये प्रकाशित हे संशोधन युरोप आणि उत्तर अमेरिकेतील दहा विद्यापीठांच्या शास्त्रज्ञांनी केले आणि आजपर्यंतचे आपल्या प्रकारचे सर्वात मोठे संशोधन आहे.</p><p>"आपण काय खातो याचा आपण वय वाढत असताना आपल्या मेंदूच्या आरोग्यावर खोलवर परिणाम होतो," ऑक्सफर्ड विद्यापीठाच्या मुख्य संशोधक डॉ. अमेलिया चेन म्हणाल्या. "हे निष्कर्ष सार्वजनिक आरोग्य धोरण म्हणून आहारातील हस्तक्षेपाच्या बाजूने शक्तिशाली पुरावे जोडतात."</p><p>अभ्यासात शारीरिक क्रियाकलाप, धूम्रपान, शिक्षण पातळी आणि अल्झायमर रोगाची अनुवांशिक पूर्वस्थिती यासारख्या घटकांवर नियंत्रण ठेवण्यात आले.</p>',
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
      author: 'लिसा पार्क',
      date: '2026-03-22',
      featured: false
    },
    {
      id: 'n5',
      title: 'मजबूत रोजगार डेटामुळे शेअर बाजार नव्या उच्चांकावर',
      excerpt: 'सरकारी आकडेवारीनुसार गेल्या महिन्यात नियोक्त्यांनी ३,८०,००० नोकऱ्या जोडल्या, विश्लेषकांच्या अपेक्षांपेक्षा खूप जास्त, त्यामुळे वॉल स्ट्रीट विक्रमी उच्चांकावर पोहोचले.',
      content: '<p>शुक्रवारी एक आश्चर्यकारकरीत्या मजबूत रोजगार अहवालानंतर अमेरिकन शेअर बाजार नव्या उच्चांकावर पोहोचले — गेल्या महिन्यात नियोक्त्यांनी ३,८०,००० पदे भरली — विश्लेषकांनी अपेक्षित केलेल्या २,००,००० लाभापेक्षा जवळजवळ दुप्पट — आणि बेरोजगारीचा दर ५० वर्षांतील नीचांकावर ३.४ टक्क्यांवर घसरला.</p><p>S&P ५०० ने १.८ टक्के वाढ नोंदवून नव्या सर्वकालीन उच्चांकावर बंद झाले, तर डाऊ जोन्स इंडस्ट्रियल अव्हरेज ६२० अंकांनी वधारले. नॅस्डॅक कम्पोझिट तंत्रज्ञान समभागांमधील वाढीच्या नेतृत्वात २.१ टक्के वधारले.</p><p>"श्रमिक बाजारासाठी हे अत्युत्तम आहे," फर्स्ट नॅशनल सिक्युरिटीजच्या मुख्य अर्थशास्त्रज्ञ करेन व्हाईट म्हणाल्या. "क्षेत्रांमधील रोजगार लाभाची विस्तृतता सुचवते की या विस्तारामध्ये खरी ताकद आहे."</p><p>मजबूत आर्थिक डेटानंतर फेडरल रिझर्व्ह आपल्या पुढील बैठकीत व्याजदर स्थिर ठेवण्याची अपेक्षा आहे.</p>',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      author: 'रॉबर्ट चेन',
      date: '2026-03-22',
      featured: false
    },
    {
      id: 'n6',
      title: 'प्रसिद्ध चित्रपट निर्मात्याने हवामान बदलावर महत्त्वाकांक्षी १०-भागांच्या माहितीपट मालिकेची घोषणा केली',
      excerpt: 'पुरस्कारविजेत्या दिग्दर्शिका अण्णा कोवाक्स प्रत्येक खंडावरून हवामान उपायांचा शोध घेणारी माहितीपट मालिका तयार करण्यासाठी तीन वर्षे घालवतील.',
      content: '<p>अकादमी पुरस्कारविजेत्या दिग्दर्शिका अण्णा कोवाक्स यांनी सोमवारी घोषणा केली की त्या पुढील तीन वर्षे एक दहा-भागांची माहितीपट मालिका निर्माण करण्यासाठी घालवतील जी हवामान बदलाचे विनाशकारी परिणाम आणि समुदाय त्यांना प्रतिसाद म्हणून विकसित करत असलेले नाविन्यपूर्ण उपाय दोन्ही तपासण्यासाठी प्रत्येक खंडावर जाईल.</p><p>"मला आघाडीवर असलेल्या लोकांच्या कथा सांगायच्या आहेत — बांग्लादेशातील शेतकरी जे वाढत्या समुद्राशी जुळवून घेत आहेत, डेन्मार्कमधील अभियंते जे ऑफशोर पवन फार्म बांधत आहेत, ॲमेझॉनमधील स्थानिक समुदाय आपल्या ग्रहाच्या फुफ्फुसांचे रक्षण करत आहेत," न्यूयॉर्कमधील पत्रकार परिषदेत कोवाक्स म्हणाल्या.</p><p>पृथ्वी शिल्लक असे तात्पुरत्या नावाने ओळखली जाणारी ही मालिका, एका प्रमुख स्ट्रीमिंग प्लॅटफॉर्मद्वारे जागतिक स्तरावर वितरित केली जाईल. या उन्हाळ्यात निर्मिती सुरू होणार आहे.</p>',
      category: 'Entertainment',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
      author: 'एम्मा विल्सन',
      date: '2026-03-21',
      featured: false
    }
  ];

  const DEFAULT_ADS = [
    {
      id: 'a1',
      title: 'प्रीमियम रिअल इस्टेट',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80',
      link: '#',
      position: 'sidebar'
    },
    {
      id: 'a2',
      title: 'वाहन विमा कोटेशन',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80',
      link: '#',
      position: 'sidebar'
    },
    {
      id: 'a3',
      title: 'जगाची सफर करा',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
      link: '#',
      position: 'header'
    }
  ];

  const DEFAULT_VIDEOS = [
    {
      id: 'v1',
      title: 'तातडीच्या बातम्या: हवामान धोरणावरील जागतिक शिखर परिषद',
      description: 'जागतिक नेते नवीन उत्सर्जन लक्ष्यांवर चर्चा करण्यासाठी एकत्र आले.',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 'v2',
      title: 'शहर महापौरांची पत्रकार परिषद – पायाभूत सुविधा योजना',
      description: 'महापौरांच्या घोषणेचे थेट प्रसारण.',
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
      return new Date(str + 'T00:00:00').toLocaleDateString('mr-IN', {
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
