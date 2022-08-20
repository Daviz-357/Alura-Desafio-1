

const input = document.querySelector("#text_area");
const btnEncriptar = document.querySelector("#btn-encrypt");
const btnDesencriptar = document.querySelector("#btn-decrypt");
const mensaje = document.querySelector("#mensaje");
const btnCopiar = document.querySelector("#btn-copiar");

function encriptar(){}

function desencriptar(){}

//ocultar
document.getElementById("se-muestra").style.display = 'none';
verificartexto();

//mostrar
function aparece() {
    document.getElementById("se-oculta").style.display = 'none';
    document.getElementById("se-muestra").style.display = 'block';
}

function inicio(){
    document.getElementById("se-oculta").style.display = 'none';
    document.getElementById("se-muestra").style.display = 'block';
}



//Encripta el texto ingresado
document.getElementById('btn-encrypt').onclick = (e) => {
    e.preventDefault();
    const textoEncriptado = encriptar(input.value.toLowerCase());
    mensaje.value = textoEncriptado;
    input.value = "";
    aparece()
}

//Desencripta el texto ingresado
document.getElementById('btn-decrypt').onclick = (e) => {
    e.preventDefault();
    const textoDesencriptado = desencriptar(input.value.toLowerCase());
    mensaje.value = textoDesencriptado;
    input.value = "";
    aparece()
}

//Boton copiar
document.getElementById('btn-copiar').onclick = (e) => {
    e.preventDefault();
    const mensaje = document.querySelector("#mensaje");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)    
}

//Metodo Encriptacion
function encriptar(stringTexto) {
    let crypto_llaves = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "arm"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    stringTexto = stringTexto.toLowerCase()
    for (let i = 0; i < crypto_llaves.length; i++) {
        if (stringTexto.includes(crypto_llaves[i][0])) {
            stringTexto = stringTexto.replaceAll(crypto_llaves[i][0], crypto_llaves[i][1])
        }
    }
    return stringTexto
}

function desencriptar(stringTexto){
    let crypto_llaves = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "arm"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    stringTexto = stringTexto.toLowerCase()
    for (let i = 0; i < crypto_llaves.length; i++) {
        if (stringTexto.includes(crypto_llaves[i][1])) {
            stringTexto = stringTexto.replaceAll(crypto_llaves[i][1], crypto_llaves[i][0])
        }
    }
    return stringTexto
}

function verificartexto() {
    var inputTexto = document.querySelector("#text_area");
    inputTexto.addEventListener("keypress", function(e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);

        if (keyCode > 47 && keyCode < 65) {
            e.preventDefault();
        }
    });
}




