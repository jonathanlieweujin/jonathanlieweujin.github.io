import { _LANDING_PAGE_LINKS } from "./Constants.js";
import {assignNextPageLink} from "./PageManager.js"

function start() { 
    assignNextPageLink(document.querySelectorAll('#ref-btns')); 
    // Read the content of the cart from localStorage
    let cartContent = localStorage.getItem('cart');
    // Initialize cart if it doesn't exist
    if (!cartContent) {
        return; // Return if cart is empty
    }
    // Split the content into lines
    const cartItems = cartContent.split('\n').filter(item => item.trim() !== '');
    // Iterate over each line to add cart item to the page
    cartItems.forEach(cartItem => {
        // Split the line to extract src, name, price, and quantity
        const [name, quantity, price, src] = cartItem.split(' ');
        console.log(cartItem);
        // Call addCartItem function to add the item to the page
        addCartItem(src, name, price, quantity);
    });
    // update total cost
    const {totalSum, afterTax} = addTotalPrice();
    document.getElementById("subtotal-amount").innerHTML = totalSum.toFixed(2);
    document.getElementById("total-amount").innerHTML = afterTax;
}

function addCartItem(src, name, price, quantity){
    // Create a new article element
    var article = document.createElement("article");
    article.setAttribute("class", "cart-item");
    article.setAttribute("id", name); // Replace the ID with the corresponding sushi type ID

    const itemName = name.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });

    let totalPrice = (parseFloat(price) * quantity).toFixed(2);

    // Create the inner HTML structure
    article.innerHTML = `
        <div class="product-info">
            <img src="${src}" alt="Product Image" class="product-image" />
            <div class="product-details">
                <h3 class="product-name">${itemName}</h3>
            </div>
        </div>
        <div class="product-price" id="item-price">${price}</div>
        <div class="product-quantity">
            <svg class="minus" id="minus" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.40234" y="1.14282" width="19.5345" height="19.5345" stroke="black"/>
                <path d="M14.8131 10.4993H7.52671C7.04581 10.4993 6.65234 10.6841 6.65234 10.91C6.65234 11.1358 7.04581 11.3206 7.52671 11.3206H14.8131C15.294 11.3206 15.6875 11.1358 15.6875 10.91C15.6875 10.6841 15.294 10.4993 14.8131 10.4993Z" fill="black"/>
            </svg>
            <div class="quantity" id = "item-quantity">${quantity}</div>
            <svg class="plus" id="plus" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.18457" y="1.14282" width="19.5345" height="19.5345" stroke="black"/>
                <path d="M15.0179 10.4581H11.4039V6.84406C11.4039 6.59475 11.2015 6.39233 10.9521 6.39233C10.7028 6.39233 10.5004 6.59475 10.5004 6.84406V10.4581H6.8863C6.63698 10.4581 6.43457 10.6606 6.43457 10.9099C6.43457 11.1593 6.63698 11.3617 6.8863 11.3617H10.5004V14.9757C10.5004 15.2251 10.7028 15.4275 10.9521 15.4275C11.2015 15.4275 11.4039 15.2251 11.4039 14.9757V11.3617H15.0179C15.2673 11.3617 15.4697 11.1593 15.4697 10.9099C15.4697 10.6606 15.2673 10.4581 15.0179 10.4581Z" fill="black"/>
            </svg>     
        </div>
        <div class="product-total" id="product-total">
            <div class="total-price">${totalPrice}</div>
            <svg id="remove-btn" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_139_5146)">
                    <path d="M11.9727 1.52344H10.0684V1.14258C10.0684 0.512561 9.5558 0 8.92578 0H5.87891C5.24889 0 4.73633 0.512561 4.73633 1.14258V1.52344H2.83203C2.20201 1.52344 1.68945 2.036 1.68945 2.66602C1.68945 3.172 2.02017 3.60194 2.47669 3.75174L3.15602 11.9523C3.20494 12.5398 3.70509 13 4.29463 13H10.5101C11.0996 13 11.5998 12.5398 11.6487 11.9521L12.328 3.75172C12.7845 3.60194 13.1152 3.172 13.1152 2.66602C13.1152 2.036 12.6027 1.52344 11.9727 1.52344ZM5.49805 1.14258C5.49805 0.932572 5.6689 0.761719 5.87891 0.761719H8.92578C9.13579 0.761719 9.30664 0.932572 9.30664 1.14258V1.52344H5.49805V1.14258ZM10.8896 11.8891C10.8733 12.0849 10.7066 12.2383 10.5101 12.2383H4.29463C4.09813 12.2383 3.93142 12.0849 3.91514 11.8892L3.24575 3.80859H11.5589L10.8896 11.8891ZM11.9727 3.04688H2.83203C2.62203 3.04688 2.45117 2.87602 2.45117 2.66602C2.45117 2.45601 2.62203 2.28516 2.83203 2.28516H11.9727C12.1827 2.28516 12.3535 2.45601 12.3535 2.66602C12.3535 2.87602 12.1827 3.04688 11.9727 3.04688Z" fill="black"/>
                    <path d="M5.8782 11.0722L5.49734 4.92762C5.48431 4.71767 5.30259 4.55799 5.09365 4.57106C4.8837 4.58409 4.72407 4.76482 4.73707 4.97475L5.11793 11.1193C5.13045 11.3212 5.29813 11.4766 5.4977 11.4766C5.71826 11.4766 5.89173 11.2908 5.8782 11.0722Z" fill="black"/>
                    <path d="M7.40234 4.57031C7.19201 4.57031 7.02148 4.74084 7.02148 4.95117V11.0957C7.02148 11.306 7.19201 11.4766 7.40234 11.4766C7.61268 11.4766 7.7832 11.306 7.7832 11.0957V4.95117C7.7832 4.74084 7.61268 4.57031 7.40234 4.57031Z" fill="black"/>
                    <path d="M9.71106 4.57106C9.50159 4.55803 9.32038 4.71766 9.30738 4.92762L8.92652 11.0721C8.91354 11.2821 9.07317 11.4628 9.2831 11.4758C9.49316 11.4888 9.67379 11.3291 9.68679 11.1193L10.0676 4.97474C10.0806 4.76479 9.92102 4.58406 9.71106 4.57106Z" fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0_139_5146">
                        <rect width="13" height="13" fill="white" transform="translate(0.902344)"/>
                    </clipPath>
                </defs>
            </svg>  
        </div>
    </article>`;
    // Get the parent element where you want to append the new article
    var parentElement = document.getElementById("add-here"); // Replace "add-here" with the ID of the parent element
    // Append the new article to the parent element
    parentElement.appendChild(article);
    var divider = document.createElement("div");
    divider.setAttribute("class", "white-divider");
    parentElement.appendChild(divider);

    // Get the plus and minus buttons
    var plusButton = article.querySelector("#plus");
    var minusButton = article.querySelector("#minus");
    var quantityElement = article.querySelector("#item-quantity");
    var totalElement = article.querySelector(".total-price");
    var removeBtn = article.querySelector("#remove-btn");

    // Add event listener for plus button
    plusButton.addEventListener("click", function() {
        var quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        totalElement.textContent = (parseFloat(price) * quantity).toFixed(2);
        // update total cost
        const {totalSum, afterTax} = addTotalPrice();
        document.getElementById("subtotal-amount").innerHTML = totalSum.toFixed(2);
        document.getElementById("total-amount").innerHTML = afterTax;
        updateLocalCart(name, quantity, price, src);
    });

    // Add event listener for minus button
    minusButton.addEventListener("click", function() {
        var quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            totalElement.textContent = (parseFloat(price) * quantity).toFixed(2);
        }
        // update total cost
        const {totalSum, afterTax} = addTotalPrice();
        document.getElementById("subtotal-amount").innerHTML = totalSum.toFixed(2);
        document.getElementById("total-amount").innerHTML = afterTax;
        updateLocalCart(name, quantity, price, src);
    });

    removeBtn.addEventListener("click", function() {
        parentElement.removeChild(article);
        parentElement.removeChild(divider);

        let cartContent = localStorage.getItem('cart');
        // Initialize cart if it doesn't exist
        if (!cartContent) {
            cartContent = '';
        }
        // Split the content into lines
        let cartItems = cartContent.split('\n');
        // Iterate over each line to find and remove the item
        for (let i = 0; i < cartItems.length; i++) {
            let [existingItemId] = cartItems[i].split(' ');

            // If item ID matches, remove the item from cartItems array
            if (existingItemId === name) {
                cartItems.splice(i, 1);
                break;
            }
        }
        // Update the content of the cart in localStorage
        localStorage.setItem('cart', cartItems.join('\n'));
        console.log(localStorage.getItem('cart'));
        // update total cost
        const {totalSum, afterTax} = addTotalPrice();
        document.getElementById("subtotal-amount").innerHTML = totalSum.toFixed(2);
        document.getElementById("total-amount").innerHTML = afterTax;
    });

    const checkoutButton = document.getElementById('checkout-button');
    // Add an event listener to the checkout button
    checkoutButton.addEventListener('click', function() {
        window.location.href = _LANDING_PAGE_LINKS.Payment;
    });
}

