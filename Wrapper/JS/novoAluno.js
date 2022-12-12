var templateNovoAluno = ` 
        <div id="tela-novo-aluno">
            <form id="frmNovo">
                <h2>Novo Aluno</h2>
                <label for="txt-nome">Nome: </label><input type="text" name="txtNome" id="txt-nome" />
                <label for="txt-rm">RM: </label><input type="number" name="txtRm" id="txt-rm" min="0" max="99999" />
                <label id="lb-notas">Notas:</label>
                <input placeholder="Nota 1" type="number" name="txtNota1" id="txt-nota1" min="0" max="10" />
                <input placeholder="Nota 2" type="number" name="txtNota2" id="txt-nota2" min="0" max="10" />
                <button type="button" id="btn-adicionar" onclick="adicionarNovoAluno(event)">Adicionar</button>
                <button type="button" id="btn-cancelar">Cancelar</button>
                <span id="msg"></span>
            </form>
        </div>
    `; 
var containerNovoAluno = document.querySelector("#novo-aluno")
function exibirPainelNovoAluno() {
    containerNovoAluno.innerHTML = templateNovoAluno;
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

function cancelarNovoAluno(e) {
    e.preventDefault();
    fecharFormulario();
}

function fecharFormulario() { 
    containerNovoAluno.innerHTML = "";
}