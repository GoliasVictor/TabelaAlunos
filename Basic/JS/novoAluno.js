
var msg            = document.querySelector("#msg");
var botaoNovoAluno = document.querySelector("#btn-novo");
var botaoCancelar  = document.querySelector("#btn-cancelar");
var botaoAdicionar = document.querySelector("#btn-adicionar");
var TelaNovoAluno  = document.querySelector("#tela-novo-aluno");
var formulario     = document.querySelector("#frmNovo");

botaoNovoAluno.addEventListener('click', exibirPainelNovoAluno);
botaoAdicionar.addEventListener('click', adicionarNovoAluno);
botaoCancelar.addEventListener('click',  cancelarNovoAluno);

function exibirPainelNovoAluno(e) {
    e.preventDefault();
    TelaNovoAluno.classList.remove("escondido");
}


function adicionarNovoAluno(e) {
    e.preventDefault();
    var rm = formulario.txtRm.value;
    var nome = formulario.txtNome.value;
    var nota1 = Parse(formulario.txtNota1.value);
    var nota2 = Parse(formulario.txtNota2.value);
    
    if (!rm){
        msg.textContent = "RM inválido";
    }
    else if (!nome) {
        msg.textContent = "Nome inválido"; 
    }
    else if (!NotaEhValida(nota1)) {
        msg.textContent = "Nota 1 deve ser entre 0 e 10"; 
    }
    else if (!NotaEhValida(nota2)) {
        msg.textContent = "Nota 2 deve ser entre 0 e 10";
    }
    else{
        var mediaNovoAluno = CalcularMedia(nota1, nota2);

        var novaLinha = document.createElement("tr");
        novaLinha.classList = "aluno mostrando";
                
        var celulaRM    = NovaCelula("info-rm"      , rm );
        var celulaNome  = NovaCelula("info-nome"    , nome );
        var celulaN1    = NovaCelula("info-prova01" , FormatarExibicaoNota(nota1));
        var celulaN2    = NovaCelula("info-prova02" , FormatarExibicaoNota(nota2));
        var celulaMedia = NovaCelula("info-media"   , FormatarExibicaoNota(mediaNovoAluno));
        var celulaSit   = NovaCelula("info-situacao");
        var iconeExc    = NovoIcone("material-icons btn-excluir", "disabled_by_default");
        var celulaExc   = NovaCelula("excluir-aluno");
        
        iconeExc.addEventListener('click', excluirAluno);
    
        celulaExc.appendChild(iconeExc);
    
        novaLinha.appendChild(celulaRM);
        novaLinha.appendChild(celulaNome);
        novaLinha.appendChild(celulaN1);
        novaLinha.appendChild(celulaN2);
        novaLinha.appendChild(celulaMedia);
        novaLinha.appendChild(celulaSit);
        novaLinha.appendChild(celulaExc);
    
        FormatarSituacao(novaLinha,mediaNovoAluno, 5)

        tabela.querySelector("tbody").appendChild(novaLinha);
    
        colorirLinha();
        fecharFormulario();
    }
}

function cancelarNovoAluno(e) {
    e.preventDefault();
    fecharFormulario();
}

function fecharFormulario() {
    formulario.txtRm.value = "";
    formulario.txtNome.value = "";
    formulario.txtNota1.value = "";
    formulario.txtNota2.value = "";
    TelaNovoAluno.classList.add("escondido");
}