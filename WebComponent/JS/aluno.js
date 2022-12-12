const NotaMinima = 5; 
 
class linhaAluno extends HTMLElement{ 
    constructor(){
		super();
		const template = document.getElementById("template-aluno");
		let shadow = this.attachShadow({mode: 'open'})	
			.appendChild( template.content.cloneNode(true));
		this._atualizarMedia();
		this.mostrando = true
    }

	static get observedAttributes() { return ["nome","rm","nota1", "nota2"]; }
	attributeChangedCallback(name, oldValue,value){
		if (value != oldValue){
			switch (name) {
				case    "rm": this.rm    = Number(value); break;
				case  "nome": this.nome  = value; break;
				case "nota1": this.nota1 = Number(value); break;
				case "nota2": this.nota2 = Number(value); break;
				default:
					break;
			}
		}
	}
     _atualizarMedia(){
        this._inserirInfo("media", FormatarExibicaoNota(this.media));
        this._FormatarSituacao(this.media);
    } 
	_inserirInfo(nome,valor){
		return this.shadowRoot.querySelector(".info-"+nome).textContent = valor;
	}
	_FormatarSituacao( notaFinal) {
		this.setAttribute("aprovado",notaFinal >= NotaMinima);
	}
	
	get Aprovado(){ return this.getAttribute("aprovado") === "true"}
		
	get rm( ){ return this.getAttribute("rm"); }
	set rm(v){ 
        this._inserirInfo("rm", v);
		return this.setAttribute("rm", v);
	}

	get nome( ){ return this.getAttribute("nome"); }
	set nome(v){ 
        this._inserirInfo("nome", v);
		return this.setAttribute("nome", v);
	 }

	get mostrando( ){ return this.getAttribute("mostrando") === 'true'}
	set mostrando(v){ return this.setAttribute("mostrando", v) } 
	
    get nota1(){ return Parse(this.getAttribute("nota1")); }
    set nota1(v){
        if(NotaEhValida(v)){
			this._inserirInfo("nota1", FormatarExibicaoNota(v));
			this.setAttribute("nota1", v);
        	this._atualizarMedia()
		}
    }
    get nota2(){
        return Parse(this.getAttribute("nota2"));
    }
    set nota2(v){
        if(NotaEhValida(v)){
			this._inserirInfo("nota2", FormatarExibicaoNota(v));
			this.setAttribute("nota2", v);
			this._atualizarMedia();
		} 
		else throw new Error("Nota invalida")
		
    }
    get media(){
		
        return CalcularMedia(this.nota1, this.nota2);
    }

}



customElements.define("linha-aluno", linhaAluno)