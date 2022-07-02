const templateLinhaAluno =  document.createElement("tr");
templateLinhaAluno.classList = "aluno";
templateLinhaAluno.innerHTML = `
	<td class="info-rm"		 ></td>
	<td class="info-nome"	 ></td>
	<td class="info-prova01" ></td>
	<td class="info-prova02" ></td>
	<td class="info-media"	 ></td>
	<td class="info-situacao"></td>
	<td class="excluir-aluno" onclick="excluirAluno(this)" ><i class="material-icons btnExcluir">disabled_by_default</i></td>
`
class Aluno{
    constructor(linhaAluno_rm, nome, nota1, nota2){
		if(linhaAluno_rm instanceof HTMLElement){
			this.linhaAluno = linhaAluno_rm;
		}
		else {
			
			this.linhaAluno = templateLinhaAluno.cloneNode(true);;
			this.rm    = linhaAluno_rm;
			this.nome  = nome;
			this.nota1 = nota1;
			this.nota2 = nota2;
			this.mostrando = true;
		}
		this._atualizarMedia();
    }
     _atualizarMedia(){
        this._inserirInfo("media", FormatarExibicaoNota(this.media));
        this._FormatarSituacao(this.media, 5);
    }
	_extrairInfo(nome){
		return this.linhaAluno.querySelector(".info-"+nome).textContent;
	}
	_inserirInfo(nome,valor){
		return this.linhaAluno.querySelector(".info-"+nome).textContent = valor;
	}
	_FormatarSituacao( notaFinal, notaAprovacao) {
		this.linhaAluno.setAttribute("aprovado",notaFinal >= notaAprovacao);
	}
	get Aprovado(){ return this.linhaAluno.getAttribute("aprovado") === "true"}
		
	get rm( ){ return this._extrairInfo("rm");}
	set rm(v){ return this._inserirInfo("rm", v);}

	get nome( ){ return this._extrairInfo("nome"); }
	set nome(v){ return this._inserirInfo("nome", v); }


	get mostrando( ){ return this.linhaAluno.getAttribute("mostrando") === 'true'}
	set mostrando(v){ return this.linhaAluno.setAttribute("mostrando", v)} 
	
    get nota1(){ return Parse(this._extrairInfo("prova01")); }
    set nota1(value){
        this._inserirInfo("prova01", FormatarExibicaoNota(value));
        this._atualizarMedia()
    }
    get nota2(){
        return Parse(this._extrairInfo("prova02"));
    }
    set nota2(value){
        this._inserirInfo("prova02", FormatarExibicaoNota(value));
        this._atualizarMedia();
    }
    get media(){
        return CalcularMedia(this.nota1, this.nota2);
    }

}
