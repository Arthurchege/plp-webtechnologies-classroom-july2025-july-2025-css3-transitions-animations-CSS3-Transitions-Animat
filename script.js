// Part 2: Functions, scope, parameters, return values
function add(a, b) {
  return a + b;
}

let total = 0; // global
function addToTotal(num) {
  let temp = num * 2; // local
  total += temp;
  return total;
}

// Check in console
console.log("Add 5 + 3 =", add(5, 3)); 
console.log("New total after adding 4*2 =", addToTotal(4)); 

// Part 3: Modal functionality
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
