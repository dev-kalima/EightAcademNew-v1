using EightAcademNew.BusinessLogic.GetSet;
using EightAcademNew.Models;
using EightAcademy.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace EightAcademNew.BusinessLogic.CoreLogic
{
    public class EnquiryRepo : IEnquiry
    {
        private readonly EightAcademContext _context;
        public EnquiryRepo(EightAcademContext eightAcademContext)
        {
            _context = eightAcademContext;
        }

        public async Task<List<Enquiry>> GetEnquiries()
        {
            try
            {
                var data = await _context.Set<Enquiry>().ToListAsync();
                return data;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public bool SubmitEnquiry(Enquiry enquiry)
        {
            if (enquiry == null)
            {
                return false;
            }
            else
            {

                _context.Add(new GetSet.GetSetModel().GetSetEnquiry(enquiry));
                var d = _context.SaveChanges();
                new GetSetModel().SendMailBySmtp(enquiry.Email, "Test Enq", null, "Test", null);
            }
            return true;

        }

    }
}
