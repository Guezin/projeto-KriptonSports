import { injectable, inject } from 'tsyringe';
import { resolve } from 'path';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokenRepository from '../repositories/IUserTokenRepository';
import IEtherealMail from '@shared/providers/EmailProvider/models/IEtherealEmail';

interface IRequest {
  email: string;
}

@injectable()
class ForgotPasswordService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokenRepository')
    private userTokenRepository: IUserTokenRepository,

    @inject('EtherealEmail')
    private etherealEmail: IEtherealMail
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Sorry, user not found!', 401);
    }

    const templateForgotPassword = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'shared',
      'providers',
      'EmailProvider',
      'views',
      'forgotPassword.hbs'
    );

    try {
      const token = await this.userTokenRepository.generate(user.id);

      await this.etherealEmail.sendMail({
        to: {
          name: user.name,
          email: user.email,
        },
        subject: '[Kripton Sports] Recuperar Senha!',
        templateData: {
          file: templateForgotPassword,
          variables: {
            name: user.name,
            link: `http://localhost:3000/reset-password?token=${token}`,
          },
        },
      });
    } catch (err) {
      console.log(err);
      throw new AppError('Sorry, failed to send email! ');
    }
  }
}

export default ForgotPasswordService;
