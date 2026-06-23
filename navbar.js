document.body.insertAdjacentHTML("afterbegin", `
  <nav>
    <a href="index.html">Home</a>
    <a href="products.html">Products</a>
    <a href="cart.html">🛒 Cart (<span id="cart-count">0</span>)</a>
  </nav>
`);
updateCartCount();
