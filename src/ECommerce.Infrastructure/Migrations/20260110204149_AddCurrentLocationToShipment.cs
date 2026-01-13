using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ECommerce.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddCurrentLocationToShipment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "CurrentLatitude",
                table: "Shipment",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "CurrentLongitude",
                table: "Shipment",
                type: "float",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "LocationUpdatedAt",
                table: "Shipment",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CurrentLatitude",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "CurrentLongitude",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "LocationUpdatedAt",
                table: "Shipment");
        }
    }
}
