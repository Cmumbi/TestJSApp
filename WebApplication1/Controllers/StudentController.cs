using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Mvc;
using Newtonsoft.Json;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentController : Controller
    {
        SchoolMangementEntities _ctx = null;
        public StudentController()
        {
            _ctx = new SchoolMangementEntities();

        }
        public ActionResult Index()
        {
            return View();
        }


        public string GetStudents()
        {
            var students = ListStudents();
            return JsonConvert.SerializeObject(students);
        }



        public List<tbl_Student> ListStudents()
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

        public string AddStudents(tbl_Student student)
        {
            
            _ctx.tbl_Student.Add(student);
            var saved = _ctx.SaveChanges();
            if (saved==1)
            {
                return "OK!";
            }
            return "Failed";
        }
    }
}