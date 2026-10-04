'use strict';

const products = [
  {id:1,name:'iPhone 15 Pro',price:750000,image:'images/iphone15pro.jpeg',category:'Smartphone',rating:4.8,new:true,description:"Smartphone haut de gamme avec écran Pro, excellent appareil photo et performances fluides."},
  {id:2,name:'MacBook Air M2',price:950000,image:'images/product-02.svg',category:'Ordinateur',rating:4.9,new:true,description:"Ordinateur portable fin et léger, adapté au travail, aux études et à la création de contenu."},
  {id:3,name:'AirPods Pro 2',price:175000,image:'images/product-03.svg',category:'Audio',rating:4.7,description:"Écouteurs sans fil avec réduction de bruit active et boîtier de recharge."},
  {id:4,name:'iPad Pro',price:625000,image:'images/product-04.svg',category:'Tablette',rating:4.6,description:"Tablette grand écran pensée pour la productivité, le multimédia et la création."},
  {id:5,name:'Apple Watch Ultra',price:560000,image:'images/product-05.svg',category:'Montre',rating:4.8,new:true,description:"Montre connectée robuste avec suivi sportif, notifications et autonomie longue durée."},
  {id:6,name:'Chargeur 65W',price:37000,image:'images/product-06.svg',category:'Accessoire',rating:4.5,description:"Chargeur rapide multiports pratique pour smartphone, tablette et autres appareils compatibles."},
  {id:7,name:'Samsung Galaxy S24',price:620000,image:'images/product-07.svg',category:'Smartphone',rating:4.6,new:true,description:"Smartphone Samsung premium avec écran haute qualité, bonnes performances et photo avancée."},
  {id:8,name:'Samsung Galaxy A55',price:245000,image:'images/product-08.svg',category:'Smartphone',rating:4.4,description:"Smartphone polyvalent avec grand écran, bonne autonomie et usage quotidien confortable."},
  {id:9,name:'Dell XPS 13',price:880000,image:'images/product-09.svg',category:'Ordinateur',rating:4.7,description:"Ultrabook premium compact, puissant et facile à transporter pour le travail mobile."},
  {id:10,name:'HP Pavilion 15',price:410000,image:'images/product-10.svg',category:'Ordinateur',rating:4.3,description:"PC portable polyvalent pour bureautique, études, navigation et multimédia."},
  {id:11,name:'Enceinte JBL Flip 6',price:65000,image:'images/jblflip6.jpeg',category:'Audio',rating:4.6,new:true,description:"Enceinte Bluetooth compacte offrant un son puissant et une bonne autonomie."},
  {id:12,name:'Casque Sony WH-1000XM5',price:220000,image:'images/casquesony.jpeg',category:'Audio',rating:4.9,new:true,description:"Casque audio premium avec réduction de bruit et écoute confortable."},
  {id:13,name:'Samsung Galaxy Tab S9',price:480000,image:'images/product-13.svg',category:'Tablette',rating:4.5,description:"Tablette Android premium avec grand écran, performances fluides et usage multimédia."},
  {id:14,name:'Montre connectée Amazfit',price:65000,image:'images/product-14.svg',category:'Montre',rating:4.2,description:"Montre connectée élégante pour sport, notifications et suivi de l'activité quotidienne."},
  {id:15,name:'Batterie externe 20000mAh',price:22000,image:'images/powerbank.jpeg',category:'Accessoire',rating:4.4,description:"Batterie externe 20 000 mAh pour recharger vos appareils lors de vos déplacements."},
  {id:16,name:'Support téléphone voiture',price:8000,image:'images/product-16.svg',category:'Accessoire',rating:4.1,description:"Support de téléphone pratique pour maintenir votre smartphone en sécurité dans la voiture."},
  {id:17,name:'Sac à dos PC 15"',price:28000,image:'images/product-17.svg',category:'Accessoire',rating:4.5,description:"Sac à dos renforcé avec compartiment PC, pratique pour les déplacements professionnels."},
  {id:18,name:'Souris sans fil Logitech',price:18000,image:'images/product-18.svg',category:'Accessoire',rating:4.6,description:"Souris sans fil confortable pour bureau, télétravail et usage quotidien."},
{id:19,name:'Téléviseur Samsung 55" Smart TV',price:425000,image:'images/product-19.svg',category:'Téléviseur',rating:4.8,new:true,description:"Téléviseur Samsung grand écran avec fonctions Smart TV pour films, séries et sport."},
  {id:20,name:'Téléviseur LG 50" 4K',price:365000,image:'images/product-20.svg',category:'Téléviseur',rating:4.6,description:"Téléviseur LG 4K grand écran avec image détaillée et fonctions connectées."},
  {id:21,name:'Panier fruits & légumes bio',price:15000,image:'images/product-21.svg',category:'Produits bio',rating:4.8,new:true,description:"Sélection de fruits et légumes bio pour une alimentation fraîche et variée."},
  {id:22,name:'Huile d’olive bio premium',price:12000,image:'images/product-22.svg',category:'Produits bio',rating:4.7,description:"Huile d'olive bio premium adaptée à la cuisine et aux assaisonnements."},
  {id:23,name:'Coffret soins visage',price:18500,image:'images/product-23.svg',category:'Cosmétiques',rating:4.7,new:true,description:"Coffret de soins visage pour une routine beauté quotidienne."},
  {id:24,name:'Parfum femme premium',price:28000,image:'images/product-24.svg',category:'Cosmétiques',rating:4.8,description:"Parfum féminin élégant au format pratique, idéal pour une utilisation quotidienne."},
  {id:25,name:'T-shirt premium unisexe',price:12000,image:'images/product-25.svg',category:'Vêtements',rating:4.6,description:"T-shirt unisexe confortable et facile à porter au quotidien."},
  {id:26,name:'Ensemble streetwear',price:32000,image:'images/product-26.svg',category:'Vêtements',rating:4.7,description:"Ensemble streetwear tendance pour une tenue urbaine décontractée."},
  {id:27,name:'Sneakers Nike style sport',price:45000,image:'images/product-27.svg',category:'Chaussures',rating:4.8,new:true,description:"Sneakers sport au design dynamique, adaptées aux sorties et à la marche."},
  {id:28,name:'Sneakers urbaines',price:38000,image:'images/product-28.svg',category:'Chaussures',rating:4.5,description:"Sneakers urbaines confortables pour accompagner vos tenues quotidiennes."},
  {id:29,name:'Menu restaurant — Grillades',price:8500,image:'images/brochette.jpeg',category:'Restaurant',rating:4.8,new:true,description:"Assortiment de grillades préparées à la commande, idéal pour un repas gourmand."},
  {id:30,name:'Burger gourmet & frites',price:6500,image:'images/burger.jpeg',category:'Restaurant',rating:4.7,description:"Burger gourmet accompagné de frites, servi pour un repas rapide et généreux."},
  {id:31,name:'Burger maison XL',price:5500,image:'images/burger2.jpeg',category:'Restaurant',rating:4.6,description:"Burger maison XL avec garniture généreuse pour les grandes faims."},
  {id:32,name:'Chawarma poulet',price:2500,image:'images/chawarma.jpeg',category:'Restaurant',rating:4.7,description:"Chawarma au poulet préparé avec garniture et sauce, idéal pour un repas rapide."},
  {id:33,name:'Fataya (portion de 5)',price:2000,image:'images/fataya.jpeg',category:'Restaurant',rating:4.5,description:"Portion de cinq fatayas croustillants, parfaite à partager ou pour une petite faim."},
  {id:34,name:'Pizza maison',price:6000,image:'images/pizza.jpeg',category:'Restaurant',rating:4.7,description:"Pizza maison généreuse, préparée pour un repas convivial."},
  {id:35,name:'Poulet pané & frites',price:4500,image:'images/poulet-pane.jpeg',category:'Restaurant',rating:4.6,description:"Poulet pané croustillant accompagné de frites."},
  {id:36,name:'Tacos poulet',price:3500,image:'images/tacos.jpeg',category:'Restaurant',rating:4.6,description:"Tacos au poulet généreux, pratique pour un repas rapide."},
  {id:37,name:'Jus de bissap frais',price:1000,image:'images/jusbissap.webp',category:'Restaurant',rating:4.8,description:"Jus de bissap frais, boisson traditionnelle rafraîchissante."}
];

