using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EightAcademy.Models;

public class Enquiry
{
    [Key]
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public string? PhoneNo { get; set; }

    public string? Address { get; set; }

    public int? IsDeleted { get; set; }

    public DateTime? CreatedAt { get; set; }
}
