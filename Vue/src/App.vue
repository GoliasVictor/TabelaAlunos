<template>
	<main id="app">
		<h1>Lista de Alunos</h1>
		<barra-ferramentas :opcoes-filtro="opcoesFiltro" @novo-aluno="mostrarPainelNovoAluno"/>
		<tabela :alunos="alunosFiltrados" @excluir-aluno="excluirAluno"/>
		<painel-novo-aluno v-if="mostrandoPainelNovoAluno" @cancelar="fecharPainelNovoAluno" @criar="AdicionarAluno"/>
	</main>
</template>

<script >
import BarraFerramentas from "./components/barra-ferramentas.vue";
import Tabela from "./components/tabela.vue";
import Aluno from "./aluno"
import PainelNovoAluno from "./components/painel-novo-aluno.vue"
export default {
	name: "app",
	data() {
		return {
			mostrandoPainelNovoAluno: false,
			opcoesFiltro:{
				nome:"",
				situacao:"todos"
			},
			alunos:[
				new Aluno(21031,"Sophia Esther Letícia Rodrigues",5.5 , 0.0),
				new Aluno(21033,"Alana Isadora Maya Duarte"		 ,10.0, 7.0),
				new Aluno(21032,"Fernanda Rebeca Figueiredo"		 ,7.5 , 8.5),
				new Aluno(21034,"Carlos Elias da Mota"				 ,9.0 , 5.0),
				new Aluno(21035,"Luiz Enrico Martins"				 ,0.0 , 0.0)
			]
		};
	},
	computed:{
		alunosFiltrados(){
			const TiposVerificacaoSituacao =  {
				"todos":() => true,
				"aprovados" : (aluno) =>  aluno.aprovado,
				"reprovados": (aluno) => !aluno.aprovado,
			}
			let filtro = this.opcoesFiltro.nome.toUpperCase();
			let VerificarNome = (aluno) => aluno.nome.toUpperCase().includes(filtro);
			let VerificarSituacao =  TiposVerificacaoSituacao[this.opcoesFiltro.situacao]
			return this.alunos.filter( a => VerificarNome(a) && VerificarSituacao(a));
		}
	},
	methods:{
		mostrarPainelNovoAluno(){
			this.mostrandoPainelNovoAluno = true;
		},
		fecharPainelNovoAluno(){
			this.mostrandoPainelNovoAluno = false;
		},
		AdicionarAluno(rm, nome, n1, n2){
			this.alunos.push(new Aluno(rm, nome, n1, n2));
			this.fecharPainelNovoAluno();
		},
		excluirAluno(aluno){
			this.alunos.splice(this.alunos.indexOf(aluno) , 1);
		}
	},
	components: {
		BarraFerramentas,
		Tabela,
		PainelNovoAluno,
	},
};
</script>


<style lang="scss" src="./style.scss"></style>