const BUSINESS_WHATSAPP='221782759595';
const DAKAR_CENTER=[14.6928,-17.4467];
const TRACKING_STEPS=['Commande reçue','En préparation','En cours de livraison','Livré'];
const TRACKING_ROUTE=[[14.6928,-17.4467],[14.7000,-17.4550],[14.7100,-17.4650],[14.7200,-17.4700],[14.7300,-17.4750],[14.7400,-17.4467]];
let activeCategory='Tous';
let searchTerm='';
let cart=loadCart();
let favs=loadFavs();
let liveMap,userMarker,userAccuracyCircle,watchId,trackingMap,trackingMarker,trackingRouteLine,trackingInterval,trackingStepIndex=0;
let authMode='login';

const $=id=>document.getElementById(id);
const money=n=>`${Number(n).toLocaleString('fr-FR')} F`;

document.addEventListener('click',e=>{
  const btn=e.target.closest('#subscribeBtn');
  if(!btn)return;
  const email=prompt('Entrez votre adresse e-mail pour vous abonner à BABA Express :');
  if(email===null)return;
  const value=email.trim().toLowerCase();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))return alert('Veuillez entrer une adresse e-mail valide.');
  localStorage.setItem('babaSubscriber',value);
  alert('Merci ! Votre abonnement BABA Express est enregistré.');
});

