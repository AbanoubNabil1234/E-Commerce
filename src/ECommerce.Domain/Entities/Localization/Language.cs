using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities.Localization;

/// <summary>
/// Represents a supported language in the system.
/// </summary>
public class Language
{
    public string Code { get; set; } = string.Empty;  // 'en', 'ar'
    public string Name { get; set; } = string.Empty;  // English name
    public string NativeName { get; set; } = string.Empty;  // Native name
    public bool IsRTL { get; set; }
    public bool IsDefault { get; set; }
    public bool IsActive { get; set; } = true;
    public int DisplayOrder { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
