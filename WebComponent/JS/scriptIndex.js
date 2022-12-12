const HTMLfiltroNome = document.querySelector("#filtro-nome");
const HTMLfiltroSituacao = document.querySelector("#filtro-situacao");


class ListaAlunos {

    constructor(tabela) {
        this.tabela = tabela;
    }
    get Alunos(){
        return this.tabela.getElementsByTagName("linha-aluno");
    }  
    NovoAluno(rm, nome, nota1,nota2) {
        this.tabela.tBodies[0].innerHTML 
			+= `<linha-aluno nome="${nome}" rm="${rm}" nota1="${nota1}" nota2="${nota2}"></linha-aluno>`
    }
}  

const listaAlunos =  new ListaAlunos(document.querySelector("#alunos")); 
let DadosBruto = [
    {rm:21031, nome:"Sophia Esther Letícia Rodrigues",n1:5.5 ,n2:0.0},
    {rm:21033, nome:"Alana Isadora Maya Duarte"		 ,n1:10.0,n2:7.0},
    {rm:21032, nome:"Fernanda Rebeca Figueiredo"	 ,n1:7.5 ,n2:8.5},
    {rm:21034, nome:"Carlos Elias da Mota"			 ,n1:9.0 ,n2:5.0},
    {rm:21035, nome:"Luiz Enrico Martins" 			 ,n1:0.0 ,n2:0.0} 
]
for (const aluno of DadosBruto) {
    listaAlunos.NovoAluno(aluno.rm, aluno.nome, aluno.n1, aluno.n2);
} 

function buscarAluno() {
    let filtroNome = HTMLfiltroNome.value.toUpperCase(); 
    var VerificarNome = (aluno) => aluno.nome.toUpperCase().includes(filtroNome); 
    var VerificarSituacao;
    switch(HTMLfiltroSituacao.value){
        case      "todas":  VerificarSituacao =  () => true; break;
        case  "aprovados":  VerificarSituacao  = (aluno) =>  aluno.Aprovado; break;
        case "reprovados":  VerificarSituacao  = (aluno) => !aluno.Aprovado; break;
    }
    for (const Aluno of listaAlunos.Alunos) {
        Aluno.mostrando = VerificarNome(Aluno) && VerificarSituacao(Aluno); 
    } 
} 

function excluirAluno(botao) {
    let AlunoExcluido = botao.parentNode;
    listaAlunos.splice(listaAlunos.findIndex((a) => a === AlunoExcluido),1);
    AlunoExcluido.remove();
}
