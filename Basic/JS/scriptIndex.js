var linhasAlunos   = document.querySelectorAll(".aluno");
var tabela         = document.querySelector("#alunos");

for (var indice = 0; indice < linhasAlunos.length; indice++) {
    var aluno      = linhasAlunos[indice];
    var TdN1       = Parse(aluno.querySelector(".info-prova01").textContent);
    var TdN2       = Parse(aluno.querySelector(".info-prova02").textContent);
    var TdMedia    = aluno.querySelector(".info-media");
    var TdSituacao = aluno.querySelector(".info-situacao");

    var mediaAluno             = CalcularMedia(TdN1, TdN2);
    TdMedia.textContent = FormatarExibicaoNota(mediaAluno);
    FormatarSituacao(aluno, mediaAluno, 5);
}
colorirLinha();