window.addEventListener('DOMContentLoaded',()=>{
  renderCategoryFilters();renderProducts();updateCartCount();restoreTheme();$('closeProductDetail').addEventListener('click',closeProductDetail);
  $('cartIcon').addEventListener('click',openCart);initHomeBanners();$('closeCart').addEventListener('click',closeCart);
  $('closeTicket').addEventListener('click',closeTicket);$('printTicketBtn').addEventListener('click',printTicket);
  $('checkoutBtn').addEventListener('click',checkout);$('locateBtn').addEventListener('click',locateUser);$('trackBtn').addEventListener('click',trackPackage);
  $('productSearch').addEventListener('input',e=>{searchTerm=e.target.value.trim().toLowerCase();renderProducts()});$('clearSearch').addEventListener('click',()=>{$('productSearch').value='';searchTerm='';renderProducts();$('productSearch').focus()});
  $('themeToggle').addEventListener('click',toggleTheme);$('closeAuth').addEventListener('click',closeAuth);$('authForm').addEventListener('submit',handleAuth);
  document.querySelectorAll('.auth-tab').forEach(t=>t.addEventListener('click',()=>setAuthMode(t.dataset.auth)));
  document.querySelectorAll('.service-open').forEach(btn=>btn.addEventListener('click',()=>openService(btn.dataset.service)));
  document.querySelectorAll('.category-shortcut').forEach(btn=>btn.addEventListener('click',()=>{activeCategory=btn.dataset.shortcut;renderCategoryFilters();renderProducts();$('products').scrollIntoView({behavior:'smooth'});}));$('closeService').addEventListener('click',closeService);$('serviceForm').addEventListener('submit',submitService);
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});$('navMenu').classList.remove('active');$('hamburger').classList.remove('active')}}));
  $('hamburger').addEventListener('click',()=>{$('navMenu').classList.toggle('active');$('hamburger').classList.toggle('active')});
  window.addEventListener('click',e=>{['cartModal','ticketModal','authModal','serviceModal','productDetailModal'].forEach(id=>{const m=$(id);if(e.target===m)m.classList.remove('open')})});
  initLiveMap();
  $('productsGrid').addEventListener('click',onGridClick);$('clearCartBtn').addEventListener('click',clearCart);
});

const FALLBACK_IMG='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#e8edf5"/><text x="100" y="118" font-size="70" text-anchor="middle">🛍️</text></svg>');
function imgFallback(img){img.onerror=null;img.src=FALLBACK_IMG}
function loadCart(){try{const raw=JSON.parse(localStorage.getItem('babaCart')||'[]');if(!Array.isArray(raw))return[];const out=[];raw.forEach(x=>{const id=Number(x&&x.id),q=Math.floor(Number(x&&x.quantity));if(!products.some(p=>p.id===id)||!(q>0))return;const e=out.find(o=>o.id===id);if(e)e.quantity=Math.min(99,e.quantity+q);else out.push({id,quantity:Math.min(99,q)})});return out}catch(_){return[]}}
function loadFavs(){try{const f=JSON.parse(localStorage.getItem('babaFavs')||'[]');return Array.isArray(f)?f.map(Number):[]}catch(_){return[]}}
function cartLines(){return cart.map(c=>({...products.find(p=>p.id===c.id),quantity:c.quantity}))}
let toastTimer;
function showToast(msg){const t=$('toast');if(!t)return;t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),1800)}

