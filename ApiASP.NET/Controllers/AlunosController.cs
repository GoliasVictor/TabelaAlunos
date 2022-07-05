using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiASP.NET.Models;

namespace ApiASP.NET.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AlunosController : ControllerBase
	{
		private readonly TabelaAlunoContext _context;

		public AlunosController(TabelaAlunoContext context)
		{
			_context = context;
		}

		// GET: api/Alunos
		[HttpGet]
		public async Task<ActionResult<IEnumerable<Aluno>>> GetTodoItems()
		{
			if (_context.Alunos == null)
				return NotFound();
			return await _context.Alunos.ToListAsync();
		}

		// GET: api/Alunos/5
		[HttpGet("{rm}")]
		public async Task<ActionResult<Aluno>> GetAluno(int rm)
		{
			if (_context.Alunos == null)
				return NotFound();
			var aluno = await _context.Alunos.FindAsync(rm);

			if (aluno == null)
				return NotFound();
			return new ActionResult<Aluno>(aluno);
		}

		// PUT: api/Alunos/5
		[HttpPut("{rm}")]
		public async Task<IActionResult> PutAluno(int rm, Aluno aluno)
		{
			if (rm != aluno.RM)
				return BadRequest();

			_context.Entry(aluno).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!AlunoExists(rm))
					return NotFound();
				else
					throw;
			}

			return NoContent();
		}

		[HttpPost]
		public async Task<ActionResult<Aluno>> PostAluno(Aluno aluno)
		{
			if (_context.Alunos == null)
				return Problem("Entity set 'TabelaAlunoContext.Alunos'  is null.");
			_context.Alunos.Add(aluno);
			await _context.SaveChangesAsync();

			return CreatedAtAction(nameof(GetAluno), new { rm = aluno.RM }, aluno);
		}

		// DELETE: api/Alunos/5
		[HttpDelete("{rm}")]
		public async Task<IActionResult> DeleteAluno(int rm)
		{
			if (_context.Alunos == null)
				return NotFound();
			var aluno = await _context.Alunos.FindAsync(rm);
			if (aluno == null)
				return NotFound();

			_context.Alunos.Remove(aluno);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool AlunoExists(int rm)
		{
			return (_context.Alunos?.Any(e => e.RM == rm)).GetValueOrDefault();
		}
	}
}
