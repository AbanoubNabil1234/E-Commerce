-- =============================================
-- Seed Data: Brands with EN/AR Translations
-- For E-Commerce Platform
-- =============================================

-- Ensure Languages exist
IF NOT EXISTS (SELECT 1 FROM Languages WHERE Code = 'en')
BEGIN
    INSERT INTO Languages (Code, Name, NativeName, IsDefault, IsActive, IsRTL, CreatedAt)
    VALUES ('en', 'English', 'English', 1, 1, 0, GETUTCDATE());
END

IF NOT EXISTS (SELECT 1 FROM Languages WHERE Code = 'ar')
BEGIN
    INSERT INTO Languages (Code, Name, NativeName, IsDefault, IsActive, IsRTL, CreatedAt)
    VALUES ('ar', 'Arabic', 'العربية', 0, 1, 1, GETUTCDATE());
END

-- =============================================
-- Insert Brands
-- =============================================

-- Brand 1: Samsung
IF NOT EXISTS (SELECT 1 FROM Brands WHERE Slug = 'samsung')
BEGIN
    INSERT INTO Brands (Name, Slug, Description, LogoUrl, Website, IsActive, CreatedAt, UpdatedAt)
    VALUES (
        'Samsung',
        'samsung',
        'Global leader in consumer electronics and mobile technology.',
        '/assets/brands/samsung.png',
        'https://www.samsung.com',
        1,
        GETUTCDATE(),
        GETUTCDATE()
    );
END

-- Brand 2: Apple
IF NOT EXISTS (SELECT 1 FROM Brands WHERE Slug = 'apple')
BEGIN
    INSERT INTO Brands (Name, Slug, Description, LogoUrl, Website, IsActive, CreatedAt, UpdatedAt)
    VALUES (
        'Apple',
        'apple',
        'Innovative technology company known for iPhone, Mac, and iPad.',
        '/assets/brands/apple.png',
        'https://www.apple.com',
        1,
        GETUTCDATE(),
        GETUTCDATE()
    );
END

-- Brand 3: Huawei
IF NOT EXISTS (SELECT 1 FROM Brands WHERE Slug = 'huawei')
BEGIN
    INSERT INTO Brands (Name, Slug, Description, LogoUrl, Website, IsActive, CreatedAt, UpdatedAt)
    VALUES (
        'Huawei',
        'huawei',
        'Leading global provider of ICT infrastructure and smart devices.',
        '/assets/brands/huawei.png',
        'https://www.huawei.com',
        1,
        GETUTCDATE(),
        GETUTCDATE()
    );
END

-- =============================================
-- Insert Brand Translations (English)
-- =============================================

DECLARE @SamsungId INT = (SELECT Id FROM Brands WHERE Slug = 'samsung');
DECLARE @AppleId INT = (SELECT Id FROM Brands WHERE Slug = 'apple');
DECLARE @HuaweiId INT = (SELECT Id FROM Brands WHERE Slug = 'huawei');

-- Samsung - English
IF NOT EXISTS (SELECT 1 FROM BrandTranslations WHERE BrandId = @SamsungId AND LanguageCode = 'en')
BEGIN
    INSERT INTO BrandTranslations (BrandId, LanguageCode, Name, Description, Slug, CreatedAt)
    VALUES (
        @SamsungId,
        'en',
        'Samsung',
        'Global leader in consumer electronics, mobile phones, and home appliances. Trusted by millions worldwide.',
        'samsung',
        GETUTCDATE()
    );
END

-- Apple - English
IF NOT EXISTS (SELECT 1 FROM BrandTranslations WHERE BrandId = @AppleId AND LanguageCode = 'en')
BEGIN
    INSERT INTO BrandTranslations (BrandId, LanguageCode, Name, Description, Slug, CreatedAt)
    VALUES (
        @AppleId,
        'en',
        'Apple',
        'American multinational technology company. Creator of iPhone, iPad, Mac, and innovative software.',
        'apple',
        GETUTCDATE()
    );
END

-- Huawei - English
IF NOT EXISTS (SELECT 1 FROM BrandTranslations WHERE BrandId = @HuaweiId AND LanguageCode = 'en')
BEGIN
    INSERT INTO BrandTranslations (BrandId, LanguageCode, Name, Description, Slug, CreatedAt)
    VALUES (
        @HuaweiId,
        'en',
        'Huawei',
        'Chinese multinational technology corporation. Specializing in telecommunications and consumer electronics.',
        'huawei',
        GETUTCDATE()
    );
END

-- =============================================
-- Insert Brand Translations (Arabic)
-- =============================================

-- Samsung - Arabic
IF NOT EXISTS (SELECT 1 FROM BrandTranslations WHERE BrandId = @SamsungId AND LanguageCode = 'ar')
BEGIN
    INSERT INTO BrandTranslations (BrandId, LanguageCode, Name, Description, Slug, CreatedAt)
    VALUES (
        @SamsungId,
        'ar',
        'سامسونج',
        'الشركة الرائدة عالمياً في مجال الإلكترونيات الاستهلاكية والهواتف المحمولة والأجهزة المنزلية. موثوقة من قبل الملايين حول العالم.',
        'samsung-ar',
        GETUTCDATE()
    );
END

-- Apple - Arabic
IF NOT EXISTS (SELECT 1 FROM BrandTranslations WHERE BrandId = @AppleId AND LanguageCode = 'ar')
BEGIN
    INSERT INTO BrandTranslations (BrandId, LanguageCode, Name, Description, Slug, CreatedAt)
    VALUES (
        @AppleId,
        'ar',
        'آبل',
        'شركة تكنولوجيا أمريكية متعددة الجنسيات. مبتكرة آيفون وآيباد وماك والبرمجيات المبتكرة.',
        'apple-ar',
        GETUTCDATE()
    );
END

-- Huawei - Arabic
IF NOT EXISTS (SELECT 1 FROM BrandTranslations WHERE BrandId = @HuaweiId AND LanguageCode = 'ar')
BEGIN
    INSERT INTO BrandTranslations (BrandId, LanguageCode, Name, Description, Slug, CreatedAt)
    VALUES (
        @HuaweiId,
        'ar',
        'هواوي',
        'شركة تكنولوجيا صينية متعددة الجنسيات. متخصصة في الاتصالات والإلكترونيات الاستهلاكية.',
        'huawei-ar',
        GETUTCDATE()
    );
END

-- =============================================
-- Verification Query
-- =============================================
SELECT 
    b.Id,
    b.Name AS DefaultName,
    b.Slug,
    b.IsActive,
    bt.LanguageCode,
    bt.Name AS TranslatedName,
    bt.Description AS TranslatedDescription
FROM Brands b
LEFT JOIN BrandTranslations bt ON b.Id = bt.BrandId
ORDER BY b.Id, bt.LanguageCode;
