using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LmsApi_AuthTest.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BookDetails",
                columns: table => new
                {
                    BId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BAuthor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BQuantity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookDetails", x => x.BId);
                });

            migrationBuilder.CreateTable(
                name: "IssueDetails",
                columns: table => new
                {
                    TId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BId = table.Column<int>(type: "int", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateOfIssue = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DateofSubmission = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DateOfReturn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Fine = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IssueDetails", x => x.TId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookDetails");

            migrationBuilder.DropTable(
                name: "IssueDetails");
        }
    }
}
