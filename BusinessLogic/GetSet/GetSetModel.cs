using EightAcademy.Models;
using System.Net;
using System.Net.Mail;

namespace EightAcademNew.BusinessLogic.GetSet
{
    public class GetSetModel
    {
        public Enquiry GetSetEnquiry(Enquiry enquiry)
        {
            enquiry.IsDeleted = 0;
            enquiry.CreatedAt = DateTime.Now;
            return enquiry;
        }
        public Bainer GetSetbainer(Bainer bainer)
        {
            return new Bainer()
            {
                Name = bainer.Name,
                Description = bainer.Description,
                BainerImgPath = bainer.BainerImgPath,
                ImgType = bainer.ImgType,
                IsDeleted = 0,
                IsActive = 0,
                CreatedAt = DateTime.Now,
            };
        }



        public bool SendMailBySmtp(string from, string subject, string[] cclist, string body, IFormFile Attachment)
        {
            using (MailMessage mailMessage = new MailMessage(from, "dev.mdkalim85@gmail.com"))
            {
                mailMessage.Subject = subject;
                mailMessage.Body = body;
                //if (cclist.Length > 0)
                //{
                //    mailMessage.CC.Add(cclist[0]);
                //}
                //if (Attachment.Length > 0)
                //{
                //    mailMessage.Attachments.Add(new Attachment(Attachment.OpenReadStream(), Attachment.FileName));
                //}
                mailMessage.IsBodyHtml = false;
                using (SmtpClient smtp = new SmtpClient())
                {
                    smtp.Host = "smtp.gmail.com";
                    smtp.EnableSsl = true;
                    NetworkCredential NetworkCred = new NetworkCredential("dev.mdkalim85@gmail.com", "Microsoft1@");
                    smtp.UseDefaultCredentials = false;
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

                    smtp.Credentials = NetworkCred;
                    smtp.Port = 587;
                    try
                    {
                        smtp.Send(mailMessage);

                    }
                    catch (Exception ex)
                    {

                        throw ex;
                    }
                    //ViewBag.Message = "Email sent.";
                }

            }
            return true;
        }
    }
    
}
