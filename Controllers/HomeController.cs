﻿
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace FallRelief_V_1._0.Controllers
{
    public class HomeController : Controller
    {
        
       

       
    public ActionResult Index()
        {
            return View();
           



        }

       
        
        public ActionResult FallAssessment()

        {

            return View();
        }

        
        public ActionResult About()
        {
            

            return View();
        }
        public ActionResult Report()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}