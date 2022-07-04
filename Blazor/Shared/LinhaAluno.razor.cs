using Microsoft.AspNetCore.Components;

namespace blazor.Shared
{
    using Data;
    public partial class LinhaAluno
    {
        [Parameter, EditorRequired]
        public Aluno aluno { get; set; } = null!;

        [Parameter]
        public EventCallback OnExcluir { get; set; }
        [Parameter]
        public bool impar { get; set; }
        bool Reprovado => aluno.SituaçãoFinal == SituacaoAluno.Reprovado;

        string Classes {get{
            string classes = "";
            classes += impar ? " linha-impar " : "";  
            classes += Reprovado ? " reprovado " : " aprovado ";  
            return classes;
        }}

    }
}