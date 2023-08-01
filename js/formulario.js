const formulario = document.querySelector(".formulario");
const inputNombre = document.getElementById("input-nombre");
const inputCorreo = document.getElementById("input-email");
const inputAsunto = document.getElementById("input-asunto");
const mensaje = document.getElementById("mensaje")
const error = document.getElementById("error")

mensaje.style.display = "none"
error.style.display = "none"
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if(inputCorreo.checkValidity() && inputNombre.checkValidity()){
        formulario.reset()
        mensaje.style.display = "block"

        setTimeout(()=>{
            mensaje.style.display = "none"
        }, 1000)
    }else{
        error.style.display = "none"
    }

    
})

inputNombre.addEventListener("input", () => {
    nombre = inputNombre.value;
    if(nombre.length >= 3 && nombre.trim()) {
        inputNombre.style.border = "1px solid green";
    }else{
        inputNombre.style.border = "1px solid red"
    }
})

inputCorreo.addEventListener("input", () => {
    const email = inputCorreo.value;
    const validEmail = /^[^\s@]+@[^\s@]+\.(com|es)$/i.test(email);
    if (validEmail && email.trim()) {
        inputCorreo.setCustomValidity("");
        inputCorreo.style.border = "2px solid green"
    } else {
        inputCorreo.setCustomValidity("El e-mail debe llevar @ y (.com o .es)")
        inputCorreo.style.border = "2px solid red"
    }
})

