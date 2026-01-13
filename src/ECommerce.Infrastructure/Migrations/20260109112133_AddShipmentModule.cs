using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ECommerce.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddShipmentModule : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Shipment_SubOrderId",
                table: "Shipment");

            migrationBuilder.DropIndex(
                name: "IX_Shipment_TrackingNumber",
                table: "Shipment");

            migrationBuilder.RenameColumn(
                name: "EstimatedDelivery",
                table: "Shipment",
                newName: "EstimatedDeliveryDate");

            migrationBuilder.RenameColumn(
                name: "ActualDelivery",
                table: "Shipment",
                newName: "ActualDeliveryDate");

            migrationBuilder.AlterColumn<string>(
                name: "TrackingNumber",
                table: "Shipment",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SubOrderId",
                table: "Shipment",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Shipment",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeliveryAddress",
                table: "Shipment",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeliveryCity",
                table: "Shipment",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeliveryCountry",
                table: "Shipment",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DeliveryPostalCode",
                table: "Shipment",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "Shipment",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "RecipientName",
                table: "Shipment",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RecipientPhone",
                table: "Shipment",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ShippingMethod",
                table: "Shipment",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "Standard");

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "Shipment",
                type: "nvarchar(450)",
                maxLength: 450,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "WarehouseId",
                table: "Shipment",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ShipmentItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShipmentId = table.Column<int>(type: "int", nullable: false),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    OrderItemId = table.Column<int>(type: "int", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShipmentItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShipmentItem_Product",
                        column: x => x.ProductId,
                        principalTable: "Product",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_ShipmentItem_Shipment",
                        column: x => x.ShipmentId,
                        principalTable: "Shipment",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ShipmentTracking",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShipmentId = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Location = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    Notes = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    OccurredAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShipmentTracking", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShipmentTracking_Shipment",
                        column: x => x.ShipmentId,
                        principalTable: "Shipment",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Shipment_OrderId",
                table: "Shipment",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Shipment_SubOrderId",
                table: "Shipment",
                column: "SubOrderId",
                unique: true,
                filter: "[SubOrderId] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Shipment_TrackingNumber",
                table: "Shipment",
                column: "TrackingNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Shipment_WarehouseId",
                table: "Shipment",
                column: "WarehouseId");

            migrationBuilder.CreateIndex(
                name: "IX_ShipmentItem_ProductId",
                table: "ShipmentItem",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ShipmentItem_ShipmentId",
                table: "ShipmentItem",
                column: "ShipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_ShipmentTracking_ShipmentId",
                table: "ShipmentTracking",
                column: "ShipmentId");

            migrationBuilder.CreateIndex(
                name: "IX_ShipmentTracking_ShipmentId_OccurredAt",
                table: "ShipmentTracking",
                columns: new[] { "ShipmentId", "OccurredAt" });

            migrationBuilder.AddForeignKey(
                name: "FK_Shipment_Order",
                table: "Shipment",
                column: "OrderId",
                principalTable: "Order",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Shipment_Warehouse",
                table: "Shipment",
                column: "WarehouseId",
                principalTable: "Warehouse",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shipment_Order",
                table: "Shipment");

            migrationBuilder.DropForeignKey(
                name: "FK_Shipment_Warehouse",
                table: "Shipment");

            migrationBuilder.DropTable(
                name: "ShipmentItem");

            migrationBuilder.DropTable(
                name: "ShipmentTracking");

            migrationBuilder.DropIndex(
                name: "IX_Shipment_OrderId",
                table: "Shipment");

            migrationBuilder.DropIndex(
                name: "IX_Shipment_SubOrderId",
                table: "Shipment");

            migrationBuilder.DropIndex(
                name: "IX_Shipment_TrackingNumber",
                table: "Shipment");

            migrationBuilder.DropIndex(
                name: "IX_Shipment_WarehouseId",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "DeliveryAddress",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "DeliveryCity",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "DeliveryCountry",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "DeliveryPostalCode",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "RecipientName",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "RecipientPhone",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "ShippingMethod",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "Shipment");

            migrationBuilder.DropColumn(
                name: "WarehouseId",
                table: "Shipment");

            migrationBuilder.RenameColumn(
                name: "EstimatedDeliveryDate",
                table: "Shipment",
                newName: "EstimatedDelivery");

            migrationBuilder.RenameColumn(
                name: "ActualDeliveryDate",
                table: "Shipment",
                newName: "ActualDelivery");

            migrationBuilder.AlterColumn<string>(
                name: "TrackingNumber",
                table: "Shipment",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100);

            migrationBuilder.AlterColumn<int>(
                name: "SubOrderId",
                table: "Shipment",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Shipment_SubOrderId",
                table: "Shipment",
                column: "SubOrderId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Shipment_TrackingNumber",
                table: "Shipment",
                column: "TrackingNumber");
        }
    }
}
