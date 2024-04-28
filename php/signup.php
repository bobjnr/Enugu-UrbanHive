<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Enugu-UrbanHive | Register</title>
    <!-- CUSTOM CSS -->
    <link rel="stylesheet" href="./stylesheets/index.css" />
    <link rel="stylesheet" href="./stylesheets/nav.css" />
    <link rel="stylesheet" href="./stylesheets/register.css" />
    <link rel="stylesheet" href="./stylesheets/footer.css">
  </head>
  <body>
    <!--  THE NAV   -->
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
            placeholder="Search Products"
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
              <a href=""><i class="fa-solid fa-right-to-bracket"></i>Login</a>
              <a href="register.php"
                ><i class="fa-solid fa-address-card"></i>Register</a
              >
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


    <!-- THE REGISTRATION PAGE -->

    <div class="container">

    <?php
    include("db.php");
    
    if(isset($_POST['submit'])){
        $firstname = mydestroy($_POST['first_name']);
        $lastname = mydestroy($_POST['last_name']);
        $email = mydestroy($_POST['myemail']);
        $phone = mydestroy($_POST['phone_number']);
        $pass = mydestroy($_POST['mypass']);
        $rpass = mydestroy($_POST['mypass2']);
    
        if($rpass==$pass){
            $pass = password_hash($pass,PASSWORD_DEFAULT);
    
            $select = mysqli_query($connect, "select * from users where first_name = '$firstname' ");
            $num = mysqli_num_rows($select);
            if($num>0){
                echo "User exists";
            }
            else{
                $sign = mysqli_query($connect, "insert into users (first_name, last_name, email, phone_number, password) 
                values('$firstname', '$lastname', '$email', '$phone', '$pass')") or die ('cant insert'.mysqli_error($connect));
                if($sign){echo 'Registration successful!';}
            }
        }
        if($rpass!=$pass){
            echo 'password does not match';
        }
    }
    
    function mydestroy($dest){
        $dest = trim($dest);
        $dest = htmlentities($dest);
        $dest = htmlspecialchars($dest, ENT_QUOTES, "UTF-8");
        $dest = strip_tags($dest);
        $dest = stripslashes($dest);
        return $dest;
    }
    ?>


      <div class="registration">
        <!-- <form action="" id="form" method="post" enctype="multipart/form-data">
          <h2>Register Now</h2>
          <div class="inputcontainer">
            <input name="first_name" type="text" id="fname" placeholder="Enter first name" />
            <i class="fa-solid fa-user"></i>
            <small>first</small>
          </div>
          <div class="inputcontainer">
            <input name="last_name" type="text" id="lname" placeholder="Enter last name" />
            <i class="fa-solid fa-user"></i>
            <small>second</small>
          </div>
          <div class="inputcontainer">
            <input name="myemail" type="text" name="" id="email" placeholder="Enter email" />
            <i class="fa-solid fa-envelope"></i>
            <small>third</small>
          </div>
          <div class="inputcontainer">
            <input name="phone_number" type="text" name="" id="phone" placeholder="Enter phone number" />
            <i class="fa-solid fa-envelope"></i>
            <small>third</small>
          </div>
          <div class="inputcontainer">
            <input name="mypass" type="password" id="password" placeholder="Enter Password"/>
            <i class="fa-solid fa-eye-slash" id="eye"></i>
            <small>fourth</small>
          </div>
          <div class="inputcontainer">
            <input name="mypass2" type="password" id="conpassword" placeholder="Confirm password"/>
            <i class="fa-solid fa-eye-slash" id="eye1"></i>
            <small>fifth</small>
          </div>
          <button type="submit" id="btn">Register</button> 
          <div class="login-link">
            <p>Do you have an account? <a href="login.php">Login</a></p> -->
        </div>
        </form> 
      </div>
    </div>

    <!-- FOOTER -->
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

    <!-- THE SCRIPTS -->
    <script
      src="https://kit.fontawesome.com/ed534340a8.js"
      crossorigin="anonymous"
    ></script>
    <script src="./js/nav.js"></script>
    <script src="./js/register.js"></script>
  </body>
</html>
