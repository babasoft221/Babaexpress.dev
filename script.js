const products = [
  {id:1,name:"Zinger Burger",cat:"Burgers",price:3500,emoji:"🍔",desc:"Pain brioché, poulet croustillant, salade et sauce maison",tag:"POPULAIRE"},
  {id:2,name:"Beef Burger",cat:"Burgers",price:4000,emoji:"🍔",desc:"Steak haché, cheddar, oignons et sauce spéciale"},
  {id:3,name:"Chicken Burger",cat:"Burgers",price:3200,emoji:"🍔",desc:"Poulet grillé, fromage, laitue et sauce maison"},
  {id:4,name:"Cheese Burger",cat:"Burgers",price:3000,emoji:"🍔",desc:"Steak, double fromage et sauce burger"},
  {id:5,name:"Fajita Pizza",cat:"Pizzas",price:5000,emoji:"🍕",desc:"Poulet fajita, poivrons, olives et fromage",tag:"BEST"},
  {id:6,name:"Pizza Royale",cat:"Pizzas",price:6000,emoji:"🍕",desc:"Viande, poulet, champignons, olives et mozzarella"},
  {id:7,name:"Pizza 4 Fromages",cat:"Pizzas",price:5500,emoji:"🍕",desc:"Mélange de quatre fromages fondants"},
  {id:8,name:"Pizza Pepperoni",cat:"Pizzas",price:5200,emoji:"🍕",desc:"Pepperoni, sauce tomate et mozzarella"},
  {id:9,name:"Tacos Poulet",cat:"Tacos",price:3000,emoji:"🌯",desc:"Poulet, frites, fromage et sauce fromagère",tag:"HOT"},
  {id:10,name:"Tacos Viande",cat:"Tacos",price:3500,emoji:"🌯",desc:"Viande hachée, frites, fromage et sauce"},
  {id:11,name:"Chicken Box",cat:"Poulet",price:4500,emoji:"🍗",desc:"Poulet croustillant, frites et sauce"},
  {id:12,name:"Poulet Entier",cat:"Poulet",price:7500,emoji:"🍗",desc:"Poulet rôti entier, accompagnement au choix"},
  {id:13,name:"Chawarma Royale",cat:"Chawarma",price:3000,emoji:"🥙",desc:"Chawarma, fromage, crudités et sauce maison"},
  {id:14,name:"Chawarma Simple",cat:"Chawarma",price:2500,emoji:"🥙",desc:"Poulet chawarma, crudités et sauce"},
  {id:15,name:"Frites Maison",cat:"Accompagnements",price:1500,emoji:"🍟",desc:"Frites croustillantes préparées sur place"},
  {id:16,name:"Nuggets",cat:"Accompagnements",price:2000,emoji:"🍗",desc:"6 nuggets croustillants avec sauce"},
  {id:17,name:"Coca-Cola",cat:"Boissons",price:1000,emoji:"🥤",desc:"Canette fraîche 33cl"},
  {id:18,name:"Sprite",cat:"Boissons",price:1000,emoji:"🥤",desc:"Canette fraîche 33cl"},
  {id:19,name:"Eau minérale",cat:"Boissons",price:500,emoji:"💧",desc:"Bouteille 50cl"},
  {id:20,name:"Jus Bissap",cat:"Boissons",price:1200,emoji:"🧃",desc:"Jus de bissap frais maison"}
];

let cart = JSON.parse(localStorage.getItem("fastgo_cart") || "[]");
let activeCategory = "Tous";
const DELIVERY_FEE = 1000;

const $ = s => document.querySelector(s);
const money = n => new Intl.NumberFormat("fr-FR").format(n) + " FCFA";

function saveCart(){localStorage.setItem("fastgo_cart",JSON.stringify(cart));}
function cartCount(){return cart.reduce((s,i)=>s+i.qty,0)}
function subtotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0)}
function total(){return cart.length ? subtotal()+DELIVERY_FEE : DELIVERY_FEE}

function renderCategories(){
  const cats=["Tous",...new Set(products.map(p=>p.cat))];
  $("#categories").innerHTML=cats.map(c=>`<button class="category ${c===activeCategory?'active':''}" data-cat="${c}">${c}</button>`).join("");
  document.querySelectorAll(".category").forEach(btn=>btn.onclick=()=>{activeCategory=btn.dataset.cat;renderCategories();renderProducts()});
}

function renderProducts(){
  const q=$("#searchInput").value.trim().toLowerCase();
  const filtered=products.filter(p=>(activeCategory==="Tous"||p.cat===activeCategory)&&(!q||`${p.name} ${p.cat}`.toLowerCase().includes(q)));
  $("#productGrid").innerHTML=filtered.map(p=>`
    <article class="product">
      <div class="product-img">
        ${p.tag?`<span class="product-tag">${p.tag}</span>`:""}
        <span>${p.emoji}</span>
      </div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="product-bottom">
        <span class="price">${money(p.price)}</span>
        <button class="add-btn" onclick="addToCart(${p.id})">+ Ajouter</button>
      </div>
    </article>`).join("") || `<p style="grid-column:1/-1;text-align:center;padding:50px;color:#888">Aucun produit trouvé.</p>`;
}

