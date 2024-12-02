using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Repositories
{
    public class TopicRepository_00015662 : IRepository_00015662<Topic_00015662>
    {
        // code by 00015662

        private readonly GeneralDBContext_00015662 _context;

        public TopicRepository_00015662(GeneralDBContext_00015662 context)
        {
            _context = context;
        }

        // add new topic
        public async Task AddAsync(Topic_00015662 topic)
        {
            await _context.Topics.AddAsync(topic);
            await _context.SaveChangesAsync();
        }

        // Delete the topic by id
        public async Task DeleteAsync(int id)
        {
            var entity = await _context.Topics.FindAsync(id);
            if (entity != null)
            {
                _context.Topics.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }

        // Get all topics
        public async Task<IEnumerable<Topic_00015662>> GetAllAsync() => await _context.Topics.ToArrayAsync();

        // Get one topic by its id
        public async Task<Topic_00015662> GetByIDAsync(int id) => await _context.Topics.FindAsync(id);

        // Update the topic
        public async Task UpdateAsync(Topic_00015662 topic)
        {
            _context.Entry(topic).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

    }
}
