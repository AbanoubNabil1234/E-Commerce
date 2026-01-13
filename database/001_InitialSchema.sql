-- ============================================================================
-- E-COMMERCE & LOGISTICS PLATFORM - DATABASE SCHEMA
-- SQL Server (T-SQL) - Production Ready
-- ============================================================================
-- 
-- DESIGN OVERVIEW:
-- ================
-- This database supports an enterprise-grade E-Commerce & Logistics platform
-- with the following key design decisions:
--
-- 1. ASP.NET Core Identity Integration:
--    - Uses existing AspNetUsers table for all user references
--    - All FKs to users reference AspNetUsers.Id (NVARCHAR(450))
--
-- 2. Naming Conventions:
--    - PascalCase for table and column names
--    - Singular table names (Product, not Products)
--    - Clear, descriptive column names
--
-- 3. Data Types:
--    - INT IDENTITY for primary keys
--    - NVARCHAR for strings (Unicode support)
--    - DATETIME for timestamps
--    - DECIMAL(18,2) for monetary values
--    - DECIMAL(18,4) for quantities
--
-- 4. Audit Fields:
--    - CreatedAt, UpdatedAt on all business tables
--    - CreatedBy, UpdatedBy referencing AspNetUsers where appropriate
--    - IsActive/Status for soft delete patterns
--
-- 5. Indexing Strategy:
--    - Clustered index on primary key (default)
--    - Non-clustered indexes on foreign keys
--    - Indexes on frequently queried columns (SKU, Status, etc.)
--
-- ============================================================================

-- ============================================================================
-- MODULE 1: CATALOG
-- ============================================================================
-- Brand → Category ← Product
-- Products belong to one Brand and one Category
-- Categories support parent-child hierarchy

-- ----------------------------------------------------------------------------
-- Brand - Product manufacturers/brands
-- ----------------------------------------------------------------------------
CREATE TABLE Brand (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Name            NVARCHAR(100) NOT NULL,
    Slug            NVARCHAR(100) NOT NULL,           -- URL-friendly name
    Description     NVARCHAR(500) NULL,
    LogoUrl         NVARCHAR(500) NULL,
    Website         NVARCHAR(255) NULL,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt       DATETIME NULL,
    
    CONSTRAINT UQ_Brand_Slug UNIQUE (Slug)
);

CREATE NONCLUSTERED INDEX IX_Brand_IsActive ON Brand(IsActive);
CREATE NONCLUSTERED INDEX IX_Brand_Name ON Brand(Name);

-- ----------------------------------------------------------------------------
-- Category - Hierarchical product categorization
-- ----------------------------------------------------------------------------
CREATE TABLE Category (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    ParentId        INT NULL,                         -- Self-referencing for hierarchy
    Name            NVARCHAR(100) NOT NULL,
    Slug            NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(500) NULL,
    ImageUrl        NVARCHAR(500) NULL,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    Level           INT NOT NULL DEFAULT 0,           -- Depth in hierarchy (0 = root)
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt       DATETIME NULL,
    
    CONSTRAINT UQ_Category_Slug UNIQUE (Slug),
    CONSTRAINT FK_Category_Parent FOREIGN KEY (ParentId) 
        REFERENCES Category(Id) ON DELETE NO ACTION
);

CREATE NONCLUSTERED INDEX IX_Category_ParentId ON Category(ParentId);
CREATE NONCLUSTERED INDEX IX_Category_IsActive ON Category(IsActive);

