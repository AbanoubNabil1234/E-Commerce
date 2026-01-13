using ECommerce.Domain.Common;

namespace ECommerce.Domain.Entities.System;

/// <summary>
/// Key-value system configuration.
/// </summary>
public class SystemSetting : BaseEntity
{
    public string SettingKey { get; set; } = string.Empty;
    public string SettingValue { get; set; } = string.Empty;
    public string DataType { get; set; } = "String"; // String, Int, Bool, Decimal, JSON
    public string? Description { get; set; }
    public bool IsEncrypted { get; set; }
    public string? UpdatedBy { get; set; }
}
