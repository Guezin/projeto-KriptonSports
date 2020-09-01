import ISendEmailDTO from '../dtos/ISendEmailDTO';

export default interface IEtherealEmail {
  sendMail(data: ISendEmailDTO): Promise<void>;
}
