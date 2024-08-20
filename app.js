let textarea = document.querySelector(".text-area");
let mensaje = document.querySelector(".encriptado");

function btnencriptar(){
    let resultadoEncriptado = encriptar(textarea.value);
    mensaje.innerHTML = resultadoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar() {
    let textoOriginal = document.getElementById('valorUsuario').value;
    let textoEncriptado = '';

    for (let i = 0; i < textoOriginal.length; i++) {
        switch (textoOriginal.charAt(i)) {
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += textoOriginal.charAt(i);
                break;
        }
    }
  
    console.log(textoEncriptado);
    return textoEncriptado;
}

function btndesencriptar() {
    let resultadoDesencriptado = desencriptar(mensaje.innerHTML);
    mensaje.innerHTML = resultadoDesencriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(textoOriginal2) {
    let textoDesencriptado = '';

    for (let i = 0; i < textoOriginal2.length; i++) {
        if (textoOriginal2.startsWith('ai', i)) {
            textoDesencriptado += 'a';
            i += 1; // Saltar el siguiente carácter
        } else if (textoOriginal2.startsWith('enter', i)) {
            textoDesencriptado += 'e';
            i += 4; // Saltar los siguientes 4 caracteres
        } else if (textoOriginal2.startsWith('imes', i)) {
            textoDesencriptado += 'i';
            i += 3; // Saltar los siguientes 3 caracteres
        } else if (textoOriginal2.startsWith('ober', i)) {
            textoDesencriptado += 'o';
            i += 3; // Saltar los siguientes 3 caracteres
        } else if (textoOriginal2.startsWith('ufat', i)) {
            textoDesencriptado += 'u';
            i += 3; // Saltar los siguientes 3 caracteres
        } else {
            textoDesencriptado += textoOriginal2.charAt(i);
        }
    }

    console.log(textoDesencriptado);
    return textoDesencriptado;
}

function btnCopiar() {
    let btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", () => {
        let contenido = mensaje.innerHTML;
        navigator.clipboard.writeText(contenido);
        console.log("Texto copiado al portapapeles");
    });
}

// Llama a la función para asignar el evento click
btnCopiar();

