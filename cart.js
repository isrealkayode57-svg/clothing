// Get cart
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add item
function addToCart(product) {
  let cart = getCart();
  cart.push(product);
  saveCart(cart);
  updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
  let cart = getCart();
  let count = document.getElementById("cart-count");
  if (count) {
    count.textContent = cart.length;
  }
}
