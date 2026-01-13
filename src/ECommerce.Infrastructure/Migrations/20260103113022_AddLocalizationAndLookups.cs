using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ECommerce.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddLocalizationAndLookups : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Slug",
                table: "BrandTranslation",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "UQ_BrandTranslation_Slug",
                table: "BrandTranslation",
                columns: new[] { "LanguageCode", "Slug" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "UQ_BrandTranslation_Slug",
                table: "BrandTranslation");

            migrationBuilder.DropColumn(
                name: "Slug",
                table: "BrandTranslation");
        }
    }
}
