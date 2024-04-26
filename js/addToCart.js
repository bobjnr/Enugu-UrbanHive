// SHOWING CART SUMMARY
const cartIcon = document.querySelector('#cart');
const cartSummary = document.querySelector('.cart-summary');

cartIcon.addEventListener('click', ()=>{
    cartSummary.classList.toggle('show-cart')
})

// pRODUCTS 

const product = [
    {
        id: 0,
        image: 'assets/1.jpg',
        title: 'Isi Agu Wear',
        price: 25000,
    },
    {
        id: 1,
        image: 'assets/2.png',
        title: 'Men Cap',
        price: 6000,
    },
    {
        id: 2,
        image: 'assets/3.png',
        title: 'Isi Agu Fabric (3yards)',
        price: 21000,
    },
    {
        id: 3,
        image: 'assets/5.png',
        title: 'Igbo igba nkwu attire',
        price: 10000,
    },
    {
        id: 4,
        image: 'assets/4.png',
        title: 'African Traditional Dress',
        price: 15000,
    },
    {
        id: 5,
        image: 'assets/6.png',
        title: 'Isi Agu Men Wear',
        price: 20000,
    },
    {
        id: 6,
        image: 'assets/7.png',
        title: 'Igbo Ozo Cap',
        price: 5000,
    },
    {
        id: 7,
        image: 'assets/9.png',
        title: 'Boy isiagu outfit',
        price: 30000,
    },
    {
        id: 8,
        image: 'assets/8.png',
        title: 'Igbo Red Cap',
        price: 4000,
    },
    {
        id: 9,
        image: 'assets/10.png',
        title: 'Walking staff',
        price: 5000,
    },
    {
        id: 10,
        image: 'assets/11.png',
        title: 'Tiger Eye Stone Beads',
        price: 2500,
    },
    {
        id: 11,
        image: 'assets/12.png',
        title: 'Traditional Wedding Attire',
        price: 35000,
    },
];

const categories = [
    ...new Set(
      product.map((item) => {
        return item;
      })
    ),
  ];

  let i = 0;

  document.getElementById("root").innerHTML = categories
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

//   FOR THE CART SUMMARRY

// var cart = [];

// function addtocart(a) {
//     cart.push({ ...categories[a] });
//     displaycart();
//   }

//   function delElement(a) {
//     cart.splice(a, 1);
//     displaycart();
//   }

function getCartFromStorage() {
    const storedCart = sessionStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
}

// Function to save cart data to localStorage
function saveCartToStorage(cart) {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

let cart = getCartFromStorage();

// Function to add item to cart
function addtocart(a) {
    cart.push({ ...categories[a] });
    saveCartToStorage(cart); // Save updated cart to localStorage
    displaycart();
}

// Function to remove item from cart
function delElement(a) {
    cart.splice(a, 1);
    saveCartToStorage(cart); // Save updated cart to localStorage
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
          document.getElementById("total").innerHTML = "$ " + total.toLocaleString() + ".00";
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
