import {assignNextPageLink} from "./PageManager.js"

function start() { 
    assignNextPageLink(document.querySelectorAll('#ref-btns')); 

    // Initially hide submission comment
    const submissionComment = document.querySelector('.submission-comment');
    submissionComment.style.opacity = '0';
    // Link onclick with send to check if input field is filled
    const btn = document.querySelector(".send-btn");
    // Attach the uponSubmit function to the onclick event of each send button
    btn.onclick = uponSubmit;
}

function uponSubmit(){
    // Get form input fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');
    // Get the submission comment element
    const submissionComment = document.querySelector('.submission-comment');
    submissionComment.style.opacity = '1';
    // Check if any of the input fields are empty
    if (nameInput.value === '' || emailInput.value === '' || commentInput.value === '') {
        submissionComment.textContent = 'Your submission failed because of an error.';
        submissionComment.style.color = '#930e0e';
    } else {
        // Form is valid, submission successful
        submissionComment.textContent = 'Your submission has been submitted.';
        submissionComment.style.color = '#0e6617';
    }
}

export {start, uponSubmit};
