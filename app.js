document.addEventListener('DOMContentLoaded', () => {

    // ======================================================================
    // === 1. DEFINE YOUR PRODUCTS HERE =====================================
    // ======================================================================
    // Add each bracelet as a new object in this array.
    // Make sure 'id' is unique and image names match your files.
    const products = [
        { id: 1, name: 'design 1', price: '2.00', sku: 'B001' },
        { id: 2, name: 'design 2', price: '2.00', sku: 'B002' },
        { id: 3, name: 'design 3', price: '2.00', sku: 'B003' },
        { id: 4, name: 'design 4', price: '2.00', sku: 'B004' },
        { id: 5, name: 'design 5', price: '2.00', sku: 'B005' },
        { id: 6, name: 'design 6', price: '2.00', sku: 'B006' },
        { id: 7, name: 'design 7', price: '2.00', sku: 'B007' },
        { id: 8, name: 'design 8', price: '2.00', sku: 'B008' },
        { id: 9, name: 'design 9', price: '2.00', sku: 'B009' },
        { id: 10, name: 'design 10', price: '2.00', sku: 'B010' },
        { id: 11, name: 'design 11', price: '2.00', sku: 'B011' },
        { id: 12, name: 'design 12', price: '2.00', sku: 'B012' },
        { id: 13, name: 'design 13', price: '2.00', sku: 'B013' },
        { id: 14, name: 'design 14', price: '2.00', sku: 'B014' },
        { id: 15, name: 'design 15', price: '2.00', sku: 'B015' },
        { id: 16, name: 'design 16', price: '2.00', sku: 'B016' },
        { id: 17, name: 'design 17', price: '2.00', sku: 'B017' },
        { id: 18, name: 'design 18', price: '2.00', sku: 'B018' },
        { id: 19, name: 'design 19', price: '2.00', sku: 'B019' },
        { id: 20, name: 'design 20', price: '2.00', sku: 'B020' },
        { id: 21, name: 'design 21', price: '2.00', sku: 'B021' },
        { id: 22, name: 'design 22', price: '2.00', sku: 'B022' },
        { id: 23, name: 'design 23', price: '2.00', sku: 'B023' },
        { id: 24, name: 'design 24', price: '2.00', sku: 'B024' },
        { id: 25, name: 'design 25', price: '2.00', sku: 'B025' },
        { id: 26, name: 'design 26', price: '2.00', sku: 'B026' },
        { id: 27, name: 'design 27', price: '2.00', sku: 'B027' },
        { id: 28, name: 'design 28', price: '2.00', sku: 'B028' },
        { id: 29, name: 'design 29', price: '2.00', sku: 'B029' },
        { id: 30, name: 'design 30', price: '2.00', sku: 'B030' },
        { id: 31, name: 'design 31', price: '2.00', sku: 'B031' },
        { id: 32, name: 'design 32', price: '2.00', sku: 'B032' },
        { id: 33, name: 'design 33', price: '2.00', sku: 'B033' },
        { id: 34, name: 'design 34', price: '2.00', sku: 'B034' },
        { id: 35, name: 'design 35', price: '2.00', sku: 'B035' },
        { id: 36, name: 'design 36', price: '2.00', sku: 'B036' },
        { id: 37, name: 'design 37', price: '2.00', sku: 'B037' },
        { id: 38, name: 'design 38', price: '2.00', sku: 'B038' },
        { id: 39, name: 'design 39', price: '2.00', sku: 'B039' },
        { id: 40, name: 'design 40', price: '2.00', sku: 'B040' },
        { id: 41, name: 'design 41', price: '2.00', sku: 'B041' },
        { id: 42, name: 'design 42', price: '2.00', sku: 'B042' },
        { id: 43, name: 'design 43', price: '2.00', sku: 'B043' },
        { id: 44, name: 'design 44', price: '2.00', sku: 'B044' },
        { id: 45, name: 'design 45', price: '2.00', sku: 'B045' },
        { id: 46, name: 'design 46', price: '2.00', sku: 'B046' },
        { id: 47, name: 'design 47', price: '2.00', sku: 'B047' },
        { id: 48, name: 'design 48', price: '2.00', sku: 'B048' },
        { id: 49, name: 'design 49', price: '2.00', sku: 'B049' },
        { id: 50, name: 'design 50', price: '2.00', sku: 'B050' },
        { id: 51, name: 'design 51', price: '2.00', sku: 'B051' },
        { id: 52, name: 'design 52', price: '2.00', sku: 'B052' },
        { id: 53, name: 'design 53', price: '2.00', sku: 'B053' },
        { id: 54, name: 'design 54', price: '2.00', sku: 'B054' },
        { id: 55, name: 'design 55', price: '2.00', sku: 'B055' },
        { id: 56, name: 'design 56', price: '2.00', sku: 'B056' },
        { id: 57, name: 'design 57', price: '2.00', sku: 'B057' },
        { id: 58, name: 'design 58', price: '2.00', sku: 'B058' },
        { id: 59, name: 'design 59', price: '2.00', sku: 'B059' }
        // ... Add all 60+ of your bracelets here following this format
    ];
    
    const productGrid = document.getElementById('product-grid');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    let cart = []; // This array will hold the items in the shopping cart

    // ======================================================================
    // === 2. CORE WEBSITE FUNCTIONALITY ====================================
    // ======================================================================

    // Function to display all products on the page
    function renderProducts() {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-container">
                    <img src="images/${product.id}-a.jpg" alt="${product.name}" class="product-image default-image">
                    <img src="images/${product.id}-b.jpg" alt="${product.name} on hand" class="product-image hover-image">
                </div>
                <h3>${product.name}</h3>
                <p>$${parseFloat(product.price).toFixed(2)}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            `;
            productGrid.appendChild(card);
        });
    }

    // Function to add a product to the cart
    function addToCart(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.id);
            const productToAdd = products.find(p => p.id === productId);
            cart.push(productToAdd);
            renderCart();
        }
    }

    // Function to update what's shown in the cart section
    function renderCart() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is currently empty.</p>';
        } else {
            cartItemsContainer.innerHTML = '';
            let total = 0;
            cart.forEach(item => {
                const cartItem = document.createElement('p');
                cartItem.textContent = `${item.name} - $${parseFloat(item.price).toFixed(2)}`;
                cartItemsContainer.appendChild(cartItem);
                total += parseFloat(item.price);
            });
            cartTotalSpan.textContent = total.toFixed(2);
        }
    }
    
    // Initial setup when page loads
    renderProducts();
    productGrid.addEventListener('click', addToCart);

    // ======================================================================
    // === 3. PAYPAL & ORDER FULFILLMENT INTEGRATION ========================
    // ======================================================================

    paypal.Buttons({
        // Set up the transaction details when the PayPal button is clicked
        createOrder: (data, actions) => {
            if (cart.length === 0) {
                alert('Your cart is empty. Please add a bracelet before checking out.');
                return actions.reject(); // Stops the transaction
            }

            const totalValue = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
            const purchaseItems = cart.map(item => ({
                name: item.name,
                sku: item.sku,
                unit_amount: { currency_code: 'USD', value: item.price },
                quantity: '1'
            }));
            
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: totalValue,
                        breakdown: { item_total: { currency_code: 'USD', value: totalValue } }
                    },
                    items: purchaseItems
                }]
            });
        },

        // Finalize the transaction after the customer approves payment
        onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
                // This 'details' object contains all the vital info from PayPal
                sendOrderConfirmationEmail(details);
                alert(`Thank you for your order, ${details.payer.name.given_name}! A confirmation is being sent.`);
                
                // Clear the cart and update the display
                cart = [];
                renderCart();
            });
        },

        onError: err => {
            console.error('An error occurred with the PayPal transaction:', err);
            alert('An error occurred with your payment. Please try again.');
        }
    }).render('#paypal-button-container');

    // Function to send order data to your email using Web3Forms
    function sendOrderConfirmationEmail(orderDetails) {
        // *** IMPORTANT: PASTE YOUR WEB3FORMS ACCESS KEY HERE ***
        const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

        const purchasedItems = orderDetails.purchase_units[0].items.map(item => 
            `- ${item.name} (${item.quantity} x $${item.unit_amount.value})`
        ).join('\n');
        
        const shipping = orderDetails.purchase_units[0].shipping;
        const fullAddress = `${shipping.name.full_name}\n${shipping.address.address_line_1}\n${shipping.address.admin_area_2}, ${shipping.address.admin_area_1} ${shipping.address.postal_code}\n${shipping.address.country_code}`;

        const formData = {
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `New Bracelet Order from ${orderDetails.payer.name.given_name}!`,
            from_name: "Niece's Website",
            "Buyer Name": orderDetails.payer.name.given_name + ' ' + orderDetails.payer.name.surname,
            "Buyer Email": orderDetails.payer.email_address,
            "Total Paid": `$${orderDetails.purchase_units[0].amount.value} USD`,
            "Items Purchased": purchasedItems,
            "Shipping Address": fullAddress,
            "PayPal Transaction ID": orderDetails.id
        };

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Form submission success:', data);
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    }
});