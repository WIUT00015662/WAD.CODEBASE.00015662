namespace Server.Repositories
{
    public interface IRepository_00015662 <T>
    {
        // code by 00015662

        // create method signatures
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIDAsync(int it);
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(int id);
    }
}
