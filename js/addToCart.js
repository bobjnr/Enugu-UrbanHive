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
      root.innerHTML = ''; // Clear the content before adding new products
  
      product.forEach(item => {
          const {id, image, title, price } = item;  
          const newProduct = document.createElement('a');
          newProduct.href = '/detail.html?id=' + id;
          newProduct.classList.add('box');
  
          const imgBox = document.createElement('div');
          imgBox.classList.add('img-box');
  
          const img = document.createElement('img');
          img.classList.add('images');
          img.src = image;
  
          imgBox.appendChild(img);
          newProduct.appendChild(imgBox);
  
          const bottomContent = document.createElement('div');
          bottomContent.classList.add('bottom-content');
  
          const titleParagraph = document.createElement('p');
          titleParagraph.textContent = title;
  
          const priceHeading = document.createElement('h2');
          priceHeading.textContent = `#${price.toLocaleString()}.00`;
  
          const addButton = document.createElement('button');
          addButton.textContent = 'Add to cart';
          addButton.onclick = function() {
              addtocart(event, i++);
          };
  
          bottomContent.appendChild(titleParagraph);
          bottomContent.appendChild(priceHeading);
          bottomContent.appendChild(addButton);
  
          newProduct.appendChild(bottomContent);
  
          root.appendChild(newProduct);
      });
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
function addtocart(event, a) {
  event.preventDefault();
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
          "# " + total.toLocaleString() + ".00";
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

function searchProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredProducts = product.filter(item => item.title.toLowerCase().includes(searchTerm));

  displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
  const root = document.getElementById("root");
  root.innerHTML = ''; // Clear the content before adding filtered products

  filteredProducts.forEach(item => {
      const {id, image, title, price } = item;  
          const newProduct = document.createElement('a');
          newProduct.href = '/detail.html?id=' + id;
          newProduct.classList.add('box');
  
          const imgBox = document.createElement('div');
          imgBox.classList.add('img-box');
  
          const img = document.createElement('img');
          img.classList.add('images');
          img.src = image;
  
          imgBox.appendChild(img);
          newProduct.appendChild(imgBox);
  
          const bottomContent = document.createElement('div');
          bottomContent.classList.add('bottom-content');
  
          const titleParagraph = document.createElement('p');
          titleParagraph.textContent = title;
  
          const priceHeading = document.createElement('h2');
          priceHeading.textContent = `#${price.toLocaleString()}.00`;
  
          const addButton = document.createElement('button');
          addButton.textContent = 'Add to cart';
          addButton.onclick = function() {
              addtocart(event, i++);
          };
  
          bottomContent.appendChild(titleParagraph);
          bottomContent.appendChild(priceHeading);
          bottomContent.appendChild(addButton);
  
          newProduct.appendChild(bottomContent);
  
          root.appendChild(newProduct);
  });
}
