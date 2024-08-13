import { _LANDING_PAGE_LINKS } from "./Constants.js";
import {assignNextPageLink} from "./PageManager.js"

let mode = "CARD";
function start() { 
    assignNextPageLink(document.querySelectorAll('#ref-btns')); 

    const totalPrice = localStorage.getItem('totalPrice');
    document.getElementById("payment-total").innerHTML = "Total: RM " + totalPrice;
    // allow only one to be checked
    const checkboxCard = document.querySelector('.checkbox-card');
    const checkboxQR = document.querySelector('.checkbox-qr');
    const paymentContainer = document.getElementById('payment-container');
    const qrContainer = document.getElementById('qr-container');

    checkboxCard.addEventListener('change', function() {
        if (this.checked) {
            checkboxQR.checked = false;
            paymentContainer.style.display = "flex";
            qrContainer.style.display = "none";
            mode = "CARD";
        }
        else {
            checkboxCard.checked = true;
        }
    });

    checkboxQR.addEventListener('change', function() {
        if (this.checked) {
            checkboxCard.checked = false;
            qrContainer.style.display = "flex";
            paymentContainer.style.display = "none";
            mode = "QR";
        } else {
            checkboxQR.checked = true;
        }
    });

    const payBtn = document.getElementById('pay-button');

    payBtn.addEventListener('click', function() {
        toPay();
    }  
    )

    const cardNumberInput = document.getElementById('cardNumber');
    cardNumberInput.addEventListener('input', function() {
        // Remove any non-numeric characters
        let cardNumber = this.value.replace(/\D/g, '');
        // Insert a space every 4 characters
        cardNumber = cardNumber.replace(/(.{4})/g, '$1 ').trim();
        // Limit the length to 19 characters
        cardNumber = cardNumber.substring(0, 19);
        // Update the input value
        this.value = cardNumber;
    });
    const monthInput = document.querySelector('.card-month');
    const yearInput = document.querySelector('.card-year');
    const cvvInput = document.querySelector('.card-cvv-input');

    // Function to enforce numeric input and limit length
    function enforceNumericInput(input, maxLength) {
        input.addEventListener('input', function() {
            // Remove any non-numeric characters
            let value = this.value.replace(/\D/g, '');
            // Limit the length
            value = value.substring(0, maxLength);
            // Update the input value
            this.value = value;
        });
    }
    // Enforce numeric input and length for month, year, and CVV inputs
    enforceNumericInput(monthInput, 2);
    enforceNumericInput(yearInput, 2);
    enforceNumericInput(cvvInput, 3);
}

function toPay(){
    if (mode == "CARD"){
        const inputFields = document.querySelectorAll('.input-field'); 
        let allFilled = true;
        inputFields.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });
        if (allFilled) {
            displaySuccess();
        }
    }
    else{
        displaySuccess();
    }
}

function displaySuccess(){
    window.scrollTo(0, 0);
    document.body.classList.add('stop-scrolling');
    document.getElementById('overlay-website').style.display = 'flex';
    document.getElementById("check-icon").style.display = "none";
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function executeAnimations() {
        document.getElementById("check-icon").style.display = "block";
        await delay(3000); // Wait for 1 second
        localStorage.setItem('cart', '');
        localStorage.setItem('totalPrice', 0);
        await delay(1000); // Wait for 3 seconds
        window.location.href = _LANDING_PAGE_LINKS.Home;
    }
    executeAnimations();
    
}
export {start};