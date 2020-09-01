import { container } from 'tsyringe';

import IEtherealEmail from './models/IEtherealEmail';
import EtherealEmail from './implementations/EtherealEmail';

import HandlebarsTemplate from './EmailTemplateProvider/implementations/HandlebarsTemplate';
import IHandlebarsTemplate from './EmailTemplateProvider/models/IHandlebarsTemplate';

container.registerSingleton<IHandlebarsTemplate>(
  'HandlebarsTemplate',
  HandlebarsTemplate
);

container.registerInstance<IEtherealEmail>(
  'EtherealEmail',
  container.resolve(EtherealEmail)
);
