using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using System.Net.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.Web.Virtualization;
using Microsoft.JSInterop;
using blazor;
using blazor.Shared;
using blazor.Data;

namespace blazor.Pages
{

	public partial class Index
	{
		[Inject]
		AlunosService AlunosService{get;set;} = null!;

        bool CriandoAluno;
        string stringBusca ="";
        string StringBusca { 
            get => stringBusca ; 
            set {
                stringBusca = value; 
                AtualizarDados();
            }
        }
		private int opcaoSituacao = 0;
		private SituacaoAluno? situacao =>OpcaoSituacao switch {
			1     => SituacaoAluno.Aprovado,
			2     => SituacaoAluno.Reprovado,
			_ => null
		};

		public int OpcaoSituacao { 
			get => opcaoSituacao;
			set{
				opcaoSituacao = value;
				AtualizarDados();
			 } 
		}

		Aluno[]? Alunos;
		
		protected override void OnInitialized()
		{
			AtualizarDados();
			AlunosService.ListaAtualizada += ListaAtualizada;
		}
		void ListaAtualizada(){
			AtualizarDados();
		}

		void AtualizarDados()
		{
			Alunos = AlunosService.GetAlunos(StringBusca,situacao);
			InvokeAsync(StateHasChanged);
		}
		void ExcluirAluno(Aluno aluno)
		{
			AlunosService.ExcluirAluno(aluno.RM);
			AtualizarDados();
		}
		void abrirNovoAluno(){
			CriandoAluno = true;
		}
		void fecharNovoAluno(){
			CriandoAluno =	false;
			AtualizarDados();
		}
		public void Dispose()
    	{
			AlunosService.ListaAtualizada -= AtualizarDados;
    	}
	}
}