import {assignNextPageLink} from "./PageManager.js"
import {
    SUSHI_TYPES,
    SUSHI_DESCRIPTIONS,
    SUSHI_PRICES,
    SUSHI_SRC,
    MENMONO_TYPES,
    MENMONO_DESCRIPTIONS,
    MENMONO_PRICES,
    MENMONO_SRC,
    RICE_TYPES,
    RICE_DESCRIPTIONS,
    RICE_PRICES,
    RICE_SRC,
    SASHIMI_TYPES,
    SASHIMI_DESCRIPTIONS,
    SASHIMI_PRICES,
    SASHIMI_SRC,
    BEVERAGE_TYPES,
    BEVERAGE_DESCRIPTIONS,
    BEVERAGE_PRICES,
    BEVERAGE_SRC,
    DONMONO_TYPES,
    DONMONO_DESCRIPTIONS,
    DONMONO_PRICES,
    DONMONO_SRC
} from './Constants.js';

let itemPrice, itemID, itemQuantity, itemSrc;

function start() { 
    assignNextPageLink(document.querySelectorAll('#ref-btns')); 

    // lower audio
    const audio = document.getElementById("lofi-audio");
    // Set the volume to a lower level (0.5 means 50% volume)
    audio.volume = 0.5;

    // display the menu selected 
    document.getElementById('select-btn').addEventListener('click', function() {
        var selectedOption = document.querySelector('.field').value;
        var tables = document.querySelectorAll('table');
        // Hide all tables
        tables.forEach(function(table) {
            table.style.display = 'none';
        });
        
        // Display the table corresponding to the selected option
        switch(selectedOption) {
            case 'Sushi':
            case 'Sashimi':
            case 'Rice':
            case 'Donmono':
            case 'Menmono':
            case 'Beverages':
                document.querySelector('.' + selectedOption).style.display = 'table';
                break;
            default:
                console.log("Invalid option");
                break;
        }
    });

    const menuFrames = document.querySelectorAll('.Sushi .menu-frame');
    // Loop through each menu frame
    menuFrames.forEach(function(frame, index) {
        // Get the enum string corresponding to the current index
        const enumString = Object.values(SUSHI_TYPES)[index];
        // Set the ID of the menu frame to the enum string
        frame.id = enumString;
        // Set the background image of the item-image div
        frame.querySelector('.item-image').style.backgroundImage = 'url("' + Object.entries(SUSHI_SRC)[index][1] + '")';

        // Display item name
        var itemName = enumString.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
        frame.querySelector('.item-name').innerText = itemName;

        // Display item description
        frame.querySelector('.item-description').innerText = Object.entries(SUSHI_DESCRIPTIONS)[index][1];

        // Display item price
        frame.querySelector('.item-price').innerText = 'RM ' + Object.entries(SUSHI_PRICES)[index][1].toFixed(2);
    });

    // Sashimi Menu
    const sashimiMenuFrames = document.querySelectorAll('.Sashimi .menu-frame');
    sashimiMenuFrames.forEach(function(frame, index) {
        const enumString = Object.values(SASHIMI_TYPES)[index];
        frame.id = enumString;
        frame.querySelector('.item-image').style.backgroundImage = 'url("' + Object.entries(SASHIMI_SRC)[index][1] + '")';
        const itemName = enumString.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
        frame.querySelector('.item-name').innerText = itemName;
        frame.querySelector('.item-description').innerText = Object.entries(SASHIMI_DESCRIPTIONS)[index][1];
        frame.querySelector('.item-price').innerText = 'RM ' + Object.entries(SASHIMI_PRICES)[index][1].toFixed(2);
    });

    // Rice Menu
    const riceMenuFrames = document.querySelectorAll('.Rice .menu-frame');
    riceMenuFrames.forEach(function(frame, index) {
        const enumString = Object.values(RICE_TYPES)[index];
        frame.id = enumString;
        frame.querySelector('.item-image').style.backgroundImage = 'url("' + Object.entries(RICE_SRC)[index][1] + '")';
        const itemName = enumString.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
        frame.querySelector('.item-name').innerText = itemName;
        frame.querySelector('.item-description').innerText = Object.entries(RICE_DESCRIPTIONS)[index][1];
        frame.querySelector('.item-price').innerText = 'RM ' + Object.entries(RICE_PRICES)[index][1].toFixed(2);
    });

    // Beverage Menu
    const beverageMenuFrames = document.querySelectorAll('.Beverages .menu-frame');
    beverageMenuFrames.forEach(function(frame, index) {
        const enumString = Object.values(BEVERAGE_TYPES)[index];
        frame.id = enumString;
        frame.querySelector('.item-image').style.backgroundImage = 'url("' + Object.entries(BEVERAGE_SRC)[index][1] + '")';
        const itemName = enumString.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
        frame.querySelector('.item-name').innerText = itemName;
        frame.querySelector('.item-description').innerText = Object.entries(BEVERAGE_DESCRIPTIONS)[index][1];
        frame.querySelector('.item-price').innerText = 'RM ' + Object.entries(BEVERAGE_PRICES)[index][1].toFixed(2);
    });

    // Donmono Menu
    const donmonoMenuFrames = document.querySelectorAll('.Donmono .menu-frame');
    donmonoMenuFrames.forEach(function(frame, index) {
        const enumString = Object.values(DONMONO_TYPES)[index];
        frame.id = enumString;
        frame.querySelector('.item-image').style.backgroundImage = 'url("' + Object.entries(DONMONO_SRC)[index][1] + '")';
        const itemName = enumString.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
        frame.querySelector('.item-name').innerText = itemName;
        frame.querySelector('.item-description').innerText = Object.entries(DONMONO_DESCRIPTIONS)[index][1];
        frame.querySelector('.item-price').innerText = 'RM ' + Object.entries(DONMONO_PRICES)[index][1].toFixed(2);
    });

    // Menmono Menu
    const menmonoMenuFrames = document.querySelectorAll('.Menmono .menu-frame');
    menmonoMenuFrames.forEach(function(frame, index) {
        const enumString = Object.values(MENMONO_TYPES)[index];
        frame.id = enumString;
        frame.querySelector('.item-image').style.backgroundImage = 'url("' + Object.entries(MENMONO_SRC)[index][1] + '")';
        const itemName = enumString.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
        frame.querySelector('.item-name').innerText = itemName;
        frame.querySelector('.item-description').innerText = Object.entries(MENMONO_DESCRIPTIONS)[index][1];
        frame.querySelector('.item-price').innerText = 'RM ' + Object.entries(MENMONO_PRICES)[index][1].toFixed(2);
    });

    // create function on th
    // Get all the <th> elements
    const thElements = document.querySelectorAll('th');
    // Add click event listener to each <th> element
    thElements.forEach(th => {
        th.addEventListener('click', function() {
            openModal();
            // Get the parent <table> element's class
            const parentTableClass = this.closest('table').classList[0];
            const menuFrameId = this.querySelector('.menu-frame').id;
            let imageSrc, name, price;
            ({ imageSrc, name, price } = getInfoFromClass(parentTableClass, menuFrameId));
            const itemName = name.toLowerCase().replace(/_/g, ' ').replace(/\b\w/g, function(char) {
                return char.toUpperCase();
            });
            document.getElementById('overlay-img').style.backgroundImage = 'url("' + imageSrc + '")';
            document.getElementById('overlay-name').innerHTML = itemName;
            document.getElementById('quantity').innerHTML = "1";
            document.getElementById('total-cost').innerHTML = "RM " + price;
            itemPrice = price;
            itemID = name;
            itemQuantity = 1;
            itemSrc = imageSrc;
        });
    });

    document.getElementById('overlay-website').addEventListener('click', function() {
        closeModal();
    });

    document.getElementById('add-to-cart-btn').addEventListener('click', function() {
        addToCart();
        closeModal();
    });

    const quantDiv = document.getElementById("quantity");
    const totalDiv = document.getElementById("total-cost");
    document.getElementById('plus').addEventListener('click', function() {
        updateCounter(quantDiv, totalDiv, 1);
    });
    document.getElementById('minus').addEventListener('click', function() {
        updateCounter(quantDiv, totalDiv, -1);
    });
}

