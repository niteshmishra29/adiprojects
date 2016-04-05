using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace ContactAPI
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            var formater = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            formater.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
            formater.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
        }
    }
}
