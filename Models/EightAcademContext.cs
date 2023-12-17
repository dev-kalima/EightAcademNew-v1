using EightAcademy.Models;
using Microsoft.EntityFrameworkCore;

namespace EightAcademNew.Models
{
    public class EightAcademContext:DbContext
    {
        public EightAcademContext(DbContextOptions options): base(options) { }
        DbSet<Student> Employees
        {
            get;
            set;
        }
        DbSet<Course> Courses
        {
            get;
            set;
        }
        DbSet<Bainer> bainers
        {
            get;
            set;
        }
        DbSet<Enquiry> Enquiries
        {
            get;
            set;
        }
    }
}
