// To run this, install prompt-sync first:
// npm install prompt-sync

const prompt = require("prompt-sync")();

let chefsName = "Simon";
let items = ["fruits", "vegetables", "meat", "dairy", "grains"];
let itemCost = [50, 30, 100, 80, 40];
let balance = 1000;
let cart = [];

console.log("Welcome to the kitchen! I'm Chef " + chefsName + ".");
console.log("Here's what we have in stock:");

function showStock() {
    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i]} - $${itemCost[i]}`);
    }
    console.log("Your current balance is: $" + balance);
}

let shopping = true;

while (shopping) {
    showStock();
    let choice = prompt("Enter the item name you want to buy (or 'q' to quit): ").toLowerCase();

    if (choice === "q") {
        shopping = false;
        break;
    }

    let index = items.indexOf(choice);
    if (index !== -1) {
        let cost = itemCost[index];
        if (balance >= cost) {
            balance -= cost;
            cart.push(choice);
            console.log(` You bought ${choice} for $${cost}.`);
            console.log(" New balance: $" + balance);
        } else {
            console.log(" Sorry, you don’t have enough balance.");
        }
    } else {
        console.log(" Invalid choice. Try again.");
    }
}

console.log("\n🛒 Shopping complete!");
if (cart.length > 0) {
    console.log("You bought: " + cart.join(", "));
} else {
    console.log("You didn’t buy anything.");
}
console.log("Final balance: $" + balance);