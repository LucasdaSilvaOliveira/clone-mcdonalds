$(".carousel-header-bottom").owlCarousel({
    responsive: {
        0: {
            items: 10
        }
    }
});

// Lógica das perguntas e respostas

let btnsPerguntas = document.querySelectorAll(".btn-pergunta-item");
let divRespostas = document.querySelectorAll(".div-resposta");
let setas = document.querySelectorAll(".seta-down");

btnsPerguntas.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        let titleBtn = btn.firstElementChild;

        if(titleBtn.style.fontWeight == "bold") {

            titleBtn.style.fontWeight = "normal";
        } else {

            titleBtn.style.fontWeight = "bold";
        }

        divRespostas.forEach((divResp, indexResp) => {
            if (index == indexResp) {
                divResp.classList.toggle("toggle-class-resposta");
            }
        })

        setas.forEach((seta, indexSeta) => {
            if (index == indexSeta) {
                seta.classList.toggle("toggle-class-seta");
            }
        })
    })
})