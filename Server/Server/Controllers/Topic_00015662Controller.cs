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
    public class Topic_00015662Controller : ControllerBase
    {
        private readonly IRepository_00015662<Topic_00015662> _topicRepository;
        public Topic_00015662Controller(IRepository_00015662<Topic_00015662> topicRepository)
        {
            _topicRepository = topicRepository;
        }







        // GET: api/<Topic_00015662Controller>
        [HttpGet]
        public async Task<IEnumerable<Topic_00015662>> Get()
        {
            return await _topicRepository.GetAllAsync();
        }








        // GET api/<Topic_00015662Controller>/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID(int id)
        {
            var topic = await _topicRepository.GetByIDAsync(id);
            if (topic == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(topic);
            }
        }







        // POST api/<Topic_00015662Controller>
        [HttpPost]
        public async Task<IActionResult> Create(Topic_00015662 topic)
        {
            await _topicRepository.AddAsync(topic);
            return CreatedAtAction(nameof(GetByID), new { id = topic.ID }, topic);
        }







        // PUT api/<Topic_00015662Controller>
        [HttpPut]
        public async Task<IActionResult> Update(Topic_00015662 topic)
        {
            //if(id!=items.ID) return BadRequest();
            await _topicRepository.UpdateAsync(topic);
            return NoContent();
        }






        // DELETE api/<Topic_00015662Controller>/id
        [HttpDelete("{id}")]

        public async Task<IActionResult> Delete(int id)
        {
            await _topicRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}
