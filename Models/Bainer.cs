using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EightAcademy.Models;

public class Bainer
{
    [Key]
    public int Id { get; set; }



    public string? Name { get; set; }

    public string? Description { get; set; }

    public int? IsDeleted { get; set; }

    public int? IsActive { get; set; }

    public DateTime? CreatedAt { get; set; }

    public string? BainerImgPath { get; set; }

    public string? ImgType { get; set; }
}
