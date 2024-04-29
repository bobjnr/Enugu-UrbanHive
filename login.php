<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/0170857075.js" crossorigin="anonymous"></script>

    <!-- CUSTOM CSS  -->
    <link rel="stylesheet" href="./stylesheets/index.css" />
    <link rel="stylesheet" href="./stylesheets/nav.css">
    <link rel="stylesheet" href="./stylesheets/login.css" type="text/css">
    <link rel="stylesheet" href="./stylesheets/footer.css">
    <title>Enugu-UrbanHive | Login</title>
</head>
<body>

  <!-- HEADER -->
  <header>
      <div class="header">
        <i
          id="menu-icon"
          class="fa-solid fa-bars-staggered mobile-menu-icon"
        ></i>
        <h1>
          <a href="index.html">Enugu-Urban<span>Hive</span></a>
        </h1>
       
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
              <i class="fa-solid fa-cart-shopping" id="cart"></i>
              <span class="item-counter" id="counter">0</span>
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
          
              <a href=""><i class="fa-solid fa-person"></i>women Wears</a>
              <a href=""><i class="fa-solid fa-person"></i>Men Wears</a>
             
            </div>
            <hr />
            <div class="mobile-nav-basic">
              <a href=""><i class="fa-solid fa-address-card"></i>About Us</a>
              <a href=""><i class="fa-solid fa-address-book"></i>Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <!-- THE CART -->

      <div class="cart-summary">
        <div class="cart-summary-head"><p>My Cart</p></div>
        <div id="cartItem">Your cart is empty</div>
        <div class="cart-summary-foot">
            <h4>Total</h4>
            <h4 id="total"># 0.00</h4>
        </div>
        <button class="cart-summary-btn">Checkout</button>
      </div>
    </header>

    
   <div class="container">
    <div class="login-wrapper">

      <div class="wrapper">
          <form id="form" action="">
              <h1>Login</h1>
              <div class="input-box">
                  <input type="text" id="user" placeholder="Username" required>
                  <i class="fa-solid fa-user"></i>
              </div>
              <div class="input-box">
                  <input type="password" id="pass" placeholder="Password" required>
                  <i class="fa-solid fa-eye-slash" id="eye"></i>
              </div>
  
              <div class="remember-forgot">
                  <label><input type="checkbox">Remember me</label>
                  <a href="#">Forgot Password?</a>
              </div>
  
              <button type="submit" class="btn">Login</button>
  
              <div class="register-link">
                  <p>Don't have an account? <a href="#">Register</a></p>
              </div>
          </form>
      </div>
    </div>
   </div>

    <!-- FOOTER -->
    <footer>
      <div class="footer-links">
        <a href=""><i class="fa-solid fa-address-card"></i>About Us</a>
        <a href=""><i class="fa-solid fa-address-book"></i>Contact Us</a>
        <a href="login.html"><i class="fa-solid fa-right-to-bracket"></i>Login</a>
        <a href="register.html"
          ><i class="fa-solid fa-address-card"></i>Register</a
        >
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
    

  

</body>
</html>