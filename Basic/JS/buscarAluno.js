var botaoBuscar    = document.querySelector("#btn-buscar");
var filtroAluno    = document.querySelector("#filtro");
var filtroSituacao = document.querySelector("#filtro-situacao");
filtroSituacao.addEventListener("change", buscarAluno);
botaoBuscar.addEventListener('click', buscarAluno);

function buscarAluno(e) {
    e.preventDefault();
    var filtroNome = filtroAluno.value;
    var Situacao = filtroSituacao.value;

    for(var indice = 0; indice < linhasAlunos.length; indice++){
        var aluno = linhasAlunos[indice];
        var NomeAluno = aluno.querySelector(".info-nome").textContent;
        if(EstaIncluso(NomeAluno,filtroNome) && EstahSituacao(aluno, Situacao))
            aluno.classList.add("mostrando");
        else 
            aluno.classList.remove("mostrando");
    }
    colorirLinha();
}

function EstahSituacao(aluno,situacao)
{
    switch (situacao) {
        case "todos" : return true;
        case "aprovados" : return aluno.classList.contains('aprovado'); break;
        case "reprovados": return aluno.classList.contains('reprovado'); break;
    }
}