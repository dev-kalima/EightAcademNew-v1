using EightAcademy.Models;

namespace EightAcademNew.BusinessLogic
{
    public interface IEnquiry
    {
        bool SubmitEnquiry(Enquiry enquiry);
        Task<List<Enquiry>> GetEnquiries();

    }
}