// Get item info
function getInfoFromClass(className, menuFrameId) {
    let imageSrc, name, price;

    switch(className) {
        case 'Sushi':
            const sushiIndex = Object.values(SUSHI_TYPES).indexOf(menuFrameId);
            imageSrc = Object.values(SUSHI_SRC)[sushiIndex];
            name = Object.values(SUSHI_TYPES)[sushiIndex];
            price = Object.entries(SUSHI_PRICES)[sushiIndex][1].toFixed(2);
            break;
        case 'Menmono':
            const menmonoIndex = Object.values(MENMONO_TYPES).indexOf(menuFrameId);
            imageSrc = Object.values(MENMONO_SRC)[menmonoIndex];
            name = Object.values(MENMONO_TYPES)[menmonoIndex];
            price = Object.entries(MENMONO_PRICES)[menmonoIndex][1].toFixed(2);
            break;
        case 'Rice':
            const riceIndex = Object.values(RICE_TYPES).indexOf(menuFrameId);
            imageSrc = Object.values(RICE_SRC)[riceIndex];
            name = Object.values(RICE_TYPES)[riceIndex];
            price = Object.entries(RICE_PRICES)[riceIndex][1].toFixed(2);
            break;
        case 'Sashimi':
            const sashimiIndex = Object.values(SASHIMI_TYPES).indexOf(menuFrameId);
            imageSrc = Object.values(SASHIMI_SRC)[sashimiIndex];
            name = Object.values(SASHIMI_TYPES)[sashimiIndex];
            price = Object.entries(SASHIMI_PRICES)[sashimiIndex][1].toFixed(2);
            break;
        case 'Beverages':
            const beverageIndex = Object.values(BEVERAGE_TYPES).indexOf(menuFrameId);
            imageSrc = Object.values(BEVERAGE_SRC)[beverageIndex];
            name = Object.values(BEVERAGE_TYPES)[beverageIndex];
            price = Object.entries(BEVERAGE_PRICES)[beverageIndex][1].toFixed(2);
            break;
        case 'Donmono':
            const donmonoIndex = Object.values(DONMONO_TYPES).indexOf(menuFrameId);
            imageSrc = Object.values(DONMONO_SRC)[donmonoIndex];
            name = Object.values(DONMONO_TYPES)[donmonoIndex];
            price = Object.entries(DONMONO_PRICES)[donmonoIndex][1].toFixed(2);
            break;
        default:
            break;
    }

    return { imageSrc, name, price };
}