-- ----------------------------------------------------------------------------
-- Product - Core product entity
-- ----------------------------------------------------------------------------
CREATE TABLE Product (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    BrandId         INT NOT NULL,
    CategoryId      INT NOT NULL,
    SKU             NVARCHAR(50) NOT NULL,            -- Stock Keeping Unit
    Name            NVARCHAR(200) NOT NULL,
    Slug            NVARCHAR(200) NOT NULL,
    Description     NVARCHAR(MAX) NULL,
    ShortDescription NVARCHAR(500) NULL,
    UnitPrice       DECIMAL(18,2) NOT NULL,
    CostPrice       DECIMAL(18,2) NULL,               -- For profit calculation
    Weight          DECIMAL(10,3) NULL,               -- In kg
    Length          DECIMAL(10,2) NULL,               -- Dimensions in cm
    Width           DECIMAL(10,2) NULL,
    Height          DECIMAL(10,2) NULL,
    ImageUrl        NVARCHAR(500) NULL,
    IsActive        BIT NOT NULL DEFAULT 1,
    IsFeatured      BIT NOT NULL DEFAULT 0,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt       DATETIME NULL,
    
    CONSTRAINT UQ_Product_SKU UNIQUE (SKU),
    CONSTRAINT UQ_Product_Slug UNIQUE (Slug),
    CONSTRAINT FK_Product_Brand FOREIGN KEY (BrandId) 
        REFERENCES Brand(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_Product_Category FOREIGN KEY (CategoryId) 
        REFERENCES Category(Id) ON DELETE NO ACTION
);

CREATE NONCLUSTERED INDEX IX_Product_BrandId ON Product(BrandId);
CREATE NONCLUSTERED INDEX IX_Product_CategoryId ON Product(CategoryId);
CREATE NONCLUSTERED INDEX IX_Product_IsActive ON Product(IsActive);
CREATE NONCLUSTERED INDEX IX_Product_IsFeatured ON Product(IsFeatured);

-- Composite index for product listing page (filters by active, category, brand)
CREATE NONCLUSTERED INDEX IX_Product_Active_Category_Brand 
    ON Product(IsActive, CategoryId, BrandId);

-- Slug indexes for SEO-friendly URL lookups
CREATE NONCLUSTERED INDEX IX_Product_Slug ON Product(Slug);
CREATE NONCLUSTERED INDEX IX_Category_Slug ON Category(Slug);

-- ----------------------------------------------------------------------------
-- ProductImage - Multiple images per product
-- ----------------------------------------------------------------------------
CREATE TABLE ProductImage (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    ProductId       INT NOT NULL,
    ImageUrl        NVARCHAR(500) NOT NULL,
    AltText         NVARCHAR(200) NULL,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    IsPrimary       BIT NOT NULL DEFAULT 0,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_ProductImage_Product FOREIGN KEY (ProductId) 
        REFERENCES Product(Id) ON DELETE CASCADE
);

CREATE NONCLUSTERED INDEX IX_ProductImage_ProductId ON ProductImage(ProductId);


-- ============================================================================
-- MODULE 2: WAREHOUSES & STORAGE STRUCTURE
-- ============================================================================
-- Hierarchy: Warehouse → Zone → Aisle → Shelf → Bin

-- ----------------------------------------------------------------------------
-- Warehouse - Physical warehouse locations
-- ----------------------------------------------------------------------------
CREATE TABLE Warehouse (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Code            NVARCHAR(20) NOT NULL,            -- WH001, WH002, etc.
    Name            NVARCHAR(100) NOT NULL,
    Address         NVARCHAR(500) NOT NULL,
    City            NVARCHAR(100) NOT NULL,
    State           NVARCHAR(100) NULL,
    Country         NVARCHAR(100) NOT NULL,
    PostalCode      NVARCHAR(20) NULL,
    Phone           NVARCHAR(20) NULL,
    Email           NVARCHAR(100) NULL,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt       DATETIME NULL,
    
    CONSTRAINT UQ_Warehouse_Code UNIQUE (Code)
);

CREATE NONCLUSTERED INDEX IX_Warehouse_IsActive ON Warehouse(IsActive);

-- ----------------------------------------------------------------------------
-- Zone - Areas within a warehouse (e.g., Receiving, Shipping, Storage)
-- ----------------------------------------------------------------------------
CREATE TABLE Zone (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    WarehouseId     INT NOT NULL,
    Code            NVARCHAR(20) NOT NULL,            -- A, B, C or RECV, SHIP
    Name            NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    ZoneType        NVARCHAR(50) NOT NULL,            -- Storage, Receiving, Shipping, Returns
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_Zone_WarehouseCode UNIQUE (WarehouseId, Code),
    CONSTRAINT FK_Zone_Warehouse FOREIGN KEY (WarehouseId) 
        REFERENCES Warehouse(Id) ON DELETE NO ACTION
);

CREATE NONCLUSTERED INDEX IX_Zone_WarehouseId ON Zone(WarehouseId);

-- ----------------------------------------------------------------------------
-- Aisle - Rows within a zone
-- ----------------------------------------------------------------------------
CREATE TABLE Aisle (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    ZoneId          INT NOT NULL,
    Code            NVARCHAR(20) NOT NULL,            -- 01, 02, 03
    Name            NVARCHAR(100) NULL,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_Aisle_ZoneCode UNIQUE (ZoneId, Code),
    CONSTRAINT FK_Aisle_Zone FOREIGN KEY (ZoneId) 
        REFERENCES Zone(Id) ON DELETE NO ACTION
);

CREATE NONCLUSTERED INDEX IX_Aisle_ZoneId ON Aisle(ZoneId);

-- ----------------------------------------------------------------------------
-- Shelf - Vertical levels within an aisle
-- ----------------------------------------------------------------------------
CREATE TABLE Shelf (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    AisleId         INT NOT NULL,
    Code            NVARCHAR(20) NOT NULL,            -- A, B, C (top to bottom)
    Level           INT NOT NULL,                     -- 1, 2, 3 (floor level)
    MaxWeight       DECIMAL(10,2) NULL,               -- Max weight capacity in kg
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_Shelf_AisleCode UNIQUE (AisleId, Code),
    CONSTRAINT FK_Shelf_Aisle FOREIGN KEY (AisleId) 
        REFERENCES Aisle(Id) ON DELETE NO ACTION
);

CREATE NONCLUSTERED INDEX IX_Shelf_AisleId ON Shelf(AisleId);

-- ----------------------------------------------------------------------------
-- Bin - Individual storage locations (smallest unit)
-- ----------------------------------------------------------------------------
CREATE TABLE Bin (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    ShelfId         INT NOT NULL,
    Code            NVARCHAR(50) NOT NULL,            -- Full location code: WH001-A-01-B-001
    Barcode         NVARCHAR(50) NULL,                -- Scannable barcode
    MaxQuantity     INT NULL,                         -- Max items this bin can hold
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_Bin_ShelfCode UNIQUE (ShelfId, Code),
    CONSTRAINT FK_Bin_Shelf FOREIGN KEY (ShelfId) 
        REFERENCES Shelf(Id) ON DELETE NO ACTION
);

CREATE NONCLUSTERED INDEX IX_Bin_ShelfId ON Bin(ShelfId);
CREATE NONCLUSTERED INDEX IX_Bin_Barcode ON Bin(Barcode);


-- ============================================================================
-- MODULE 3: INVENTORY MANAGEMENT
-- ============================================================================
-- ProductStock tracks current stock levels
-- StockMovement provides full audit trail

-- ----------------------------------------------------------------------------
-- ProductStock - Current inventory levels per location
-- ----------------------------------------------------------------------------
CREATE TABLE ProductStock (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    ProductId           INT NOT NULL,
    WarehouseId         INT NOT NULL,
    BinId               INT NULL,                     -- NULL = general warehouse stock
    QuantityOnHand      DECIMAL(18,4) NOT NULL DEFAULT 0,
    QuantityReserved    DECIMAL(18,4) NOT NULL DEFAULT 0,  -- Reserved for orders
    QuantityAvailable   AS (QuantityOnHand - QuantityReserved) PERSISTED,  -- Computed
    ReorderLevel        INT NULL,                     -- Alert when below this
    ReorderQuantity     INT NULL,                     -- How much to reorder
    LastCountedAt       DATETIME NULL,                -- Last physical count
    UpdatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_ProductStock_Location UNIQUE (ProductId, WarehouseId, BinId),
    CONSTRAINT FK_ProductStock_Product FOREIGN KEY (ProductId) 
        REFERENCES Product(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_ProductStock_Warehouse FOREIGN KEY (WarehouseId) 
        REFERENCES Warehouse(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_ProductStock_Bin FOREIGN KEY (BinId) 
        REFERENCES Bin(Id) ON DELETE NO ACTION,
    CONSTRAINT CK_ProductStock_NonNegative CHECK (QuantityOnHand >= 0)
);

CREATE NONCLUSTERED INDEX IX_ProductStock_ProductId ON ProductStock(ProductId);
CREATE NONCLUSTERED INDEX IX_ProductStock_WarehouseId ON ProductStock(WarehouseId);
CREATE NONCLUSTERED INDEX IX_ProductStock_BinId ON ProductStock(BinId);

-- ----------------------------------------------------------------------------
-- StockMovement - Historical record of all stock changes (immutable)
-- ----------------------------------------------------------------------------
CREATE TABLE StockMovement (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    ProductId           INT NOT NULL,
    WarehouseId         INT NOT NULL,
    BinId               INT NULL,
    MovementType        NVARCHAR(20) NOT NULL,        -- IN, OUT, TRANSFER, ADJUSTMENT, DAMAGED
    Quantity            DECIMAL(18,4) NOT NULL,       -- Positive for IN, negative for OUT
    PreviousQuantity    DECIMAL(18,4) NOT NULL,
    NewQuantity         DECIMAL(18,4) NOT NULL,
    ReferenceType       NVARCHAR(50) NULL,            -- Order, PurchaseOrder, Return, etc.
    ReferenceId         INT NULL,                     -- FK to reference entity
    Reason              NVARCHAR(255) NULL,
    Notes               NVARCHAR(500) NULL,
    PerformedBy         NVARCHAR(450) NOT NULL,       -- AspNetUsers.Id
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_StockMovement_Product FOREIGN KEY (ProductId) 
        REFERENCES Product(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_StockMovement_Warehouse FOREIGN KEY (WarehouseId) 
        REFERENCES Warehouse(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_StockMovement_Bin FOREIGN KEY (BinId) 
        REFERENCES Bin(Id) ON DELETE NO ACTION,
    -- Note: PerformedBy FK to AspNetUsers is intentionally soft (no constraint)
    -- to avoid tight coupling with Identity tables
    CONSTRAINT CK_StockMovement_Type CHECK (
        MovementType IN ('IN', 'OUT', 'TRANSFER', 'ADJUSTMENT', 'DAMAGED', 'RETURN')
    )
);

CREATE NONCLUSTERED INDEX IX_StockMovement_ProductId ON StockMovement(ProductId);
CREATE NONCLUSTERED INDEX IX_StockMovement_WarehouseId ON StockMovement(WarehouseId);
CREATE NONCLUSTERED INDEX IX_StockMovement_MovementType ON StockMovement(MovementType);
CREATE NONCLUSTERED INDEX IX_StockMovement_CreatedAt ON StockMovement(CreatedAt);
CREATE NONCLUSTERED INDEX IX_StockMovement_PerformedBy ON StockMovement(PerformedBy);


-- ============================================================================
-- MODULE 4: ORDERS & FULFILLMENT
-- ============================================================================
-- Order → OrderItem (products)
-- Order → SubOrder (warehouse-specific fulfillment)

-- ----------------------------------------------------------------------------
-- Order - Customer order header
-- ----------------------------------------------------------------------------
CREATE TABLE [Order] (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    OrderNumber         NVARCHAR(20) NOT NULL,        -- ORD-20260103-0001
    CustomerId          NVARCHAR(450) NOT NULL,       -- AspNetUsers.Id
    OrderStatus         NVARCHAR(20) NOT NULL DEFAULT 'Pending',
    PaymentStatus       NVARCHAR(20) NOT NULL DEFAULT 'Pending',
    SubTotal            DECIMAL(18,2) NOT NULL,
    TaxAmount           DECIMAL(18,2) NOT NULL DEFAULT 0,
    ShippingAmount      DECIMAL(18,2) NOT NULL DEFAULT 0,
    DiscountAmount      DECIMAL(18,2) NOT NULL DEFAULT 0,
    TotalAmount         DECIMAL(18,2) NOT NULL,
    Currency            NVARCHAR(3) NOT NULL DEFAULT 'USD',
    
    -- Shipping address (denormalized for historical accuracy)
    ShippingName        NVARCHAR(100) NOT NULL,
    ShippingAddress     NVARCHAR(500) NOT NULL,
    ShippingCity        NVARCHAR(100) NOT NULL,
    ShippingState       NVARCHAR(100) NULL,
    ShippingCountry     NVARCHAR(100) NOT NULL,
    ShippingPostalCode  NVARCHAR(20) NULL,
    ShippingPhone       NVARCHAR(20) NULL,
    
    Notes               NVARCHAR(1000) NULL,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt           DATETIME NULL,
    
    CONSTRAINT UQ_Order_OrderNumber UNIQUE (OrderNumber),
    CONSTRAINT CK_Order_Status CHECK (
        OrderStatus IN ('Pending', 'Confirmed', 'Processing', 'PartiallyShipped', 
                        'Shipped', 'Delivered', 'Cancelled', 'Refunded')
    ),
    CONSTRAINT CK_Order_PaymentStatus CHECK (
        PaymentStatus IN ('Pending', 'Paid', 'PartiallyPaid', 'Refunded', 'Failed')
    )
);

CREATE NONCLUSTERED INDEX IX_Order_CustomerId ON [Order](CustomerId);
CREATE NONCLUSTERED INDEX IX_Order_OrderStatus ON [Order](OrderStatus);
CREATE NONCLUSTERED INDEX IX_Order_PaymentStatus ON [Order](PaymentStatus);
CREATE NONCLUSTERED INDEX IX_Order_CreatedAt ON [Order](CreatedAt);

-- ----------------------------------------------------------------------------
-- OrderItem - Line items in an order
-- ----------------------------------------------------------------------------
CREATE TABLE OrderItem (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    OrderId             INT NOT NULL,
    ProductId           INT NOT NULL,
    SKU                 NVARCHAR(50) NOT NULL,        -- Snapshot at order time
    ProductName         NVARCHAR(200) NOT NULL,       -- Snapshot at order time
    UnitPrice           DECIMAL(18,2) NOT NULL,       -- Price at order time
    Quantity            INT NOT NULL,
    DiscountAmount      DECIMAL(18,2) NOT NULL DEFAULT 0,
    TotalPrice          DECIMAL(18,2) NOT NULL,
    
    CONSTRAINT FK_OrderItem_Order FOREIGN KEY (OrderId) 
        REFERENCES [Order](Id) ON DELETE CASCADE,
    CONSTRAINT FK_OrderItem_Product FOREIGN KEY (ProductId) 
        REFERENCES Product(Id) ON DELETE NO ACTION,
    CONSTRAINT CK_OrderItem_Quantity CHECK (Quantity > 0)
);

CREATE NONCLUSTERED INDEX IX_OrderItem_OrderId ON OrderItem(OrderId);
CREATE NONCLUSTERED INDEX IX_OrderItem_ProductId ON OrderItem(ProductId);

-- ----------------------------------------------------------------------------
-- SubOrder - Fulfillment unit per warehouse (order splitting)
-- ----------------------------------------------------------------------------
CREATE TABLE SubOrder (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    OrderId             INT NOT NULL,
    WarehouseId         INT NOT NULL,
    SubOrderNumber      NVARCHAR(30) NOT NULL,        -- ORD-20260103-0001-WH001
    Status              NVARCHAR(20) NOT NULL DEFAULT 'Pending',
    AssignedAt          DATETIME NULL,
    PickedAt            DATETIME NULL,
    PackedAt            DATETIME NULL,
    ShippedAt           DATETIME NULL,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt           DATETIME NULL,
    
    CONSTRAINT UQ_SubOrder_Number UNIQUE (SubOrderNumber),
    CONSTRAINT FK_SubOrder_Order FOREIGN KEY (OrderId) 
        REFERENCES [Order](Id) ON DELETE CASCADE,
    CONSTRAINT FK_SubOrder_Warehouse FOREIGN KEY (WarehouseId) 
        REFERENCES Warehouse(Id) ON DELETE NO ACTION,
    CONSTRAINT CK_SubOrder_Status CHECK (
        Status IN ('Pending', 'Assigned', 'Picking', 'Picked', 'Packing', 
                   'Packed', 'ReadyToShip', 'Shipped', 'Cancelled')
    )
);

CREATE NONCLUSTERED INDEX IX_SubOrder_OrderId ON SubOrder(OrderId);
CREATE NONCLUSTERED INDEX IX_SubOrder_WarehouseId ON SubOrder(WarehouseId);
CREATE NONCLUSTERED INDEX IX_SubOrder_Status ON SubOrder(Status);

-- ----------------------------------------------------------------------------
-- SubOrderItem - Items allocated to each sub-order
-- ----------------------------------------------------------------------------
CREATE TABLE SubOrderItem (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    SubOrderId          INT NOT NULL,
    OrderItemId         INT NOT NULL,
    ProductId           INT NOT NULL,
    BinId               INT NULL,                     -- Pick location
    Quantity            INT NOT NULL,
    PickedQuantity      INT NOT NULL DEFAULT 0,
    
    CONSTRAINT FK_SubOrderItem_SubOrder FOREIGN KEY (SubOrderId) 
        REFERENCES SubOrder(Id) ON DELETE CASCADE,
    CONSTRAINT FK_SubOrderItem_OrderItem FOREIGN KEY (OrderItemId) 
        REFERENCES OrderItem(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_SubOrderItem_Product FOREIGN KEY (ProductId) 
        REFERENCES Product(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_SubOrderItem_Bin FOREIGN KEY (BinId) 
        REFERENCES Bin(Id) ON DELETE NO ACTION
);

CREATE NONCLUSTERED INDEX IX_SubOrderItem_SubOrderId ON SubOrderItem(SubOrderId);


-- ============================================================================
-- MODULE 5: SHIPPING & LOGISTICS
-- ============================================================================

-- ----------------------------------------------------------------------------
-- ShippingZone - Geographic shipping zones with rates
-- ----------------------------------------------------------------------------
CREATE TABLE ShippingZone (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    Name                NVARCHAR(100) NOT NULL,
    Description         NVARCHAR(255) NULL,
    Countries           NVARCHAR(500) NULL,           -- Comma-separated country codes
    States              NVARCHAR(500) NULL,           -- Comma-separated state codes
    PostalCodePattern   NVARCHAR(100) NULL,           -- Regex pattern for postal codes
    BaseRate            DECIMAL(18,2) NOT NULL,
    PerKgRate           DECIMAL(18,2) NOT NULL DEFAULT 0,
    EstimatedDays       INT NOT NULL,
    IsActive            BIT NOT NULL DEFAULT 1,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_ShippingZone_Name UNIQUE (Name)
);

-- ----------------------------------------------------------------------------
-- Carrier - Shipping carriers/providers
-- ----------------------------------------------------------------------------
CREATE TABLE Carrier (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    Name                NVARCHAR(100) NOT NULL,
    Code                NVARCHAR(20) NOT NULL,        -- FEDEX, UPS, DHL
    TrackingUrlTemplate NVARCHAR(500) NULL,           -- https://track.com/?id={tracking}
    ContactPhone        NVARCHAR(20) NULL,
    ContactEmail        NVARCHAR(100) NULL,
    IsActive            BIT NOT NULL DEFAULT 1,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_Carrier_Code UNIQUE (Code)
);

-- ----------------------------------------------------------------------------
-- Shipment - Physical shipment record
-- ----------------------------------------------------------------------------
CREATE TABLE Shipment (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    SubOrderId          INT NOT NULL,
    CarrierId           INT NULL,
    ShippingZoneId      INT NULL,
    TrackingNumber      NVARCHAR(100) NULL,
    Status              NVARCHAR(20) NOT NULL DEFAULT 'Pending',
    Weight              DECIMAL(10,3) NULL,           -- Actual weight in kg
    ShippingCost        DECIMAL(18,2) NULL,
    DriverId            NVARCHAR(450) NULL,           -- AspNetUsers.Id (for local delivery)
    EstimatedDelivery   DATETIME NULL,
    ActualDelivery      DATETIME NULL,
    ShippedAt           DATETIME NULL,
    DeliveredAt         DATETIME NULL,
    Notes               NVARCHAR(500) NULL,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt           DATETIME NULL,
    
    CONSTRAINT FK_Shipment_SubOrder FOREIGN KEY (SubOrderId) 
        REFERENCES SubOrder(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_Shipment_Carrier FOREIGN KEY (CarrierId) 
        REFERENCES Carrier(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_Shipment_ShippingZone FOREIGN KEY (ShippingZoneId) 
        REFERENCES ShippingZone(Id) ON DELETE NO ACTION,
    CONSTRAINT CK_Shipment_Status CHECK (
        Status IN ('Pending', 'LabelCreated', 'PickedUp', 'InTransit', 
                   'OutForDelivery', 'Delivered', 'Failed', 'Returned')
    )
);

CREATE NONCLUSTERED INDEX IX_Shipment_SubOrderId ON Shipment(SubOrderId);
CREATE NONCLUSTERED INDEX IX_Shipment_CarrierId ON Shipment(CarrierId);
CREATE NONCLUSTERED INDEX IX_Shipment_DriverId ON Shipment(DriverId);
CREATE NONCLUSTERED INDEX IX_Shipment_Status ON Shipment(Status);
CREATE NONCLUSTERED INDEX IX_Shipment_TrackingNumber ON Shipment(TrackingNumber);


-- ============================================================================
-- MODULE 6: WORKFORCE MANAGEMENT
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Worker - Warehouse workers (linked to AspNetUsers)
-- ----------------------------------------------------------------------------
CREATE TABLE Worker (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    UserId              NVARCHAR(450) NOT NULL,       -- AspNetUsers.Id
    WarehouseId         INT NOT NULL,
    EmployeeCode        NVARCHAR(20) NOT NULL,        -- EMP001
    Position            NVARCHAR(100) NOT NULL,       -- Picker, Packer, Supervisor
    HireDate            DATETIME NOT NULL,
    HourlyRate          DECIMAL(10,2) NULL,
    IsActive            BIT NOT NULL DEFAULT 1,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt           DATETIME NULL,
    
    CONSTRAINT UQ_Worker_UserId UNIQUE (UserId),
    CONSTRAINT UQ_Worker_EmployeeCode UNIQUE (EmployeeCode),
    CONSTRAINT FK_Worker_Warehouse FOREIGN KEY (WarehouseId) 
        REFERENCES Warehouse(Id) ON DELETE NO ACTION
);

CREATE NONCLUSTERED INDEX IX_Worker_WarehouseId ON Worker(WarehouseId);
CREATE NONCLUSTERED INDEX IX_Worker_IsActive ON Worker(IsActive);

-- ----------------------------------------------------------------------------
-- Task - Work assignments for warehouse operations
-- ----------------------------------------------------------------------------
CREATE TABLE Task (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    SubOrderId          INT NOT NULL,
    WorkerId            INT NULL,                     -- Assigned worker
    TaskType            NVARCHAR(20) NOT NULL,        -- Pick, Pack, Deliver
    Status              NVARCHAR(20) NOT NULL DEFAULT 'Pending',
    Priority            INT NOT NULL DEFAULT 5,       -- 1=Highest, 10=Lowest
    AssignedAt          DATETIME NULL,
    StartedAt           DATETIME NULL,
    CompletedAt         DATETIME NULL,
    DueAt               DATETIME NULL,
    Notes               NVARCHAR(500) NULL,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt           DATETIME NULL,
    
    CONSTRAINT FK_Task_SubOrder FOREIGN KEY (SubOrderId) 
        REFERENCES SubOrder(Id) ON DELETE CASCADE,
    CONSTRAINT FK_Task_Worker FOREIGN KEY (WorkerId) 
        REFERENCES Worker(Id) ON DELETE NO ACTION,
    CONSTRAINT CK_Task_Type CHECK (TaskType IN ('Pick', 'Pack', 'Deliver', 'Return', 'Inspect')),
    CONSTRAINT CK_Task_Status CHECK (
        Status IN ('Pending', 'Assigned', 'InProgress', 'Completed', 'Cancelled', 'OnHold')
    )
);

CREATE NONCLUSTERED INDEX IX_Task_SubOrderId ON Task(SubOrderId);
CREATE NONCLUSTERED INDEX IX_Task_WorkerId ON Task(WorkerId);
CREATE NONCLUSTERED INDEX IX_Task_TaskType ON Task(TaskType);
CREATE NONCLUSTERED INDEX IX_Task_Status ON Task(Status);
CREATE NONCLUSTERED INDEX IX_Task_Priority ON Task(Priority);


-- ============================================================================
-- MODULE 7: CUSTOMER SUPPORT
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Ticket - Customer support tickets
-- ----------------------------------------------------------------------------
CREATE TABLE Ticket (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    TicketNumber        NVARCHAR(20) NOT NULL,        -- TKT-20260103-0001
    CustomerId          NVARCHAR(450) NOT NULL,       -- AspNetUsers.Id
    OrderId             INT NULL,                     -- Related order (optional)
    Category            NVARCHAR(50) NOT NULL,        -- Order, Shipping, Product, Other
    Subject             NVARCHAR(200) NOT NULL,
    Priority            NVARCHAR(20) NOT NULL DEFAULT 'Normal',
    Status              NVARCHAR(20) NOT NULL DEFAULT 'Open',
    AssignedTo          NVARCHAR(450) NULL,           -- Support agent (AspNetUsers.Id)
    ResolvedAt          DATETIME NULL,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt           DATETIME NULL,
    
    CONSTRAINT UQ_Ticket_Number UNIQUE (TicketNumber),
    CONSTRAINT FK_Ticket_Order FOREIGN KEY (OrderId) 
        REFERENCES [Order](Id) ON DELETE NO ACTION,
    CONSTRAINT CK_Ticket_Priority CHECK (Priority IN ('Low', 'Normal', 'High', 'Urgent')),
    CONSTRAINT CK_Ticket_Status CHECK (
        Status IN ('Open', 'InProgress', 'AwaitingCustomer', 'Resolved', 'Closed')
    )
);

CREATE NONCLUSTERED INDEX IX_Ticket_CustomerId ON Ticket(CustomerId);
CREATE NONCLUSTERED INDEX IX_Ticket_OrderId ON Ticket(OrderId);
CREATE NONCLUSTERED INDEX IX_Ticket_Status ON Ticket(Status);
CREATE NONCLUSTERED INDEX IX_Ticket_AssignedTo ON Ticket(AssignedTo);

-- ----------------------------------------------------------------------------
-- TicketMessage - Conversation thread on a ticket
-- ----------------------------------------------------------------------------
CREATE TABLE TicketMessage (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    TicketId            INT NOT NULL,
    SenderId            NVARCHAR(450) NOT NULL,       -- AspNetUsers.Id
    Message             NVARCHAR(MAX) NOT NULL,
    IsInternal          BIT NOT NULL DEFAULT 0,       -- Internal notes not visible to customer
    AttachmentUrl       NVARCHAR(500) NULL,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_TicketMessage_Ticket FOREIGN KEY (TicketId) 
        REFERENCES Ticket(Id) ON DELETE CASCADE
);

CREATE NONCLUSTERED INDEX IX_TicketMessage_TicketId ON TicketMessage(TicketId);
CREATE NONCLUSTERED INDEX IX_TicketMessage_SenderId ON TicketMessage(SenderId);


-- ============================================================================
-- MODULE 8: SYSTEM & AUDIT
-- ============================================================================

-- ----------------------------------------------------------------------------
-- AuditLog - Comprehensive audit trail
-- ----------------------------------------------------------------------------
CREATE TABLE AuditLog (
    Id                  BIGINT IDENTITY(1,1) PRIMARY KEY,  -- BIGINT for high volume
    UserId              NVARCHAR(450) NULL,           -- AspNetUsers.Id (NULL for system)
    Action              NVARCHAR(50) NOT NULL,        -- Create, Update, Delete, Login, etc.
    EntityType          NVARCHAR(100) NOT NULL,       -- Product, Order, etc.
    EntityId            NVARCHAR(50) NULL,            -- Primary key of affected entity
    OldValues           NVARCHAR(MAX) NULL,           -- JSON of previous state
    NewValues           NVARCHAR(MAX) NULL,           -- JSON of new state
    IpAddress           NVARCHAR(45) NULL,            -- IPv6 compatible
    UserAgent           NVARCHAR(500) NULL,
    Timestamp           DATETIME NOT NULL DEFAULT GETDATE()
);

-- Partition-friendly design - consider partitioning by Timestamp in production
CREATE NONCLUSTERED INDEX IX_AuditLog_UserId ON AuditLog(UserId);
CREATE NONCLUSTERED INDEX IX_AuditLog_EntityType ON AuditLog(EntityType);
CREATE NONCLUSTERED INDEX IX_AuditLog_EntityId ON AuditLog(EntityId);
CREATE NONCLUSTERED INDEX IX_AuditLog_Timestamp ON AuditLog(Timestamp);
CREATE NONCLUSTERED INDEX IX_AuditLog_Action ON AuditLog(Action);

-- ----------------------------------------------------------------------------
-- FeatureFlag - Dynamic feature toggles
-- ----------------------------------------------------------------------------
CREATE TABLE FeatureFlag (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    FeatureKey          NVARCHAR(100) NOT NULL,       -- EnableNewCheckout
    DisplayName         NVARCHAR(100) NOT NULL,
    Description         NVARCHAR(500) NULL,
    IsEnabled           BIT NOT NULL DEFAULT 0,
    EnabledForRoles     NVARCHAR(500) NULL,           -- Comma-separated role names
    EnabledForUsers     NVARCHAR(MAX) NULL,           -- Comma-separated user IDs
    ValidFrom           DATETIME NULL,
    ValidTo             DATETIME NULL,
    CreatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedAt           DATETIME NULL,
    
    CONSTRAINT UQ_FeatureFlag_Key UNIQUE (FeatureKey)
);

-- ----------------------------------------------------------------------------
-- SystemSetting - Key-value configuration
-- ----------------------------------------------------------------------------
CREATE TABLE SystemSetting (
    Id                  INT IDENTITY(1,1) PRIMARY KEY,
    SettingKey          NVARCHAR(100) NOT NULL,
    SettingValue        NVARCHAR(MAX) NOT NULL,
    DataType            NVARCHAR(20) NOT NULL DEFAULT 'String',  -- String, Int, Bool, JSON
    Description         NVARCHAR(500) NULL,
    IsEncrypted         BIT NOT NULL DEFAULT 0,
    UpdatedAt           DATETIME NOT NULL DEFAULT GETDATE(),
    UpdatedBy           NVARCHAR(450) NULL,
    
    CONSTRAINT UQ_SystemSetting_Key UNIQUE (SettingKey),
    CONSTRAINT CK_SystemSetting_DataType CHECK (
        DataType IN ('String', 'Int', 'Bool', 'Decimal', 'JSON')
    )
);


-- ============================================================================
-- SEED DATA (Optional - Remove in production migration)
-- ============================================================================

-- Insert default shipping zones
INSERT INTO ShippingZone (Name, Description, Countries, BaseRate, PerKgRate, EstimatedDays)
VALUES 
    ('Domestic', 'Domestic shipping within country', 'US', 5.99, 0.50, 5),
    ('International - Standard', 'Standard international shipping', NULL, 19.99, 2.00, 14),
    ('International - Express', 'Express international shipping', NULL, 39.99, 3.50, 5);

-- Insert default carriers
INSERT INTO Carrier (Name, Code, TrackingUrlTemplate)
VALUES
    ('FedEx', 'FEDEX', 'https://www.fedex.com/fedextrack/?trknbr={tracking}'),
    ('UPS', 'UPS', 'https://www.ups.com/track?tracknum={tracking}'),
    ('DHL', 'DHL', 'https://www.dhl.com/en/express/tracking.html?AWB={tracking}'),
    ('Local Delivery', 'LOCAL', NULL);

-- Insert default system settings
INSERT INTO SystemSetting (SettingKey, SettingValue, DataType, Description)
VALUES
    ('OrderNumberPrefix', 'ORD', 'String', 'Prefix for order numbers'),
    ('TicketNumberPrefix', 'TKT', 'String', 'Prefix for ticket numbers'),
    ('DefaultCurrency', 'USD', 'String', 'Default currency code'),
    ('LowStockThreshold', '10', 'Int', 'Default low stock alert threshold'),
    ('MaxOrderItems', '50', 'Int', 'Maximum items per order');

PRINT 'Database schema created successfully.';
GO
