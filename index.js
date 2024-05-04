const toggle = document.querySelector(".pricingToggle");
const cards = document.querySelectorAll(".pricingCard");

const cardsData = {
    0: { annually: "199.99", monthly: "19.99" },
    1: { annually: "249.99", monthly: "24.99" },
    2: { annually: "399.99", monthly: "39.99" },
};

const toggleCards = (e) => {
    const checked = e.target.checked;

    cards.forEach((card) => {
        const id = card.getAttribute("data-id");
        const data = cardsData[id];
        const txt = checked ? data.monthly : data.annually;

        card.querySelector("h1 span").innerText = txt;
    });
};

toggle.addEventListener("click", toggleCards);
