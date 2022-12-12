<template>
	<form class="ferramentas">
		<input type="search" id="filtro" v-model.trim="opcoesFiltro.nome" />
		<select id="filtro-situacao" v-model="opcoesFiltro.situacao">
			<option value="todos">Todos</option>
			<option value="aprovados">Aprovados</option>
			<option value="reprovados">Reprovados</option>
		</select>
		<button type="button" id="btn-novo" @click="novoAluno">Novo</button>
	</form>
</template>
<script>
export default {

	props: {
		opcoesFiltro: {
			default() {
				return {
					nome: "",
					situacao: "todos",
				};
			},
		},
	},
	data() {
		return {};
	},
	emits:["novo-aluno"],
	methods:{
		novoAluno(){
			this.$emit("novo-aluno");
		}
	}
};
</script>

<style lang="scss">
.ferramentas{
	width: 100%;
	margin-bottom: 10px;
	display: grid;
	grid-template-columns: 1fr auto auto auto;
}
#btn-novo,#filtro-situacao{
	margin-left: 1em;
}
#filtro{
	width: 100%;
}

</style>
