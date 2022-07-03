using System;
using Shopping.List.React.Api.Models;

namespace Shopping.List.React.Api.Data
{
    public interface IShoppingListRepository
    {
        List<ShoppingListItem> Get();
        ShoppingListItem GetById();
        void Insert(ShoppingListItem item);
        void Delete(int id);
    }

    public class ShoppingListRepository : IShoppingListRepository
    {
        private readonly DataContext _context;

        public ShoppingListRepository(DataContext context)
        {
            _context = context;
        }

        public void Delete(int id)
        {
            var item = _context.ShoppingListItems.FirstOrDefault(i => i.Id == id);

            _context.ShoppingListItems.Remove(item);
            _context.SaveChanges();
        }

        public List<ShoppingListItem> Get()
        {
            return _context.ShoppingListItems.ToList();
        }

        public ShoppingListItem GetById()
        {
            throw new NotImplementedException();
        }

        public void Insert(ShoppingListItem item)
        {
            if (item.Id > 0)
            {
                _context.ShoppingListItems.Update(item);
            }
            else
            {
                item.Id = null;
                _context.ShoppingListItems.Add(item);
            }

            _context.SaveChanges();
        }
    }
}