function renderCategoryFilters(){const c=$('categoryFilters');const cats=['Tous','Favoris',...new Set(products.map(p=>p.category))];c.innerHTML=cats.map(cat=>`<button class="category-btn ${cat===activeCategory?'active':''}" data-category="${cat}">${cat==='Favoris'?'❤ Favoris':cat}</button>`).join('');c.querySelectorAll('.category-btn').forEach(b=>b.addEventListener('click',()=>{activeCategory=b.dataset.category;renderCategoryFilters();renderProducts()}))}
function renderProducts(){
  const grid=$('productsGrid');
  const filtered=products.filter(p=>(activeCategory==='Tous'||(activeCategory==='Favoris'?favs.includes(p.id):p.category===activeCategory))&&(!searchTerm||`${p.name} ${p.category}`.toLowerCase().includes(searchTerm)));
  $('productCounter').textContent=`${filtered.length} produit${filtered.length>1?'s':''}`;
  grid.innerHTML=filtered.map((p,i)=>`<article class="product-card" data-id="${p.id}" style="animation-delay:${i*35}ms">
    <div class="product-image ${p.new?'new':''}">
      <button type="button" class="fav-btn ${favs.includes(p.id)?'active':''}" data-fav="${p.id}" aria-label="Ajouter aux favoris"><i class="fas fa-heart"></i></button>
      <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="imgFallback(this)">
    </div>
    <div class="product-info">
      <span class="product-category">${escapeHtml(p.category)}</span>
      <h3>${escapeHtml(p.name)}</h3>
      <div class="product-rating">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}<span style="color:var(--muted);margin-left:.4rem">(${p.rating})</span></div>
      <div class="product-price">${money(p.price)}</div>
      <div class="product-actions">
        <button type="button" class="product-details" data-details="${p.id}"><i class="fas fa-eye"></i> Détails</button>
        <button type="button" class="product-add" data-add="${p.id}"><i class="fas fa-cart-plus"></i> Ajouter</button>
      </div>
    </div>
  </article>`).join('');
  $('emptyProducts').hidden=filtered.length>0;
}
function onGridClick(e){
  const add=e.target.closest('[data-add]');if(add){addToCart(Number(add.dataset.add),add);return}
  const detail=e.target.closest('[data-details]');if(detail){openProductDetail(Number(detail.dataset.details));return}
  const fav=e.target.closest('[data-fav]');if(fav)toggleFav(Number(fav.dataset.fav),fav);
}
function openProductDetail(id){
  const p=products.find(x=>x.id===id); if(!p)return;
  const modal=$('productDetailModal'), body=$('productDetailBody');
  body.innerHTML=`<div class="product-detail-layout">
    <div class="product-detail-image"><img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="imgFallback(this)"></div>
    <div class="product-detail-info">
      <span class="product-category">${escapeHtml(p.category)}</span>
      <h2>${escapeHtml(p.name)}</h2>
      <div class="product-rating">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))} <span>(${p.rating}/5)</span></div>
      <div class="product-detail-price">${money(p.price)}</div>
      <p class="product-description">${escapeHtml(p.description || 'Produit sélectionné par BABA Express. Qualité, disponibilité et livraison à Dakar selon les conditions affichées.')}</p>
      <ul class="product-specs">
        <li><i class="fas fa-check-circle"></i><span>Catégorie</span><strong>${escapeHtml(p.category)}</strong></li>
        <li><i class="fas fa-truck"></i><span>Livraison</span><strong>Dakar & environs</strong></li>
        <li><i class="fas fa-shield-alt"></i><span>Service</span><strong>BABA Express</strong></li>
      </ul>
      <button type="button" class="product-add detail-add" data-detail-add="${p.id}"><i class="fas fa-cart-plus"></i> Ajouter au panier</button>
    </div>
  </div>`;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  body.querySelector('[data-detail-add]').addEventListener('click',function(){addToCart(p.id,this);});
}
function closeProductDetail(){$('productDetailModal').classList.remove('open');$('productDetailModal').setAttribute('aria-hidden','true')}

