using EightAcademNew.BusinessLogic;
using EightAcademNew.BusinessLogic.CoreLogic;
using EightAcademNew.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//builder.Services.AddDbContext<EightAcademContext>(x => x.UseSqlServer(builder.Configuration.GetConnectionString(System.Configuration.ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString)));
builder.Services.AddDbContext<EightAcademContext>(option => 
option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IEnquiry, EnquiryRepo>();

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
