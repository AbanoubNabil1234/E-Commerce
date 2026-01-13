-- ============================================================================
-- E-COMMERCE & LOGISTICS PLATFORM - MULTILINGUAL SUPPORT
-- Translation Tables Extension
-- ============================================================================
-- 
-- DESIGN DECISIONS:
-- ================
-- 1. Translation Tables Pattern:
--    - Separates translatable content from main entity tables
--    - One record per language per parent entity
--    - Scalable to any number of languages
--
-- 2. Lookup + Translation Pattern:
--    - For ENUM-like values (statuses, types)
--    - Lookup table stores the code/key
--    - Translation table stores display names per language
--
-- 3. Language Codes:
--    - Using ISO 639-1 codes ('en', 'ar', etc.)
--    - NVARCHAR(5) allows for locale variants (e.g., 'en-US')
--
-- 4. Constraints:
--    - UNIQUE on (ParentId, LanguageCode) ensures one translation per language
--    - FK with NO ACTION prevents accidental cascade deletes
--
-- ============================================================================


-- ============================================================================
-- CORE: Language Table
-- ============================================================================

CREATE TABLE [Language] (
    Code            NVARCHAR(5) PRIMARY KEY,          -- 'en', 'ar', 'fr'
    Name            NVARCHAR(50) NOT NULL,            -- English name
    NativeName      NVARCHAR(50) NOT NULL,            -- Native name (e.g., العربية)
    IsRTL           BIT NOT NULL DEFAULT 0,           -- Right-to-Left
    IsDefault       BIT NOT NULL DEFAULT 0,           -- Default language
    IsActive        BIT NOT NULL DEFAULT 1,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE()
);

-- Seed default languages
INSERT INTO [Language] (Code, Name, NativeName, IsRTL, IsDefault, IsActive, DisplayOrder)
VALUES 
    ('en', 'English', 'English', 0, 1, 1, 1),
    ('ar', 'Arabic', 'العربية', 1, 0, 1, 2);


-- ============================================================================
-- MODULE 1: CATALOG TRANSLATIONS
-- ============================================================================

-- ----------------------------------------------------------------------------
-- BrandTranslation
-- ----------------------------------------------------------------------------
CREATE TABLE BrandTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    BrandId         INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    Name            NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(500) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_BrandTranslation_Brand FOREIGN KEY (BrandId) 
        REFERENCES Brand(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_BrandTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_BrandTranslation_BrandLang UNIQUE (BrandId, LanguageCode)
);

CREATE NONCLUSTERED INDEX IX_BrandTranslation_BrandId ON BrandTranslation(BrandId);
CREATE NONCLUSTERED INDEX IX_BrandTranslation_LanguageCode ON BrandTranslation(LanguageCode);

-- ----------------------------------------------------------------------------
-- CategoryTranslation
-- ----------------------------------------------------------------------------
CREATE TABLE CategoryTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    CategoryId      INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    Name            NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(500) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_CategoryTranslation_Category FOREIGN KEY (CategoryId) 
        REFERENCES Category(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_CategoryTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_CategoryTranslation_CategoryLang UNIQUE (CategoryId, LanguageCode)
);

CREATE NONCLUSTERED INDEX IX_CategoryTranslation_CategoryId ON CategoryTranslation(CategoryId);
CREATE NONCLUSTERED INDEX IX_CategoryTranslation_LanguageCode ON CategoryTranslation(LanguageCode);

-- ----------------------------------------------------------------------------
-- ProductTranslation
-- ----------------------------------------------------------------------------
CREATE TABLE ProductTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    ProductId       INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    Name            NVARCHAR(200) NOT NULL,
    ShortDescription NVARCHAR(500) NULL,
    Description     NVARCHAR(MAX) NULL,
    MetaTitle       NVARCHAR(100) NULL,              -- SEO
    MetaDescription NVARCHAR(200) NULL,              -- SEO
    MetaKeywords    NVARCHAR(200) NULL,              -- SEO
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_ProductTranslation_Product FOREIGN KEY (ProductId) 
        REFERENCES Product(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_ProductTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_ProductTranslation_ProductLang UNIQUE (ProductId, LanguageCode)
);

