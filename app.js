/* ==========================================================================
   UZUM MARKET — ADVANCED E-COMMERCE JAVASCRIPT
   Animations, Multi-Theme Engine, Cart & Favorites, Dynamic Catalog
   ========================================================================== */

// ---------- SAMPLE PRODUCTS DATABASE (Real Uzum Style) ----------
const PRODUCTS = [
  {
    id: 1,
    title: "Smartfon Apple iPhone 15 Pro Max 256GB Natural Titanium",
    category: "elektronika",
    price: 15499000,
    oldPrice: 17800000,
    rating: 4.9,
    reviews: 342,
    badge: "XIT SAVDO",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
    description: "Eng kuchli A17 Pro chip, titan korpus va professional kamera tizimi. Batareya quvvati bir kunga bemalol yetadi.",
    monthly: 1291000
  },
  {
    id: 2,
    title: "Simsiz quloqchinlar Apple AirPods Pro (2-avlod) MagSafe USB-C",
    category: "aksessuar",
    price: 2899000,
    oldPrice: 3450000,
    rating: 4.9,
    reviews: 580,
    badge: "ORIGINAL",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&auto=format&fit=crop&q=80",
    description: "Faol shovqinni bekor qilish (ANC), shaffoflik rejimi va moslashtirilgan fazoviy audio.",
    monthly: 241000
  },
  {
    id: 3,
    title: "Smartfon Samsung Galaxy S24 Ultra 12GB/512GB Titanium Gray",
    category: "elektronika",
    price: 14200000,
    oldPrice: 16500000,
    rating: 4.8,
    reviews: 194,
    badge: "YANGILIK",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80",
    description: "Galaxy AI imkoniyatlari, 200MP kamera va o'rnatilgan S-Pen stilus qalami bilan.",
    monthly: 1183000
  },
  {
    id: 4,
    title: "Simsiz vertikal changyutgich Dyson V15 Detect Absolute",
    category: "maishiy",
    price: 8990000,
    oldPrice: 10500000,
    rating: 5.0,
    reviews: 86,
    badge: "PREMIUM",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop&q=80",
    description: "Ko'rinmas changlarni ko'rsatuvchi lazer nuri, kuchli so'rish quvvati va 60 daqiqa avtonom ishlash.",
    monthly: 749000
  },
  {
    id: 5,
    title: "Erkaklar uchun krossovka Nike Air Monarch IV qora/oq",
    category: "poyabzal",
    price: 649000,
    oldPrice: 890000,
    rating: 4.7,
    reviews: 420,
    badge: "-27%",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    description: "Haqiqiy charm va Phylon taglik qulayligi bilan barcha sport va kundalik yurishlar uchun ideal tanlov.",
    monthly: 54000
  },
  {
    id: 6,
    title: "Noutbuk Apple MacBook Air 13\" M2 8GB / 256GB Space Gray",
    category: "elektronika",
    price: 11990000,
    oldPrice: 13800000,
    rating: 4.9,
    reviews: 215,
    badge: "SUPER NARX",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    description: "Yengil va ingichka korpus, M2 kuchli protsessori, 18 soatgacha zaryadsiz ishlash va Liquid Retina ekran.",
    monthly: 999000
  },
  {
    id: 7,
    title: "Fen Dyson Supersonic HD08 Professional soch quritgich",
    category: "gozallik",
    price: 5200000,
    oldPrice: 6100000,
    rating: 4.9,
    reviews: 310,
    badge: "TOP SOVUG'A",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    description: "Aqlli harorat nazorati sochni kuydirmaydi, 5 xil nozullar to'plami barcha soch turmaklariga mos.",
    monthly: 433000
  },
  {
    id: 8,
    title: "Aqlli soat Apple Watch Series 9 GPS 45mm Midnight Alum",
    category: "aksessuar",
    price: 4990000,
    oldPrice: 5700000,
    rating: 4.8,
    reviews: 148,
    badge: "-12%",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80",
    description: "Double Tap yangi imo-ishora nazorati, S9 SiP chipi, yorqin Retina ekran va EKG nazorati.",
    monthly: 415000
  },
  {
    id: 9,
    title: "Erkaklar va ayollar uchun oversize xudi zamonaviy qalin paxta",
    category: "kiyim",
    price: 189000,
    oldPrice: 290000,
    rating: 4.6,
    reviews: 730,
    badge: "-35%",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80",
    description: "100% paxta, ichki qismi yumshoq junli (flees), sovuq kunlar uchun issiq va qulay kiyim.",
    monthly: 15700
  },
  {
    id: 10,
    title: "Qahva mashinasi DeLonghi Magnifica S ECAM 22.110.B",
    category: "maishiy",
    price: 4600000,
    oldPrice: 5500000,
    rating: 4.9,
    reviews: 112,
    badge: "KAFOLAT 2 YIL",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80",
    description: "Yangi donalardan avtomatik espresso va kapuchino tayyorlash, 13 darajali maydalash rejimiga ega.",
    monthly: 383000
  },
  {
    id: 11,
    title: "Aqlli televizor Xiaomi TV A Pro 55\" 4K UHD Smart Google TV",
    category: "elektronika",
    price: 4390000,
    oldPrice: 5100000,
    rating: 4.7,
    reviews: 185,
    badge: "CHEGIRMA",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80",
    description: "Metalli romsiz korpus, Dolby Audio va DTS Virtual:X ovoz tizimi, 4K HDR tiniq tasvir.",
    monthly: 365000
  },
  {
    id: 12,
    title: "Ayollar uchun terini parvarishlash to'plami L'Oreal Paris Revitalift",
    category: "gozallik",
    price: 320000,
    oldPrice: 420000,
    rating: 4.8,
    reviews: 490,
    badge: "XARIDORGIR",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=80",
    description: "Gialuron kislotali kunduzgi va tungi krem kompleksi, terini chuqur namlantiradi va yoshartiradi.",
    monthly: 26600
  }
];

