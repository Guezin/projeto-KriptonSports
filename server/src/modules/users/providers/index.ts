import { container } from 'tsyringe';

import IEncryptedPassoword from './ProvidesEncryptedPassword/models/IEncryptedPassword';
import BCrypt from './ProvidesEncryptedPassword/implementations/BCrypt';

container.registerSingleton<IEncryptedPassoword>('EncryptedPassword', BCrypt);
