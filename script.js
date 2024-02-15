
var botonEncriptar = document.querySelector(".boton-encriptar")
var botonDesencriptar = document.querySelector(".boton-desencriptar")
var botonCopiar = document.querySelector(".boton-copiar")
var muneco = document.querySelector(".muneco")
var contenedor = document.querySelector(".contenedor-parrafo")
var resultado = document.querySelector(".texto-resultado")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar(){
    ocultarAdelante();
    var entradatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(entradatexto);
    mostrarCopiar();
    botonCopiar.setAttribute('value', 'Copiar')
}
function desencriptar(){
    ocultarAdelante();
    var entradatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(entradatexto);
    mostrarCopiar();
    botonCopiar.setAttribute('value', 'Copiar');
}
function recuperarTexto(){
    var entradatexto = document.querySelector(".entrada-texto").value;
    return entradatexto;
}
function ocultarAdelante() {
    muneco.setAttribute('hidden', 'true');
    contenedor.setAttribute('hidden', 'true');
}
function copiar() {
    let copiar = document.querySelector(".texto-resultado")
    navigator.clipboard.writeText(copiar.textContent)
    botonCopiar.setAttribute('value', 'Copiado')
}
function mostrarCopiar() {
    botonCopiar.removeAttribute('hidden')
    
}

/* Esta funcion es la que se encarga de encriptar, basicamente va a sustituir caracteres por pares de caracteres sin vocales,
para obtener un mensaje encriptado */

function encriptarTexto(entradatexto) {
    var textoencriptado = ""
    for (let i = 0; i < entradatexto.length; i++){
        if (entradatexto[i] == "a") {
            textoencriptado = textoencriptado + "xw"   
        }
        else if (entradatexto[i] == "e") {
            textoencriptado = textoencriptado + "vz"
        }
        else if (entradatexto[i] == "i") {
            textoencriptado = textoencriptado + "zx"
        }
        else if (entradatexto[i] == "o") {
            textoencriptado = textoencriptado + "vx"
        }
        else if (entradatexto[i] == "u") {
            textoencriptado = textoencriptado + "qc"
        }
        else if (entradatexto[i] == "h") {
            textoencriptado = textoencriptado + "cz"
        }
        else if (entradatexto[i] == "c") {
            textoencriptado = textoencriptado + "kz"
        }
        else if (entradatexto[i] == "m") {
            textoencriptado = textoencriptado + "ks"
        }
        else if (entradatexto[i] == "s") {
            textoencriptado = textoencriptado + "zs"
        }
        else {
            textoencriptado = textoencriptado + entradatexto[i]
        }
    }
    return textoencriptado;
}

/* Esta funcion lo que hace es desencriptar, basicamente es igual a la funcion anterior pero a la inversa, analiza los patrones para 
saber que caracteres debe sustituir para descifrar el mensaje. */

function desencriptarTexto(entradatexto) {
    var textodesencriptado = ""
    for (let i = 0; i < entradatexto.length; i++){
        if (entradatexto[i] == "x" && entradatexto[i + 1] == "w")  {
            textodesencriptado = textodesencriptado + "a"
            i = i + 1   
        }
        else if (entradatexto[i] == "v" && entradatexto[i + 1] == "z")  {
            textodesencriptado = textodesencriptado + "e"
            i = i + 1   
        }
        else if (entradatexto[i] == "z" && entradatexto[i + 1] == "x")  {
            textodesencriptado = textodesencriptado + "i"
            i = i + 1   
        }
        else if (entradatexto[i] == "v" && entradatexto[i + 1] == "x")  {
            textodesencriptado = textodesencriptado + "o"
            i = i + 1   
        }
        else if (entradatexto[i] == "q" && entradatexto[i + 1] == "c")  {
            textodesencriptado = textodesencriptado + "u"
            i = i + 1   
        }
        else if (entradatexto[i] == "c" && entradatexto[i + 1] == "z")  {
            textodesencriptado = textodesencriptado + "h"
            i = i + 1   
        }
        else if (entradatexto[i] == "k" && entradatexto[i + 1] == "z")  {
            textodesencriptado = textodesencriptado + "c"
            i = i + 1   
        }
        else if (entradatexto[i] == "k" && entradatexto[i + 1] == "s")  {
            textodesencriptado = textodesencriptado + "m"
            i = i + 1   
        }
        else if (entradatexto[i] == "z" && entradatexto[i + 1] == "s")  {
            textodesencriptado = textodesencriptado + "s"
            i = i + 1   
        }
        else {
            textodesencriptado = textodesencriptado + entradatexto[i]
        }
    }
    return textodesencriptado;
}