// ---------- STATE MANAGEMENT ----------
let currentTheme = localStorage.getItem('uzum_theme') || 'purple-gradient';
let isDarkMode = localStorage.getItem('uzum_dark_mode') === 'true';
let cart = JSON.parse(localStorage.getItem('uzum_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('uzum_favorites')) || [];
let currentCategory = 'all';
let currentSort = 'popular';
let promoApplied = false;
let promoDiscountPercent = 0;

// ---------- FORMATTING HELPERS ----------
function formatCurrency(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}

// ---------- INITIALIZATION ----------
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme, isDarkMode);
  setupThemeListeners();
  setupStickyHeader();
  setupCatalogMenu();
  setupHeroCarousel();
  setupCountdownTimer();
  setupSearch();
  setupFiltersAndSort();
  setupCartDrawer();
  setupFavoritesModal();
  setupCitySelector();
  
  renderProducts();
  updateCartCounters();
  updateFavoritesCounters();
});

// ==========================================================================
// 1. THEME & COLOR PALETTE ENGINE ("ranglarini o'zgartirish")
// ==========================================================================
function applyTheme(themeName, dark) {
  const root = document.documentElement;
  
  if (dark) {
    root.setAttribute('data-theme', 'cyber-dark');
    document.getElementById('darkModeBtn').innerHTML = '<i class="fa-solid fa-sun"></i>';
    document.getElementById('darkModeBtn').title = 'Kunduzgi rejimga o\'tish';
  } else {
    root.setAttribute('data-theme', themeName);
    document.getElementById('darkModeBtn').innerHTML = '<i class="fa-solid fa-moon"></i>';
    document.getElementById('darkModeBtn').title = 'Tungi rejimga o\'tish';
  }

  // Update active state in topbar buttons
  document.querySelectorAll('.palette-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-color') === themeName && !dark);
  });
}

