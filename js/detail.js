
    let products = null;

    const getProduct = fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    showDetail();

  })
  .catch((error) => console.error("Error fetching product data:", error));

    function showDetail(){
        // Selecting necessary elements
        let detail = document.querySelector('.detail');
        let listProduct = document.querySelector('.listProduct');
        
        // Getting the product ID from the query parameter
        let productId =  new URLSearchParams(window.location.search).get('id');
        
        // Filtering the products array to find the current product by ID
        let thisProduct = products.find(product => product.id == productId);
        
        // If there is no product with the specified ID, redirect to the home page
        if(!thisProduct){
            window.location.href = "/";
        }

        // Updating the product detail section with the current product's information
        detail.querySelector('.image img').src = thisProduct.image;
        detail.querySelector('.name').innerText = thisProduct.title;
        detail.querySelector('.price').innerText = '#' + thisProduct.price.toLocaleString();
        detail.querySelector('.description').innerText = thisProduct.description;

  

        // Displaying similar products
        products.filter(product => product.id != productId).forEach(product => {
            let newProduct = document.createElement('a');
            newProduct.href = '/detail.html?id=' + product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<div class="img-holder">
            <img src="${product.image}" alt="">
            </div>
            <h2>${product.title}</h2>
            <div class="price">#${product.price.toLocaleString()}</div>`;
            listProduct.appendChild(newProduct);
        });
    }

