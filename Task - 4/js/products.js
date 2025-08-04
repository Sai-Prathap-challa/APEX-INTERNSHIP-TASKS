
const products = [
  { name: "AI Assistant", category: "ai", price: 300, rating: 4.8 },
  { name: "Web Builder Kit", category: "web", price: 120, rating: 4.2 },
  { name: "DL Vision Pack", category: "ai", price: 250, rating: 4.7 },
  { name: "UI/UX Tools", category: "web", price: 180, rating: 4.5 } 
];

function filterProducts() {
  const category = document.getElementById('categoryFilter').value;
  const sort = document.getElementById('sortFilter').value;
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  if (sort === "price") filtered.sort((a, b) => a.price - b.price);
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);

  const container = document.getElementById('productList');
  container.innerHTML = '';
  filtered.forEach(product => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${product.name}</h3><p>Price: ₹${product.price}</p><p>Rating: ${product.rating}</p>`;
    div.classList.add('product-item');
    container.appendChild(div);
  });
}

window.onload = filterProducts;
