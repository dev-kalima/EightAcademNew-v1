using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EightAcademy.Models;

public partial class Student
{
    [Key]
    public int Id { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public string? PhoneNo { get; set; }

    public string? Address { get; set; }

    public int? IsDeleted { get; set; }

    public int? IsActive { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? LastModiFyDate { get; set; }

    public int? CourseId { get; set; }
}
