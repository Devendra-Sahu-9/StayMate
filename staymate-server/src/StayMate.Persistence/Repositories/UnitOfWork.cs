using StayMate.Persistence.Context;
using StayMate.Persistence.Interfaces;

namespace StayMate.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly StayMateDbContext _context;

        public UnitOfWork(StayMateDbContext context)
        {
            _context = context;
        }

        public IGenericRepository<T> GetRepository<T>() where T : class
        {
            return new GenericRepository<T>(_context);
        }

        public int Commit() => _context.SaveChanges();

        public async Task<int> CommitAsync() => await _context.SaveChangesAsync();

        public void Dispose() => _context.Dispose();
    }
}
