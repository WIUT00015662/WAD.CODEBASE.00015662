using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{

    // code by 00015662
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPost_00015662Controller : ControllerBase
    {
        private readonly GeneralDBContext_00015662 _context;

        public BlogPost_00015662Controller(GeneralDBContext_00015662 context)
        {
            _context = context;
        }

        // GET: api/BlogPost_00015662
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogPost_00015662>>> GetBlogPosts()
        {
          if (_context.BlogPosts == null)
          {
              return NotFound();
          }
            return await _context.BlogPosts.ToListAsync();
        }

        // GET: api/BlogPost_00015662/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogPost_00015662>> GetBlogPost_00015662(int id)
        {
          if (_context.BlogPosts == null)
          {
              return NotFound();
          }
            var blogPost_00015662 = await _context.BlogPosts.FindAsync(id);

            if (blogPost_00015662 == null)
            {
                return NotFound();
            }

            return blogPost_00015662;
        }

        // PUT: api/BlogPost_00015662/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogPost_00015662(int id, BlogPost_00015662 blogPost_00015662)
        {
            if (id != blogPost_00015662.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogPost_00015662).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPost_00015662Exists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BlogPost_00015662
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BlogPost_00015662>> PostBlogPost_00015662(BlogPost_00015662 blogPost_00015662)
        {
          if (_context.BlogPosts == null)
          {
              return Problem("Entity set 'GeneralDBContext_00015662.BlogPosts'  is null.");
          }
            _context.BlogPosts.Add(blogPost_00015662);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogPost_00015662", new { id = blogPost_00015662.Id }, blogPost_00015662);
        }

        // DELETE: api/BlogPost_00015662/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPost_00015662(int id)
        {
            if (_context.BlogPosts == null)
            {
                return NotFound();
            }
            var blogPost_00015662 = await _context.BlogPosts.FindAsync(id);
            if (blogPost_00015662 == null)
            {
                return NotFound();
            }

            _context.BlogPosts.Remove(blogPost_00015662);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlogPost_00015662Exists(int id)
        {
            return (_context.BlogPosts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
