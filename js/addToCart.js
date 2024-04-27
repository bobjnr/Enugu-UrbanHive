// SHOWING CART SUMMARY
const cartIcon = document.querySelector("#cart");
const cartSummary = document.querySelector(".cart-summary");

cartIcon.addEventListener("click", () => {
  cartSummary.classList.toggle("show-cart");
});

// PRODUCT

let product = null;

const getProducts = fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    product = data;

    displayProducts();
  })
  .catch((error) => console.error("Error fetching product data:", error));

let i = 0;

function displayProducts() {
  const root = document.getElementById("root");
  root.innerHTML = product
    .map((item) => {
      const { image, title, price } = item;
      return (
        `<div class='box'>
              <div class='img-box'>
                  <img class='images' src=${image}></img>
              </div>
          <div class='bottom-content'>
          <p>${title}</p>
          <h2>#${price.toLocaleString()}.00</h2>` +
        "<button onclick='addtocart(" +
        i++ +
        ")'>Add to cart</button>" +
        `</div>
          </div>`
      );
    })
    .join("");
}

//   FOR THE CART SUMMARRY

function getCartFromStorage() {
  const storedCart = sessionStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
}

// Function to save cart data to localStorage
function saveCartToStorage(cart) {
  sessionStorage.setItem("cart", JSON.stringify(cart));
}

let cart = getCartFromStorage();

// Function to add item to cart
function addtocart(a) {
  cart.push({ ...product[a] });
  saveCartToStorage(cart);
  displaycart();
}

// Function to remove item from cart
function delElement(a) {
  cart.splice(a, 1);
  saveCartToStorage(cart);
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("counter").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML =
          "$ " + total.toLocaleString() + ".00";
        return (
          `<div class='cart-item'>
                  <div class='row-img'>
                      <img class='rowimg' src=${image}>
                  </div>
                  <p style='font-size:12px; width: 100px;'>${title}</p>
                  <h2 style='font-size: 12px;'># ${price.toLocaleString()}</h2>` +
          "<i class='fa-solid fa-trash' style= 'margin-left: 10px; font-size: 12px;' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}

displaycart();


// FOR SINGLE PRODUCT PAGE

const productBox = document.querySelectorAll('.box');
console.log(productBox);