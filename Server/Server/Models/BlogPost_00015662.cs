using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    // code by 00015662
    public class BlogPost_00015662
    {
        public int Id { get; set; }


        [Required(ErrorMessage = "Title is required.")]
        [StringLength(100, ErrorMessage = "Title cannot exceed 100 characters.")]
        public string? Title { get; set; }


        [Required(ErrorMessage = "Content is required.")]
        [StringLength(1000, ErrorMessage = "Content cannot exceed 1000 characters.")]
        public string? Content { get; set; }


        [Required(ErrorMessage = "Creation date is required.")]
        public DateTime CreatedAt { get; set; }


        [Required(ErrorMessage = "Topic is required.")]
        public int TopicID { get; set; }


        [ForeignKey("TopicID")]
        public Topic_00015662? Topic { get; set; }
    }
}
