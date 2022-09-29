var user_money = 500
var comecou_roleta = false

/* Função que mostrará o saldo do jogador na "NAV". */
function giveMoney(){
    let showUserMoney = document.getElementById("show-user-money");
    showUserMoney.innerText = `R$: ${user_money}`;
}

/* Funções utilizadas nos botões para manipular o valor da aposta. */
function double_bet(){
    let input = document.getElementById("input-bet");
    let inputInt = parseInt(input.value, 10);
    input.value = inputInt*2;
}

function half_bet(){
    let input = document.getElementById("input-bet");
    let inputInt = parseInt(input.value, 10);
    input.value = inputInt/2;
}

function reset_bet(){
    let input = document.getElementById("input-bet");
    let inputInt = parseInt(input.value, 10);
    input.value = "";
}

function bet(){ 
    let bet = document.getElementById("input-bet");
    betInt = parseInt(bet.value, 10);
    if(betInt > 0 && user_money >= betInt){
        user_money = (user_money-betInt);
        giveMoney();
        return;
    } else{alert("Saldo insuficiente!! =(")}
}

/* Funções correspondentes ao funcionamento da roleta. */

function start_roulette(){
    const interval_spin = setInterval(spin_wheel, 20000);
    comecou_roleta = true;
    return;
}


function random_number(){
    let random2 = Math.floor(Math.random() * 100)
    let random = Math.floor(Math.random() * 100 * random2)
    return random
}

function reset_roulette(){
    let roulette = document.getElementById("roulette");
    roulette.style = `transition-timing-function: ease; transition-duration: 2s; background-position: 6883px;`;
    countdown_bar();
    return
}

function spin_wheel(){
        var number = random_number();
        let roleta = document.getElementById("roulette");
        let logo = document.getElementById("logo-site");

        if(number <= 7920){
            logo.innerText = `${number}`
            roleta.style = `transition-timing-function: ease; transition-duration: 5s; background-position: ${number}px;`;
            setTimeout(reset_roulette, 10000);
            return
        } else {
            spin_wheel();
            return
        }
}

function countdown_bar(){
    const bar = document.getElementById("barra-cheia");
    bar.style.width = 0 + '%';
    let width = 0;
    const interval = setInterval(frame, 20);
    function frame() {
        if (width == 500) {
            clearInterval(interval);
            return;
        } else {
            width++; 
            bar.style.width = width/5 + '%'; 
          }
        }
      }

function money_cheat(){
    user_money = (user_money+1000);
    giveMoney();
}