export default class Aluno{
	constructor(rm,nome,n1,n2)
	{
		this.rm = rm;
		this.nome = nome;
		this.n1 = n1;
		this.n2 = n2;
	}
	get media(){
		return (this.n1 + this.n2)/2;
	}
	get aprovado(){
		return this.media > 5
	}
}
