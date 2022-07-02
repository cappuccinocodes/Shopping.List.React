using Microsoft.EntityFrameworkCore;
using Shopping.List.React.Api.Models;

namespace Shopping.List.React.Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<ShoppingListItem> ShoppingListItems { get; set; }
    }
}

