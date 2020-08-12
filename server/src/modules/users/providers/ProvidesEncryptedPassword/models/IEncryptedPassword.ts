export default interface IEncryptedPassword {
  generateHash(password: string): Promise<string>;
  compareHash(password: string, passwordHash: string): Promise<boolean>;
}
