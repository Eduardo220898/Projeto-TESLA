
let formulario = document.querySelector(".formulario")

function aparecerformulario(){
    formulario.style.left = "60%"

}

function desaparecerformulario(){
    formulario.style.left = "-50%"

}
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector("video");
    if (video) {
        video.play().catch(() => {
            console.log("O navegador bloqueou o autoplay. Usuário precisa interagir.");
        });
    }
});
