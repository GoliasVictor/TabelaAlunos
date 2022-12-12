<template>
  <table id="alunos">
	 <thead>
		<th>RM</th>
		<th>Nome</th>
		<th>Prova 01</th>
		<th>Prova 02</th>
		<th>Média</th>
		<th>Situação Final</th>
		<th></th>
	 </thead>
	 <tbody>
		<linha-aluno v-for="aluno,i of alunos" :key="i" :aluno="aluno" @excluir="excluirAluno"/>
	 </tbody>
  </table>
</template>
<script>
import LinhaAluno from "./linha-aluno.vue";
export default {
	props:["alunos"],
	emits:["excluir-aluno"],
	methods:{
		excluirAluno(aluno){
			this.$emit("excluir-aluno", aluno)
		}
	},
	components:{
		"linha-aluno":LinhaAluno
	}
}
</script>
<style lang="scss">
#alunos{
	width: 100%;
	border-collapse: collapse;

	thead{
		background-color: var(--primaria);
		color:white
	}
	th,
	td{
		border-collapse: collapse;
		padding: 0.5em 1em ;
		text-align: center;
	}

}
</style>
