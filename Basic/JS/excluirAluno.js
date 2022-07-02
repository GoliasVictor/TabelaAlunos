var botoesExcluir  = document.querySelectorAll(".btn-excluir");

for (var indice = 0; indice < botoesExcluir.length; indice++) {
    botoesExcluir[indice].addEventListener('click', excluirAluno);
}

function excluirAluno(e) {
    e.preventDefault();
    var botao = e.target;
    botao.parentNode.parentNode.remove();
    colorirLinha();
}
