using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ECommerce.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddTranslationTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Language",
                columns: table => new
                {
                    Code = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    NativeName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    IsRTL = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IsDefault = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false, defaultValue: 0),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Language", x => x.Code);
                });

            migrationBuilder.CreateTable(
                name: "OrderStatusLookup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderStatusLookup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PaymentStatusLookup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentStatusLookup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ShipmentStatusLookup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShipmentStatusLookup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TaskStatusLookup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskStatusLookup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TaskTypeLookup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskTypeLookup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TicketCategoryLookup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TicketCategoryLookup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TicketPriorityLookup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TicketPriorityLookup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TicketStatusLookup",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DisplayOrder = table.Column<int>(type: "int", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TicketStatusLookup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BrandTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BrandId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BrandTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BrandTranslation_Brand",
                        column: x => x.BrandId,
                        principalTable: "Brand",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_BrandTranslation_Language",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code");
                });

            migrationBuilder.CreateTable(
                name: "CarrierTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CarrierId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarrierTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CarrierTranslation_Carrier",
                        column: x => x.CarrierId,
                        principalTable: "Carrier",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CarrierTranslation_Language",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code");
                });

            migrationBuilder.CreateTable(
                name: "CategoryTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CategoryTranslation_Category",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CategoryTranslation_Language",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code");
                });

            migrationBuilder.CreateTable(
                name: "FeatureFlagTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FeatureFlagId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FeatureFlagTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FeatureFlagTranslation_FeatureFlag",
                        column: x => x.FeatureFlagId,
                        principalTable: "FeatureFlag",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_FeatureFlagTranslation_Language",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code");
                });

            migrationBuilder.CreateTable(
                name: "ProductTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    ShortDescription = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    Description = table.Column<string>(type: "NVARCHAR(MAX)", nullable: true),
                    MetaTitle = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    MetaDescription = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    MetaKeywords = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductTranslation_Language",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code");
                    table.ForeignKey(
                        name: "FK_ProductTranslation_Product",
                        column: x => x.ProductId,
                        principalTable: "Product",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ShippingZoneTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShippingZoneId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShippingZoneTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShippingZoneTranslation_Language",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code");
                    table.ForeignKey(
                        name: "FK_ShippingZoneTranslation_ShippingZone",
                        column: x => x.ShippingZoneId,
                        principalTable: "ShippingZone",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "WarehouseTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WarehouseId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Address = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WarehouseTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WarehouseTranslation_Language",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code");
                    table.ForeignKey(
                        name: "FK_WarehouseTranslation_Warehouse",
                        column: x => x.WarehouseId,
                        principalTable: "Warehouse",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ZoneTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ZoneId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ZoneTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ZoneTranslation_Language",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code");
                    table.ForeignKey(
                        name: "FK_ZoneTranslation_Zone",
                        column: x => x.ZoneId,
                        principalTable: "Zone",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "OrderStatusTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderStatusId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderStatusTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderStatusTranslation_Language_LanguageCode",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderStatusTranslation_OrderStatusLookup_OrderStatusId",
                        column: x => x.OrderStatusId,
                        principalTable: "OrderStatusLookup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PaymentStatusTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PaymentStatusId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentStatusTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaymentStatusTranslation_Language_LanguageCode",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PaymentStatusTranslation_PaymentStatusLookup_PaymentStatusId",
                        column: x => x.PaymentStatusId,
                        principalTable: "PaymentStatusLookup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "ShipmentStatusTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShipmentStatusId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShipmentStatusTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShipmentStatusTranslation_Language_LanguageCode",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ShipmentStatusTranslation_ShipmentStatusLookup_ShipmentStatusId",
                        column: x => x.ShipmentStatusId,
                        principalTable: "ShipmentStatusLookup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TaskStatusTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TaskStatusId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskStatusTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TaskStatusTranslation_Language_LanguageCode",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TaskStatusTranslation_TaskStatusLookup_TaskStatusId",
                        column: x => x.TaskStatusId,
                        principalTable: "TaskStatusLookup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TaskTypeTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TaskTypeId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskTypeTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TaskTypeTranslation_Language_LanguageCode",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TaskTypeTranslation_TaskTypeLookup_TaskTypeId",
                        column: x => x.TaskTypeId,
                        principalTable: "TaskTypeLookup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TicketCategoryTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TicketCategoryId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TicketCategoryTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TicketCategoryTranslation_Language_LanguageCode",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TicketCategoryTranslation_TicketCategoryLookup_TicketCategoryId",
                        column: x => x.TicketCategoryId,
                        principalTable: "TicketCategoryLookup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TicketPriorityTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TicketPriorityId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TicketPriorityTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TicketPriorityTranslation_Language_LanguageCode",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TicketPriorityTranslation_TicketPriorityLookup_TicketPriorityId",
                        column: x => x.TicketPriorityId,
                        principalTable: "TicketPriorityLookup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "TicketStatusTranslation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TicketStatusId = table.Column<int>(type: "int", nullable: false),
                    LanguageCode = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    DisplayName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TicketStatusTranslation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TicketStatusTranslation_Language_LanguageCode",
                        column: x => x.LanguageCode,
                        principalTable: "Language",
                        principalColumn: "Code",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TicketStatusTranslation_TicketStatusLookup_TicketStatusId",
                        column: x => x.TicketStatusId,
                        principalTable: "TicketStatusLookup",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_BrandTranslation_BrandId",
                table: "BrandTranslation",
                column: "BrandId");

            migrationBuilder.CreateIndex(
                name: "IX_BrandTranslation_LanguageCode",
                table: "BrandTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_BrandTranslation_BrandLang",
                table: "BrandTranslation",
                columns: new[] { "BrandId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CarrierTranslation_CarrierId",
                table: "CarrierTranslation",
                column: "CarrierId");

            migrationBuilder.CreateIndex(
                name: "IX_CarrierTranslation_LanguageCode",
                table: "CarrierTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_CarrierTranslation_CarrierLang",
                table: "CarrierTranslation",
                columns: new[] { "CarrierId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CategoryTranslation_CategoryId",
                table: "CategoryTranslation",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_CategoryTranslation_LanguageCode",
                table: "CategoryTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_CategoryTranslation_CategoryLang",
                table: "CategoryTranslation",
                columns: new[] { "CategoryId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_FeatureFlagTranslation_FeatureFlagId",
                table: "FeatureFlagTranslation",
                column: "FeatureFlagId");

            migrationBuilder.CreateIndex(
                name: "IX_FeatureFlagTranslation_LanguageCode",
                table: "FeatureFlagTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_FeatureFlagTranslation",
                table: "FeatureFlagTranslation",
                columns: new[] { "FeatureFlagId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_OrderStatusLookup_Code",
                table: "OrderStatusLookup",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderStatusTranslation_LanguageCode",
                table: "OrderStatusTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_OrderStatusTranslation",
                table: "OrderStatusTranslation",
                columns: new[] { "OrderStatusId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_PaymentStatusLookup_Code",
                table: "PaymentStatusLookup",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PaymentStatusTranslation_LanguageCode",
                table: "PaymentStatusTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_PaymentStatusTranslation",
                table: "PaymentStatusTranslation",
                columns: new[] { "PaymentStatusId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProductTranslation_LanguageCode",
                table: "ProductTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTranslation_ProductId",
                table: "ProductTranslation",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "UQ_ProductTranslation_ProductLang",
                table: "ProductTranslation",
                columns: new[] { "ProductId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_ShipmentStatusLookup_Code",
                table: "ShipmentStatusLookup",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ShipmentStatusTranslation_LanguageCode",
                table: "ShipmentStatusTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_ShipmentStatusTranslation",
                table: "ShipmentStatusTranslation",
                columns: new[] { "ShipmentStatusId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ShippingZoneTranslation_LanguageCode",
                table: "ShippingZoneTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "IX_ShippingZoneTranslation_ShippingZoneId",
                table: "ShippingZoneTranslation",
                column: "ShippingZoneId");

            migrationBuilder.CreateIndex(
                name: "UQ_ShippingZoneTranslation_ShippingZoneLang",
                table: "ShippingZoneTranslation",
                columns: new[] { "ShippingZoneId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_TaskStatusLookup_Code",
                table: "TaskStatusLookup",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TaskStatusTranslation_LanguageCode",
                table: "TaskStatusTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_TaskStatusTranslation",
                table: "TaskStatusTranslation",
                columns: new[] { "TaskStatusId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_TaskTypeLookup_Code",
                table: "TaskTypeLookup",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TaskTypeTranslation_LanguageCode",
                table: "TaskTypeTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_TaskTypeTranslation",
                table: "TaskTypeTranslation",
                columns: new[] { "TaskTypeId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_TicketCategoryLookup_Code",
                table: "TicketCategoryLookup",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TicketCategoryTranslation_LanguageCode",
                table: "TicketCategoryTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_TicketCategoryTranslation",
                table: "TicketCategoryTranslation",
                columns: new[] { "TicketCategoryId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_TicketPriorityLookup_Code",
                table: "TicketPriorityLookup",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TicketPriorityTranslation_LanguageCode",
                table: "TicketPriorityTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_TicketPriorityTranslation",
                table: "TicketPriorityTranslation",
                columns: new[] { "TicketPriorityId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ_TicketStatusLookup_Code",
                table: "TicketStatusLookup",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TicketStatusTranslation_LanguageCode",
                table: "TicketStatusTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "UQ_TicketStatusTranslation",
                table: "TicketStatusTranslation",
                columns: new[] { "TicketStatusId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_WarehouseTranslation_LanguageCode",
                table: "WarehouseTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "IX_WarehouseTranslation_WarehouseId",
                table: "WarehouseTranslation",
                column: "WarehouseId");

            migrationBuilder.CreateIndex(
                name: "UQ_WarehouseTranslation_WarehouseLang",
                table: "WarehouseTranslation",
                columns: new[] { "WarehouseId", "LanguageCode" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ZoneTranslation_LanguageCode",
                table: "ZoneTranslation",
                column: "LanguageCode");

            migrationBuilder.CreateIndex(
                name: "IX_ZoneTranslation_ZoneId",
                table: "ZoneTranslation",
                column: "ZoneId");

            migrationBuilder.CreateIndex(
                name: "UQ_ZoneTranslation_ZoneLang",
                table: "ZoneTranslation",
                columns: new[] { "ZoneId", "LanguageCode" },
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BrandTranslation");

            migrationBuilder.DropTable(
                name: "CarrierTranslation");

            migrationBuilder.DropTable(
                name: "CategoryTranslation");

            migrationBuilder.DropTable(
                name: "FeatureFlagTranslation");

            migrationBuilder.DropTable(
                name: "OrderStatusTranslation");

            migrationBuilder.DropTable(
                name: "PaymentStatusTranslation");

            migrationBuilder.DropTable(
                name: "ProductTranslation");

            migrationBuilder.DropTable(
                name: "ShipmentStatusTranslation");

            migrationBuilder.DropTable(
                name: "ShippingZoneTranslation");

            migrationBuilder.DropTable(
                name: "TaskStatusTranslation");

            migrationBuilder.DropTable(
                name: "TaskTypeTranslation");

            migrationBuilder.DropTable(
                name: "TicketCategoryTranslation");

            migrationBuilder.DropTable(
                name: "TicketPriorityTranslation");

            migrationBuilder.DropTable(
                name: "TicketStatusTranslation");

            migrationBuilder.DropTable(
                name: "WarehouseTranslation");

            migrationBuilder.DropTable(
                name: "ZoneTranslation");

            migrationBuilder.DropTable(
                name: "OrderStatusLookup");

            migrationBuilder.DropTable(
                name: "PaymentStatusLookup");

            migrationBuilder.DropTable(
                name: "ShipmentStatusLookup");

            migrationBuilder.DropTable(
                name: "TaskStatusLookup");

            migrationBuilder.DropTable(
                name: "TaskTypeLookup");

            migrationBuilder.DropTable(
                name: "TicketCategoryLookup");

            migrationBuilder.DropTable(
                name: "TicketPriorityLookup");

            migrationBuilder.DropTable(
                name: "TicketStatusLookup");

            migrationBuilder.DropTable(
                name: "Language");
        }
    }
}
