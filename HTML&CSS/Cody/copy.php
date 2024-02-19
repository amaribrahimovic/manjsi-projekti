<?php 
session_start();

	include("connection.php");
	include("functions.php");

	$user_data = check_login($con);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Cody</title>
</head>
<body>
    <nav class="navbar">
      <div class="container">
        <h1 class="logo">Cody</h1>
        <ul class="nav">
          <li><a href="index.html" style="color: #444">Domov</a></li>
          <li><a href="narocanje.html" style="color: #444">Naročanje</a></li>
          <li><a href="registracija.html" style="color: #444">Registracija</a></li>
          <li><a href="prijava.html" style="color: #444">Prijava</a></li>
        </ul>
      </div>
    </nav>

    <!-- Showcase -->
    <section class="section-a">
      <div class="container">
        <div>
          <h1>Najboljše spletne strani na enem mestu.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
            commodi placeat ea itaque modi corrupti corporis nam voluptas aut
            reprehenderit eaque culpa.
          </p>
          <a href="#about" class="btn">Preberite si več</a>
        </div>
        <img src="a.png" alt="" />
      </div>
    </section>

    <!-- Large Text -->
    <section id="about" class="section-b">
      <div class="overlay">
        <div class="section-b-inner">
          <h3 class="text-2">Lepe in enostavne</h3>
          <h2 class="text-5 mt-1">Vse potrebno<br> za uspešno stran</h2>
          <p class="mt-1">
            Naši programerji uporabljajo najbolj sodobne jezike, tehnologije in orodja.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="section-c">
      <div class="gallery">
        <a href="HTML5.jpg" class="big"
          ><img src="HTML5.jpg" alt=""
        /></a>
        <a href="css-1200x667.webp" class="big"
          ><img src="css-1200x667.webp" alt=""
        /></a>
        <a href="node.png" class="big"
          ><img src="node.png" alt=""
        /></a>
        <a href="1024px-Unofficial_JavaScript_logo_2.svg.png" class="big"
          ><img src="1024px-Unofficial_JavaScript_logo_2.svg.png" alt=""
        /></a>
        <a href="php-27-226042.png" class="big">
          <img src="php-27-226042.png" alt=""
        /></a>
        <a href="react.png" class="big"
          ><img src="react.png" alt=""
        /></a>
      </div>
    </section>

    <div class="card graf1" style="width: 40vw">
      <img class="" src="graf2.png">
      <div class="card-body">
        <p class="card-text">Tukaj je prikazan promet 100 najbolj obiskanih spletnih strani v enem mesecu.</p>
      </div>
    </div>


    <div class="card graf2" style="width: 18rem;">
      <img class="card-img-top" src="Screenshot_4.png" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">Mobilne naprave so "prevzele" svet, kar lahko vidite na grafu. <br> Ena izmed naših storitev je tudi optimizacija spletnih strani za mobilne naprave</p>
      </div>
    </div>

    

    <!-- Footer -->
    <footer class="section-footer py-4">
      <div class="container">
        <div>
          <h2 class="text-2 mb-1" style="font-size: 2.6rem;">Družabna omrežja</h2>
          <a href="http://twitter.com">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="http://facebook.com">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://youtube.com">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
        </div>
        <div>
          <h3>Podjetje</h3>
          <ul>
            <li><a href="#">Naše Storitve</a></li>
            <li><a href="#">O Nas</a></li>
            <li><a href="#">Pravilnik zasebnosti</a></li>
            <li><a href="#">Pogoji storitev</a></li>
          </ul>
        </div>
        <div>
          <h3>Izdelki</h3>
          <ul>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
            <li><a href="#">Lorem ipsum dolor.</a></li>
          </ul>
        </div>
        <div>
          <h3>Naročitev</h3>
          <p>
            Naročite se na naše spletne novice
          </p>
          <form
            class="mt-1"
            name="email-form"
            method="POST"
            data-netlify="true"
          >
            <div class="email-form">
              <span class="form-control-wrap"
                ><input
                  type="email"
                  name="email"
                  id="email"
                  size="40"
                  class="form-control"
                  placeholder="E-mail"/></span
              ><button type="submit" value="Submit" class="form-control submit">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>

    <script src="main.js"></script>
</body>
</html>