function addToCart(id){
  const p=products.find(x=>x.id===id);
  const found=cart.find(x=>x.id===id);
  if(found) found.qty++;
  else cart.push({...p,qty:1});
  saveCart();renderCart();openCart();
}

function changeQty(id,delta){
  const item=cart.find(x=>x.id===id);
  if(!item)return;
  item.qty+=delta;
  if(item.qty<=0)cart=cart.filter(x=>x.id!==id);
  saveCart();renderCart();
}

function renderCart(){
  $("#cartCount").textContent=cartCount();
  $("#subtotal").textContent=money(subtotal());
  $("#deliveryFee").textContent=cart.length?money(DELIVERY_FEE):"0 FCFA";
  $("#cartTotal").textContent=cart.length?money(total()):"0 FCFA";
  $("#checkoutTotal").textContent=money(total());

  $("#cartEmpty").style.display=cart.length?"none":"block";
  $("#cartItems").innerHTML=cart.map(i=>`
    <div class="cart-line">
      <div class="cart-img">${i.emoji}</div>
      <div>
        <h4>${i.name}</h4>
        <p>${money(i.price)} / unité</p>
        <div class="qty">
          <button onclick="changeQty(${i.id},-1)">−</button>
          <b>${i.qty}</b>
          <button onclick="changeQty(${i.id},1)">+</button>
        </div>
      </div>
      <div class="cart-price">${money(i.price*i.qty)}</div>
    </div>`).join("");
}

function openCart(){
  $("#cartDrawer").classList.add("show");
  $("#cartOverlay").classList.add("show");
}
function closeCart(){
  $("#cartDrawer").classList.remove("show");
  $("#cartOverlay").classList.remove("show");
}

function openCheckout(){
  if(!cart.length){alert("Ajoute au moins un produit au panier.");return}
  $("#checkoutModal").classList.add("show");
  $("#checkoutTotal").textContent=money(total());
}
function closeCheckout(){$("#checkoutModal").classList.remove("show")}

function makeTicketNumber(){
  const now=new Date();
  const stamp=now.getFullYear().toString().slice(-2)+
    String(now.getMonth()+1).padStart(2,"0")+
    String(now.getDate()).padStart(2,"0");
  const rand=Math.floor(1000+Math.random()*9000);
  return `FG-${stamp}-${rand}`;
}

function validateOrder(e){
  e.preventDefault();
  if(!cart.length)return;
  const data=Object.fromEntries(new FormData(e.target).entries());
  const ticket=makeTicketNumber();
  const order={ticket,...data,items:cart.map(x=>({...x})),subtotal:subtotal(),delivery:DELIVERY_FEE,total:total(),date:new Date().toISOString()};
  localStorage.setItem("fastgo_last_order",JSON.stringify(order));

  $("#ticketNumber").textContent=ticket;
  $("#ticketClient").textContent=data.name;
  $("#ticketPhone").textContent=data.phone;
  $("#ticketDistrict").textContent=data.district;
  $("#ticketAddress").textContent=data.address;
  $("#ticketMethod").textContent=data.method;
  $("#ticketItems").innerHTML=cart.map(i=>`
    <div class="ticket-item">
      <span>${i.qty} × ${i.name}</span>
      <b>${money(i.qty*i.price)}</b>
    </div>`).join("")+
    `<div class="ticket-item"><span>Livraison</span><b>${money(DELIVERY_FEE)}</b></div>`;
  $("#ticketTotal").textContent=money(order.total);

  closeCheckout();closeCart();
  $("#ticketModal").classList.add("show");

  cart=[];
  saveCart();renderCart();
  e.target.reset();
}

$("#searchInput").addEventListener("input",renderProducts);
$("#openCartBtn").onclick=openCart;
$("#closeCartBtn").onclick=closeCart;
$("#cartOverlay").onclick=closeCart;
$("#checkoutBtn").onclick=openCheckout;
$("#closeCheckout").onclick=closeCheckout;
$("#checkoutForm").addEventListener("submit",validateOrder);
$("#closeTicket").onclick=()=>$("#ticketModal").classList.remove("show");
$("#newOrder").onclick=()=>$("#ticketModal").classList.remove("show");
$("#printTicket").onclick=()=>window.print();

$("#themeBtn").onclick=()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("fastgo_theme",document.body.classList.contains("dark")?"dark":"light");
};
if(localStorage.getItem("fastgo_theme")==="dark")document.body.classList.add("dark");

renderCategories();
renderProducts();
renderCart();
