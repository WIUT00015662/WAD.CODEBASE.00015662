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
    public class Topic_00015662Controller : ControllerBase
    {
        private readonly GeneralDBContext_00015662 _context;

        public Topic_00015662Controller(GeneralDBContext_00015662 context)
        {
            _context = context;
        }

        // GET: api/Topic_00015662
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Topic_00015662>>> GetTopics()
        {
          if (_context.Topics == null)
          {
              return NotFound();
          }
            return await _context.Topics.ToListAsync();
        }

        // GET: api/Topic_00015662/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Topic_00015662>> GetTopic_00015662(int id)
        {
          if (_context.Topics == null)
          {
              return NotFound();
          }
            var topic_00015662 = await _context.Topics.FindAsync(id);

            if (topic_00015662 == null)
            {
                return NotFound();
            }

            return topic_00015662;
        }

        // PUT: api/Topic_00015662/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTopic_00015662(int id, Topic_00015662 topic_00015662)
        {
            if (id != topic_00015662.ID)
            {
                return BadRequest();
            }

            _context.Entry(topic_00015662).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Topic_00015662Exists(id))
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

        // POST: api/Topic_00015662
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Topic_00015662>> PostTopic_00015662(Topic_00015662 topic_00015662)
        {
          if (_context.Topics == null)
          {
              return Problem("Entity set 'GeneralDBContext_00015662.Topics'  is null.");
          }
            _context.Topics.Add(topic_00015662);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTopic_00015662", new { id = topic_00015662.ID }, topic_00015662);
        }

        // DELETE: api/Topic_00015662/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTopic_00015662(int id)
        {
            if (_context.Topics == null)
            {
                return NotFound();
            }
            var topic_00015662 = await _context.Topics.FindAsync(id);
            if (topic_00015662 == null)
            {
                return NotFound();
            }

            _context.Topics.Remove(topic_00015662);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Topic_00015662Exists(int id)
        {
            return (_context.Topics?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
