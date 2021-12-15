// funcoes para definir qual o jogador que tem a vez, jogada 1 ou 0 (booleano)
jogada = 1;
function funcCasa1() {
    if (jogada == 1) {
        document.getElementById("casa1").value = "X";
        document.getElementById("casa1").disabled = true;
        jogada = 0;
    }
    else {
        document.getElementById("casa1").value = "O";
        document.getElementById("casa1").disabled = true;
        jogada = 1;
    }
}

function funcCasa2() {
    if (jogada == 1) {
        document.getElementById("casa2").value = "X";
        document.getElementById("casa2").disabled = true;
        jogada = 0;
    }
    else {
        document.getElementById("casa2").value = "O";
        document.getElementById("casa2").disabled = true;
        jogada = 1;
    }
}

function funcCasa3() {
    if (jogada == 1) {
        document.getElementById("casa3").value = "X";
        document.getElementById("casa3").disabled = true;
        jogada = 0;
    }
    else {
        document.getElementById("casa3").value = "O";
        document.getElementById("casa3").disabled = true;
        jogada = 1;
    }
}

function funcCasa4() {
    if (jogada == 1) {
        document.getElementById("casa4").value = "X";
        document.getElementById("casa4").disabled = true;
        jogada = 0;
    }
    else {
        document.getElementById("casa4").value = "O";
        document.getElementById("casa4").disabled = true;
        jogada = 1;
    }
}

function funcCasa5() {
    if (jogada == 1) {
        document.getElementById("casa5").value = "X";
        document.getElementById("casa5").disabled = true;
        jogada = 0;
    }
    else {
        document.getElementById("casa5").value = "O";
        document.getElementById("casa5").disabled = true;
        jogada = 1;
    }
}

function funcCasa6() {
    if (jogada == 1) {
        document.getElementById("casa6").value = "X";   
        document.getElementById("casa6").disabled = true;
        jogada = 0;
    }
    else {
        document.getElementById("casa6").value = "O";
        document.getElementById("casa6").disabled = true;
        jogada = 1;
    }
}

function funcCasa7() {
    if (jogada == 1) {
        document.getElementById("casa7").value = "X";
        document.getElementById("casa7").disabled = true;
        jogada = 0;
    }
    else {
        document.getElementById("casa7").value = "O";
        document.getElementById("casa7").disabled = true;
        jogada = 1;
    }
}

function funcCasa8() {
    if (jogada == 1) {
        document.getElementById("casa8").value = "X";
        document.getElementById("casa8").disabled = true;
        jogada = 0;
    }
    else {
        document.getElementById("casa8").value = "O";
        document.getElementById("casa8").disabled = true;
        jogada = 1;
    }
}

function funcCasa9() {
    if (jogada == 1) {
        document.getElementById("casa9").value = "X";
        document.getElementById("casa9").disabled = true;
        jogada = 0;
    }
    else {
        document.getElementById("casa9").value = "O";
        document.getElementById("casa9").disabled = true;
        jogada = 1;
    }
}


//funcao para verificar o resultado do jogo