CREATE NONCLUSTERED INDEX IX_ProductTranslation_ProductId ON ProductTranslation(ProductId);
CREATE NONCLUSTERED INDEX IX_ProductTranslation_LanguageCode ON ProductTranslation(LanguageCode);


-- ============================================================================
-- MODULE 2: WAREHOUSE TRANSLATIONS
-- ============================================================================

-- ----------------------------------------------------------------------------
-- WarehouseTranslation
-- ----------------------------------------------------------------------------
CREATE TABLE WarehouseTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    WarehouseId     INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    Name            NVARCHAR(100) NOT NULL,
    Address         NVARCHAR(500) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_WarehouseTranslation_Warehouse FOREIGN KEY (WarehouseId) 
        REFERENCES Warehouse(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_WarehouseTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_WarehouseTranslation_WarehouseLang UNIQUE (WarehouseId, LanguageCode)
);

CREATE NONCLUSTERED INDEX IX_WarehouseTranslation_WarehouseId ON WarehouseTranslation(WarehouseId);
CREATE NONCLUSTERED INDEX IX_WarehouseTranslation_LanguageCode ON WarehouseTranslation(LanguageCode);

-- ----------------------------------------------------------------------------
-- ZoneTranslation
-- ----------------------------------------------------------------------------
CREATE TABLE ZoneTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    ZoneId          INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    Name            NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_ZoneTranslation_Zone FOREIGN KEY (ZoneId) 
        REFERENCES Zone(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_ZoneTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_ZoneTranslation_ZoneLang UNIQUE (ZoneId, LanguageCode)
);

CREATE NONCLUSTERED INDEX IX_ZoneTranslation_ZoneId ON ZoneTranslation(ZoneId);
CREATE NONCLUSTERED INDEX IX_ZoneTranslation_LanguageCode ON ZoneTranslation(LanguageCode);


-- ============================================================================
-- MODULE 3: SHIPPING TRANSLATIONS
-- ============================================================================

-- ----------------------------------------------------------------------------
-- ShippingZoneTranslation
-- ----------------------------------------------------------------------------
CREATE TABLE ShippingZoneTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    ShippingZoneId  INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    Name            NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_ShippingZoneTranslation_ShippingZone FOREIGN KEY (ShippingZoneId) 
        REFERENCES ShippingZone(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_ShippingZoneTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_ShippingZoneTranslation_ShippingZoneLang UNIQUE (ShippingZoneId, LanguageCode)
);

CREATE NONCLUSTERED INDEX IX_ShippingZoneTranslation_ShippingZoneId ON ShippingZoneTranslation(ShippingZoneId);
CREATE NONCLUSTERED INDEX IX_ShippingZoneTranslation_LanguageCode ON ShippingZoneTranslation(LanguageCode);

-- ----------------------------------------------------------------------------
-- CarrierTranslation
-- ----------------------------------------------------------------------------
CREATE TABLE CarrierTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    CarrierId       INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    Name            NVARCHAR(100) NOT NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_CarrierTranslation_Carrier FOREIGN KEY (CarrierId) 
        REFERENCES Carrier(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_CarrierTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_CarrierTranslation_CarrierLang UNIQUE (CarrierId, LanguageCode)
);

CREATE NONCLUSTERED INDEX IX_CarrierTranslation_CarrierId ON CarrierTranslation(CarrierId);
CREATE NONCLUSTERED INDEX IX_CarrierTranslation_LanguageCode ON CarrierTranslation(LanguageCode);


-- ============================================================================
-- MODULE 4: LOOKUP TABLES + TRANSLATIONS (Status/Type Enums)
-- ============================================================================

-- ----------------------------------------------------------------------------
-- OrderStatusLookup + Translation
-- ----------------------------------------------------------------------------
CREATE TABLE OrderStatusLookup (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Code            NVARCHAR(50) NOT NULL,            -- 'Pending', 'Confirmed', etc.
    DisplayOrder    INT NOT NULL DEFAULT 0,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_OrderStatusLookup_Code UNIQUE (Code)
);

CREATE TABLE OrderStatusTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    OrderStatusId   INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    DisplayName     NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_OrderStatusTranslation_OrderStatus FOREIGN KEY (OrderStatusId) 
        REFERENCES OrderStatusLookup(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_OrderStatusTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_OrderStatusTranslation UNIQUE (OrderStatusId, LanguageCode)
);

