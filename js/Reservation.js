import {assignNextPageLink} from "./PageManager.js"

function start() { 
    assignNextPageLink(document.querySelectorAll('#ref-btns')); 
    // Link function to back and next button to allow scroll back or next image
    const scrollableDiv = document.getElementById('scrollable-div');
    const backArrow = document.getElementById('back');
    const nextArrow = document.getElementById('next');

    backArrow.addEventListener('click', function() {
        scrollableDiv.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    });

    nextArrow.addEventListener('click', function() {
        scrollableDiv.scrollTo({
            left: scrollableDiv.scrollWidth - scrollableDiv.clientWidth,
            behavior: 'smooth'
        });
    });

    // Link open and close modal, if click on overlay also will close
    document.getElementById('pax-field').addEventListener('click', function() {
        openModal();
    });

    document.getElementById('close-btn').addEventListener('click', function() {
        closeModal();
    });

    document.getElementById('overlay-website').addEventListener('click', function() {
        closeModal();
    });

    // Get the plus and minus buttons for adults
    const adultPlusButton = document.getElementById('adult-plus');
    const adultMinusButton = document.getElementById('adult-minus');
    // Get the plus and minus buttons for children
    const childrenPlusButton = document.getElementById('children-plus');
    const childrenMinusButton = document.getElementById('children-minus');
    // Get the pax-value element
    const paxValueElement = document.getElementById('pax-value');

    // Add event listener to adult plus button
    adultPlusButton.addEventListener('click', function() {
        updateCounter(document.getElementById('adult-container'), 1);
    });
    // Add event listener to adult minus button
    adultMinusButton.addEventListener('click', function() {
        updateCounter(document.getElementById('adult-container'), -1);
    });
    // Add event listener to children plus button
    childrenPlusButton.addEventListener('click', function() {
        updateCounter(document.getElementById('children-container'), 1);
    });
    // Add event listener to children minus button
    childrenMinusButton.addEventListener('click', function() {
        updateCounter(document.getElementById('children-container'), -1);
    });
    // Function to update the counter and pax-value
    function updateCounter(button, change) {
        const valueElement = button.querySelector('#value');
        let value = parseInt(valueElement.textContent);
        value += change;
        value = Math.max(value, 0); // Ensure value doesn't go below 0
        valueElement.textContent = value;
        // Update pax-value
        const adultCount = parseInt(document.getElementById('adult-container').querySelector('#value').textContent);
        const childrenCount = parseInt(document.getElementById('children-container').querySelector('#value').textContent);
        paxValueElement.textContent = `${adultCount} adult ${childrenCount} children`;
    }

    document.getElementById("reserve-btn").addEventListener("click", function() {
        displaySuccess();
    })
}

function openModal() {
    document.body.classList.add('stop-scrolling');
    document.getElementById('overlay-website').style.display = 'flex';
    document.getElementById('pax-modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.body.classList.remove('stop-scrolling');
    document.getElementById('overlay-website').style.display = 'none';
    document.getElementById('pax-modal-overlay').style.display = 'none';
}

function displaySuccess(){
    window.scrollTo(0, 0);
    document.body.classList.add('stop-scrolling');
    document.getElementById('overlay-website-2').style.display = 'flex';
    document.getElementById("check-icon").style.display = "none";
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    async function executeAnimations() {
        document.getElementById("check-icon").style.display = "block";
        await delay(3000); // Wait for 1 second
        await delay(1000); // Wait for 3 seconds
        document.body.classList.remove('stop-scrolling');
        document.getElementById('overlay-website-2').style.display = 'none';
    }
    executeAnimations();
    
}
export {start};