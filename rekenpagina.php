<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Daan Berg">
    <meta name="keywords" content="">
    <title>Rekenpagina | Mathmate</title>

    <link rel="stylesheet" type="text/css" href="CSS/tafels.css">  
</head>
<body>
    <header>
        <nav>
             <section id="navbar">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Rekenpagina</a></li>
                        <li><img src="img/thereal.png" height="100vh"></li>
                        <li><a href="">Game</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
            </section>
        </nav>
    </header>
    <main>
        <h1>Tafels Berekenen</h1>
        <section id="tafel">
            <h2>Op Mathmate.nl kun je op een eenvoudige manier alle tafels berekenen. De rekenopdrachten zijn simpel en overzichtelijk zodat je direct kan beginnen met het oefenen van de tafels. Kies onderstaand één van de tafels uit die je wil oefenen, laat zien wat je kan bij de tempotoets of print mooie werkbladen uit.</h2><br>
            <p>Vermenigtal</p>
            <input type="number" id="invoer">
            <button id="knop">Genereer</button>
        </section>
        <div id="tafel-ant"></div>

        <section id="machtreeks">
            <h1>Machtreeks berekenen</h1>
            <p>Vermenigtal</p>
            <input type="number" id="macht">
            <button id="btn-macht">Genereer</button>
            <div id="macht-ant"></div>
        </section> 
        
        <section id="Breuken reeksen">
            <h1>Breuken berekenen</h1>
            <p>Vermenigtal</p>
            <input type="number" id="teller">
            <input type="number" id="noemer">
            <button id="btn-macht">Genereer</button>
            <div id="macht-ant"></div>
        </section> 
    </main>

    <footer>

    </footer>
    <script src="js/rekenpagina.js" type=text/javascript></script>
</body>
</html>