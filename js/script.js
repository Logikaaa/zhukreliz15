document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.querySelector('.cart-count');
  const addToCartButtons = document.querySelectorAll('.product button');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCartCount() {
    if (cartCount) cartCount.textContent = cart.length;
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.product');
      const name = product.querySelector('p').innerText;
      const price = parseInt(product.querySelector('span').innerText.replace('₴', '').trim());
      const image = product.querySelector('img').getAttribute('src');

      cart.push({ name, price, image });
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
    });
  });

  updateCartCount();
});
