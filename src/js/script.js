function trocarModulo(idDoModulo) {
    const modulos = document.querySelectorAll(".modulo");

    modulos.forEach(function (modulo) {
        modulo.hidden = modulo.id !== idDoModulo;
    });
}

const botoesModulo = document.querySelectorAll("[data-modulo]");

botoesModulo.forEach(function (botao) {
    botao.addEventListener("click", function () {
        trocarModulo(botao.dataset.modulo);

        botoesModulo.forEach(function (outroBotão) {
            outroBotão.classList.remove("ativo");

        });
        botao.classList.add("ativo");
    });
});