function setupThemeListeners() {
  const paletteBtns = document.querySelectorAll('.palette-btn');
  const darkModeBtn = document.getElementById('darkModeBtn');

  paletteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTheme = btn.getAttribute('data-color');
      currentTheme = selectedTheme;
      isDarkMode = (selectedTheme === 'cyber-dark');
      localStorage.setItem('uzum_theme', currentTheme);
      localStorage.setItem('uzum_dark_mode', isDarkMode);
      applyTheme(currentTheme, isDarkMode);
      showToast('Ranglar palitrasi yangilandi!', 'fa-palette');
    });
  });

  darkModeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('uzum_dark_mode', isDarkMode);
    if (!isDarkMode && currentTheme === 'cyber-dark') {
      currentTheme = 'purple-gradient';
      localStorage.setItem('uzum_theme', currentTheme);
    }
    applyTheme(currentTheme, isDarkMode);
    showToast(isDarkMode ? 'Tungi rejim yoqildi 🌙' : 'Kunduzgi rejim yoqildi ☀️', 'fa-moon');
  });
}

// ==========================================================================
// 2. STICKY HEADER & SCROLL ANIMATION
// ==========================================================================
function setupStickyHeader() {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ==========================================================================
// 3. CATALOG MEGA MENU
// ==========================================================================
function setupCatalogMenu() {
  const catalogBtn = document.getElementById('catalogBtn');
  const megaMenu = document.getElementById('megaMenu');

  catalogBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    catalogBtn.classList.toggle('open');
    megaMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!megaMenu.contains(e.target) && !catalogBtn.contains(e.target)) {
      catalogBtn.classList.remove('open');
      megaMenu.classList.remove('active');
    }
  });

  // Sidebar hover switching
  const catItems = document.querySelectorAll('.mega-cat-item');
  catItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      catItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// ==========================================================================
// 4. ANIMATED HERO CAROUSEL
// ==========================================================================
let currentSlideIndex = 0;
let carouselTimer = null;

function setupHeroCarousel() {
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.getElementById('prevSlideBtn');
  const nextBtn = document.getElementById('nextSlideBtn');
  const wrapper = document.getElementById('carouselWrapper');

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlideIndex = index;
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlideIndex);
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    carouselTimer = setInterval(() => {
      goToSlide(currentSlideIndex + 1);
    }, 5500);
  }

  function stopAutoPlay() {
    if (carouselTimer) clearInterval(carouselTimer);
  }

  nextBtn.addEventListener('click', () => {
    goToSlide(currentSlideIndex + 1);
    startAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    goToSlide(currentSlideIndex - 1);
    startAutoPlay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'), 10);
      goToSlide(index);
      startAutoPlay();
    });
  });

  wrapper.addEventListener('mouseenter', stopAutoPlay);
  wrapper.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();
}

