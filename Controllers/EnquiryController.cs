using EightAcademNew.BusinessLogic;
using EightAcademy.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EightAcademNew.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnquiryController : ControllerBase
    {
        private readonly IEnquiry _enquiry;
       public EnquiryController(IEnquiry enquiry)
        {
            _enquiry = enquiry;
        }
        [HttpGet("GetEnquiries")]
        public IActionResult GetEnquiries()
        {
            return Ok(_enquiry.GetEnquiries());
        }


        [HttpPost("SubmitEnq")]
        public IActionResult SubmitEnq([FromBody] Enquiry enquiry)
        {
            return Ok(_enquiry.SubmitEnquiry(enquiry));
        }
           
    }
}
