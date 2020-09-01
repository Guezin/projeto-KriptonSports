import fs from 'fs';
import handlebars from 'handlebars';

import IHandlebarsTemplate from '../models/IHandlebarsTemplate';
import IParseEmailTemplate from '../dtos/IParseEmailTemplate';

class HandlebarsTemplate implements IHandlebarsTemplate {
  public async parse({
    file,
    variables,
  }: IParseEmailTemplate): Promise<string> {
    const fileTemplateHbs = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const template = handlebars.compile(fileTemplateHbs);

    return template(variables);
  }
}

export default HandlebarsTemplate;
