using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ECommerce.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddOrderWarehouseWorkflow : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "OrderStatus",
                table: "Order",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "Draft",
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20,
                oldDefaultValue: "Pending");

            migrationBuilder.AlterColumn<string>(
                name: "OrderNumber",
                table: "Order",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Order",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETUTCDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValueSql: "GETDATE()");

            migrationBuilder.AddColumn<string>(
                name: "CancellationReason",
                table: "Order",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CancelledAt",
                table: "Order",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ConfirmedAt",
                table: "Order",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Order",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeliveredAt",
                table: "Order",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ShippedAt",
                table: "Order",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UpdatedBy",
                table: "Order",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "WarehouseId",
                table: "Order",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Order_WarehouseId",
                table: "Order",
                column: "WarehouseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_Warehouse_WarehouseId",
                table: "Order",
                column: "WarehouseId",
                principalTable: "Warehouse",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_Warehouse_WarehouseId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_Order_WarehouseId",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "CancellationReason",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "CancelledAt",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "ConfirmedAt",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "DeliveredAt",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "ShippedAt",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "Order");

            migrationBuilder.DropColumn(
                name: "WarehouseId",
                table: "Order");

            migrationBuilder.AlterColumn<string>(
                name: "OrderStatus",
                table: "Order",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                defaultValue: "Pending",
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20,
                oldDefaultValue: "Draft");

            migrationBuilder.AlterColumn<string>(
                name: "OrderNumber",
                table: "Order",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Order",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValueSql: "GETUTCDATE()");
        }
    }
}