function funcResultado() {

    // definir as casas
    var casa1, casa2, casa3, casa4, casa5, casa6, casa7, casa8, casa9;
    casa1 = document.getElementById("casa1").value;
    casa2 = document.getElementById("casa2").value;
    casa3 = document.getElementById("casa3").value;
    casa4 = document.getElementById("casa4").value;
    casa5 = document.getElementById("casa5").value;
    casa6 = document.getElementById("casa6").value;
    casa7 = document.getElementById("casa7").value;
    casa8 = document.getElementById("casa8").value;
    casa9 = document.getElementById("casa9").value;


    //verifica se o jogador X ganhou e se sim, bloqueia o jogo para não dar para selecionar mais
    if ((casa1 == 'X') && (casa2 == 'X') && (casa3 == 'X')) {
        document.getElementById('print').innerHTML = "O Jogador X ganhou!";
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa5").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado1').style.display = "block";
    }
    else if ((casa1 == 'X') && (casa4 == 'X') && (casa7 == 'X')) {
        document.getElementById('print').innerHTML = "O Jogador X ganhou!";
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa5").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado1').style.display = "block";
    }
    else if ((casa7 == 'X') && (casa8 == 'X') && (casa9 == 'X')) {
        document.getElementById('print').innerHTML = "O Jogador X ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa5").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById('resultado1').style.display = "block";
    }
    else if ((casa3 == 'X') && (casa6 == 'X') && (casa9 == 'X')) {
        document.getElementById('print').innerHTML = "O Jogador X ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa5").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById('resultado1').style.display = "block";
    }
    else if ((casa1 == 'X') && (casa5 == 'X') && (casa9 == 'X')) {
        document.getElementById('print').innerHTML = "O Jogador X ganhou!";
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById('resultado1').style.display = "block";
    }
    else if ((casa3 == 'X') && (casa5 == 'X') && (casa7 == 'X')) {
        document.getElementById('print').innerHTML = "O Jogador X ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado1').style.display = "block";
    }
    else if ((casa2 == 'X') && (casa5 == 'X') && (casa8 == 'X')) {
        document.getElementById('print').innerHTML = "O Jogador X ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado1').style.display = "block";
    }
    else if ((casa4 == 'X') && (casa5 == 'X') && (casa6 == 'X')) {
        document.getElementById('print').innerHTML = "O Jogador X ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado1').style.display = "block";
    }

    //verifica se o jogador 0 ganhou e se sim, bloqueia o jogo para não dar para selecionar mais
    else if ((casa1 == 'O') && (casa2 == 'O') && (casa3 == 'O')) {
        document.getElementById('print').innerHTML = "O Jogador O ganhou!";
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa5").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado2').style.display = "block";
    }
    else if ((casa1 == 'O') && (casa4 == 'O') && (casa7 == 'O')) {
        document.getElementById('print').innerHTML = "O Jogador O ganhou!";
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa5").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado2').style.display = "block";
    }
    else if ((casa7 == 'O') && (casa8 == 'O') && (casa9 == 'O')) {
        document.getElementById('print').innerHTML = "O Jogador O ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa5").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById('resultado2').style.display = "block";
    }
    else if ((casa3 == 'O') && (casa6 == 'O') && (casa9 == 'O')) {
        document.getElementById('print').innerHTML = "O Jogador O ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa5").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById('resultado2').style.display = "block";
    }
    else if ((casa1 == 'O') && (casa5 == 'O') && (casa9 == 'O')) {
        document.getElementById('print').innerHTML = "O Jogador O ganhou!";
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById('resultado2').style.display = "block";
    }
    else if ((casa3 == 'O') && (casa5 == 'O') && (casa7 == 'O')) {
        document.getElementById('print').innerHTML = "O Jogador O ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado2').style.display = "block";
    }
    else if ((casa2 == 'O') && (casa5 == 'O') && (casa8 == 'O')) {
        document.getElementById('print').innerHTML = "O Jogador O ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa4").disabled = true;
        document.getElementById("casa6").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado2').style.display = "block";
    }
    else if ((casa4 == 'O') && (casa5 == 'O') && (casa6 == 'O')) {
        document.getElementById('print').innerHTML = "O Jogador O ganhou!";
        document.getElementById("casa1").disabled = true;
        document.getElementById("casa2").disabled = true;
        document.getElementById("casa3").disabled = true;
        document.getElementById("casa7").disabled = true;
        document.getElementById("casa8").disabled = true;
        document.getElementById("casa9").disabled = true;
        document.getElementById('resultado2').style.display = "block";
    }

    //Verifica se houve empate
    else if ((casa1 == 'X' || casa1 == 'O') && (casa2 == 'X' || casa2 == 'O') && (casa3 == 'X' || casa3 == 'O') &&
        (casa4 == 'X' || casa4 == 'O') && (casa5 == 'X' || casa5 == 'O') && (casa6 == 'X' || casa6 == 'O') &&
        (casa7 == 'X' || casa7 == 'O') && (casa8 == 'X' || casa8 == 'O') && (casa9 == 'X' || casa9 == 'O')) {
        document.getElementById('print').innerHTML = "Empate";
        document.getElementById('resultado3').style.display = "block";
    }
    else {

        //mostrar a vez
        if (jogada == 1) {
            document.getElementById('print').innerHTML = "Vez do Jogador X!";
        }
        else {
            document.getElementById('print').innerHTML = "Vez do Jogador O!";
        }
    }
}

// Funcao para fazer o reset do jogo
function reset() {
    location.reload();
    document.getElementById('casa1').value = '';
    document.getElementById("casa2").value = '';
    document.getElementById("casa3").value = '';
    document.getElementById("casa4").value = '';
    document.getElementById("casa5").value = '';
    document.getElementById("casa6").value = '';
    document.getElementById("casa7").value = '';
    document.getElementById("casa8").value = '';
    document.getElementById("casa9").value = '';

}

