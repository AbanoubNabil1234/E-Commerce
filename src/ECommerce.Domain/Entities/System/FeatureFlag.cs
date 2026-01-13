using ECommerce.Domain.Common;
using ECommerce.Domain.Entities.Localization;

namespace ECommerce.Domain.Entities.System;

/// <summary>
/// Dynamic feature toggle for enabling/disabling features.
/// </summary>
public class FeatureFlag : BaseEntity
{
    public string FeatureKey { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool IsEnabled { get; set; }
    public string? EnabledForRoles { get; set; } // Comma-separated
    public string? EnabledForUsers { get; set; } // Comma-separated user IDs
    public DateTime? ValidFrom { get; set; }
    public DateTime? ValidTo { get; set; }

    // Navigation
    public virtual ICollection<FeatureFlagTranslation> Translations { get; set; } = new List<FeatureFlagTranslation>();
}