function toggleFav(id,btn){
  favs=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id];
  try{localStorage.setItem('babaFavs',JSON.stringify(favs))}catch(_){}
  const on=favs.includes(id);showToast(on?'Ajouté aux favoris ❤':'Retiré des favoris');
  if(activeCategory==='Favoris')renderProducts();else if(btn)btn.classList.toggle('active',on);
}
function addToCart(id,btn){
  const p=products.find(x=>x.id===id);if(!p)return;
  const line=cart.find(x=>x.id===id);
  if(line){if(line.quantity>=99){showToast('Quantité maximale atteinte');return}line.quantity++}else cart.push({id,quantity:1});
  persistCart();updateCartCount();updateCartModal();showToast(`${p.name} ajouté au panier`);
  if(btn){btn.innerHTML='<i class="fas fa-check"></i> Ajouté !';clearTimeout(btn._t);btn._t=setTimeout(()=>{btn.innerHTML='<i class="fas fa-cart-plus"></i> Ajouter au panier'},900)}
}
function persistCart(){try{localStorage.setItem('babaCart',JSON.stringify(cart))}catch(_){}}
function updateCartCount(){$('cartCount').textContent=cart.reduce((s,i)=>s+i.quantity,0)}
function openCart(){updateCartModal();$('cartModal').classList.add('open')}
function closeCart(){$('cartModal').classList.remove('open')}
function updateCartModal(){
  const box=$('cartItems'),lines=cartLines();
  $('clearCartBtn').hidden=!lines.length;
  if(!lines.length){box.innerHTML='<p style="text-align:center;color:var(--muted);padding:2rem">Votre panier est vide.</p>';$('cartTotal').textContent='0 F';return}
  box.innerHTML=lines.map(i=>`<div class="cart-item"><img src="${i.image}" alt="${escapeHtml(i.name)}" onerror="imgFallback(this)"><div class="cart-item-info"><h4>${escapeHtml(i.name)}</h4><p>${money(i.price)}</p><div class="quantity-controls"><button type="button" class="quantity-btn" data-q="${i.id}" data-change="-1">−</button><strong>${i.quantity}</strong><button type="button" class="quantity-btn" data-q="${i.id}" data-change="1">+</button></div></div><button type="button" class="remove-item" data-remove="${i.id}" aria-label="Supprimer"><i class="fas fa-trash"></i></button></div>`).join('');
  box.querySelectorAll('[data-q]').forEach(b=>b.addEventListener('click',()=>updateQuantity(Number(b.dataset.q),Number(b.dataset.change))));
  box.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>removeFromCart(Number(b.dataset.remove))));
  $('cartTotal').textContent=money(lines.reduce((s,i)=>s+i.price*i.quantity,0));
}
function updateQuantity(id,change){const i=cart.find(x=>x.id===id);if(!i)return;i.quantity=Math.min(99,i.quantity+change);if(i.quantity<=0)cart=cart.filter(x=>x.id!==id);persistCart();updateCartCount();updateCartModal()}
function removeFromCart(id){cart=cart.filter(x=>x.id!==id);persistCart();updateCartCount();updateCartModal()}
function clearCart(){if(!cart.length)return;if(!confirm('Vider tout le panier ?'))return;cart=[];persistCart();updateCartCount();updateCartModal()}

