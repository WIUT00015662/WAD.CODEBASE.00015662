using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Repositories
{
    // code by 00015662
    public class BlogPostRepository_00015662 : IRepository_00015662<BlogPost_00015662>
    {
        private readonly GeneralDBContext_00015662 _context;

        public BlogPostRepository_00015662(GeneralDBContext_00015662 context)
        {
            _context = context;
        }

        // retrieve all the blogposts
        public async Task<IEnumerable<BlogPost_00015662>> GetAllAsync()
        {
            return await _context.BlogPosts
                .Include(blogPost_00015662 => blogPost_00015662.Topic)
                .ToArrayAsync();
        }


        // get the blogpost by id
        public async Task<BlogPost_00015662> GetByIDAsync(int id)
        {
            return await _context.BlogPosts.Include(blogPost_00015662 => blogPost_00015662.Topic) 
         .FirstOrDefaultAsync(b => b.Id == id); 
        }

        // create a new blogpost
        public async Task AddAsync(BlogPost_00015662 blogPost)
        {
            // Validate if the Topic exists
            var topic = await _context.Topics.FindAsync(blogPost.TopicID);

            if (topic == null)
            {
                throw new InvalidOperationException($"Topic with ID {blogPost.TopicID} does not exist.");
            }

            // Assign the Topic and save the BlogPost
            blogPost.Topic = topic;
            await _context.BlogPosts.AddAsync(blogPost);
            await _context.SaveChangesAsync();
        }

        // update the blogpost
        public async Task UpdateAsync(BlogPost_00015662 blogPost)
        {
            // Validate that the Topic exists if TopicID is provided
            if (blogPost.TopicID != null)
            {
                var existingTopic = await _context.Topics.FindAsync(blogPost.TopicID);
                if (existingTopic == null)
                {
                    throw new InvalidOperationException($"Topic with ID {blogPost.TopicID} does not exist.");
                }

                // Assign the valid Topic reference
                blogPost.Topic = existingTopic;
            }

            // Attach and update only the modified properties
            var existingBlogPost = await _context.BlogPosts.FindAsync(blogPost.Id);

            // Update fields selectively
            existingBlogPost.Title = blogPost.Title;
            existingBlogPost.Content = blogPost.Content;
            existingBlogPost.TopicID = blogPost.TopicID;

            await _context.SaveChangesAsync();
        }


        // delete the blogpost
        public async Task DeleteAsync(int id)
        {
            var entity = await _context.BlogPosts.FindAsync(id);
            if (entity != null)
            {
                _context.BlogPosts.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