function addTotalPrice(){
    var totalPriceElements = document.getElementsByClassName('total-price');
    // Initialize a variable to store the total sum
    var totalSum = 0;
    // Iterate over each total price element and add its value to the total sum
    Array.from(totalPriceElements).forEach(element => {
        // Parse the text content of each element to a floating-point number
        var price = parseFloat(element.textContent);
        
        // Add the parsed price to the total sum
        totalSum += price;
    });
    
    // Calculate total after tax
    totalSum.toFixed(2);
    var afterTax = (1.06 * totalSum).toFixed(2);
    localStorage.setItem('totalPrice', afterTax);
    return {totalSum, afterTax};
}

function updateLocalCart(id, quantity, price, src) {
    // Read the content of the cart from localStorage
    let cartContent = localStorage.getItem('cart');
    // Initialize cart if it doesn't exist
    if (!cartContent) {
        cartContent = '';
    }
    // Split the content into lines
    const cartItems = cartContent.split('\n');
    // Flag to check if item exists in cart
    let itemExists = false;
    // Iterate over each line to check if item exists
    for (let i = 0; i < cartItems.length; i++) {
        let [existingItemId, existingQuantity, existingPrice, existingSrc] = cartItems[i].split(' ');

        // If item exists, update its quantity
        if (existingItemId === id) {
            cartItems[i] = `${existingItemId} ${quantity} ${existingPrice} ${existingSrc}`;
            itemExists = true;
            break;
        }
    }
    // If item doesn't exist, add a new line with the item and its quantity
    if (!itemExists) {
        cartItems.push(`${id} ${quantity} ${price} ${src}`);
    }
    // Update the content of the cart in localStorage
    localStorage.setItem('cart', cartItems.join('\n'));
    console.log(localStorage.getItem('cart'));
}

export {start};