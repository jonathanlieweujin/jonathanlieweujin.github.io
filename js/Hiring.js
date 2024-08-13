import {assignNextPageLink} from "./PageManager.js"

function start() { 
    assignNextPageLink(document.querySelectorAll('#ref-btns')); 
    // Link whatsapp link to next button in available jobs
    const refBtns = document.querySelectorAll('.next-btn');
    // Loop through each element
    refBtns.forEach(refBtn => {
        // Get the title of the element
        const title = refBtn.getAttribute('title');
        // Set href link to button
        switch (title) {
            case "SUSHI_CHEF":
                refBtn.onclick = function() {
                    window.location.href = "https://wa.me/60195003868?text=Greetings%20Jeng%20Sushi,%20Im%20Interest%20in%20Sushi%20Chef%20position.";
                };
                break;
            case "KITCHEN_STAFF":
                refBtn.onclick = function() {
                    window.location.href ="https://wa.me/60195003868?text=Greetings%20Jeng%20Sushi,%20Im%20Interest%20in%20Kitchen%20Staff%20position.";
                };
                break;
            case "HALL_STAFF":
                refBtn.onclick = function() {
                    window.location.href = "https://wa.me/60195003868?text=Greetings%20Jeng%20Sushi,%20Im%20Interest%20in%20Hall%20Staff%20position.";
                };
                break;
            default:
                break;
        }
    });
}

export {start};
