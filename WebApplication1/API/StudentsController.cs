using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.API
{
    public class StudentsController : ApiController
    {
        SchoolMangementEntities _ctx = null;

        public StudentsController()
        {
            _ctx = new SchoolMangementEntities();
        }
        public List<tbl_Student> GetStudents()
        {
            List<tbl_Student> students;
            try
            {
                students = _ctx.tbl_Student.ToList();
            }
            catch
            {
                students = null;
            }
            return students;
        }
    }

}