// ==========================================================================
// 5. FLASH SALE COUNTDOWN TIMER
// ==========================================================================
function setupCountdownTimer() {
  const hoursEl = document.getElementById('timerHours');
  const minutesEl = document.getElementById('timerMinutes');
  const secondsEl = document.getElementById('timerSeconds');

  // Set an end time 9 hours from now
  let remainingSeconds = (8 * 3600) + (42 * 60) + 19;

  setInterval(() => {
    if (remainingSeconds <= 0) {
      remainingSeconds = 24 * 3600; // Reset
    } else {
      remainingSeconds--;
    }

    const h = Math.floor(remainingSeconds / 3600);
    const m = Math.floor((remainingSeconds % 3600) / 60);
    const s = remainingSeconds % 60;

    hoursEl.textContent = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

// ==========================================================================
// 6. PRODUCT CATALOG & CARD RENDERING
// ==========================================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const noFound = document.getElementById('noProductsFound');

  // Filter
  let filtered = PRODUCTS.filter(item => {
    if (currentCategory === 'all') return true;
    if (currentCategory === 'muddatli') return true; // all have installment
    return item.category === currentCategory;
  });

  // Sort
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'discount') {
    filtered.sort((a, b) => ((b.oldPrice - b.price)/b.oldPrice) - ((a.oldPrice - a.price)/a.oldPrice));
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noFound.style.display = 'block';
    return;
  }

  noFound.style.display = 'none';
  grid.innerHTML = filtered.map(product => {
    const isFav = favorites.some(f => f.id === product.id);
    const inCart = cart.some(c => c.id === product.id);
    const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

    return `
      <div class="product-card" data-id="${product.id}">
        
        <!-- Thumbnail -->
        <div class="product-thumbnail-area" onclick="openQuickView(${product.id})">
          <img src="${product.image}" alt="${product.title}" class="product-thumbnail" loading="lazy">
          
          <div class="card-badge-top-left">
            <span class="discount-badge">-${discountPercent}%</span>
            ${product.badge ? `<span class="feature-badge">${product.badge}</span>` : ''}
          </div>

          <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${product.id})" aria-label="Saralanganlarga qo'shish">
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>

          <button class="quick-view-overlay-btn" onclick="openQuickView(${product.id})">
            <i class="fa-solid fa-eye"></i> Tezkor ko'rish
          </button>
        </div>

        <!-- Info Area -->
        <div class="product-info">
          <a href="javascript:void(0)" onclick="openQuickView(${product.id})" class="product-title">${product.title}</a>
          
          <div class="product-meta-row">
            <div class="rating-stars">
              <i class="fa-solid fa-star"></i>
              <span>${product.rating}</span>
            </div>
            <span>•</span>
            <span>(${product.reviews} ta sharh)</span>
          </div>

          <div class="monthly-payment-chip">
            ${formatCurrency(product.monthly)}/oy
          </div>

          <div class="product-bottom-row">
            <div class="price-group">
              <span class="old-price">${formatCurrency(product.oldPrice)}</span>
              <span class="current-price">${formatCurrency(product.price)}</span>
            </div>

            <button class="add-to-cart-btn ${inCart ? 'added' : ''}" onclick="handleAddToCart(event, ${product.id})" title="Savatga qo'shish">
              <i class="fa-solid ${inCart ? 'fa-check' : 'fa-bag-shopping'}"></i>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// ==========================================================================
// 7. FILTERS & SORTING
// ==========================================================================
function setupFiltersAndSort() {
  const pillBtns = document.querySelectorAll('.pill-btn');
  const sortSelect = document.getElementById('sortSelect');
  const navItems = document.querySelectorAll('.categories-nav-list li');

  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      
      // Sync with top nav
      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-cat') === currentCategory);
      });

      renderProducts();
    });
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.getAttribute('data-cat');
      filterByCategory(cat);
    });
  });

  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
}

function filterByCategory(categoryKey) {
  currentCategory = categoryKey;
  
  // Update pills
  const pillBtns = document.querySelectorAll('.pill-btn');
  pillBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter') === categoryKey);
  });

  // Update nav items
  const navItems = document.querySelectorAll('.categories-nav-list li');
  navItems.forEach(i => {
    i.classList.toggle('active', i.getAttribute('data-cat') === categoryKey);
  });

  renderProducts();

  // Smooth scroll down to products
  document.getElementById('productsCatalog').scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
  filterByCategory('all');
}

function scrollToCatalog() {
  document.getElementById('productsCatalog').scrollIntoView({ behavior: 'smooth' });
}

function openAllCategories() {
  const catalogBtn = document.getElementById('catalogBtn');
  catalogBtn.click();
}

// ==========================================================================
// 8. LIVE SEARCH & AUTOCOMPLETE
// ==========================================================================
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClearBtn');
  const searchForm = document.getElementById('searchForm');
  const searchPopover = document.getElementById('searchPopover');
  const resultsList = document.getElementById('searchResultsList');
  const tagChips = document.querySelectorAll('.tag-chip');

  searchInput.addEventListener('focus', () => {
    searchPopover.classList.add('active');
  });

  searchInput.addEventListener('input', () => {
    const val = searchInput.value.trim().toLowerCase();
    searchClear.style.display = val ? 'block' : 'none';

    if (val.length >= 2) {
      const matches = PRODUCTS.filter(p => p.title.toLowerCase().includes(val));
      if (matches.length > 0) {
        resultsList.innerHTML = matches.slice(0, 4).map(p => `
          <div class="search-result-item" onclick="openQuickView(${p.id}); closeSearchPopover();">
            <img src="${p.image}" class="search-result-img" alt="${p.title}">
            <div>
              <div class="search-result-title">${p.title}</div>
              <div class="search-result-price">${formatCurrency(p.price)}</div>
            </div>
          </div>
        `).join('');
      } else {
        resultsList.innerHTML = `<div style="padding: 10px; font-size: 0.85rem; color: var(--text-muted);">Tovar topilmadi</div>`;
      }
    } else {
      resultsList.innerHTML = '';
    }
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.style.display = 'none';
    resultsList.innerHTML = '';
    renderProducts();
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = searchInput.value.trim().toLowerCase();
    if (val) {
      const matched = PRODUCTS.filter(p => p.title.toLowerCase().includes(val));
      renderFilteredCustom(matched);
      closeSearchPopover();
      scrollToCatalog();
    }
  });

  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.getAttribute('data-search');
      searchInput.value = text;
      searchClear.style.display = 'block';
      const matched = PRODUCTS.filter(p => p.title.toLowerCase().includes(text.toLowerCase()));
      renderFilteredCustom(matched);
      closeSearchPopover();
      scrollToCatalog();
    });
  });

  document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target) && !searchPopover.contains(e.target)) {
      closeSearchPopover();
    }
  });
}

function closeSearchPopover() {
  document.getElementById('searchPopover').classList.remove('active');
}

function renderFilteredCustom(list) {
  const grid = document.getElementById('productsGrid');
  const noFound = document.getElementById('noProductsFound');

  if (list.length === 0) {
    grid.innerHTML = '';
    noFound.style.display = 'block';
    return;
  }

  noFound.style.display = 'none';
  grid.innerHTML = list.map(product => {
    const isFav = favorites.some(f => f.id === product.id);
    const inCart = cart.some(c => c.id === product.id);
    const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-thumbnail-area" onclick="openQuickView(${product.id})">
          <img src="${product.image}" alt="${product.title}" class="product-thumbnail" loading="lazy">
          <div class="card-badge-top-left">
            <span class="discount-badge">-${discountPercent}%</span>
            ${product.badge ? `<span class="feature-badge">${product.badge}</span>` : ''}
          </div>
          <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${product.id})">
            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>
        <div class="product-info">
          <a href="javascript:void(0)" onclick="openQuickView(${product.id})" class="product-title">${product.title}</a>
          <div class="product-meta-row">
            <div class="rating-stars"><i class="fa-solid fa-star"></i> <span>${product.rating}</span></div>
            <span>•</span>
            <span>(${product.reviews} ta sharh)</span>
          </div>
          <div class="monthly-payment-chip">${formatCurrency(product.monthly)}/oy</div>
          <div class="product-bottom-row">
            <div class="price-group">
              <span class="old-price">${formatCurrency(product.oldPrice)}</span>
              <span class="current-price">${formatCurrency(product.price)}</span>
            </div>
            <button class="add-to-cart-btn ${inCart ? 'added' : ''}" onclick="handleAddToCart(event, ${product.id})">
              <i class="fa-solid ${inCart ? 'fa-check' : 'fa-bag-shopping'}"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 9. CART SYSTEM & DRAWER ANIMATIONS
// ==========================================================================
function setupCartDrawer() {
  const cartBtn = document.getElementById('cartBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const applyPromoBtn = document.getElementById('applyPromoBtn');

  cartBtn.addEventListener('click', openCart);
  cartCloseBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  applyPromoBtn.addEventListener('click', () => {
    const promoInput = document.getElementById('promoCodeInput');
    const code = promoInput.value.trim().toUpperCase();

    if (code === 'UZUM2026' || code === 'CHEGIRMA') {
      promoApplied = true;
      promoDiscountPercent = 10;
      updateCartCalculations();
      showToast('10% chegirma muvaffaqiyatli qo\'llandi! 🎉', 'fa-tag');
      promoInput.disabled = true;
      applyPromoBtn.textContent = 'Qo\'llandi ✓';
    } else {
      showToast('Yaroqsiz promo-kod! "UZUM2026" deb yozing', 'fa-circle-exclamation');
    }
  });

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    closeCart();
    
    // Generate random order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    document.getElementById('orderNumber').textContent = `#UZ-${randomNum}`;
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartCounters();
    renderProducts();

    // Open Success Modal with celebration
    document.getElementById('successModalOverlay').classList.add('active');
  });
}

function openCart() {
  renderCartItems();
  document.getElementById('cartDrawer').classList.add('active');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function handleAddToCart(event, productId) {
  if (event) event.stopPropagation();
  
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartCounters();
  
  // Trigger button pulse
  if (event && event.currentTarget) {
    const btn = event.currentTarget;
    btn.classList.add('added');
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
      // Keep or reset
    }, 1500);
  }

  // Trigger Badge Bump
  const badge = document.getElementById('cartCount');
  badge.classList.remove('badge-bump');
  void badge.offsetWidth; // trigger reflow
  badge.classList.add('badge-bump');

  showToast(`"${product.title.slice(0, 30)}..." savatga qo'shildi!`, 'fa-cart-plus');
}

