<?php
    require('php/connect.php');


    $dinheiro = mysqli_query($conn, "SELECT dinheiro FROM `usuario` WHERE id = 17;");

    $_SESSION['money'] = $dinheiro;

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="roulette-style.css">
    <title>Gambling</title>
</head>

<body onload="giveMoney(); start_roulette();">
    <nav>
        <div id="div-logo">
            <h1 id = "logo-site" class="logo">GBEX</h1>
        </div>
        <ul>
            <?php echo("<li id = 'show-user-money' class='li-items'>R$: ". $dinheiro . "</li>") ?>
            <li class="li-items" onclick="money_cheat()">Roulette</li>
            <li class="li-items">Crash</li>
            <li class="li-items">Mines</li>
        </ul>
    </nav>
    
    <div id="exterior-roulette">

        <div id="roulette"></div>

        <div id="ponteiro"></div>

    </div>
    <div id="barra-vazia">
        <div id="barra-cheia"></div>
    </div>

    <div id="bet-button-div">
        <input id = "zero-bet" class = "bet-buttons" type="button" value="0" onclick="reset_bet()">
        <input id = "half-bet" class = "bet-buttons" type="button" value="1/2" onclick="half_bet()">
        <input id = "double-bet" class = "bet-buttons" type="button" value="2x" onclick="double_bet()">
        <input class = "bet-buttons" type="button" value="?">
        <input id="input-bet" type="text" placeholder="Make your bet...">
        <input name = "bet" id = "bet" type="button" value="Bet" onclick="bet()">

    </div>

    <div id="apostas">
        <div id="red-bets" class="bets">
            <h1>2x Vermelho</h1>
        </div>
        <div id="green-bets" class="bets">
            <h1>14x Verde</h1>
        </div>
        <div id="black-bets" class="bets">
            <h1>2x Preto</h1>
        </div>
    </div>

    <script language="JavaScript" src="roulette-script.js"></script>
</body>

</html>