using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace StayMate.Infrastructure
{
    public static class InfrastructureServiceRegistration
    {
        public static IServiceCollection AddInfrastructure(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            // External service registrations come here.
            // Example: Email service, SMS service, Payment service, etc.

            return services;
        }
    }
}