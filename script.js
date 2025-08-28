// -------------------------
// Part 1: Variables & Conditionals
// -------------------------

let stockFertilizer = 10;
let stockSeeds = 0;  // Example: out of stock

if (stockFertilizer > 0) {
  console.log("Fertilizer is available ✅");
} else {
  console.log("Fertilizer is out of stock ❌");
}

if (stockSeeds > 0) {
  console.log("Seeds are available ✅");
} else {
  console.log("Seeds are out of stock ❌");
}

// -------------------------
// Part 2: Functions
// -------------------------

function calculateDiscount(price, discountPercent) {
  let discount = (price * discountPercent) / 100;
  return price - discount;
}

function greetCustomer(name) {
  return `Welcome to Agribros, ${name}! 🌱`;
}

console.log(calculateDiscount(1000, 10)); // Example use
console.log(greetCustomer("Alice"));

// -------------------------
// Part 3: Loops
// -------------------------

// For loop: display product names
let products = ["Organic Fertilizer", "Irrigation Kit", "Hybrid Seeds"];
for (let i = 0; i < products.length; i++) {
  console.log("Product:", products[i]);
}

// While loop: simulate countdown for delivery days
let deliveryDays = 3;
while (deliveryDays > 0) {
  console.log(`Delivery in ${deliveryDays} days...`);
  deliveryDays--;
}

// -------------------------
// Part 4: DOM Interactions
// -------------------------

// 1. Update text content
document.getElementById("message").innerText = "Check out our latest offers! 🎉";

// 2. Add event listener for Buy button
document.getElementById("buyBtn").addEventListener("click", function() {
  document.getElementById("message").innerText = "Thank you for your purchase! 🛒";
});

// 3. Highlight product list when button is clicked
document.getElementById("highlightBtn").addEventListener("click", function() {
  let items = document.querySelectorAll("#products li");
  items.forEach(item => {
    item.style.color = "green";
    item.style.fontWeight = "bold";
  });
});
