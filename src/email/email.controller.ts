import {Controller, Get, Query} from '@nestjs/common';
import {EmailService} from "./email.service";
import {MailerService} from "@nestjs-modules/mailer";

@Controller('email')
export class EmailController {
    constructor(private emailService:MailerService) {}
    @Get()
    async plaintTextEmail(@Query('toEmail') toEmail){
        await this.emailService.sendMail({
            to:toEmail,
            from:"mmd1996.m@outlook.fr",
            subject:"Mon email de text",
            html:"<div>" +
                    "<table style='border: 2px solid black'>" +
                        "<tr style='border: 2px solid black'>" +
                            "<th>Nom</th><th>Prenom</th><th>Age</th>"+
                        "</tr>"+
                        "<tr style='border: 2px solid black'>" +
                            "<td>Diallo</td><td>Malick</td><td>25</td>"+
                        "</tr>"+
                    "</table>"+
                "</div>"

        });
        return "Succèss";
    }
}
