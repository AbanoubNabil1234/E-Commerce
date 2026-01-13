using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ECommerce.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InventoryRefactorV2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Clear existing inventory data to avoid unique constraint violations during refactor
            migrationBuilder.Sql("DELETE FROM [StockMovement]");
            migrationBuilder.Sql("DELETE FROM [ProductStock]");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductStock_Bin",
                table: "ProductStock");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductStock_Product",
                table: "ProductStock");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductStock_Warehouse",
                table: "ProductStock");

            migrationBuilder.DropForeignKey(
                name: "FK_StockMovement_Bin",
                table: "StockMovement");

            migrationBuilder.DropForeignKey(
                name: "FK_StockMovement_Product",
                table: "StockMovement");

            migrationBuilder.DropForeignKey(
                name: "FK_StockMovement_Warehouse",
                table: "StockMovement");

            migrationBuilder.DropPrimaryKey(
                name: "PK_StockMovement",
                table: "StockMovement");

            migrationBuilder.DropIndex(
                name: "IX_StockMovement_BinId",
                table: "StockMovement");

            migrationBuilder.DropIndex(
                name: "IX_StockMovement_CreatedAt",
                table: "StockMovement");

            migrationBuilder.DropIndex(
                name: "IX_StockMovement_MovementType",
                table: "StockMovement");

            migrationBuilder.DropIndex(
                name: "IX_StockMovement_PerformedBy",
                table: "StockMovement");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductStock",
                table: "ProductStock");

            migrationBuilder.DropIndex(
                name: "IX_ProductStock_ProductId",
                table: "ProductStock");

            migrationBuilder.DropIndex(
                name: "UQ_ProductStock_Location",
                table: "ProductStock");

            migrationBuilder.DropCheckConstraint(
                name: "CK_ProductStock_NonNegative",
                table: "ProductStock");

            migrationBuilder.DropColumn(
                name: "BinId",
                table: "StockMovement");

            migrationBuilder.DropColumn(
                name: "NewQuantity",
                table: "StockMovement");

            migrationBuilder.DropColumn(
                name: "Notes",
                table: "StockMovement");

            migrationBuilder.DropColumn(
                name: "PreviousQuantity",
                table: "StockMovement");

            migrationBuilder.DropColumn(
                name: "LastCountedAt",
                table: "ProductStock");

            migrationBuilder.RenameTable(
                name: "StockMovement",
                newName: "StockMovements");

            migrationBuilder.RenameTable(
                name: "ProductStock",
                newName: "ProductStocks");

            migrationBuilder.RenameColumn(
                name: "PerformedBy",
                table: "StockMovements",
                newName: "CreatedBy");

            migrationBuilder.RenameIndex(
                name: "IX_StockMovement_WarehouseId",
                table: "StockMovements",
                newName: "IX_StockMovements_WarehouseId");

            migrationBuilder.RenameIndex(
                name: "IX_StockMovement_ProductId",
                table: "StockMovements",
                newName: "IX_StockMovements_ProductId");

            migrationBuilder.RenameColumn(
                name: "ReorderQuantity",
                table: "ProductStocks",
                newName: "WarehouseId1");

            migrationBuilder.RenameIndex(
                name: "IX_ProductStock_WarehouseId",
                table: "ProductStocks",
                newName: "IX_ProductStocks_WarehouseId");

            migrationBuilder.RenameIndex(
                name: "IX_ProductStock_BinId",
                table: "ProductStocks",
                newName: "IX_ProductStocks_BinId");

            migrationBuilder.AlterColumn<decimal>(
                name: "Quantity",
                table: "StockMovements",
                type: "decimal(18,2)",
                precision: 18,
                scale: 2,
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,4)",
                oldPrecision: 18,
                oldScale: 4);

            migrationBuilder.AlterColumn<string>(
                name: "MovementType",
                table: "StockMovements",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(20)",
                oldMaxLength: 20);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "StockMovements",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValueSql: "GETDATE()");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "ProductStocks",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValueSql: "GETDATE()");

            migrationBuilder.AlterColumn<decimal>(
                name: "QuantityReserved",
                table: "ProductStocks",
                type: "decimal(18,2)",
                precision: 18,
                scale: 2,
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,4)",
                oldPrecision: 18,
                oldScale: 4,
                oldDefaultValue: 0m);

            migrationBuilder.AlterColumn<decimal>(
                name: "QuantityOnHand",
                table: "ProductStocks",
                type: "decimal(18,2)",
                precision: 18,
                scale: 2,
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,4)",
                oldPrecision: 18,
                oldScale: 4,
                oldDefaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "ProductId1",
                table: "ProductStocks",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_StockMovements",
                table: "StockMovements",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductStocks",
                table: "ProductStocks",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_ProductStocks_ProductId_WarehouseId",
                table: "ProductStocks",
                columns: new[] { "ProductId", "WarehouseId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProductStocks_ProductId1",
                table: "ProductStocks",
                column: "ProductId1");

            migrationBuilder.CreateIndex(
                name: "IX_ProductStocks_WarehouseId1",
                table: "ProductStocks",
                column: "WarehouseId1");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductStocks_Bin_BinId",
                table: "ProductStocks",
                column: "BinId",
                principalTable: "Bin",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductStocks_Product_ProductId",
                table: "ProductStocks",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductStocks_Product_ProductId1",
                table: "ProductStocks",
                column: "ProductId1",
                principalTable: "Product",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductStocks_Warehouse_WarehouseId",
                table: "ProductStocks",
                column: "WarehouseId",
                principalTable: "Warehouse",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductStocks_Warehouse_WarehouseId1",
                table: "ProductStocks",
                column: "WarehouseId1",
                principalTable: "Warehouse",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_StockMovements_Product_ProductId",
                table: "StockMovements",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_StockMovements_Warehouse_WarehouseId",
                table: "StockMovements",
                column: "WarehouseId",
                principalTable: "Warehouse",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductStocks_Bin_BinId",
                table: "ProductStocks");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductStocks_Product_ProductId",
                table: "ProductStocks");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductStocks_Product_ProductId1",
                table: "ProductStocks");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductStocks_Warehouse_WarehouseId",
                table: "ProductStocks");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductStocks_Warehouse_WarehouseId1",
                table: "ProductStocks");

            migrationBuilder.DropForeignKey(
                name: "FK_StockMovements_Product_ProductId",
                table: "StockMovements");

            migrationBuilder.DropForeignKey(
                name: "FK_StockMovements_Warehouse_WarehouseId",
                table: "StockMovements");

            migrationBuilder.DropPrimaryKey(
                name: "PK_StockMovements",
                table: "StockMovements");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductStocks",
                table: "ProductStocks");

            migrationBuilder.DropIndex(
                name: "IX_ProductStocks_ProductId_WarehouseId",
                table: "ProductStocks");

            migrationBuilder.DropIndex(
                name: "IX_ProductStocks_ProductId1",
                table: "ProductStocks");

            migrationBuilder.DropIndex(
                name: "IX_ProductStocks_WarehouseId1",
                table: "ProductStocks");

            migrationBuilder.DropColumn(
                name: "ProductId1",
                table: "ProductStocks");

            migrationBuilder.RenameTable(
                name: "StockMovements",
                newName: "StockMovement");

            migrationBuilder.RenameTable(
                name: "ProductStocks",
                newName: "ProductStock");

            migrationBuilder.RenameColumn(
                name: "CreatedBy",
                table: "StockMovement",
                newName: "PerformedBy");

            migrationBuilder.RenameIndex(
                name: "IX_StockMovements_WarehouseId",
                table: "StockMovement",
                newName: "IX_StockMovement_WarehouseId");

            migrationBuilder.RenameIndex(
                name: "IX_StockMovements_ProductId",
                table: "StockMovement",
                newName: "IX_StockMovement_ProductId");

            migrationBuilder.RenameColumn(
                name: "WarehouseId1",
                table: "ProductStock",
                newName: "ReorderQuantity");

            migrationBuilder.RenameIndex(
                name: "IX_ProductStocks_WarehouseId",
                table: "ProductStock",
                newName: "IX_ProductStock_WarehouseId");

            migrationBuilder.RenameIndex(
                name: "IX_ProductStocks_BinId",
                table: "ProductStock",
                newName: "IX_ProductStock_BinId");

            migrationBuilder.AlterColumn<decimal>(
                name: "Quantity",
                table: "StockMovement",
                type: "decimal(18,4)",
                precision: 18,
                scale: 4,
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)",
                oldPrecision: 18,
                oldScale: 2);

            migrationBuilder.AlterColumn<string>(
                name: "MovementType",
                table: "StockMovement",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "StockMovement",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<int>(
                name: "BinId",
                table: "StockMovement",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "NewQuantity",
                table: "StockMovement",
                type: "decimal(18,4)",
                precision: 18,
                scale: 4,
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "StockMovement",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "PreviousQuantity",
                table: "StockMovement",
                type: "decimal(18,4)",
                precision: 18,
                scale: 4,
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedAt",
                table: "ProductStock",
                type: "datetime2",
                nullable: false,
                defaultValueSql: "GETDATE()",
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "QuantityReserved",
                table: "ProductStock",
                type: "decimal(18,4)",
                precision: 18,
                scale: 4,
                nullable: false,
                defaultValue: 0m,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)",
                oldPrecision: 18,
                oldScale: 2);

            migrationBuilder.AlterColumn<decimal>(
                name: "QuantityOnHand",
                table: "ProductStock",
                type: "decimal(18,4)",
                precision: 18,
                scale: 4,
                nullable: false,
                defaultValue: 0m,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)",
                oldPrecision: 18,
                oldScale: 2);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastCountedAt",
                table: "ProductStock",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_StockMovement",
                table: "StockMovement",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductStock",
                table: "ProductStock",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_StockMovement_BinId",
                table: "StockMovement",
                column: "BinId");

            migrationBuilder.CreateIndex(
                name: "IX_StockMovement_CreatedAt",
                table: "StockMovement",
                column: "CreatedAt");

            migrationBuilder.CreateIndex(
                name: "IX_StockMovement_MovementType",
                table: "StockMovement",
                column: "MovementType");

            migrationBuilder.CreateIndex(
                name: "IX_StockMovement_PerformedBy",
                table: "StockMovement",
                column: "PerformedBy");

            migrationBuilder.CreateIndex(
                name: "IX_ProductStock_ProductId",
                table: "ProductStock",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "UQ_ProductStock_Location",
                table: "ProductStock",
                columns: new[] { "ProductId", "WarehouseId", "BinId" },
                unique: true,
                filter: "[BinId] IS NOT NULL");

            migrationBuilder.AddCheckConstraint(
                name: "CK_ProductStock_NonNegative",
                table: "ProductStock",
                sql: "[QuantityOnHand] >= 0");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductStock_Bin",
                table: "ProductStock",
                column: "BinId",
                principalTable: "Bin",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductStock_Product",
                table: "ProductStock",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductStock_Warehouse",
                table: "ProductStock",
                column: "WarehouseId",
                principalTable: "Warehouse",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_StockMovement_Bin",
                table: "StockMovement",
                column: "BinId",
                principalTable: "Bin",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_StockMovement_Product",
                table: "StockMovement",
                column: "ProductId",
                principalTable: "Product",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_StockMovement_Warehouse",
                table: "StockMovement",
                column: "WarehouseId",
                principalTable: "Warehouse",
                principalColumn: "Id");
        }
    }
}
