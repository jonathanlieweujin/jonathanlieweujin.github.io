import { _LANDING_PAGE_LINKS, _LANDING_PAGE_TYPES} from "./Constants.js";

const LandingPageTypes = _LANDING_PAGE_TYPES;
const LandingPageLinks = _LANDING_PAGE_LINKS;

function assignNextPageLink(btns) {
    const refBtns = btns;
    // Loop through each element
    refBtns.forEach(refBtn => {
        // Get the title of the element
        const title = refBtn.getAttribute('title');
        // Set href link to button
        switch (title) {
            case LandingPageTypes.Home:
                refBtn.onclick = function() {
                    window.location.href = LandingPageLinks.Home;
                };
                break;
            case LandingPageTypes.About:
                refBtn.onclick = function() {
                    window.location.href = LandingPageLinks.About;
                };
                break;
            case LandingPageTypes.Menu:
                refBtn.onclick = function() {
                    window.location.href = LandingPageLinks.Menu;
                };
                break;
            case LandingPageTypes.Location:
                refBtn.onclick = function() {
                    window.location.href = LandingPageLinks.Location;
                };
                break;
            case LandingPageTypes.Contact_Us:
                refBtn.onclick = function() {
                    window.location.href = LandingPageLinks.Contact_Us;
                };
                break;
            case LandingPageTypes.Hiring:
                refBtn.onclick = function() {
                    window.location.href = LandingPageLinks.Hiring;
                };
                break;
            case LandingPageTypes.Reservation:
                refBtn.onclick = function() {
                    window.location.href = LandingPageLinks.Reservation;
                };
                break;
            case LandingPageTypes.Cart:
                refBtn.onclick = function() {
                    window.location.href = LandingPageLinks.Cart;
                };
                break;
            case LandingPageTypes.Review:
                refBtn.onclick = function() {
                    window.location.href = LandingPageLinks.Review;
                };
                break;
            default:
                break;
        }
    });
}

export { assignNextPageLink };