using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;
using Server.Repositories;

namespace Server.Controllers
{

    // code by 00015662
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPost_00015662Controller : ControllerBase
    {
        private readonly IRepository_00015662<BlogPost_00015662> _blogPostsRepository;

        public BlogPost_00015662Controller(IRepository_00015662<BlogPost_00015662> blogPostsRepository)
        {
            _blogPostsRepository = blogPostsRepository;
        }

        // GET: api/BlogPost_00015662
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogPost_00015662>>> GetAll()
        {
            var blogPosts = await _blogPostsRepository.GetAllAsync();
            return Ok(blogPosts); 
        }

        // GET: api/BlogPost_00015662/5
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(BlogPost_00015662), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<BlogPost_00015662>> GetBlogPost_00015662(int id)
        {
            var resultedBlogPost = await _blogPostsRepository.GetByIDAsync(id);
            if (resultedBlogPost == null)
                return NotFound(); 
            return Ok(resultedBlogPost); 
        }


        // PUT: api/BlogPost_00015662/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> PutBlogPost_00015662(BlogPost_00015662 blogPost_00015662)
        {
            // Check if the blog post exists first
            var existingPost = await _blogPostsRepository.GetByIDAsync(blogPost_00015662.Id);
            if (existingPost == null)
                return NotFound();

            await _blogPostsRepository.UpdateAsync(blogPost_00015662);
            return NoContent(); 
        }


        // POST: api/BlogPost_00015662
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<BlogPost_00015662>> PostBlogPost_00015662(BlogPost_00015662 blogPost_00015662)
        {
            await _blogPostsRepository.AddAsync(blogPost_00015662);
            return CreatedAtAction(nameof(GetBlogPost_00015662), new { id = blogPost_00015662.Id }, blogPost_00015662);
        }


        // DELETE: api/BlogPost_00015662/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteBlogPost_00015662(int id)
        {
            var existingPost = await _blogPostsRepository.GetByIDAsync(id);
            if (existingPost == null)
                return NotFound();

            await _blogPostsRepository.DeleteAsync(id);
            return NoContent();
        }

    }
}
