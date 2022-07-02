using System;
using Shopping.List.React.Api.Models;

namespace Shopping.List.React.Api.Data
{
    public interface IShoppingListRepository
    {
		List<ShoppingListItem> Get();
    }

	public class ShoppingListRepository: IShoppingListRepository
	{
        private readonly DataContext _context;

        public ShoppingListRepository(DataContext context)
        {
            _context = context;
        }

        public List<ShoppingListItem> Get()
        {
            return _context.ShoppingListItems.ToList();
        }
    }
}

