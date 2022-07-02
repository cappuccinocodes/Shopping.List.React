using Microsoft.AspNetCore.Mvc;
using Shopping.List.React.Api.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Shopping.List.React.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShoppingListController : Controller
    {
        private readonly IShoppingListRepository _shoppingListRepository;
             
        public ShoppingListController(IShoppingListRepository shoppingListRepository)
        {
            _shoppingListRepository = shoppingListRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_shoppingListRepository.Get());
        }
    }
}

