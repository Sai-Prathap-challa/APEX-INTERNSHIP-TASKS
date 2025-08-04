
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  const cartCount = document.getElementById("cart-count");
  const modal = document.getElementById("product-modal");
  const modalDetails = document.getElementById("modal-details");
  const paymentGateway = document.getElementById("payment-gateway");
 
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const products = [
    { id: 1, name: "The Book Thief", price: 12.99, image: "https://i.pinimg.com/564x/6a/63/57/6a635748f80ebd0c512345fded01b317.jpg", reviews: 4.5 },
    { id: 2, name: "iPhone 14 Pro", price: 999.99, image: "https://i.pinimg.com/564x/bc/b6/38/bcb6381b6a9f8aa202d6f21dc3a1e32f.jpg", reviews: 4.8 },
    { id: 3, name: "Cotton Shirt", price: 19.99, image: "https://i.pinimg.com/564x/b5/4d/cc/b54dcc7251f3c2b27a3707e93a9b1ec8.jpg", reviews: 4.2 },
    { id: 4, name: "Herbal Skin Care Set", price: 39.99, image: "https://i.pinimg.com/564x/7d/aa/e9/7daae9eddb9c0bbd5800380731ae0d2f.jpg", reviews: 4.7 }
  ];

  const updateCartUI = () => {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      total += product.price * item.quantity;
      const el = document.createElement("p");
      el.textContent = `${product.name} x${item.quantity} - $${(product.price * item.quantity).toFixed(2)}`;
      cartItemsContainer.appendChild(el);
    });
    totalEl.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img data-src="${product.image}" class="lazy" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <p>⭐ ${product.reviews}</p>
      <button class="view-btn">Quick View</button>
      <button class="add-btn">Add to Cart</button>
    `;
    productList.appendChild(card);

    card.querySelector(".add-btn").addEventListener("click", () => {
      const existing = cart.find(i => i.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id: product.id, quantity: 1 });
      }
      updateCartUI();
    });

    card.querySelector(".view-btn").addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalDetails.innerHTML = `
        <img src="${product.image}" style="width: 100%;">
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <p>⭐ ${product.reviews} / 5.0</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod.</p>
      `;
    });
  });

  document.querySelectorAll(".close-btn").forEach(btn =>
    btn.addEventListener("click", () => {
      modal.classList.add("hidden");
      paymentGateway.classList.add("hidden");
    })
  );

  document.getElementById("checkout-btn").addEventListener("click", () => {
    paymentGateway.classList.remove("hidden");
  });

  document.getElementById("payment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Payment Successful! Thank you for shopping.");
    cart = [];
    updateCartUI();
    paymentGateway.classList.add("hidden");
  });

  // Lazy loading
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => observer.observe(img));
  }

  updateCartUI();
});
