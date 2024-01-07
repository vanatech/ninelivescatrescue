using Microsoft.Extensions.FileProviders;
using NineLivesCatRescue.Managers;
using NineLivesCatRescueLibrary;
using NineLivesCatRescueLibrary.ApiClients;
using NineLivesCatRescueLibrary.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddScoped<RescueGroupsApiClient>();
builder.Services.AddScoped<SubmitApplicationApiClient>();
builder.Services.AddScoped<NineLivesStateManagementModel>();
builder.Services.AddScoped<RescueGroupsManager>();
builder.Services.AddControllersWithViews();

builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddDefaultPolicy(policy =>
        policy.WithOrigins("*")
            .AllowAnyHeader()
            .AllowAnyHeader())
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseCors();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

// app.UseEndpoints(endpoints =>
// {
//     endpoints.MapControllers();
// }
// );

app.MapFallbackToFile("index.html");

app.Run();