-- Seed OrderStatus
INSERT INTO OrderStatusLookup (Code, DisplayOrder) VALUES 
    ('Pending', 1), ('Confirmed', 2), ('Processing', 3), ('PartiallyShipped', 4),
    ('Shipped', 5), ('Delivered', 6), ('Cancelled', 7), ('Refunded', 8);

-- ----------------------------------------------------------------------------
-- PaymentStatusLookup + Translation
-- ----------------------------------------------------------------------------
CREATE TABLE PaymentStatusLookup (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Code            NVARCHAR(50) NOT NULL,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_PaymentStatusLookup_Code UNIQUE (Code)
);

CREATE TABLE PaymentStatusTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    PaymentStatusId INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    DisplayName     NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_PaymentStatusTranslation_PaymentStatus FOREIGN KEY (PaymentStatusId) 
        REFERENCES PaymentStatusLookup(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_PaymentStatusTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_PaymentStatusTranslation UNIQUE (PaymentStatusId, LanguageCode)
);

INSERT INTO PaymentStatusLookup (Code, DisplayOrder) VALUES 
    ('Pending', 1), ('Paid', 2), ('PartiallyPaid', 3), ('Refunded', 4), ('Failed', 5);

-- ----------------------------------------------------------------------------
-- ShipmentStatusLookup + Translation
-- ----------------------------------------------------------------------------
CREATE TABLE ShipmentStatusLookup (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Code            NVARCHAR(50) NOT NULL,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_ShipmentStatusLookup_Code UNIQUE (Code)
);

CREATE TABLE ShipmentStatusTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    ShipmentStatusId INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    DisplayName     NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_ShipmentStatusTranslation_ShipmentStatus FOREIGN KEY (ShipmentStatusId) 
        REFERENCES ShipmentStatusLookup(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_ShipmentStatusTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_ShipmentStatusTranslation UNIQUE (ShipmentStatusId, LanguageCode)
);

INSERT INTO ShipmentStatusLookup (Code, DisplayOrder) VALUES 
    ('Pending', 1), ('LabelCreated', 2), ('PickedUp', 3), ('InTransit', 4),
    ('OutForDelivery', 5), ('Delivered', 6), ('Failed', 7), ('Returned', 8);

-- ----------------------------------------------------------------------------
-- TaskTypeLookup + Translation
-- ----------------------------------------------------------------------------
CREATE TABLE TaskTypeLookup (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Code            NVARCHAR(50) NOT NULL,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_TaskTypeLookup_Code UNIQUE (Code)
);

CREATE TABLE TaskTypeTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    TaskTypeId      INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    DisplayName     NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_TaskTypeTranslation_TaskType FOREIGN KEY (TaskTypeId) 
        REFERENCES TaskTypeLookup(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_TaskTypeTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_TaskTypeTranslation UNIQUE (TaskTypeId, LanguageCode)
);

INSERT INTO TaskTypeLookup (Code, DisplayOrder) VALUES 
    ('Pick', 1), ('Pack', 2), ('Deliver', 3), ('Return', 4), ('Inspect', 5);

-- ----------------------------------------------------------------------------
-- TaskStatusLookup + Translation
-- ----------------------------------------------------------------------------
CREATE TABLE TaskStatusLookup (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Code            NVARCHAR(50) NOT NULL,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_TaskStatusLookup_Code UNIQUE (Code)
);

CREATE TABLE TaskStatusTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    TaskStatusId    INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    DisplayName     NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_TaskStatusTranslation_TaskStatus FOREIGN KEY (TaskStatusId) 
        REFERENCES TaskStatusLookup(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_TaskStatusTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_TaskStatusTranslation UNIQUE (TaskStatusId, LanguageCode)
);

INSERT INTO TaskStatusLookup (Code, DisplayOrder) VALUES 
    ('Pending', 1), ('Assigned', 2), ('InProgress', 3), ('Completed', 4), ('Cancelled', 5), ('OnHold', 6);