function updateCounter(quantity, total, offset){
    let quantityValue = parseInt(quantity.innerHTML);
    if (quantityValue + offset >= 0){ quantityValue += offset; }
    quantity.innerHTML = quantityValue;
    itemQuantity = quantityValue;
    const totalCostValue = quantityValue * itemPrice;
    total.innerHTML = "RM " + totalCostValue.toFixed(2);
}

function addToCart() {
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
        if (existingItemId === itemID) {
            const newQuantity = parseInt(existingQuantity) + itemQuantity;
            cartItems[i] = `${existingItemId} ${newQuantity} ${existingPrice} ${existingSrc}`;
            itemExists = true;
            break;
        }
    }
    // If item doesn't exist, add a new line with the item and its quantity
    if (!itemExists) {
        cartItems.push(`${itemID} ${itemQuantity} ${itemPrice} ${itemSrc}`);
    }
    // Update the content of the cart in localStorage
    localStorage.setItem('cart', cartItems.join('\n'));
}


function openModal() {
    window.scrollTo(0, 0);
    document.body.classList.add('stop-scrolling');
    document.getElementById('overlay-website').style.display = 'flex';
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.body.classList.remove('stop-scrolling');
    document.getElementById('overlay-website').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';

    const cartContent = localStorage.getItem('cart');
    // Log the cart content to the console
    console.log("Cart Content:");
    console.log(cartContent);
}

export {start};