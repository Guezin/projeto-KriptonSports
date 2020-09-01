interface IContactEmail {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IContactEmail;
  from?: IContactEmail;
  subject: string;
  templateData: {
    file: string;
    variables: {
      [key: string]: string;
    };
  };
}
