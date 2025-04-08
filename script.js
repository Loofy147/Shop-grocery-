let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "<h3>سلة الشراء</h3>";
  let total = 0;
  cart.forEach(item => {
    const el = document.createElement("p");
    el.textContent = `${item.name} - ${item.price} د.ج`;
    cartContainer.appendChild(el);
    total += item.price;
  });
  const totalEl = document.createElement("p");
  totalEl.innerHTML = `<strong>المجموع: ${total} د.ج</strong>`;
  cartContainer.appendChild(totalEl);
}
