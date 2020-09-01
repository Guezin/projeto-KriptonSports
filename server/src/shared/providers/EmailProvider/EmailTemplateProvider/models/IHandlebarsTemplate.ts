import IParseEmailTemplate from '../dtos/IParseEmailTemplate';

export default interface IHandlebarsTemplate {
  parse(data: IParseEmailTemplate): Promise<string>;
}