function updateCartCounters() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  document.getElementById('cartCount').textContent = totalCount;
  document.getElementById('cartHeaderTotal').textContent = formatCurrency(totalSum);
  document.getElementById('cartDrawerCount').textContent = `${totalCount} ta tovar`;
}

function renderCartItems() {
  const container = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('emptyCartState');
  const cartFooter = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'flex';
    cartFooter.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';
  cartFooter.style.display = 'block';

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-price">${formatCurrency(item.price)}</div>
        <div class="cart-item-controls">
          <div class="quantity-stepper">
            <button class="step-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
            <span class="step-count">${item.quantity}</span>
            <button class="step-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
          <button class="cart-item-delete-btn" onclick="removeFromCart(${item.id})" title="O'chirish">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  updateCartCalculations();
}

function changeQuantity(id, change) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();
  updateCartCounters();
  renderCartItems();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartCounters();
  renderCartItems();
  renderProducts();
  showToast('Tovar savatdan o\'chirildi', 'fa-trash');
}

function updateCartCalculations() {
  const rawSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = promoApplied ? Math.round(rawSubtotal * (promoDiscountPercent / 100)) : 0;
  const finalTotal = rawSubtotal - discountAmount;

  document.getElementById('subtotalPrice').textContent = formatCurrency(rawSubtotal);
  document.getElementById('discountPrice').textContent = `-${formatCurrency(discountAmount)}`;
  document.getElementById('finalTotalPrice').textContent = formatCurrency(finalTotal);
}

