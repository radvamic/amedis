/* ===================================
   AMEDIS — Products Catalog App
   Hash Router, Rendering & Interactions
   =================================== */

(function () {
  'use strict';

  const app = document.getElementById('productsApp');
  const data = PRODUCTS_DATA;

  /* ---------- Utilities ---------- */

  function getDivision(id) {
    return data.divisions.find(d => d.id === id);
  }

  function getBrand(id) {
    return data.brands[id] || null;
  }

  function countItems(category) {
    let count = 0;
    if (category.products) count += category.products.length;
    if (category.subcategories) {
      category.subcategories.forEach(sub => {
        count += (sub.products ? sub.products.length : 0);
      });
      count += category.subcategories.length;
    }
    return count;
  }

  function countAllProducts(division) {
    let total = 0;
    division.categories.forEach(cat => {
      if (cat.products) total += cat.products.length;
      if (cat.subcategories) {
        cat.subcategories.forEach(sub => {
          if (sub.products) total += sub.products.length;
        });
      }
    });
    return total;
  }

  function findProduct(productId) {
    for (const div of data.divisions) {
      for (const cat of div.categories) {
        if (cat.products) {
          const p = cat.products.find(pr => pr.id === productId);
          if (p) return { product: p, category: cat, division: div, subcategory: null };
        }
        if (cat.subcategories) {
          for (const sub of cat.subcategories) {
            if (sub.products) {
              const p = sub.products.find(pr => pr.id === productId);
              if (p) return { product: p, category: cat, division: div, subcategory: sub };
            }
          }
        }
      }
    }
    return null;
  }

  function findCategory(divId, catId) {
    const div = getDivision(divId);
    if (!div) return null;
    const cat = div.categories.find(c => c.id === catId);
    return cat ? { category: cat, division: div } : null;
  }

  function findSubcategory(divId, catId, subId) {
    const result = findCategory(divId, catId);
    if (!result || !result.category.subcategories) return null;
    const sub = result.category.subcategories.find(s => s.id === subId);
    return sub ? { subcategory: sub, category: result.category, division: result.division } : null;
  }

  function arrowSVG() {
    return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  }

  function downloadSVG() {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
  }

  function externalSVG() {
    return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
  }

  function searchSVG() {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  }

  function fileSVG() {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';
  }

  /* ---------- Router ---------- */

  function getRoute() {
    const hash = window.location.hash.slice(1) || '';
    const parts = hash.split('/').filter(Boolean);
    return parts;
  }

  function navigate(hash) {
    window.location.hash = hash;
  }

  function route() {
    const parts = getRoute();
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (parts[0] === 'product' && parts[1]) {
      renderProductDetail(parts[1]);
    } else if (parts.length === 3) {
      renderSubcategory(parts[0], parts[1], parts[2]);
    } else if (parts.length === 2) {
      renderCategory(parts[0], parts[1]);
    } else if (parts.length === 1) {
      renderDivision(parts[0]);
    } else {
      renderHome();
    }

    app.classList.remove('view-enter');
    void app.offsetWidth;
    app.classList.add('view-enter');
  }

  window.addEventListener('hashchange', route);

  /* ---------- Navbar ---------- */

  (function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!navbar) return;

    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
      });

      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  })();

  /* ---------- Render: Home ---------- */

  function renderHome() {
    document.title = 'Produkty — AMEDIS';

    const totalProducts = data.divisions.reduce((sum, d) => sum + countAllProducts(d), 0);
    const totalCategories = data.divisions.reduce((sum, d) => sum + d.categories.length, 0);
    const totalBrands = Object.keys(data.brands).length;

    let html = `
      <section class="products-hero">
        <div class="container">
          <span class="badge"><span class="dot"></span> Produktový katalog</span>
          <h1>Špičková technika od <span class="gradient-text">světových výrobců</span></h1>
          <p class="hero-subtitle">Zastupujeme přední světové výrobce laboratorní a zdravotnické techniky. Prohlédněte si náš kompletní produktový katalog.</p>
          <div class="products-hero-stats">
            <div class="products-hero-stat"><span class="number">${totalCategories}</span><span class="label">Kategorií</span></div>
            <div class="products-hero-stat"><span class="number">${totalProducts}+</span><span class="label">Produktů</span></div>
            <div class="products-hero-stat"><span class="number">${totalBrands}</span><span class="label">Značek</span></div>
            <div class="products-hero-stat"><span class="number">30+</span><span class="label">Let zkušeností</span></div>
          </div>
        </div>
      </section>

      <div class="division-cards">`;

    data.divisions.forEach(div => {
      const catCount = div.categories.length;
      const prodCount = countAllProducts(div);
      html += `
        <a class="division-card" href="#${div.id}">
          <img class="division-card-image" src="${div.heroImage}" alt="${div.name}" loading="lazy">
          <span class="division-card-arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
          <div class="division-card-body">
            <div class="division-card-icon">${div.icon}</div>
            <h2>${div.name}</h2>
            <p>${div.description}</p>
            <div class="division-card-meta">
              <span><strong>${catCount}</strong> kategorií</span>
              <span><strong>${prodCount}+</strong> produktů</span>
              <span><strong>${div.brands.length}</strong> značek</span>
            </div>
          </div>
        </a>`;
    });

    html += '</div>';

    const allBrands = Object.values(data.brands);
    html += `
      <section class="brand-bar">
        <div class="container">
          <h3>Zastupujeme přední světové výrobce</h3>
          <div class="brand-logos">
            ${allBrands.map(b => `<img class="brand-logo" src="${b.logo}" alt="${b.name}" title="${b.name}" loading="lazy">`).join('')}
          </div>
        </div>
      </section>`;

    app.innerHTML = html;
  }

  /* ---------- Render: Division ---------- */

  function renderDivision(divId) {
    const div = getDivision(divId);
    if (!div) { renderHome(); return; }

    document.title = `${div.name} — AMEDIS`;

    let html = `
      <section class="division-hero">
        <div class="container">
          <nav class="breadcrumbs">
            <a href="products.html">Produkty</a>
            <span class="separator">/</span>
            <span class="current">${div.name}</span>
          </nav>
          <h1>${div.icon} ${div.name}</h1>
          <p>${div.description}</p>
          <div class="catalog-toolbar">
            <div class="catalog-search">
              <span class="catalog-search-icon">${searchSVG()}</span>
              <input type="text" id="categorySearch" placeholder="Hledat kategorii..." autocomplete="off">
            </div>
            <span class="catalog-count">${div.categories.length} kategorií</span>
          </div>
        </div>
      </section>
      <section class="section-light">
        <div class="container">
          <div class="division-content">
            <aside class="catalog-sidebar">
              <span class="sidebar-title">Kategorie</span>
              <ul class="sidebar-nav" id="sidebarNav">
                ${div.categories.map(cat => `<li><a href="#${div.id}/${cat.id}">${cat.name}</a></li>`).join('')}
              </ul>
            </aside>
            <div class="category-grid" id="categoryGrid">
              ${div.categories.map(cat => renderCategoryCard(div, cat)).join('')}
            </div>
          </div>
        </div>
      </section>`;

    html += renderBrandBar(div.brands);
    app.innerHTML = html;

    const searchInput = document.getElementById('categorySearch');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const q = this.value.toLowerCase().trim();
        const grid = document.getElementById('categoryGrid');
        const cards = grid.querySelectorAll('.category-card');
        cards.forEach(card => {
          const name = card.dataset.name || '';
          card.style.display = name.includes(q) ? '' : 'none';
        });
      });
    }
  }

  function renderCategoryCard(div, cat) {
    const itemCount = countItems(cat);
    const label = cat.subcategories ? 'podkategorií' : 'produktů';
    return `
      <a class="category-card" href="#${div.id}/${cat.id}" data-name="${cat.name.toLowerCase()}">
        <div class="category-card-image-wrap">
          <img src="${cat.image}" alt="${cat.name}" loading="lazy">
        </div>
        <div class="category-card-body">
          <h3>${cat.name}</h3>
          <p>${cat.description}</p>
          <div class="category-card-footer">
            <span class="category-card-count">${itemCount > 0 ? itemCount + ' ' + label : ''}</span>
            <span class="category-card-link">Zobrazit ${arrowSVG()}</span>
          </div>
        </div>
      </a>`;
  }

  /* ---------- Render: Category ---------- */

  function renderCategory(divId, catId) {
    const result = findCategory(divId, catId);
    if (!result) { renderDivision(divId); return; }
    const { category: cat, division: div } = result;

    document.title = `${cat.name} — ${div.name} — AMEDIS`;

    const brand = cat.brand ? getBrand(cat.brand) : null;
    const desc = cat.fullDescription || cat.description;

    let html = `
      <section class="category-hero">
        <div class="container">
          <nav class="breadcrumbs">
            <a href="products.html">Produkty</a>
            <span class="separator">/</span>
            <a href="#${div.id}">${div.name}</a>
            <span class="separator">/</span>
            <span class="current">${cat.name}</span>
          </nav>
          <div class="category-hero-inner">
            <div>
              <h1>${cat.name}</h1>
              <p class="category-hero-desc">${desc}</p>
              ${brand ? `<div class="category-brand"><img src="${brand.logo}" alt="${brand.name}"><span>${brand.name}</span></div>` : ''}
            </div>
            <img class="category-hero-image" src="${cat.image}" alt="${cat.name}" loading="lazy">
          </div>
        </div>
      </section>
      <section class="category-content section-light">
        <div class="container">`;

    if (cat.subcategories && cat.subcategories.length > 0) {
      html += `<h2>Podkategorie</h2><div class="category-grid">`;
      cat.subcategories.forEach(sub => {
        const subCount = sub.products ? sub.products.length : 0;
        html += `
          <a class="category-card" href="#${div.id}/${cat.id}/${sub.id}">
            <div class="category-card-image-wrap">
              <img src="${sub.image}" alt="${sub.name}" loading="lazy">
            </div>
            <div class="category-card-body">
              <h3>${sub.name}</h3>
              <p>${sub.description}</p>
              <div class="category-card-footer">
                <span class="category-card-count">${subCount > 0 ? subCount + ' produktů' : ''}</span>
                <span class="category-card-link">Zobrazit ${arrowSVG()}</span>
              </div>
            </div>
          </a>`;
      });
      html += '</div>';
    }

    if (cat.products && cat.products.length > 0) {
      html += `<h2>${cat.subcategories ? 'Produkty' : 'Produkty v kategorii'}</h2>`;
      html += '<div class="product-grid">';
      cat.products.forEach(prod => {
        html += renderProductCard(prod);
      });
      html += '</div>';
    }

    if ((!cat.products || cat.products.length === 0) && (!cat.subcategories || cat.subcategories.length === 0)) {
      html += renderEmptyState();
    }

    html += '</div></section>';
    app.innerHTML = html;
  }

  /* ---------- Render: Subcategory ---------- */

  function renderSubcategory(divId, catId, subId) {
    const result = findSubcategory(divId, catId, subId);
    if (!result) { renderCategory(divId, catId); return; }
    const { subcategory: sub, category: cat, division: div } = result;

    document.title = `${sub.name} — ${cat.name} — AMEDIS`;

    const desc = sub.fullDescription || sub.description;

    let html = `
      <section class="category-hero">
        <div class="container">
          <nav class="breadcrumbs">
            <a href="products.html">Produkty</a>
            <span class="separator">/</span>
            <a href="#${div.id}">${div.name}</a>
            <span class="separator">/</span>
            <a href="#${div.id}/${cat.id}">${cat.name}</a>
            <span class="separator">/</span>
            <span class="current">${sub.name}</span>
          </nav>
          <div class="category-hero-inner">
            <div>
              <h1>${sub.name}</h1>
              <p class="category-hero-desc">${desc}</p>
            </div>
            <img class="category-hero-image" src="${sub.image}" alt="${sub.name}" loading="lazy">
          </div>
        </div>
      </section>
      <section class="category-content section-light">
        <div class="container">`;

    if (sub.products && sub.products.length > 0) {
      html += '<h2>Produkty</h2><div class="product-grid">';
      sub.products.forEach(prod => {
        html += renderProductCard(prod);
      });
      html += '</div>';
    } else {
      html += renderEmptyState();
    }

    html += '</div></section>';
    app.innerHTML = html;
  }

  /* ---------- Render: Product Card ---------- */

  function renderProductCard(prod) {
    const brand = prod.brand ? getBrand(prod.brand) : null;
    return `
      <a class="product-card-item" href="#product/${prod.id}">
        <div class="product-card-image-wrap">
          ${prod.isNew ? '<span class="product-badge-new">Novinka</span>' : ''}
          <img src="${prod.image}" alt="${prod.name}" loading="lazy">
        </div>
        <div class="product-card-body">
          <h3>${prod.name}</h3>
          <p>${prod.description}</p>
          ${brand ? `<span class="brand-tag"><img src="${brand.logo}" alt="${brand.name}">${brand.name}</span>` : ''}
        </div>
      </a>`;
  }

  /* ---------- Render: Product Detail ---------- */

  function renderProductDetail(productId) {
    const result = findProduct(productId);
    if (!result) { renderHome(); return; }
    const { product: prod, category: cat, division: div, subcategory: sub } = result;

    document.title = `${prod.name} — AMEDIS`;

    const brand = prod.brand ? getBrand(prod.brand) : null;
    const images = prod.images && prod.images.length > 0 ? prod.images : [prod.image];
    const mainImg = images[0];

    let breadcrumb = `
      <a href="products.html">Produkty</a>
      <span class="separator">/</span>
      <a href="#${div.id}">${div.name}</a>
      <span class="separator">/</span>
      <a href="#${div.id}/${cat.id}">${cat.name}</a>`;
    if (sub) {
      breadcrumb += `<span class="separator">/</span><a href="#${div.id}/${cat.id}/${sub.id}">${sub.name}</a>`;
    }
    breadcrumb += `<span class="separator">/</span><span class="current">${prod.name}</span>`;

    let html = `
      <section class="product-detail">
        <div class="product-detail-hero">
          <div class="container">
            <nav class="breadcrumbs">${breadcrumb}</nav>
            <div class="product-detail-grid">
              <div class="product-gallery">
                <div class="product-gallery-main" id="galleryMain" data-index="0">
                  <img src="${mainImg}" alt="${prod.name}" id="galleryMainImg">
                </div>
                ${images.length > 1 ? `
                  <div class="product-gallery-thumbs" id="galleryThumbs">
                    ${images.map((img, i) => `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}"><img src="${img}" alt="${prod.name}"></div>`).join('')}
                  </div>` : ''}
              </div>
              <div class="product-info">
                ${prod.isNew ? '<span class="product-badge-new" style="margin-bottom:1rem;display:inline-block;">Novinka</span>' : ''}
                <h1>${prod.name}</h1>
                ${brand ? `
                  <div class="product-manufacturer">
                    <img src="${brand.logo}" alt="${brand.name}">
                    <span>${brand.name}</span>
                  </div>` : ''}
                <div class="product-description">${prod.description}</div>
                ${prod.externalLink ? `<a class="product-external-link" href="${prod.externalLink}" target="_blank" rel="noopener">Více na webu výrobce ${externalSVG()}</a>` : ''}
                ${prod.downloads && prod.downloads.length > 0 ? `
                  <div class="product-downloads">
                    <h3>${fileSVG()} Ke stažení</h3>
                    <div class="download-list">
                      ${prod.downloads.map(dl => `
                        <a class="download-item" href="${dl.url}" target="_blank" rel="noopener">
                          ${downloadSVG()}
                          <span class="dl-name">${dl.name}</span>
                          <span class="dl-size">${dl.size}</span>
                        </a>`).join('')}
                    </div>
                  </div>` : ''}
                <div class="product-cta">
                  <a href="index.html#contact" class="btn btn-primary">
                    Zadat poptávku
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </a>
                  <a href="tel:+420281918191" class="btn btn-outline">Zavolat nám</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

    app.innerHTML = html;

    initGallery(images);
  }

  /* ---------- Empty State ---------- */

  function renderEmptyState() {
    return `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        <p>Pro detailní informace nás neváhejte <a href="index.html#contact" style="color:var(--clr-accent)">kontaktovat</a>.</p>
      </div>`;
  }

  /* ---------- Brand Bar ---------- */

  function renderBrandBar(brandIds) {
    const brands = brandIds.map(id => getBrand(id)).filter(Boolean);
    return `
      <section class="brand-bar">
        <div class="container">
          <h3>Zastupované značky</h3>
          <div class="brand-logos">
            ${brands.map(b => `<img class="brand-logo" src="${b.logo}" alt="${b.name}" title="${b.name}" loading="lazy">`).join('')}
          </div>
        </div>
      </section>`;
  }

  /* ---------- Gallery & Lightbox ---------- */

  let galleryImages = [];
  let currentGalleryIndex = 0;

  function initGallery(images) {
    galleryImages = images;
    currentGalleryIndex = 0;

    const mainWrap = document.getElementById('galleryMain');
    const mainImg = document.getElementById('galleryMainImg');
    const thumbsContainer = document.getElementById('galleryThumbs');

    if (mainWrap) {
      mainWrap.addEventListener('click', function () {
        openLightbox(parseInt(this.dataset.index) || 0);
      });
    }

    if (thumbsContainer) {
      thumbsContainer.querySelectorAll('.gallery-thumb').forEach(function (thumb) {
        thumb.addEventListener('click', function () {
          const idx = parseInt(this.dataset.index);
          currentGalleryIndex = idx;
          mainImg.src = images[idx];
          mainWrap.dataset.index = idx;
          thumbsContainer.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
          this.classList.add('active');
        });
      });
    }
  }

  function openLightbox(index) {
    if (galleryImages.length === 0) return;
    currentGalleryIndex = index;
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const counter = document.getElementById('lightboxCounter');

    img.src = galleryImages[currentGalleryIndex];
    counter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;

    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.classList.remove('active');
    document.body.style.overflow = '';
  }

  function lightboxNav(dir) {
    currentGalleryIndex = (currentGalleryIndex + dir + galleryImages.length) % galleryImages.length;
    const img = document.getElementById('lightboxImg');
    const counter = document.getElementById('lightboxCounter');
    img.src = galleryImages[currentGalleryIndex];
    counter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;
  }

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', function () { lightboxNav(-1); });
  document.getElementById('lightboxNext').addEventListener('click', function () { lightboxNav(1); });

  document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });

  /* ---------- Init ---------- */

  route();

})();
