
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
    resultado.textContent = encriptarTexto(entradatexto);
}


function desencriptar(){
    ocultarAdelante();
    var entradatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(entradatexto);
}
function recuperarTexto(){
    var entradatexto = document.querySelector(".entrada-texto").value;
    return entradatexto;
}
function ocultarAdelante() {
    muneco.setAttribute('hidden', 'true');
    contenedor.setAttribute('hidden', 'true');
}

function encriptarTexto(entradatexto) {
    var textoencriptado = ""
    for (let i = 0; i < entradatexto.length; i++){
        if (entradatexto[i] == "a") {
            textoencriptado = textoencriptado + "x"   
        }
        else if (entradatexto[i] == "e") {
            textoencriptado = textoencriptado + "v"
        }
        else if (entradatexto[i] == "i") {
            textoencriptado = textoencriptado + "m"
        }
        else if (entradatexto[i] == "o") {
            textoencriptado = textoencriptado + "g"
        }
        else if (entradatexto[i] == "u") {
            textoencriptado = textoencriptado + "c"
        }
        else {
            textoencriptado = textoencriptado + entradatexto[i]
        }
    }
    return textoencriptado;
}

function desencriptarTexto(entradatexto) {
    var textodesencriptado = ""
    for (let i = 0; i < entradatexto.length; i++){
        if (entradatexto[i] == "x") {
            textodesencriptado = textodesencriptado + "a"   
        }
        else if (entradatexto[i] == "v") {
            textodesencriptado = textodesencriptado + "e"
        }
        else if (entradatexto[i] == "m") {
            textodesencriptado = textodesencriptado + "i"
        }
        else if (entradatexto[i] == "g") {
            textodesencriptado = textodesencriptado + "o"
        }
        else if (entradatexto[i] == "c") {
            textodesencriptado = textodesencriptado + "u"
        }
        else {
            textodesencriptado = textodesencriptado + entradatexto[i]
        }
    }
    return textodesencriptado;
}
