/*

//Reescribiendo y puliendo el codigo para agregar enigma

//              0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26
var alfabeto = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z];

const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};


function encriptar(texto){
   let encriptado = document.querySelector(".encryp");
   
}

function desencryp(){
    document.querySelector('.desencryp');
}

function copy(){
    document.querySelector('.copy');
}

let textIpunt = document.querySelector('.text-area').;

let mensaje = document.querySelector('.mensaje');


encriptar.addEventListener("click", function(){
    let mensaje = textIpunt;
})*/



function validarTexto (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas)||texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}


let btnEncriptar = document.querySelector('.encryp');

btnEncriptar.addEventListener("click", function ()  {
    let textInput = document.querySelector('.text-area').value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector('.mensaje');
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})


const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}


let btnCopiar = document.querySelector('.copy');

btnCopiar.addEventListener("click", function(){        
    let Copiado = document.querySelector('.mensaje').value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector('.text-area').value="";

});

let btnDesencriptar = document.querySelector('.desencryp');

btnDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector('.text-area').value;
    let Desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector('.mensaje');
    resultado.value = Desencriptado;
})



function desencriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);}