const _LANDING_PAGE_TYPES = {
    Home: "HOME",
    About: "ABOUT",
    Menu: "MENU",
    Location: "LOCATION",
    Contact_Us: "CONTACT_US",
    Cart: "CART",
    Hiring: "HIRING",
    Payment: "PAYMENT",
    Reservation: "RESERVATION",
    Review: "REVIEW"
}

const _LANDING_PAGE_LINKS = {
    Home: "./Main.html",
    About: "./About.html",
    Menu: "./Menu.html",
    Location: "./Location.html",
    Contact_Us: "./ContactUs.html",
    Cart: "./Cart.html",
    Hiring: "./Hiring.html",
    Payment: "./Payment.html",
    Review: "./Review.html",
    Reservation: "./Reservation.html"
}

const SUSHI_TYPES = {
    Salmon_Nigiri: "SALMON_NIGIRI",
    Shiro_Maguro: "SHIRO_MAGURO",
    Ebi_Maki: "EBI_MAKI",
    Unagi_Nigiri: "UNAGI_NIGIRI",
    Hotate_Mentai_Nigiri: "HOTATE_MENTAI_NIGIRI",
    Tsubugai_Nigiri: "KIMCHI_TSUBUGAI_NIGIRI",
    Tako_Wasabi_Nigiri: "TAKO_WASABI_NIGIRI",
    Kani_Maki: "KANI_MAKI",
    Kappa_Maki: "KAPPA_MAKI",
    Tamago_Maki: "TAMAGO_MAKI",
    Inari_Maki: "INARI_MAKI",
    Hana_Ebiko_Nigiri: "HANA_EBIKO_NIGIRI",
    Tako_Sushi: "TAKO_SUSHI",
    Inari_Tuna_Mayo: "INARI_TUNA_MAYO",
    Inari_Kani_Mayo: "INARI_KANI_MAYO"
};

const SUSHI_DESCRIPTIONS = {
    Salmon_Nigiri: "Fresh slices of salmon served atop seasoned rice.",
    Shiro_Maguro: "White tuna topped with spicy cod roe served on rice.",
    Ebi_Maki: "Sushi roll filled with shrimp and vinegared rice, wrapped in seaweed.",
    Unagi_Nigiri: "Grilled eel slices served over seasoned sushi rice.",
    Hotate_Mentai_Nigiri: "Scallops topped with spicy cod roe served on rice.",
    Tsubugai_Nigiri: "Clam served on rice.",
    Tako_Wasabi_Nigiri: "Octopus slices seasoned with spicy wasabi served on rice.",
    Kani_Maki: "Sushi roll filled with crab stick and vinegared rice, wrapped in seaweed.",
    Kappa_Maki: "Traditional cucumber sushi roll wrapped in seaweed.",
    Tamago_Maki: "Sushi roll filled with sweet Japanese omelette.",
    Inari_Maki: "Beancurd pouches filled with seasoned sushi rice.",
    Hana_Ebiko_Nigiri: "Salmon and shrimp roe combination served on rice.",
    Tako_Sushi: "Octopus slices served atop seasoned rice.",
    Inari_Tuna_Mayo: "Beancurd pouches filled with tuna salad mixture.",
    Inari_Kani_Mayo: "Beancurd pouches filled with crab stick salad mixture."
};

const SUSHI_PRICES = {
    Salmon_Nigiri: 2.50,
    Shiro_Maguro: 2.80,
    Ebi_Maki: 2.50,
    Unagi_Nigiri: 2.80,
    Hotate_Mentai_Nigiri: 2.80,
    Tsubugai_Nigiri: 2.50,
    Tako_Wasabi_Nigiri: 2.50,
    Kani_Maki: 2.50,
    Kappa_Maki: 2.00,
    Tamago_Maki: 2.00,
    Inari_Maki: 2.00,
    Hana_Ebiko_Nigiri: 2.80,
    Tako_Sushi: 2.50,
    Inari_Tuna_Mayo: 2.50,
    Inari_Kani_Mayo: 2.50
};

const SUSHI_SRC = {
    Salmon_Nigiri: "../images/sushi/sushi1.jpg",
    Shiro_Maguro: "../images/sushi/sushi2.jpg",
    Ebi_Maki: "../images/sushi/sushi3.jpg",
    Unagi_Nigiri: "../images/sushi/sushi4.jpg",
    Hotate_Mentai_Nigiri: "../images/sushi/sushi5.png",
    Tsubugai_Nigiri: "../images/sushi/sushi6.jpg",
    Tako_Wasabi_Nigiri: "../images/sushi/sushi7.jpg",
    Kani_Maki: "../images/sushi/sushi8.jpg",
    Kappa_Maki: "../images/sushi/sushi9.jpg",
    Tamago_Maki: "../images/sushi/sushi10.png",
    Inari_Maki: "../images/sushi/sushi11.jpg",
    Hana_Ebiko_Nigiri: "../images/sushi/sushi12.jpg",
    Tako_Sushi: "../images/sushi/sushi13.jpg",
    Inari_Tuna_Mayo: "../images/sushi/sushi14.jpg",
    Inari_Kani_Mayo: "../images/sushi/sushi15.jpg"
};

