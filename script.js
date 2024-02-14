
var botonEncriptar = document.querySelector(".boton-encriptar")
var botonDesencriptar = document.querySelector(".boton-desencriptar")
var botonCopiar = document.querySelector(".boton-copiar")
var muneco = document.querySelector(".muneco")
var contenedor = document.querySelector(".contenedor-parrafo")
var resultado = document.querySelector(".texto-resultado")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var entradatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}


function desencriptar(){
    ocultarAdelante();
    var entradatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(entradatexto);
}
function recuperarTexto(){
    var entradatexto = document.querySelector(".entrada-texto")
}
function ocultarAdelante() {
    muneco.setAttribute('hidden', 'true');
    contenedor.setAttribute('hidden', 'true');
}

