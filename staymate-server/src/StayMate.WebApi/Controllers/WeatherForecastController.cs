using Microsoft.AspNetCore.Mvc;
using StayMate.Persistence.Interfaces;
using StayMate.Persistence.Models;

namespace StayMate.WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    IUnitOfWork unitOfWork;
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger, IUnitOfWork unitOfWork)
    {
        this.unitOfWork = unitOfWork;
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        unitOfWork.GetRepository<Department>().Add(
                new Department { Name = "HR" }
            );
        unitOfWork.Commit();
        unitOfWork.GetRepository<Employee>().Add(
        new Employee
        {
            FullName = "John Doe",
            Email = "john@example.com",
            Salary = 50000,
            DepartmentId = 1
        }
    );
        unitOfWork.Commit();
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
