namespace ECommerce.Application.Common.Validation;

/// <summary>
/// Centralized validation message keys for translation.
/// These keys are used by the frontend (ngx-translate) to display localized messages.
/// </summary>
public static class ValidationMessages
{
    // Common
    public const string Required = "validation.required";
    public const string MaxLength = "validation.maxLength";
    public const string MinLength = "validation.minLength";
    public const string InvalidFormat = "validation.invalidFormat";
    public const string MustBePositive = "validation.mustBePositive";
    public const string MustBeGreaterThanZero = "validation.mustBeGreaterThanZero";
    public const string InvalidEmail = "validation.invalidEmail";
    public const string InvalidUrl = "validation.invalidUrl";
    public const string InvalidSlug = "validation.invalidSlug";
    public const string AlreadyExists = "validation.alreadyExists";
    public const string NotFound = "validation.notFound";
    public const string InvalidRange = "validation.invalidRange";
    
    // Brand specific
    public const string BrandNameRequired = "validation.brand.nameRequired";
    public const string BrandSlugRequired = "validation.brand.slugRequired";
    public const string BrandSlugExists = "validation.brand.slugExists";
    public const string BrandNameMaxLength = "validation.brand.nameMaxLength";
    public const string BrandSlugMaxLength = "validation.brand.slugMaxLength";
    public const string BrandDescriptionMaxLength = "validation.brand.descriptionMaxLength";
    public const string BrandIdRequired = "validation.brand.idRequired";
    public const string BrandNotFound = "validation.brand.notFound";
    
    // Category specific
    public const string CategoryNameRequired = "validation.category.nameRequired";
    public const string CategorySlugRequired = "validation.category.slugRequired";
    public const string CategorySlugExists = "validation.category.slugExists";
    
    // Product specific
    public const string ProductNameRequired = "validation.product.nameRequired";
    public const string ProductSkuRequired = "validation.product.skuRequired";
    public const string ProductSkuExists = "validation.product.skuExists";
    public const string ProductPriceMustBePositive = "validation.product.priceMustBePositive";
    
    // Translation specific
    public const string LanguageCodeRequired = "validation.translation.languageCodeRequired";
    public const string LanguageCodeInvalid = "validation.translation.languageCodeInvalid";
    public const string TranslationNameRequired = "validation.translation.nameRequired";
}
