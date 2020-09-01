export default interface IUserToken {
  generate: (user_id: string) => Promise<string>;
}