-- ----------------------------------------------------------------------------
-- TicketPriorityLookup + Translation
-- ----------------------------------------------------------------------------
CREATE TABLE TicketPriorityLookup (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Code            NVARCHAR(50) NOT NULL,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_TicketPriorityLookup_Code UNIQUE (Code)
);

CREATE TABLE TicketPriorityTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    TicketPriorityId INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    DisplayName     NVARCHAR(100) NOT NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_TicketPriorityTranslation_TicketPriority FOREIGN KEY (TicketPriorityId) 
        REFERENCES TicketPriorityLookup(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_TicketPriorityTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_TicketPriorityTranslation UNIQUE (TicketPriorityId, LanguageCode)
);

INSERT INTO TicketPriorityLookup (Code, DisplayOrder) VALUES 
    ('Low', 1), ('Normal', 2), ('High', 3), ('Urgent', 4);

-- ----------------------------------------------------------------------------
-- TicketStatusLookup + Translation
-- ----------------------------------------------------------------------------
CREATE TABLE TicketStatusLookup (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Code            NVARCHAR(50) NOT NULL,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_TicketStatusLookup_Code UNIQUE (Code)
);

CREATE TABLE TicketStatusTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    TicketStatusId  INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    DisplayName     NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_TicketStatusTranslation_TicketStatus FOREIGN KEY (TicketStatusId) 
        REFERENCES TicketStatusLookup(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_TicketStatusTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_TicketStatusTranslation UNIQUE (TicketStatusId, LanguageCode)
);

INSERT INTO TicketStatusLookup (Code, DisplayOrder) VALUES 
    ('Open', 1), ('InProgress', 2), ('AwaitingCustomer', 3), ('Resolved', 4), ('Closed', 5);

-- ----------------------------------------------------------------------------
-- TicketCategoryLookup + Translation
-- ----------------------------------------------------------------------------
CREATE TABLE TicketCategoryLookup (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    Code            NVARCHAR(50) NOT NULL,
    DisplayOrder    INT NOT NULL DEFAULT 0,
    IsActive        BIT NOT NULL DEFAULT 1,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT UQ_TicketCategoryLookup_Code UNIQUE (Code)
);

CREATE TABLE TicketCategoryTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    TicketCategoryId INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    DisplayName     NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(255) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_TicketCategoryTranslation_TicketCategory FOREIGN KEY (TicketCategoryId) 
        REFERENCES TicketCategoryLookup(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_TicketCategoryTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_TicketCategoryTranslation UNIQUE (TicketCategoryId, LanguageCode)
);

INSERT INTO TicketCategoryLookup (Code, DisplayOrder) VALUES 
    ('Order', 1), ('Shipping', 2), ('Product', 3), ('Payment', 4), ('Account', 5), ('Other', 6);


-- ============================================================================
-- MODULE 5: SYSTEM TRANSLATIONS
-- ============================================================================

-- ----------------------------------------------------------------------------
-- FeatureFlagTranslation
-- ----------------------------------------------------------------------------
CREATE TABLE FeatureFlagTranslation (
    Id              INT IDENTITY(1,1) PRIMARY KEY,
    FeatureFlagId   INT NOT NULL,
    LanguageCode    NVARCHAR(5) NOT NULL,
    DisplayName     NVARCHAR(100) NOT NULL,
    Description     NVARCHAR(500) NULL,
    CreatedAt       DATETIME NOT NULL DEFAULT GETDATE(),
    
    CONSTRAINT FK_FeatureFlagTranslation_FeatureFlag FOREIGN KEY (FeatureFlagId) 
        REFERENCES FeatureFlag(Id) ON DELETE NO ACTION,
    CONSTRAINT FK_FeatureFlagTranslation_Language FOREIGN KEY (LanguageCode) 
        REFERENCES [Language](Code) ON DELETE NO ACTION,
    CONSTRAINT UQ_FeatureFlagTranslation UNIQUE (FeatureFlagId, LanguageCode)
);

CREATE NONCLUSTERED INDEX IX_FeatureFlagTranslation_FeatureFlagId ON FeatureFlagTranslation(FeatureFlagId);
CREATE NONCLUSTERED INDEX IX_FeatureFlagTranslation_LanguageCode ON FeatureFlagTranslation(LanguageCode);


PRINT 'Translation tables created successfully.';
GO
