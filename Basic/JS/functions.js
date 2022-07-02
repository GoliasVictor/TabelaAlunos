function Parse(n) {
    return parseFloat(n.replace(",", "."));
}

function CalcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}
function NotaEhValida(nota){
    return !isNaN(nota) && 0  <= nota && nota <= 10; 
} 

function FormatarSituacao(linha, notaFinal, notaAprovacao) {
    if (notaFinal >= notaAprovacao)
        linha.classList.add("aprovado");
    else
        linha.classList.add("reprovado");
}

function FormatarExibicaoNota(nota) {
    return comVirgula(nota.toFixed(1));
}

function comVirgula(nota) {
    return nota.toString().replace(".", ",")
}

function colorirLinha() {
    var linhasAlunosAparcendo = document.querySelectorAll(".aluno.mostrando");
    for (var indice = 0; indice < linhasAlunosAparcendo.length; indice++) {
        var Aluno = linhasAlunosAparcendo[indice];
        if ((indice + 1) % 2 != 0) 
            Aluno.classList.add("linha-impar");
        else 
            Aluno.classList.remove("linha-impar");
    }
}

function EstaIncluso(string, substring){ 
    let str = string.toUpperCase();
    let substr = substring.toUpperCase(); 
    for(let i = 0;  i  <= str.length - substr.length; i++) {
        let Contem = true;
        for(let j = 0; j < substr.length; j++){ 
            Contem &= str[i+j] == substr[j];
            if(!Contem)
                break
        }       
        if(Contem)
            return true;
    }
    return false;
}

function NovoElemento(tag, classe, conteudo){
    var Elemento = document.createElement(tag);
    Elemento.classList =classe;
    Elemento.textContent = conteudo;
    return Elemento;
}
function NovaCelula(classe, conteudo){
    return NovoElemento("td", classe, conteudo);
}
function NovoIcone(classe, conteudo) {
    return NovoElemento("i",classe, conteudo);
}