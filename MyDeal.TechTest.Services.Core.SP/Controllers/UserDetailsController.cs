using Microsoft.AspNetCore.Mvc;
using MyDeal.TechTest.Services.Core.SP.Model;

namespace MyDeal.TechTest.Services.Core.SP.Controllers
{

    [ApiController]
    [Route("api/users")]
    public class UserDetailsController : ControllerBase
    {
        public List<UserDetail> users = new List<UserDetail>();

        private readonly ILogger<UserDetailsController> _logger;

        private void initSetup()
        {
            users = new List<UserDetail>();
            users.Add(new UserDetail() { Id = 1, FirstName = "John", LastName = "Smith ", Email = "John.Smith@gmail.com" });
            users.Add(new UserDetail() { Id = 2, FirstName = "Eve", LastName = "Jackson ", Email = "Eve.Jackson@gmail.com" });
            users.Add(new UserDetail() { Id = 3, FirstName = "Monty", LastName = "Oliver", Email = "Monty.Oliver@gmail.com" });
            users.Add(new UserDetail() { Id = 4, FirstName = "Jenny", LastName = "Quil ", Email = "Jenny.Quil@gmail.com" });

        }
        public UserDetailsController(ILogger<UserDetailsController> logger)
        {
            _logger = logger;
            initSetup();
        }

        [HttpGet(Name = "GetUserDetailsById")]
        public UserDetail GetUser(long id = 1)
        {
            return users.Where(u => u.Id == id).First();
        }
    }
}
