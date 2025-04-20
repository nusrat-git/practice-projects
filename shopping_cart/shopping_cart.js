const items = [
  { id: 1, name: "shoe", price: 200, quantity: 10 },
  { id: 2, name: "dress", price: 400, quantity: 14 },
  { id: 3, name: "shampoo", price: 100, quantity: 200 },
  { id: 4, name: "soap", price: 50, quantity: 30 },
  { id: 5, name: "shirt", price: 600, quantity: 5 },
  { id: 6, name: "pant", price: 399, quantity: 10 },
  { id: 7, name: "oil", price: 200, quantity: 29 },
  { id: 8, name: "sandal", price: 300, quantity: 199 },
];

let cartItems = [];

const showItem = (id, arr, cart = false) => {
  const element = document.getElementById(id);

  let inputText = "";

  if (arr.length == 0) {
    inputText += "No products found";
  } else {
    arr.forEach((item) => {
      inputText += `<div class="item">
            <h3>${cart ? items[item.id - 1].name : item.name}</h3>
            <span>${cart ? items[item.id - 1].price : item.price}$</span>
            <span>${cart ? item.quantity : item.quantity}ps</span>
             ${
               cart
                 ? `<button onclick="handleRemoveItem(${item.id})">Remove</button>`
                 : `<button onclick="handleAddItem(${item.id})">Add</button>`
             }
          </div>`;
    });
  }

  element.innerHTML = inputText;
};

const findTotal = () => {
  const element = document.getElementById("total");
  let total = 0;

  cartItems.forEach((item) => {
    total += items[item.id - 1].price * item.quantity;
  });
  if (total > 0) {
    element.innerText = `total: ${total}$`;
  } else {
    element.innerText = "";
  }
};

const handleAddItem = (id) => {
  const exists = cartItems.find((ele) => ele.id == id);
  if (!exists) {
    cartItems.push({ id: id, quantity: 1 });
  } else {
    exists.quantity++;
  }
  showItem("cart-items", cartItems, true);
  findTotal();
};

const handleRemoveItem = (id) => {
  const exists = cartItems.find((ele) => ele.id == id);
  if (exists) {
    if (exists.quantity > 1) {
      exists.quantity--;
    } else {
      cartItems = cartItems.filter((ele) => ele.id != id);
    }
  }

  showItem("cart-items", cartItems, true);
  findTotal();
};

document.addEventListener("DOMContentLoaded", () => {
  showItem("items", items);
  showItem("cart-items", cartItems);
});

//test
