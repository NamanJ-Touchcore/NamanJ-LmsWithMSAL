using LmsApi.Models;
using Microsoft.EntityFrameworkCore;

namespace LmsApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<BookDetails> BookDetails { get; set; }
        public DbSet<IssueDetails> IssueDetails { get; set; }
    }
}
