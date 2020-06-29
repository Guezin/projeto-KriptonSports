import IEncryptedPassword from '../models/IEncryptedPassword';

class FakeBCrypt implements IEncryptedPassword {
  public async generateHash(password: string): Promise<string> {
    return password;
  }

  public async compareHash(
    password: string,
    passwordHash: string
  ): Promise<boolean> {
    return password === passwordHash;
  }
}

export default FakeBCrypt;
