using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace ApiASP.NET.Models;



public class TabelaAlunoContext : DbContext
{
	public TabelaAlunoContext(DbContextOptions<TabelaAlunoContext> options)
		: base(options)
	{
	}

	public DbSet<Aluno> Alunos { get; set; } = null!;
}