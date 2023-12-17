using EightAcademNew.BusinessLogic.GetSet;
using EightAcademNew.Models;
using EightAcademy.Models;
using Microsoft.EntityFrameworkCore;

namespace EightAcademNew.BusinessLogic.CoreLogic
{
    public class BainerRepo : IBainer
    {
        private readonly EightAcademContext _context;
        public BainerRepo(EightAcademContext context)
        {
            _context = context;
        }
        public async Task<bool> CreateOrUpdateBainer(Bainer bainer)
        {
            if (bainer == null)
            {

                _ = _ = await _context.AddAsync(new GetSetModel().GetSetbainer(bainer));
                _context.SaveChanges();
            }
            else
            {
                _context.Update(bainer);
            }
            return true;
        }

        public Task<bool> DeleteBainer(int id)
        {
            var bainerinfo = _context.Find<Bainer>(id);
            if (bainerinfo!= null)
            {
                _context.Remove<Bainer>(bainerinfo);

            }
            _context.SaveChanges();
            return null;
        } 
        public async Task<List<Bainer>> GetBainer()
        {
            return await _context.Set<Bainer>().ToListAsync();

        }


    }
}
