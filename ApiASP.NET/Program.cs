using Microsoft.EntityFrameworkCore;
using ApiASP.NET.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<TabelaAlunoContext>(opt =>
    opt.UseInMemoryDatabase("Alunos"));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen((c)=>{
    c.EnableAnnotations();
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    
    app.UseSwagger();
    app.UseSwaggerUI();
}
//dotnet aspnet-codegenerator controller -name AlunosController -async -api -m Aluno -dc TabelaAlunoContext -outDir Controllers
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
