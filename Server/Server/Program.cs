using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;
using Server.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// link the dbcontext to the sqlserver
builder.Services.AddDbContext<GeneralDBContext_00015662>(
    o => o.UseSqlServer(
        builder.Configuration.GetConnectionString("SqlServerConnection")));

// allowing access to dbcontext to Repositories
builder.Services.AddScoped<IRepository_00015662<BlogPost_00015662>, BlogPostRepository_00015662>();
builder.Services.AddScoped<IRepository_00015662<Topic_00015662>, TopicRepository_00015662>();



// allowing angular to access the backend
// Add services for CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Allow requests from Angular
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Use CORS middleware
app.UseCors("AllowAngularApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
