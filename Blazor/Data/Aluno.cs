using System.Text.Json.Serialization;

namespace blazor.Data;
public enum SituacaoAluno
{
	Reprovado, 
	Aprovado
}

public class Aluno
{

	public int RM {get;set;}
	public string Nome {get;set;}
	public decimal Prova1 {get;set;}
	public decimal Prova2 {get;set;}
	public decimal Media => (Prova1 + Prova2) / 2;
	 [JsonIgnore]
	public SituacaoAluno SituaçãoFinal  =>  Media >=  5 ? SituacaoAluno.Aprovado: SituacaoAluno.Reprovado ;
	public Aluno(int rm, string nome, decimal prova1, decimal prova2)
	{
		
		RM = rm;
		Nome = nome;
		Prova1 = prova1;
		Prova2 = prova2;
	}
	public Aluno Copiar(){
		return (Aluno)this.MemberwiseClone();
	}
}
