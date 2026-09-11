// Données des produits
const products = [
    { id: 1, name: 'iPhone 15 Pro', price: 750000, image: '📱', category: 'Smartphone', rating: 4.8 },
    { id: 2, name: 'MacBook Air M2', price: 950000, image: '💻', category: 'Ordinateur', rating: 4.9, new: true },
    { id: 3, name: 'AirPods Pro 2', price: 175000, image: '🎧', category: 'Audio', rating: 4.7 },
    { id: 4, name: 'iPad Pro', price: 625000, image: '📱', category: 'Tablette', rating: 4.6 },
    { id: 5, name: 'Apple Watch Ultra', price: 560000, image: '⌚', category: 'Montre', rating: 4.8, new: true },
    { id: 6, name: 'Chargeur 65W', price: 37000, image: '🔌', category: 'Accessoire', rating: 4.5 },
    { id: 7, name: 'Samsung Galaxy S24', price: 620000, image: '📱', category: 'Smartphone', rating: 4.6, new: true },
    { id: 8, name: 'Samsung Galaxy A55', price: 245000, image: '📱', category: 'Smartphone', rating: 4.4 },
    { id: 9, name: 'Dell XPS 13', price: 880000, image: '💻', category: 'Ordinateur', rating: 4.7 },
    { id: 10, name: 'HP Pavilion 15', price: 410000, image: '💻', category: 'Ordinateur', rating: 4.3 },
    { id: 11, name: 'Enceinte JBL Flip 6', price: 65000, image: '🔊', category: 'Audio', rating: 4.6 },
    { id: 12, name: 'Casque Sony WH-1000XM5', price: 220000, image: '🎧', category: 'Audio', rating: 4.9, new: true },
    { id: 13, name: 'Samsung Galaxy Tab S9', price: 480000, image: '📱', category: 'Tablette', rating: 4.5 },
    { id: 14, name: 'Montre connectée Amazfit', price: 65000, image: '⌚', category: 'Montre', rating: 4.2 },
    { id: 15, name: 'Batterie externe 20000mAh', price: 22000, image: '🔋', category: 'Accessoire', rating: 4.4 },
    { id: 16, name: 'Support téléphone voiture', price: 8000, image: '📎', category: 'Accessoire', rating: 4.1 },
    { id: 17, name: 'Sac à dos PC 15"', price: 28000, image: '🎒', category: 'Accessoire', rating: 4.5 },
    { id: 18, name: 'Souris sans fil Logitech', price: 18000, image: '🖱️', category: 'Accessoire', rating: 4.6 }
];

let activeCategory = 'Tous';

let cart = [];

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    renderCategoryFilters();
    renderProducts();
    updateCartCount();
    
    // Cart modal
    document.getElementById('cartIcon').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    window.addEventListener('click', function(e) {
        const cartModal = document.getElementById('cartModal');
        const ticketModal = document.getElementById('ticketModal');
        if (e.target === cartModal) closeCart();
        if (e.target === ticketModal) closeTicket();
    });

    // Checkout via WhatsApp
    document.getElementById('checkoutBtn').addEventListener('click', checkout);

    // Order ticket modal
    document.getElementById('closeTicket').addEventListener('click', closeTicket);
    document.getElementById('printTicketBtn').addEventListener('click', printTicket);

    // Live map & real-time location
    initLiveMap();
    const locateBtn = document.getElementById('locateBtn');
    if (locateBtn) locateBtn.addEventListener('click', locateUser);

    // Package tracking
    const trackBtn = document.getElementById('trackBtn');
    if (trackBtn) trackBtn.addEventListener('click', trackPackage);
    
    // Mobile hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
});

function renderCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    if (!container) return;
    const categories = ['Tous', ...new Set(products.map(p => p.category))];
    container.innerHTML = categories.map(cat => `
        <button class="category-btn ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join('');

    container.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategory = btn.dataset.category;
            renderCategoryFilters();
            renderProducts();
        });
    });
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const filtered = activeCategory === 'Tous'
        ? products
        : products.filter(p => p.category === activeCategory);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image ${product.new ? 'new' : ''}">
                ${product.image}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    <span style="font-size: 0.9rem; color: #6b7280; margin-left: 0.5rem;">(${product.rating})</span>
                </div>
                <div class="product-price">${product.price.toLocaleString()}F</div>
                <button class="product-add" onclick="addToCart(${product.id}, event)">
                    <i class="fas fa-cart-plus"></i> Ajouter au panier
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId, event) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    updateCartModal();
    
    // Animation feedback
    const button = event.currentTarget;
    button.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
    button.style.background = '#10b981';
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-cart-plus"></i> Ajouter au panier';
        button.style.background = '';
    }, 1500);
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function openCart() {
    updateCartModal();
    document.getElementById('cartModal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #6b7280;">Votre panier est vide</p>';
        cartTotal.textContent = '0F';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.price.toLocaleString()}F x 
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </p>
                <p><strong>${(item.price * item.quantity).toLocaleString()}F</strong></p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Suppr</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total.toLocaleString()}F`;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        updateCartCount();
        updateCartModal();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
}

