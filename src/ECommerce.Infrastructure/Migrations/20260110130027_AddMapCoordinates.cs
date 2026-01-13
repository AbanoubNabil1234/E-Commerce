using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ECommerce.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddMapCoordinates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "Warehouse",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "Warehouse",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "ShipmentTracking",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "ShipmentTracking",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "DeliveryLatitude",
                table: "Shipment",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "DeliveryLongitude",
                table: "Shipment",
                type: "float",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Warehouse");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Warehouse");

            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "ShipmentTracking");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "ShipmentTracking");

            migrationBuilder.DropColumn(
                name: "DeliveryLatitude",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "DeliveryLongitude",
                table: "Shipment");
        }
    }
}
