using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Topic_00015662
    {
        // code by 00015662
        public int ID { get; set; }

        // field
        private string _title;
        [Required(ErrorMessage = "Title is required")]

        // property
        public string Title
        {
            // getter
            get => _title;


            //setter
            set
            {
                // if it is empty, throw an exception
                if (string.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Title cannot be null or empty.");
                }

                _title = value;
            }
        }
    }
}
