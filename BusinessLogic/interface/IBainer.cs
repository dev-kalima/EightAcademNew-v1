using EightAcademy.Models;

namespace EightAcademNew.BusinessLogic
{
    public interface IBainer
    {
        Task<bool> CreateOrUpdateBainer(Bainer bainer);
        Task<bool> DeleteBainer(int id);
        Task<List<Bainer>> GetBainer();
    }
}
