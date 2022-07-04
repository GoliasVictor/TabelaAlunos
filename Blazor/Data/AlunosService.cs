namespace blazor.Data;

public class AlunosService
{
    public void Reiniciar()
    {
        Alunos = new List<Aluno>(){
            new Aluno(20204, "carlos", 1, 10),
            new Aluno(21031,"Sophia Esther Letícia Rodrigues",5.5m ,0.0m),
            new Aluno(21033,"Alana Isadora Maya Duarte"		 ,10.0m,7.0m),
            new Aluno(21032,"Fernanda Rebeca Figueiredo"	 ,7.5m ,8.5m),
            new Aluno(21034,"Carlos Elias da Mota"			 ,9.0m ,5.0m),
            new Aluno(21035,"Luiz Enrico Martins" 			 ,0.0m ,0.0m) 
        };
        ListaAtualizada?.Invoke();
    }
    public event Action? ListaAtualizada;
    private List<Aluno> Alunos = null!;

	public AlunosService()
	{
        Reiniciar();
	}

	public Aluno[] GetAlunos(string stringBusca, SituacaoAluno? situacaoAluno)
    {
        bool VerificarRM = int.TryParse(stringBusca, out _);
        var AlunosFiltrados = Alunos.Where ((aluno)=> {
            var valido = false;
            valido |= aluno.Nome.Contains(stringBusca,StringComparison.InvariantCultureIgnoreCase);
            valido |= VerificarRM && aluno.RM.ToString().Contains(stringBusca) ;
            valido &= situacaoAluno is null || situacaoAluno ==  aluno.SituaçãoFinal ;
            return valido;
        });
        return AlunosFiltrados.ToArray();
    }
    public bool NovoAluno(Aluno aluno){
        if(Alunos.Any((a)=> a.RM == aluno.RM))
            return false;
        Alunos.Add(aluno);
        ListaAtualizada?.Invoke();
        return true;
    }
    public void ExcluirAluno(int rm){
        Alunos.RemoveAll(aluno =>aluno.RM == rm);
        ListaAtualizada?.Invoke();
    }
}