function checkout(){if(!cart.length){alert('Votre panier est vide.');return}const name=$('customerName').value.trim(),phone=$('customerPhone').value.trim(),address=$('deliveryAddress').value.trim(),payment=$('paymentMethod').value;if(!name||!phone||!address){alert('Merci de renseigner votre nom, téléphone et adresse.');return}const items=cartLines(),total=items.reduce((s,i)=>s+i.price*i.quantity,0),orderNumber=generateOrderNumber(),date=new Date();showTicket(orderNumber,date,name,phone,address,total,items,payment,'Commande');sendOrderToWhatsApp(orderNumber,name,phone,address,total,items,payment);cart=[];persistCart();updateCartCount();updateCartModal();$('customerName').value='';$('customerPhone').value='';$('deliveryAddress').value='';closeCart()}
function generateOrderNumber(prefix='BE'){return `${prefix}-${Date.now().toString().slice(-6)}${Math.floor(100+Math.random()*900)}`}
function sendOrderToWhatsApp(orderNumber,name,phone,address,total,items,payment,service='Commande'){const lines=[`🛒 *BABA Express — ${service}*`,`Ticket: ${orderNumber}`,`👤 Client: ${name}`,`📞 Téléphone: ${phone}`,`📍 Adresse: ${address}`,...items.length?['','Articles:',...items.map(i=>`- ${i.name} x${i.quantity} = ${money(i.price*i.quantity)}`)]:[],``,`💰 Total: ${money(total)}`,`💳 Paiement: ${payment}`];window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`,'_blank')}
function showTicket(orderNumber,date,name,phone,address,total,items,payment,title='Commande'){const itemHtml=items.map(i=>`<div class="ticket-line"><span>${i.name} x${i.quantity}</span><span>${money(i.price*i.quantity)}</span></div>`).join('');$('ticketBody').innerHTML=`<div class="ticket-body"><div class="ticket-header"><h2><i class="fas fa-truck"></i> BABA Express</h2><p>${title}</p></div><div class="ticket-meta"><div>N° : <strong>${orderNumber}</strong></div><div>${date.toLocaleDateString('fr-FR')} à ${date.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}</div></div>${itemHtml}<div class="ticket-total"><span>Total</span><span>${money(total)}</span></div><div class="ticket-address"><strong>Client :</strong> ${escapeHtml(name)}<br><strong>Téléphone :</strong> ${escapeHtml(phone)}<br><strong>Adresse :</strong> ${escapeHtml(address)}<br><strong>Paiement :</strong> ${escapeHtml(payment)}</div></div>`;$('ticketModal').classList.add('open')}
function closeTicket(){$('ticketModal').classList.remove('open')}
function printTicket(){const html=$('ticketBody').innerHTML;const w=window.open('','_blank');if(!w){alert('Autorisez les fenêtres pop-up pour imprimer le ticket.');return}w.document.write(`<html><head><title>Ticket BABA Express</title><style>body{font-family:Arial;padding:25px;max-width:500px;margin:auto}.ticket-header{text-align:center;border-bottom:2px dashed #1e3a8a;padding-bottom:12px}.ticket-header h2{color:#1e3a8a}.ticket-line,.ticket-total{display:flex;justify-content:space-between;padding:7px 0}.ticket-line{border-bottom:1px dotted #ddd}.ticket-total{font-weight:bold;border-top:2px dashed #1e3a8a;margin-top:10px;padding-top:10px;color:#1e3a8a}.ticket-address{margin-top:15px;background:#f7f7f7;padding:12px;border-radius:8px;font-size:13px}</style></head><body>${html}</body></html>`);w.document.close();w.focus();w.print()}

function openAuth(){const user=JSON.parse(localStorage.getItem('babaUser')||'null');if(user){if(confirm(`Connecté en tant que ${user.name||user.email}. Voulez-vous vous déconnecter ?`)){localStorage.removeItem('babaUser');updateAccountButton();alert('Vous êtes déconnecté.')}return}$('authModal').classList.add('open')}
function closeAuth(){$('authModal').classList.remove('open')}
function setAuthMode(mode){authMode=mode;document.querySelectorAll('.auth-tab').forEach(t=>t.classList.toggle('active',t.dataset.auth===mode));$('authTitle').textContent=mode==='login'?'Connexion':'Créer un compte';$('authSubmit').textContent=mode==='login'?'Se connecter':'S’inscrire';$('authName').hidden=mode==='login';$('authName').required=mode==='register'}
async function hashPw(email,pw){try{const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(email+'|'+pw));return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('')}catch(_){return 'plain:'+pw}}
async function handleAuth(e){e.preventDefault();const email=$('authEmail').value.trim().toLowerCase(),hash=await hashPw(email,$('authPassword').value);let users=JSON.parse(localStorage.getItem('babaUsers')||'[]');if(authMode==='register'){const name=$('authName').value.trim();if(!name)return alert('Entrez votre nom.');if(users.some(u=>u.email===email))return alert('Cet email existe déjà.');users.push({name,email,hash});localStorage.setItem('babaUsers',JSON.stringify(users));localStorage.setItem('babaUser',JSON.stringify({name,email}));alert('Compte créé avec succès.');closeAuth();updateAccountButton();return}const u=users.find(x=>x.email===email&&x.hash===hash);if(!u)return alert('Email ou mot de passe incorrect.');localStorage.setItem('babaUser',JSON.stringify({name:u.name,email:u.email}));closeAuth();updateAccountButton();alert(`Bienvenue ${u.name} !`)}
function openService(type){
  $('serviceModal').dataset.type=type;
  const titles={course:'Réserver une course rapide',taxi:'Réserver un taxi privé',insurance:'Demander une assurance',apartment:'Chercher un appartement meublé'};
  $('serviceTitle').textContent=titles[type]||'Demande de service';
  const dynamic=$('serviceDynamicFields');
  if(type==='insurance'){
    dynamic.innerHTML='<select id="insuranceType" required><option value="">Type d’assurance</option><option>Auto / Moto</option><option>Habitation</option><option>Santé</option><option>Voyage</option><option>Commerce / entreprise</option><option>Autre</option></select><input id="insuranceNeed" type="text" placeholder="Besoin / bien à assurer" required><input id="serviceDate" type="date" required>';
  }else if(type==='apartment'){
    dynamic.innerHTML='<select id="apartmentZone" required><option value="">Zone de Dakar</option><option>Almadies</option><option>Mermoz / Sacré-Cœur</option><option>Ouakam</option><option>Point E</option><option>Plateau</option><option>Fann</option><option>Parcelles Assainies</option><option>Pikine</option><option>Guédiawaye</option><option>Yoff</option><option>Autre zone de Dakar</option></select><select id="apartmentType" required><option value="">Type de logement</option><option>Studio</option><option>F2</option><option>F3</option><option>F4+</option></select><input id="serviceDate" type="date" required>';
  }else{
    dynamic.innerHTML='<input id="servicePickup" type="text" placeholder="Lieu de départ" required><input id="serviceDestination" type="text" placeholder="Destination" required><input id="serviceDate" type="datetime-local" required>';
  }
  $('serviceModal').classList.add('open');
}
function closeService(){$('serviceModal').classList.remove('open')}
function submitService(e){
  e.preventDefault();
  const type=$('serviceModal').dataset.type,name=$('serviceName').value.trim(),phone=$('servicePhone').value.trim(),note=$('serviceNote').value.trim(),date=$('serviceDate').value;
  const ticket=generateOrderNumber(type==='course'?'CR':type==='taxi'?'TX':type==='insurance'?'AS':'AP'),d=new Date();
  let serviceLabel,details=[];
  if(type==='insurance'){serviceLabel='Assurance';details=[`🛡️ Type: ${$('insuranceType').value}`,`📋 Besoin: ${$('insuranceNeed').value}`]}
  else if(type==='apartment'){serviceLabel='Location appartement meublé';details=[`🏠 Zone: ${$('apartmentZone').value}`,`🛏️ Type: ${$('apartmentType').value}`]}
  else {serviceLabel=type==='course'?'Course rapide':'Taxi privé';details=[`📍 Départ: ${$('servicePickup').value}`,`🏁 Destination: ${$('serviceDestination').value}`]}
  const text=[`📦 *BABA Express — ${serviceLabel}*`,`Ticket: ${ticket}`,`👤 ${name}`,`📞 ${phone}`,...details,`🕒 ${new Date(date).toLocaleString('fr-FR')}`,note?`📝 ${note}`:''].filter(Boolean).join('\n');
  window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(text)}`,'_blank');
  showTicket(ticket,d,name,phone,details.join(' • '),0,[],serviceLabel);closeService();e.target.reset();
}

function initHomeBanners(){
  const banners=[...document.querySelectorAll('.home-banner')],dots=[...document.querySelectorAll('#bannerDots button')];
  if(!banners.length)return; let index=0,timer;
  function show(i){index=(i+banners.length)%banners.length;banners.forEach((b,n)=>b.classList.toggle('active',n===index));dots.forEach((d,n)=>d.classList.toggle('active',n===index));}
  dots.forEach(d=>d.addEventListener('click',()=>{show(Number(d.dataset.slide));clearInterval(timer);timer=setInterval(()=>show(index+1),5000)}));
  timer=setInterval(()=>show(index+1),5000);
}
function initVoiceSearch(){
  const btn=$('voiceSearchBtn'),input=$('productSearch'); if(!btn||!input)return;
  const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!Recognition){btn.title='Recherche vocale non disponible sur ce navigateur';btn.addEventListener('click',()=>alert('La recherche vocale nécessite un navigateur compatible, comme Chrome ou Edge.'));return;}
  const recognition=new Recognition(); recognition.lang='fr-FR'; recognition.interimResults=false; recognition.maxAlternatives=1;
  recognition.onstart=()=>{btn.classList.add('listening');btn.innerHTML='<i class="fas fa-microphone-lines"></i>';btn.title='Écoute en cours…';};
  recognition.onend=()=>{btn.classList.remove('listening');btn.innerHTML='<i class="fas fa-microphone"></i>';btn.title='Recherche vocale';};
  recognition.onerror=()=>{btn.classList.remove('listening');alert('Impossible d’utiliser le microphone. Vérifiez l’autorisation du navigateur.');};
  recognition.onresult=e=>{input.value=e.results[0][0].transcript;searchTerm=input.value.trim().toLowerCase();renderProducts();document.querySelector('#products').scrollIntoView({behavior:'smooth'});};
  btn.addEventListener('click',()=>{try{recognition.start()}catch(_){}});
}

function toggleTheme(){document.body.classList.toggle('dark-theme');const dark=document.body.classList.contains('dark-theme');localStorage.setItem('babaTheme',dark?'dark':'light');$('themeToggle').innerHTML=`<i class="fas fa-${dark?'sun':'moon'}"></i>`}
function restoreTheme(){if(localStorage.getItem('babaTheme')==='dark'){document.body.classList.add('dark-theme');$('themeToggle').innerHTML='<i class="fas fa-sun"></i>'}}
function scrollToProducts(){$('products').scrollIntoView({behavior:'smooth'})}
function escapeHtml(v){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function initLiveMap(){const el=$('liveMap');if(!el||typeof L==='undefined')return;liveMap=L.map(el).setView(DAKAR_CENTER,12);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors',maxZoom:19}).addTo(liveMap);L.marker(DAKAR_CENTER).addTo(liveMap).bindPopup('BABA Express — Dakar').openPopup()}
function locateUser(){if(!navigator.geolocation)return alert('La géolocalisation n’est pas disponible.');const btn=$('locateBtn');btn.disabled=true;$('mapStatus').textContent='Localisation en cours...';if(watchId)navigator.geolocation.clearWatch(watchId);watchId=navigator.geolocation.watchPosition(pos=>{const{latitude,longitude,accuracy}=pos.coords,latlng=[latitude,longitude];if(!userMarker){userMarker=L.circleMarker(latlng,{radius:8,color:'#3b82f6',fillColor:'#3b82f6',fillOpacity:.9}).addTo(liveMap).bindPopup('Vous êtes ici');userAccuracyCircle=L.circle(latlng,{radius:accuracy,color:'#3b82f6',fillColor:'#3b82f6',fillOpacity:.1}).addTo(liveMap);liveMap.setView(latlng,15)}else{userMarker.setLatLng(latlng);userAccuracyCircle.setLatLng(latlng);userAccuracyCircle.setRadius(accuracy)}$('mapStatus').textContent=`Position mise à jour • précision ${Math.round(accuracy)} m`;btn.disabled=false},err=>{btn.disabled=false;$('mapStatus').textContent=err.code===1?'Localisation refusée par le navigateur.':'Impossible de récupérer votre position.'},{enableHighAccuracy:true,maximumAge:5000,timeout:10000})}
function trackPackage(){const code=$('trackingInput').value.trim();if(!code)return alert('Entrez un numéro de suivi.');$('trackingResult').hidden=false;trackingStepIndex=1;renderTimeline();$('etaText').textContent='Livraison estimée sous 24h 🚚';if(typeof L==='undefined'){$('etaText').textContent='Carte indisponible (connexion requise).';return}if(!trackingMap){trackingMap=L.map('trackingMap').setView(TRACKING_ROUTE[0],12);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(trackingMap);trackingRouteLine=L.polyline(TRACKING_ROUTE,{color:'#3b82f6',weight:4,opacity:.6}).addTo(trackingMap);trackingMarker=L.marker(TRACKING_ROUTE[0]).addTo(trackingMap)}trackingMarker.setLatLng(TRACKING_ROUTE[0]).bindPopup(`Colis ${code}`);trackingMap.fitBounds(trackingRouteLine.getBounds(),{padding:[20,20]});if(trackingInterval)clearInterval(trackingInterval);let idx=0;trackingInterval=setInterval(()=>{idx++;if(idx>=TRACKING_ROUTE.length){clearInterval(trackingInterval);trackingStepIndex=3;renderTimeline();$('etaText').textContent='Colis livré ✅';return}trackingMarker.setLatLng(TRACKING_ROUTE[idx]);if(idx===2){trackingStepIndex=2;renderTimeline()}},1800)}
function renderTimeline(){$('trackingTimeline').innerHTML=TRACKING_STEPS.map((s,i)=>`<li class="${i<=trackingStepIndex?'done':''}">${s}</li>`).join('')}
