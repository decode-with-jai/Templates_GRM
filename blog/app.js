// --- 1. Dynamic Categorization Filter Engine ---
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.blog-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Manage active state classes across tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      cards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
          // Smooth fade in microanimation
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
});

// --- 2. Article Mock Data Repository ---
const articleDatabase = {
  'ai-agents': {
    title: 'The Shift Toward Autonomous Web Systems',
    meta: 'Published in Intelligence • May 2026 • 5 min read',
    content: `
      <p>Autonomous client-side modules are rapidly refactoring how standard front-end applications handle state and remote data fetches. By leveraging micro-models directly in browser environments, interfaces can dynamically adapt to custom user patterns without awaiting standard controller dispatches.</p>
      <p>This structural paradigm moves beyond pure visual composition. The layout itself alters layout dependencies completely based on real-time execution graphs calculated locally.</p>
    `
  },
  'next-js-17': {
    title: 'Optimizing Edge Server Components at Scale',
    meta: 'Published in Frontier • May 2026 • 4 min read',
    content: `
      <p>Edge runtime layers are reducing initial TTFB metrics down to sub-millisecond territory. However, dealing with asynchronous layout structures requires strategic stream architectures to prevent hydration locks across complex visual grids.</p>
      <p>By enforcing clear operational boundaries between completely static presentation components and streaming server blocks, modern platforms remain performant even under variable network environments.</p>
    `
  },
  'green-compute': {
    title: 'The Architecture of Sustainable Green Computing',
    meta: 'Published in Planet • May 2026 • 7 min read',
    content: `
      <p>Computational overhead scales linearly with unoptimized logic loops and bloated payload structures. Adopting lightweight micro-framework execution blocks allows for direct resource optimizations that aggregate into measurable carbon cuts over massive distribution lines.</p>
      <p>We analyze exactly how transitioning to low-overhead runtime layers reduces core CPU thread cycle exhaustion across localized web nodes.</p>
    `
  }
};

// --- 3. Dynamic Slide-Over Panel Logic ---
function openArticle(articleId) {
  const drawer = document.getElementById('articleDrawer');
  const body = document.getElementById('drawerBody');
  const article = articleDatabase[articleId];

  if (article) {
    // Inject the structured text instantly before starting the open animation
    body.innerHTML = `
      <h1>${article.title}</h1>
      <div class="meta">${article.meta}</div>
      <div class="content-text">${article.content}</div>
    `;
    
    drawer.classList.add('open');
    // Lock background scroll to preserve focus state inside the article
    document.body.style.overflow = 'hidden';
  }
}

function closeArticle() {
  const drawer = document.getElementById('articleDrawer');
  drawer.classList.remove('open');
  // Re-enable global page scrolling
  document.body.style.overflow = '';
}