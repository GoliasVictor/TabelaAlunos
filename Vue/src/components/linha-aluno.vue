<template>
	<tr :class="['aluno', aluno.aprovado ? 'aprovado' : 'reprovado']">
		<td class="info-rm">{{ aluno.rm }}</td>
		<td class="info-nome">{{ aluno.nome }}</td>
		<td class="info-prova01">{{ aluno.n1 | FormatarExibicaoNota }}</td>
		<td class="info-prova02">{{ aluno.n2 | FormatarExibicaoNota }}</td>
		<td class="info-media"  >{{ aluno.media | FormatarExibicaoNota }}</td>
		<td class="info-situacao"></td>
		<td class="excluir-aluno" @click="excluir">
			<i class="material-icons btn-excluir">disabled_by_default</i>
		</td>
	</tr>
</template>
<script>
export default {
	props: ["aluno"],
	emits: ["excluir"],
	filters: {
		FormatarExibicaoNota(nota) {
			return nota.toFixed(1).toString().replace(".", ",");
		},
	},
	methods:{
		excluir(){
			this.$emit("excluir", this.aluno)
		}
	}
};
</script>

<style lang="scss">
.aluno {
	&:nth-of-type(2n) {
		background-color: var(--tercearia);
	}
	&:nth-of-type(2n + 1) {
		background-color: var(--secundaria);
	}
	&.aprovado .info-situacao::before {
		content: "Aprovado(a)";
	}

	&.reprovado {
		background-color: #f00 !important;
		font-weight: bold;
		color: white;
		.info-situacao::before {
			content: "Reprovado(a)";
		}
		.btn-excluir {
			color: white;
		}
	}
}
.info-nome{
	text-align: left;
    text-transform: uppercase;
}
.btn-excluir{
	color: #F00;
}

</style>
