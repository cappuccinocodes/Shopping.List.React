using System;
using Shopping.List.React.Api.Models;

namespace Shopping.List.React.Api.Data
{
    public interface IShoppingListRepository
    {
		List<ShoppingListItem> Get();
        void Insert(ShoppingListItem item);
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

        public void Insert(ShoppingListItem item)
        {
            _context.ShoppingListItems.Add(item);
            _context.SaveChanges();
        }
    }
}

