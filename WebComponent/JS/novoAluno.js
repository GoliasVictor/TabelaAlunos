const  templateNovoAluno = document.querySelector("#template-novo-aluno"); 
const containerNovoAluno = document.querySelector("#novo-aluno")
function exibirPainelNovoAluno() {
    containerNovoAluno.appendChild(templateNovoAluno.content.cloneNode(true));
}
function adicionarNovoAluno(e) {
    e.preventDefault();
    var form = document.forms.frmNovo;
    var rm = form.txtRm.value;
    var nome = form.txtNome.value;
    var nota1 = Parse(form.txtNota1.value);
    var nota2 = Parse(form.txtNota2.value);
    
    if (!rm){msg.textContent = "RM inválido"; }
    else if (!nome.trim()) { msg.textContent = "Nome inválido";  }
    else if (!NotaEhValida(nota1)) { msg.textContent = "Nota 1 deve ser entre 0 e 10";}
    else if (!NotaEhValida(nota2)) { msg.textContent = "Nota 2 deve ser entre 0 e 10";}
    else {
        listaAlunos.NovoAluno(rm,nome, nota1,nota2);    
        fecharFormulario();
    }
} 

function fecharFormulario(e) {
    e?.preventDefault() 
    containerNovoAluno.textContent = "";
}