const BUSINESS_WHATSAPP = '221782759595'; // +221 78 275 95 95

function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide !');
        return;
    }

    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('deliveryAddress').value.trim();

    if (!name || !phone || !address) {
        alert('Merci de renseigner votre nom, votre téléphone et votre adresse de livraison.');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderNumber = generateOrderNumber();
    const orderDate = new Date();

    showTicket(orderNumber, orderDate, name, phone, address, total);
    sendOrderToWhatsApp(orderNumber, name, phone, address, total);

    // Reset cart & form
    cart = [];
    updateCartCount();
    updateCartModal();
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('deliveryAddress').value = '';
    closeCart();
}

function generateOrderNumber() {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `BE-${Date.now().toString().slice(-6)}${random}`;
}

function sendOrderToWhatsApp(orderNumber, name, phone, address, total) {
    const lines = [
        `🛒 *Nouvelle commande BABA Express*`,
        `Ticket: ${orderNumber}`,
        ``,
        `👤 Client: ${name}`,
        `📞 Téléphone: ${phone}`,
        `📍 Adresse de livraison: ${address}`,
        ``,
        `Articles:`,
        ...cart.map(item => `- ${item.name} x${item.quantity} = ${(item.price * item.quantity).toLocaleString()}F`),
        ``,
        `💰 Total: ${total.toLocaleString()}F`,
        `Livraison estimée: 24h`
    ];
    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${message}`;
    window.open(url, '_blank');
}

function showTicket(orderNumber, orderDate, name, phone, address, total) {
    const ticketBody = document.getElementById('ticketBody');
    const itemsHtml = cart.map(item => `
        <div class="ticket-line">
            <span>${item.name} x${item.quantity}</span>
            <span>${(item.price * item.quantity).toLocaleString()}F</span>
        </div>
    `).join('');

    ticketBody.innerHTML = `
        <div class="ticket-body">
            <div class="ticket-header">
                <h2><i class="fas fa-truck"></i> BABA Express</h2>
                <p>Ticket de commande</p>
            </div>
            <div class="ticket-meta">
                <div>N° commande: <strong>${orderNumber}</strong></div>
                <div>Date: ${orderDate.toLocaleDateString('fr-FR')} à ${orderDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
            ${itemsHtml}
            <div class="ticket-total">
                <span>Total</span>
                <span>${total.toLocaleString()}F</span>
            </div>
            <div class="ticket-address">
                <strong>Client:</strong> ${name}<br>
                <strong>Téléphone:</strong> ${phone}<br>
                <strong>Adresse de livraison:</strong> ${address}
            </div>
        </div>
    `;

    document.getElementById('ticketModal').style.display = 'block';
}

function closeTicket() {
    document.getElementById('ticketModal').style.display = 'none';
}

function printTicket() {
    const ticketHtml = document.getElementById('ticketBody').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Ticket de commande</title>
            <style>
                body { font-family: 'Courier New', monospace; padding: 20px; }
                .ticket-header { text-align: center; border-bottom: 2px dashed #1e3a8a; padding-bottom: 1rem; margin-bottom: 1rem; }
                .ticket-header h2 { color: #1e3a8a; }
                .ticket-meta { font-size: 0.85rem; color: #6b7280; margin-bottom: 1rem; }
                .ticket-line { display: flex; justify-content: space-between; font-size: 0.9rem; padding: 0.3rem 0; border-bottom: 1px dotted #e5e7eb; }
                .ticket-total { display: flex; justify-content: space-between; font-weight: bold; font-size: 1.1rem; margin-top: 1rem; padding-top: 1rem; border-top: 2px dashed #1e3a8a; color: #1e3a8a; }
                .ticket-address { margin-top: 1rem; font-size: 0.85rem; background: #f9fafb; padding: 0.75rem; border-radius: 8px; }
            </style>
        </head>
        <body>${ticketHtml}</body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Animations au scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// ---------- Carte en direct & géolocalisation ----------
const DAKAR_CENTER = [14.6928, -17.4467];
let liveMap, userMarker, userAccuracyCircle, watchId;

function initLiveMap() {
    const mapEl = document.getElementById('liveMap');
    if (!mapEl || typeof L === 'undefined') return;

    liveMap = L.map('liveMap').setView(DAKAR_CENTER, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(liveMap);

    L.marker(DAKAR_CENTER).addTo(liveMap).bindPopup('Entrepôt BABA Express - Dakar');
}

function locateUser() {
    const statusEl = document.getElementById('mapStatus');
    const btn = document.getElementById('locateBtn');
    if (!navigator.geolocation) {
        statusEl.textContent = "La géolocalisation n'est pas supportée par votre navigateur.";
        return;
    }

    btn.disabled = true;
    statusEl.textContent = 'Localisation en cours...';

    if (watchId) navigator.geolocation.clearWatch(watchId);

    watchId = navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            const latlng = [latitude, longitude];

            if (!userMarker) {
                userMarker = L.circleMarker(latlng, {
                    radius: 8,
                    color: '#3b82f6',
                    fillColor: '#3b82f6',
                    fillOpacity: 0.9
                }).addTo(liveMap).bindPopup('Vous êtes ici');
                userAccuracyCircle = L.circle(latlng, {
                    radius: accuracy,
                    color: '#3b82f6',
                    fillColor: '#3b82f6',
                    fillOpacity: 0.1,
                    weight: 1
                }).addTo(liveMap);
                liveMap.setView(latlng, 15);
            } else {
                userMarker.setLatLng(latlng);
                userAccuracyCircle.setLatLng(latlng);
                userAccuracyCircle.setRadius(accuracy);
            }

            statusEl.textContent = `Position mise à jour • précision ${Math.round(accuracy)} m`;
            btn.disabled = false;
        },
        (error) => {
            btn.disabled = false;
            if (error.code === error.PERMISSION_DENIED) {
                statusEl.textContent = "Accès à la position refusé. Autorisez la localisation pour voir votre position en temps réel.";
            } else {
                statusEl.textContent = "Impossible de récupérer votre position pour le moment.";
            }
        },
        { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
    );
}

// ---------- Suivi de colis (simulation) ----------
const TRACKING_STEPS = ['Commande reçue', 'En préparation', 'En cours de livraison', 'Livré'];

// Simule un trajet de l'entrepôt vers un point de livraison à Dakar
const TRACKING_ROUTE = [
    [14.6928, -17.4467],
    [14.7000, -17.4550],
    [14.7100, -17.4650],
    [14.7200, -17.4700],
    [14.7300, -17.4750],
    [14.7400, -17.4467]
];

let trackingMap, trackingMarker, trackingRouteLine, trackingInterval, trackingStepIndex = 0;

function trackPackage() {
    const input = document.getElementById('trackingInput');
    const resultBox = document.getElementById('trackingResult');
    const timelineEl = document.getElementById('trackingTimeline');
    const etaEl = document.getElementById('etaText');

    const code = input.value.trim();
    if (!code) {
        alert('Veuillez entrer un numéro de suivi.');
        return;
    }

    resultBox.style.display = 'block';
    trackingStepIndex = 1; // simulate order already in preparation

    renderTimeline(timelineEl);
    etaEl.textContent = 'Livraison estimée sous 24h 🚚';

    if (!trackingMap) {
        trackingMap = L.map('trackingMap').setView(TRACKING_ROUTE[0], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(trackingMap);
        trackingRouteLine = L.polyline(TRACKING_ROUTE, { color: '#3b82f6', weight: 4, opacity: 0.6 }).addTo(trackingMap);
        trackingMarker = L.marker(TRACKING_ROUTE[0]).addTo(trackingMap).bindPopup(`Colis ${code}`);
        trackingMap.fitBounds(trackingRouteLine.getBounds(), { padding: [20, 20] });
    } else {
        trackingMarker.setLatLng(TRACKING_ROUTE[0]);
        trackingMarker.bindPopup(`Colis ${code}`);
    }

    if (trackingInterval) clearInterval(trackingInterval);

    let routeIndex = 0;
    trackingInterval = setInterval(() => {
        routeIndex++;
        if (routeIndex >= TRACKING_ROUTE.length) {
            clearInterval(trackingInterval);
            trackingStepIndex = 3;
            renderTimeline(timelineEl);
            etaEl.textContent = 'Colis livré ✅';
            return;
        }

        trackingMarker.setLatLng(TRACKING_ROUTE[routeIndex]);

        if (routeIndex === 2 && trackingStepIndex < 2) {
            trackingStepIndex = 2;
            renderTimeline(timelineEl);
        }
    }, 2000);
}

function renderTimeline(timelineEl) {
    timelineEl.innerHTML = TRACKING_STEPS.map((step, i) => `
        <li class="${i <= trackingStepIndex ? 'done' : ''}">${step}</li>
    `).join('');
}