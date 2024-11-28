using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    //inherit from DBContext
    public class GeneralDBContext_00015662 : DbContext
    {
        // code by 00015662
        // call the dB context constructor too
        public GeneralDBContext_00015662(DbContextOptions<GeneralDBContext_00015662> options) : base(options) { }
        

        // table called BlogPosts
        public DbSet<BlogPost_00015662> BlogPosts { get; set; }

        // table called Topics
        public DbSet<Topic_00015662> Topics { get; set; }
    }
}