function saveCart() {
  localStorage.setItem('uzum_cart', JSON.stringify(cart));
}

// ==========================================================================
// 10. FAVORITES (SARALANGANLAR)
// ==========================================================================
function setupFavoritesModal() {
  const favBtn = document.getElementById('favoritesBtn');
  const modalOverlay = document.getElementById('favModalOverlay');
  const closeBtn = document.getElementById('favModalCloseBtn');

  favBtn.addEventListener('click', () => {
    openFavoritesModal();
  });

  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });
}

function toggleFavorite(event, productId) {
  if (event) event.stopPropagation();

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const idx = favorites.findIndex(f => f.id === productId);
  if (idx > -1) {
    favorites.splice(idx, 1);
    showToast(`"${product.title.slice(0, 25)}..." saralanganlardan olib tashlandi`, 'fa-heart-crack');
  } else {
    favorites.push(product);
    showToast(`"${product.title.slice(0, 25)}..." saralanganlarga qo'shildi! ❤️`, 'fa-heart');
    
    // Bump favorites counter
    const badge = document.getElementById('favoritesCount');
    badge.classList.remove('badge-bump');
    void badge.offsetWidth;
    badge.classList.add('badge-bump');
  }

  localStorage.setItem('uzum_favorites', JSON.stringify(favorites));
  updateFavoritesCounters();
  renderProducts();
}

function updateFavoritesCounters() {
  document.getElementById('favoritesCount').textContent = favorites.length;
  document.getElementById('favModalCount').textContent = favorites.length;
}

