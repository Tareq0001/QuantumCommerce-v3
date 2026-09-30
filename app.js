let cartCount = 0;
      let totalAmount = 0;
      const sidebar = document.getElementById('cart-sidebar');
      const itemsContainer = document.getElementById('cart-items');
      
      document.getElementById('cart-toggle').onclick = () => sidebar.classList.add('open');
      document.getElementById('close-cart').onclick = () => sidebar.classList.remove('open');
      
      function addToCart() {
        cartCount++;
        totalAmount += 1999;
        document.getElementById('cart-badge').innerText = cartCount;
        
        if (cartCount === 1) itemsContainer.innerHTML = '';
        itemsContainer.innerHTML += '<div class="cart-item"><span>Quantum Book Pro</span><span class="text-amber">$1,999.00</span></div>';
        document.getElementById('total-val').innerText = '$' + totalAmount.toLocaleString() + '.00';
        sidebar.classList.add('open');
      }