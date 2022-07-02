function Parse(n) {
    return parseFloat(n.replace(",", "."));
}

function CalcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}

function NotaEhValida(nota){
    return !isNaN(nota) && 0  <= nota && nota <= 10; 
} 

function FormatarExibicaoNota(nota) {
    return comVirgula(nota.toFixed(1));
}

function comVirgula(nota) {
    return nota.toString().replace(".", ",")
}