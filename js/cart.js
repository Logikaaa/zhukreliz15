document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const clearCartButton = document.getElementById('clear-cart');
  const cartCount = document.querySelector('.cart-count');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <img src="${item.image}" style="width: 80px;">
        <p>${item.name}</p>
        <p><strong>${item.price} грн</strong></p>
      `;
      cartItemsContainer.appendChild(itemElement);
      totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice;
    if (cartCount) cartCount.textContent = cart.length;
  }

  if (clearCartButton) {
    clearCartButton.addEventListener('click', () => {
      localStorage.removeItem('cart');
      cart = [];
      renderCart();
    });
  }

  renderCart();
});
