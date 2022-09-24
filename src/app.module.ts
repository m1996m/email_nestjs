import {Global, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import {ConfigModule} from "@nestjs/config";
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(
        {
          type: 'mysql',
          username: 'root',
          password: 'rootroot',
          database: 'championnat',
          logging:true,
          entities: [],
          synchronize: true,
          autoLoadEntities:true,
        }
    ),
    MailerModule.forRoot({
        transport:{
            host:'smtp-relay.sendinblue.com',
            auth:{
                user:'mmd1996.m@gmail.com',
                pass:'F4kjOHZbI1d6CVc7'
            }
        }
    }),

  ],
  controllers: [AppController, EmailController],
  providers: [AppService, EmailService],
})
export class AppModule {}
