using LmsApi.Data;
using LmsApi.DTO;
using LmsApi.Helpers;
using LmsApi.Interfaces;
using LmsApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LmsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IssueController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IIssueRepository _issueRepository;

        LogRecordHelper logRecord = new();

        public IssueController(DataContext context, IIssueRepository issueRepository)
        {
            _context = context;
            _issueRepository = issueRepository;
        }

        // GET: api/Issue
        [HttpGet, Authorize(Roles = "Manager")]
        public async Task<IActionResult> GetIssueDetails()
        {
            JsonResult issueDetails;

            try
            {
                issueDetails = await _issueRepository.GetIssueDetailsAsync();
                logRecord.LogWriter("Issue details fetched");
                return issueDetails;
            }
            catch (Exception ex)
            {
                logRecord.LogWriter(ex.ToString());
                return BadRequest(ex.Message);
            }
        }

        // POST: api/Issue/request
        [HttpPost, Route("request"), Authorize(Roles = "Manager, Student")]
        public async Task<IActionResult> PostBookDetails(IssueDTO issueDto)
        {
            try
            {
                bool isIssued = _context.IssueDetails.Any(x => x.UName == issueDto.UName && x.BId == issueDto.BId && x.Status != "returned");

                if (isIssued)
                {
                    return new BadRequestObjectResult("Book is already requested/issued");
                }

                var issueDetails = new IssueDetails
                {
                    UName = issueDto.UName,
                    BId = issueDto.BId,
                    Status = issueDto.Status
                };

                await _issueRepository.IssueBook(issueDetails);
                return new JsonResult("Book requested");
            }
            catch (Exception ex)
            {
                logRecord.LogWriter(ex.ToString());
                return new BadRequestObjectResult(ex.Message);
            }
        }
    }
}
