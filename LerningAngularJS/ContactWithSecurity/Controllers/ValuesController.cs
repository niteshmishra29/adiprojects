using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace ContactWithSecurity.Controllers
{
    //[Authorize]
    public class ValuesController : ApiController
    {
        // GET api/values
        [AllowAnonymous]
        [ResponseType(typeof(List<ContactMaster>))]
        public List<ContactMaster> Get()
        {
            List<ContactMaster> _contact = new List<ContactMaster>();
            LearnANJS lern = new LearnANJS();
            _contact = lern.ContactMasters.ToList();
            return _contact = lern.ContactMasters.ToList();
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]ContactMaster value)
        {
            LearnANJS lern = new LearnANJS();
            lern.ContactMasters.Add(value);
            lern.SaveChanges();
        }


        // PUT api/values/5
        public void Put(int id, [FromBody]ContactMaster value)
        {
            LearnANJS lern = new LearnANJS();
            ContactMaster cont = lern.ContactMasters.Where(cc => cc.ContactMasterID == id).FirstOrDefault();
            cont.FirstName = value.FirstName;
            cont.Gender = value.Gender;
            cont.LastName = value.LastName;
            lern.SaveChanges();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            LearnANJS lern = new LearnANJS();
            ContactMaster cont = lern.ContactMasters.Where(cc => cc.ContactMasterID == id).FirstOrDefault();
            lern.ContactMasters.Remove(cont);
            lern.SaveChanges();
        }
    }
}
