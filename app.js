document.addEventListener('DOMContentLoaded', () => {

    // ======================================================================
    // === 1. DEFINE YOUR PRODUCTS HERE =====================================
    // ======================================================================
    // Add each bracelet as a new object in this array.
    // Make sure 'id' is unique and image names match your files.
    const products = [
        { id: 1, name: 'bracelet 1', price: '2.00', sku: 'B001' },
        { id: 2, name: 'bracelet 2', price: '2.00', sku: 'B002' },
        { id: 3, name: 'bracelet 3', price: '2.00', sku: 'B003' },
        { id: 4, name: 'bracelet 4', price: '2.00', sku: 'B004' },
        { id: 5, name: 'bracelet 5', price: '2.00', sku: 'B005' },
        { id: 6, name: 'bracelet 6', price: '2.00', sku: 'B006' },
        { id: 7, name: 'bracelet 7', price: '2.00', sku: 'B007' },
        { id: 8, name: 'bracelet 8', price: '2.00', sku: 'B008' },
        { id: 9, name: 'bracelet 9', price: '2.00', sku: 'B009' },
        { id: 10, name: 'bracelet 10', price: '2.00', sku: 'B010' },
        { id: 11, name: 'bracelet 11', price: '2.00', sku: 'B011' },
        { id: 12, name: 'bracelet 12', price: '2.00', sku: 'B012' },
        { id: 13, name: 'bracelet 13', price: '2.00', sku: 'B013' },
        { id: 14, name: 'bracelet 14', price: '2.00', sku: 'B014' },
        { id: 15, name: 'bracelet 15', price: '2.00', sku: 'B015' },
        { id: 16, name: 'bracelet 16', price: '2.00', sku: 'B016' },
        { id: 17, name: 'bracelet 17', price: '2.00', sku: 'B017' },
        { id: 18, name: 'bracelet 18', price: '2.00', sku: 'B018' },
        { id: 19, name: 'bracelet 19', price: '2.00', sku: 'B019' },
        { id: 20, name: 'bracelet 20', price: '2.00', sku: 'B020' },
        { id: 21, name: 'bracelet 21', price: '2.00', sku: 'B021' },
        { id: 22, name: 'bracelet 22', price: '2.00', sku: 'B022' },
        { id: 23, name: 'bracelet 23', price: '2.00', sku: 'B023' },
        { id: 24, name: 'bracelet 24', price: '2.00', sku: 'B024' },
        { id: 25, name: 'bracelet 25', price: '2.00', sku: 'B025' },
        { id: 26, name: 'bracelet 26', price: '2.00', sku: 'B026' },
        { id: 27, name: 'bracelet 27', price: '2.00', sku: 'B027' },
        { id: 28, name: 'bracelet 28', price: '2.00', sku: 'B028' },
        { id: 29, name: 'bracelet 29', price: '2.00', sku: 'B029' },
        { id: 30, name: 'bracelet 30', price: '2.00', sku: 'B030' },
        { id: 31, name: 'bracelet 31', price: '2.00', sku: 'B031' },
        { id: 32, name: 'bracelet 32', price: '2.00', sku: 'B032' },
        { id: 33, name: 'bracelet 33', price: '2.00', sku: 'B033' },
        { id: 34, name: 'bracelet 34', price: '2.00', sku: 'B034' },
        { id: 35, name: 'bracelet 35', price: '2.00', sku: 'B035' },
        { id: 36, name: 'bracelet 36', price: '2.00', sku: 'B036' },
        { id: 37, name: 'bracelet 37', price: '2.00', sku: 'B037' },
        { id: 38, name: 'bracelet 38', price: '2.00', sku: 'B038' },
        { id: 39, name: 'bracelet 39', price: '2.00', sku: 'B039' },
        { id: 40, name: 'bracelet 40', price: '2.00', sku: 'B040' },
        { id: 41, name: 'bracelet 41', price: '2.00', sku: 'B041' },
        { id: 42, name: 'bracelet 42', price: '2.00', sku: 'B042' },
        { id: 43, name: 'bracelet 43', price: '2.00', sku: 'B043' },
        { id: 44, name: 'bracelet 44', price: '2.00', sku: 'B044' },
        { id: 45, name: 'bracelet 45', price: '2.00', sku: 'B045' },
        { id: 46, name: 'bracelet 46', price: '2.00', sku: 'B046' },
        { id: 47, name: 'bracelet 47', price: '2.00', sku: 'B047' },
        { id: 48, name: 'bracelet 48', price: '2.00', sku: 'B048' },
        { id: 49, name: 'bracelet 49', price: '2.00', sku: 'B049' },
        { id: 50, name: 'bracelet 50', price: '2.00', sku: 'B050' },
        { id: 51, name: 'ring 1', price: '2.00', sku: 'R001' },
        { id: 52, name: 'ring 2', price: '2.00', sku: 'R002' },
        { id: 53, name: 'choker 1', price: '2.00', sku: 'C001' },
        { id: 54, name: 'choker 2', price: '2.00', sku: 'C002' },
        { id: 55, name: 'choker 3', price: '2.00', sku: 'C003' },
        { id: 56, name: 'choker 4', price: '2.00', sku: 'C004' },
        { id: 57, name: 'choker 5', price: '2.00', sku: 'C005' },
        { id: 58, name: 'keychain 1', price: '2.00', sku: 'K001' },
        { id: 59, name: 'keychain 2', price: '2.00', sku: 'K002' }
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