const MENMONO_TYPES = {
    Kitsune_Udon: "KITSUNE_UDON",
    Tempura_Udon: "TEMPURA_UDON",
    Spicy_Ramen: "SPICY_RAMEN",
    Shiro_Ramen: "SHIRO_RAMEN"
};

const MENMONO_DESCRIPTIONS = {
    Kitsune_Udon: "Udon noodles served in a savory broth with sweetened deep-fried tofu (kitsune) slices.",
    Tempura_Udon: "Udon noodles served in a flavorful broth with crispy tempura (battered and deep-fried seafood or vegetables) on the side.",
    Spicy_Ramen: "Ramen noodles served in a spicy broth with various toppings like sliced meat, vegetables, and sometimes a boiled egg.",
    Shiro_Ramen: "Ramen noodles served in a clear, light broth typically made from chicken or pork, with various toppings like sliced meat, bamboo shoots, and green onions."
};

const MENMONO_SRC = {
    Kitsune_Udon: "../images/menmono/pic1.jpg",
    Tempura_Udon: "../images/menmono/pic2.jpg",
    Spicy_Ramen: "../images/menmono/pic3.jpg",
    Shiro_Ramen: "../images/menmono/pic4.jpg"
};

const MENMONO_PRICES = {
    Kitsune_Udon: 15.80,
    Tempura_Udon: 25.00,
    Spicy_Ramen: 20.00,
    Shiro_Ramen: 16.50
};

const RICE_TYPES = {
    Garlic: "GARLIC",
    Japanese: "JAPANESE"
};

const RICE_DESCRIPTIONS = {
    Garlic: "A flavorful dish of fried rice cooked with aromatic garlic and various seasonings.",
    Japanese: "Traditional Japanese-style fried rice made with a combination of vegetables, meat, and egg."
};

const RICE_PRICES = {
    Garlic: 9.00,
    Japanese: 15.00
};

const RICE_SRC = {
    Garlic: "../images/rice/pic1.jpg",
    Japanese: "../images/rice/pic2.jpg"
};

const SASHIMI_TYPES = {
    Salmon: "SALMON",
    Shiro_Maguro: "SHIRO_MAGURO",
    Hokkigai: "HOKKIGAI",
    Tako: "TAKO"
};

const SASHIMI_DESCRIPTIONS = {
    Salmon: "Fresh slices of premium salmon sashimi.",
    Shiro_Maguro: "Delicate slices of white tuna sashimi.",
    Hokkigai: "Tender slices of surf clam sashimi.",
    Tako: "Mouthwatering slices of octopus sashimi."
};

const SASHIMI_PRICES = {
    Salmon: 15.00,
    Shiro_Maguro: 15.00,
    Hokkigai: 18.00,
    Tako: 25.00
};

const SASHIMI_SRC = {
    Salmon: "../images/sashimi/pic1.jpg",
    Shiro_Maguro: "../images/sashimi/pic2.jpg",
    Hokkigai: "../images/sashimi/pic3.jpg",
    Tako: "../images/sashimi/pic4.jpg"
};

const BEVERAGE_TYPES = {
    Green_Tea: "GREEN_TEA",
    Ice_Lemon_Tea: "ICE_LEMON_TEA",
    Plain_Water: "PLAIN_WATER"
};

const BEVERAGE_DESCRIPTIONS = {
    Green_Tea: "A soothing cup of traditional Japanese green tea.",
    Ice_Lemon_Tea: "Refreshing iced tea infused with tangy lemon flavor.",
    Plain_Water: "Cool and refreshing plain water to quench your thirst."
};

const BEVERAGE_PRICES = {
    Green_Tea: 3.00,
    Ice_Lemon_Tea: 3.50,
    Plain_Water: 2.00
};

const BEVERAGE_SRC = {
    Green_Tea: "../images/beverages/pic1.jpg",
    Ice_Lemon_Tea: "../images/beverages/pic2.jpg",
    Plain_Water: "../images/beverages/pic3.jpg"
};

const DONMONO_TYPES = {
    Chicken_Katsu_Curry_Rice: "CHICKEN_KATSU_CURRY_RICE",
    Tendon: "TENDON",
    Tori_Teriyaki_Don: "TORI_TERIYAKI_DON",
    Salmon_Donburi: "SALMON_DONBURI"
};

const DONMONO_DESCRIPTIONS = {
    Chicken_Katsu_Curry_Rice: "Delicious chicken katsu served with savory curry over rice.",
    Tendon: "Assorted tempura served over a bed of rice with a flavorful sauce.",
    Tori_Teriyaki_Don: "Grilled chicken glazed with teriyaki sauce served on a bed of rice.",
    Salmon_Donburi: "Fresh salmon slices served over a bowl of sushi rice."
};

const DONMONO_PRICES = {
    Chicken_Katsu_Curry_Rice: 25.00,
    Tendon: 25.00,
    Tori_Teriyaki_Don: 25.00,
    Salmon_Donburi: 25.00
};

const DONMONO_SRC = {
    Chicken_Katsu_Curry_Rice: "../images/donmono/pic1.jpg",
    Tendon: "../images/donmono/pic2.jpg",
    Tori_Teriyaki_Don: "../images/donmono/pic3.jpg",
    Salmon_Donburi: "../images/donmono/pic4.jpg"
};

export {
    _LANDING_PAGE_TYPES,
    _LANDING_PAGE_LINKS,
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
};
