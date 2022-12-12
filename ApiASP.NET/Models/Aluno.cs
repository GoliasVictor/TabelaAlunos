using System.ComponentModel;
using System.ComponentModel.Design;
using System.ComponentModel.DataAnnotations;
using Swashbuckle.AspNetCore.Annotations;
namespace ApiASP.NET.Models;
[Flags]
public enum SituacaoAluno
{
	
	Aprovado ,
	Reprovado 
}



public class Aluno 
{
	public Aluno(int rM, string nome, decimal prova1, decimal prova2)
	{
		RM = rM;
		Nome = nome;
		Prova1 = prova1;
		Prova2 = prova2;
	}

	[Required,Key]
	public int RM {get;set;}

	[Required(AllowEmptyStrings=true)]
	public string Nome {get;set;} = null!;
	
	[Required,Range(0,10)]
	public decimal Prova1 {get;set;}
	
	[Required,Range(0,10)]
	public decimal Prova2 {get;set;}

	public decimal Media => (Prova1 + Prova2) / 2;

	public SituacaoAluno SituaçãoFinal  {get { 
		return (SituacaoAluno)(Media >=  5 ? SituacaoAluno.Aprovado : SituacaoAluno.Reprovado);
	}}
	public Aluno Copiar(){
		return (Aluno)this.MemberwiseClone();
	}
}
