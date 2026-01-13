using ECommerce.Domain.Entities.System;

namespace ECommerce.Domain.Entities.Localization;

/// <summary>
/// Translation for FeatureFlag entity.
/// </summary>
public class FeatureFlagTranslation
{
    public int Id { get; set; }
    public int FeatureFlagId { get; set; }
    public string LanguageCode { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Navigation
    public FeatureFlag FeatureFlag { get; set; } = null!;
    public Language Language { get; set; } = null!;
}
