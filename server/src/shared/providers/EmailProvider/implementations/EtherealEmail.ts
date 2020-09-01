import nodemailer, { Transporter } from 'nodemailer';
import { injectable, inject } from 'tsyringe';

import IEtherealEmail from '../models/IEtherealEmail';
import ISendEmail from '../dtos/ISendEmailDTO';
import IHandlebarsTemplate from '../EmailTemplateProvider/models/IHandlebarsTemplate';

@injectable()
class EtherealEmail implements IEtherealEmail {
  private client: Transporter;

  constructor(
    @inject('HandlebarsTemplate')
    private handlebarsTemplate: IHandlebarsTemplate
  ) {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
      this.client = transporter;
    });
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendEmail): Promise<void> {
    const template = await this.handlebarsTemplate.parse(templateData);

    const message = await this.client.sendMail({
      from: {
        name: from?.name || 'Equipe Kripton Sports',
        address: from?.email || 'kriptonsports@email.com',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: template,
    });

    console.log('Mensagem enviada: ', message.messageId);
    console.log('Preview URL: ', nodemailer.getTestMessageUrl(message));
  }
}

export default EtherealEmail;
