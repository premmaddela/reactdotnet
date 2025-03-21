using Microsoft.AspNetCore.Mvc;
using reactdotnet.Pages;
using Microsoft.Extensions.Logging;

namespace reactdotnet.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<ErrorModel> _logger;

        public HomeController(ILogger<ErrorModel> logger)
        {
            _logger = logger;
        }

        public IActionResult Error()
        {
            var errorModel = new ErrorModel(_logger);
            return View(errorModel);
        }
    }
}
