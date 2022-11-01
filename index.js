let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let number1Nulo = document.querySelector("#number1-nulo");
let number2Nulo = document.querySelector("#number2-nulo");

let nome = document.querySelector("#presidente-name");
let partido = document.querySelector("#partido");
let vice = document.querySelector("#vice-presidente");

let presidenteImg = document.querySelector("#presidente")
let viceImg = document.querySelector("#vice")

let bntCorrige = document.querySelector("#corrigir");
let bntConfirma = document.querySelector("#confirmar")

function insert(num) {
    console.log(number1.textContent)
    if(number1.textContent == "#") {
        number1.setAttribute("style","color: black");
        number1Nulo.setAttribute("style","color: black");
        number1Nulo.textContent = num;
        number1.textContent = num;
    } else if (number2.textContent == "#") {
        number2.setAttribute("style", "color: black");
        number2Nulo.setAttribute("style","color: black");
        number2Nulo.textContent = num;
        number2.textContent = num;
    }

    if(number1.textContent != "#" && number2.textContent != "#") {
        if(number1.textContent == 2 && number2.textContent == 2) {
            bolsonaro();
        } else if(number1.textContent == 1 && number2.textContent == 3) {
            lula();
        } else {
            nulo();
        }
    }

}

function bolsonaro() {
    nome.textContent = "Jair Bolsonaro";
    partido.textContent = "PL";
    vice.textContent = "Hamilton Mourão";
    presidenteImg.setAttribute("src", "img/bolsonaro.png");
    viceImg.setAttribute("src", "img/vice-bolsonaro.png");
}

function lula() {
    nome.textContent = "Luiz Inácio Lula da Silva";
    partido.textContent = "PT";
    vice.textContent = "Geraldo Alckmin";
    presidenteImg.setAttribute("src", "img/lula.png");
    viceImg.setAttribute("src", "img/vice-lula.png");
}

function nulo() {
    let telaNulo = document.querySelector("#tela-nulo");

    telaNulo.setAttribute("style", "display: block");
}

bntCorrige.addEventListener("click", ()=> {
    let telaNulo = document.querySelector("#tela-nulo");

    telaNulo.setAttribute("style", "display: none");
    number1.textContent = "#";
    number1.setAttribute("style", "color: white");
    number2.textContent = "#";
    number2.setAttribute("style", "color: white");
    nome.textContent = "";
    partido.textContent = "";
    vice.textContent = "";
    presidenteImg.setAttribute("src", "img/branco.png");
    viceImg.setAttribute("src", "img/branco.png");
});

bntConfirma.addEventListener("click", ()=> {
    let telaHide = document.querySelector("#tela-hide");
    let linhaHide = document.querySelector(".hide");

    if(number1.textContent != "#" && number2.textContent != "#") {
        telaHide.setAttribute("style", "display: flex");
        linhaHide.setAttribute("style", "display: none");
    }
});
