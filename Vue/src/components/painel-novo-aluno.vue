<template>
	<div id="tela-novo-aluno">
		<form id="frmNovo">
			<h2>Novo Aluno</h2>
			<label for="txt-nome">Nome: </label>
			<input v-model.trim="nome" type="text" name="txtNome" id="txt-nome" />
			<label for="txt-rm">RM: </label>
			<input
				v-model.number="rm"
				type="number"
				name="txtRm"
				id="txt-rm"
				min="0"
				max="99999"
			/>
			<label id="lb-notas">Notas:</label>
			<input
				v-model="nota1"
				placeholder="Nota 1"
				type="number"
				name="txtNota1"
				id="txt-nota1"
				min="0"
				max="10"
			/>
			<input
				v-model="nota2"
				placeholder="Nota 2"
				type="number"
				name="txtNota2"
				id="txt-nota2"
				min="0"
				max="10"
			/>
			<button type="button" id="btn-adicionar" @click="adicionarNovoAluno">
				Adicionar
			</button>
			<button type="button" id="btn-cancelar" @click="cancelar" >Cancelar</button>
			<span id="msg">{{ error }}</span>
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			rm: "",
			nome: "",
			nota1: "",
			nota2: "",
			error: "",
		};
	},
	emits: ["criar", "cancelar"],
	methods: {
		cancelar(){
			this.$emit('cancelar');
		},
		adicionarNovoAluno() {
			if (!this.nome.trim())
				this.error = "Nome inválido";
			else if (!this.rm)
				this.error = "RM inválido";
			else if (!this.NotaEhValida(this.nota1))
				this.error = "Nota 1 deve ser entre 0 e 10";
			else if (!this.NotaEhValida(this.nota2))
				this.error = "Nota 2 deve ser entre 0 e 10";
			else {
				this.$emit(
					"criar",
					new Number(this.rm),
					this.nome,
					new Number(this.nota1),
					new Number(this.nota2)
				);
			}
		},
		NotaEhValida(nota) {
			return nota.trim() !== "" && !isNaN(nota) && 0 <= nota && nota <= 10;
		},
	},
};
</script>

<style lang="scss" scoped>
#tela-novo-aluno {

	&, &::before{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	display: flex;
	justify-content: center;
	align-items: center;

	&:before{
		content: "";
		background-color: var(--secundaria);
		z-index: -1;
		opacity: 0.5;
	}
	form{
		display: grid;
		grid-template-columns: auto auto auto;
		row-gap: 1em;
		column-gap: 1em;
		background-color: white;
		align-items: center;
		padding: 2em;
		padding-right: 6em;
	}
	label{
		text-align: right;
			font-size: 1.1em;
	}
	h2{
		grid-column:2/span 2;
		text-align: center;
		margin: 0;
	}
}
#txt-rm,#txt-nota1, #txt-nota2 {
	width: 5em;
}
#msg{
	text-align: center;
	grid-column:2/span 2;
}
#lb-notas{
	grid-column: 1;
}
#txt-nome{
	grid-column: span 2;
}
#btn-adicionar{
	grid-column: 2;
}

</style>

