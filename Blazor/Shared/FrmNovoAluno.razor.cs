using System;
using Microsoft.AspNetCore.Components;
using blazor.Data;

namespace blazor.Shared
{
    public partial class FrmNovoAluno
    { 
        public Aluno aluno {get;set;} = new Aluno(0, "", 0, 0);
        [Inject]
        AlunosService AlunosService {get;set;} = null!;
        [Parameter]
        public EventCallback onfechar {get;set;} = default;
        string? Erro = null;


		void CriarAluno(){
            Erro = null;
            if(string.IsNullOrWhiteSpace(aluno.Nome))
                Erro="Insira um nome";
            else if (0 > aluno.Prova1  || aluno.Prova1 > 10)
                Erro="Insira um valor entre 0 e 10 na prova 1";
            else if (0 > aluno.Prova2  || aluno.Prova2 > 10)
                Erro="Insira um valor entre 0 e 10 na prova 2";
            else {
                if( AlunosService.NovoAluno(aluno))
                    onfechar.InvokeAsync();
                else 
                    Erro = "RM já existe";
            }
        }
    }
}