export default interface IParseEmailTemplate {
  file: string;
  variables: {
    [key: string]: string;
  };
}
