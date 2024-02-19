<?php 

session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];

		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//read from database
			$query = "select * from users where user_name = '$user_name' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);
					
					if($user_data['password'] === $password)
					{

						$_SESSION['user_id'] = $user_data['user_id'];
						header("Location: index.php");
						die;
					}
				}
			}
			
			echo "wrong username or password!";
		}else
		{
			echo "wrong username or password!";
		}
	}

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

    
            <div class="forma2">
        <section>
        E-pošta: <input type="email" placeholder="janez.novak@gmail.com" required>
        </section>
        <section>
       Geslo: <input type="password" placeholder="" required>
        </section>
        <section>
        <input type="submit" value="Prijava">
        </section>
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
          <h3>Blogi</h3>
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