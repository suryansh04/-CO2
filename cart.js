document.addEventListener('DOMContentLoaded', function() {
    let cart = [];
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const buyButtons = document.querySelectorAll('.buy-btn');
  
    // Create cart modal
    const cartModal = document.createElement('div');
    cartModal.id = 'cart-modal';
    document.body.appendChild(cartModal);
  
    function updateCartCount() {
      cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
  
    function addToCart(product) {
      const existingItem = cart.find(item => item.name === product.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      updateCartCount();
    }
  
    function showCart() {
      cartModal.innerHTML = `
        <div class="cart-modal-content">
          <h2>Your Cart</h2>
          ${cart.map(item => `
            <div class="cart-item">
              <span>${item.name}</span>
              <span>Quantity: ${item.quantity}</span>
              <span>₹${item.price * item.quantity}</span>
            </div>
          `).join('')}
          <div class="cart-total">Total: ₹${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</div>
          <button id="checkout-btn">Checkout</button>
        </div>
      `;
      cartModal.style.display = 'block';
  
      document.getElementById('checkout-btn').addEventListener('click', checkout);
    }
  
    function checkout() {
      alert('Thank you for your purchase!');
      cart = [];
      updateCartCount();
      cartModal.style.display = 'none';
    }
  
    buyButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.product-card');
        const product = {
          name: card.querySelector('.product-title').textContent,
          price: parseFloat(card.querySelector('.price').textContent.replace('₹', ''))
        };
        addToCart(product);
      });
    });
  
    cartIcon.addEventListener('click', function(e) {
      e.preventDefault();
      showCart();
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == cartModal) {
        cartModal.style.display = 'none';
      }
    });
  });