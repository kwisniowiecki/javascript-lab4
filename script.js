"use strict";

// Return the node list where all the elements have the specified CSS selector. Store that data in a variable called vendingMachine.

const vendingMachine = document.querySelectorAll(".button");

// Use querySelector() to return the node that represents the first element with a specific css selector. Store that data in the variable called total. 

const total = document.querySelector(".total");


let currentTotal = 0;

vendingMachine.forEach((snack) => {
    snack.addEventListener("click", () => {
        let amount = parseInt(snack.getAttribute("data-amount"));
        // currentTotal = currentTotal + amount;
        currentTotal += amount;
        total.innerText = currentTotal;
        // total.innerText = `Total:$${total}`;
    })
});


// #2 MAKE MONEY

let moneyForm = document.querySelector(".money-form")

let coinContainer = document.querySelector(".coin-container")

moneyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let data = new FormData(moneyForm);
    // ("name attribute is where you get what goes in the """)
    let number = data.get("numberInput");
    let type = data.get("whichCoin");
    for (let i = 0; i < number; i++) {
        let coin = document.createElement("div");
        coin.innerText = type;
        coinContainer.append(coin)
    }
})