function openFavoritesModal() {
  const body = document.getElementById('favModalBody');
  const overlay = document.getElementById('favModalOverlay');

  if (favorites.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 40px 20px;">
        <div style="font-size: 3rem; color: #EF4444; margin-bottom: 14px;"><i class="fa-regular fa-heart"></i></div>
        <h4>Saralangan mahsulotlar mavjud emas</h4>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-top: 6px;">O'zingizga yoqqan mahsulotlarning yurakchasini bosib saqlab qo'ying.</p>
      </div>
    `;
  } else {
    body.innerHTML = favorites.map(item => `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 12px; background: var(--bg-body); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;">
        <div style="flex: 1;">
          <h4 style="font-size: 0.88rem; font-weight: 600; line-height: 1.3;">${item.title}</h4>
          <span style="font-weight: 800; color: var(--primary); font-size: 0.95rem;">${formatCurrency(item.price)}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="btn btn-sm btn-primary" onclick="handleAddToCart(null, ${item.id}); showToast('Savatga qo\'shildi!', 'fa-bag-shopping');">Savatga</button>
          <button style="background: transparent; color: #EF4444; font-size: 1.1rem; padding: 6px;" onclick="toggleFavorite(null, ${item.id}); openFavoritesModal();"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `).join('');
  }

  overlay.classList.add('active');
}

// ==========================================================================
// 11. QUICK VIEW PRODUCT MODAL
// ==========================================================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const card = document.getElementById('quickViewCard');
  const overlay = document.getElementById('quickViewOverlay');
  const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  card.innerHTML = `
    <div class="modal-header">
      <span class="pulse-badge"><i class="fa-solid fa-bolt"></i> Tezkor ko'rish</span>
      <button class="modal-close-btn" onclick="closeQuickView()"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="quick-view-grid">
      <div class="quick-view-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="quick-view-details">
        <h2 class="quick-view-title">${product.title}</h2>
        
        <div class="product-meta-row" style="margin-bottom: 14px;">
          <div class="rating-stars">
            <i class="fa-solid fa-star"></i>
            <span>${product.rating}</span>
          </div>
          <span>•</span>
          <span>(${product.reviews} ta baholash)</span>
          <span>•</span>
          <span class="text-success"><i class="fa-solid fa-check"></i> Omborda mavjud</span>
        </div>

        <p class="quick-view-desc">${product.description}</p>

        <div style="background: var(--bg-body); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px; border: 1px solid var(--border-color);">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-decoration: line-through;">${formatCurrency(product.oldPrice)} (-${discountPercent}%)</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--primary);">${formatCurrency(product.price)}</div>
          <div style="margin-top: 6px; font-size: 0.84rem; font-weight: 700; color: #D97706;">
            <i class="fa-solid fa-credit-card"></i> Muddatli to'lov: 12 oyga ${formatCurrency(product.monthly)}/oy
          </div>
        </div>

        <div style="display: flex; gap: 12px; margin-top: auto;">
          <button class="btn btn-primary glow-btn" style="flex: 1;" onclick="handleAddToCart(null, ${product.id}); closeQuickView();">
            <i class="fa-solid fa-bag-shopping"></i> Savatga qo'shish
          </button>
          <button class="btn btn-secondary" onclick="toggleFavorite(null, ${product.id});">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeQuickView();
  });
}

function closeQuickView() {
  document.getElementById('quickViewOverlay').classList.remove('active');
}

function closeSuccessModal() {
  document.getElementById('successModalOverlay').classList.remove('active');
}

// ==========================================================================
// 12. TOAST NOTIFICATION ENGINE
// ==========================================================================
function showToast(message, iconClass = 'fa-check') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';

  toast.innerHTML = `
    <div class="toast-icon text-primary"><i class="fa-solid ${iconClass}"></i></div>
    <div class="toast-message">${message}</div>
    <div class="toast-progress"></div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-leave');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 2700);
}

// ==========================================================================
// 13. CITY SELECTOR
// ==========================================================================
function setupCitySelector() {
  const currentCity = document.getElementById('currentCity');
  const cityLinks = document.querySelectorAll('.city-dropdown a');

  cityLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      cityLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const city = link.getAttribute('data-city');
      currentCity.textContent = city;
      showToast(`Shahar tanlandi: ${city}`, 'fa-location-dot');
    });
  });
}

