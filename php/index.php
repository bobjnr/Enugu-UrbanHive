<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Enugu UrbanHive</title>

    <!-- CUSTOM CSS -->
    <link rel="stylesheet" href="./stylesheets/index.css" />
    <link rel="stylesheet" href="./stylesheets/nav.css" />
    <link rel="stylesheet" href="./stylesheets/footer.css">
  </head>
  <body>
    <!-- THE HEADER -->
    <header>
      <div class="header">
        <i
          id="menu-icon"
          class="fa-solid fa-bars-staggered mobile-menu-icon"
        ></i>
        <h1>
          <a href="index.html">Enugu-Urban<span>Hive</span></a>
        </h1>
        <div class="search">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Products, Brands, and Categories"
          /><i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <nav>
          <div class="nav-items">
            <div class="dropdown">
              <i class="fa-solid fa-user"></i>
              <span id="account">Account</span>
              <i id="caret-icon" class="fa-solid fa-caret-down"></i>
              <div class="dropdown-content">
                <a href="login.php">Login</a>
                <a href="register.php">Register</a>
              </div>
            </div>
            <div>
              <i class="fa-solid fa-cart-shopping"></i>
              <span class="item-counter">0</span>
            </div>
          </div>
        </nav>
        <!-- MOBILE NAVIGATION -->

        <div class="mobile-nav" id="mobile-nav">
          <div class="mobile-nav-site-identity">
            <i class="fa-solid fa-xmark mobile-menu-icon"></i>
            <h2>Enugu-Urban<span>Hive</span></h2>
          </div>
          <hr />
          <div class="mobile-nav-account">
            <p>Enugu-UrbanHive Account</p>
            <div class="nav-account-links">
              <a href="login.php"><i class="fa-solid fa-right-to-bracket"></i>Login</a>
              <a href="register.php"><i class="fa-solid fa-address-card"></i>Register</a>
            </div>
            <hr />
            <div class="mobile-nav-categories">
              <p>Our Categories</p>
              <a href=""><i class="fa-solid fa-mobile"></i>smartphones</a>
              <a href=""><i class="fa-solid fa-laptop"></i>laptops</a>
              <a href=""><i class="fa-solid fa-check-double"></i>fragrances</a>
              <a href=""><i class="fa-solid fa-check-double"></i>skincare</a>
              <a href=""
                ><i class="fa-solid fa-basket-shopping"></i>groceries</a
              >
              <a href=""><i class="fa-solid fa-chair"></i>home-decoration</a>
              <a href=""><i class="fa-solid fa-couch"></i>furniture</a>
              <a href=""><i class="fa-solid fa-person"></i>womens-dresses</a>
              <a href=""><i class="fa-solid fa-shoe-prints"></i>womens-shoes</a>
              <a href=""><i class="fa-solid fa-person"></i>mens-shirts</a>
              <a href=""><i class="fa-solid fa-shoe-prints"></i>mens-shoes</a>
              <a href=""><i class="fa-solid fa-stopwatch"></i>mens-watches</a>
              <a href=""><i class="fa-solid fa-stopwatch"></i>womens-watches</a>
              <a href=""><i class="fa-solid fa-bag-shopping"></i>womens-bags</a>
              <a href=""><i class="fa-solid fa-ring"></i>womens-jewellery</a>
              <a href=""><i class="fa-solid fa-check-double"></i>sunglasses</a>
              <a href=""><i class="fa-solid fa-car"></i>automotive</a>
              <a href=""><i class="fa-solid fa-motorcycle"></i>motorcycle</a>
            </div>
            <hr />
            <div class="mobile-nav-basic">
              <a href=""><i class="fa-solid fa-address-card"></i>About Us</a>
              <a href=""><i class="fa-solid fa-address-book"></i>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <h1>BODY</h1>
    </div>

    <footer>
      <div class="footer-links">
        <a href=""><i class="fa-solid fa-address-card"></i>About Us</a>
        <a href=""><i class="fa-solid fa-address-book"></i>Contact Us</a>
        <a href="login.php"><i class="fa-solid fa-right-to-bracket"></i>Login</a>
        <a href="register.php"><i class="fa-solid fa-address-card"></i>Register</a>
      </div>
      <div class="footer-others">
        <div class="footer-icons">
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-threads"></i>
          <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div class="footer-text"><p>CopyRights @ Enugu-UrbanHive 2024</p></div>
      </div>
    </footer>

    <script
      src="https://kit.fontawesome.com/ed534340a8.js"
      crossorigin="anonymous"
    ></script>
    <script src="./js/nav.js"></script>
  </body>
</html>