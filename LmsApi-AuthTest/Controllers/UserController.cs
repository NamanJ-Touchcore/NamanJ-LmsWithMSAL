using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LmsApi_AuthTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet, Authorize]
        public bool IsManager()
        {
            return User.IsInRole("Manager") ? true : false;
        }
    }
}