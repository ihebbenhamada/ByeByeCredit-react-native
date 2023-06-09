export class LoginService {
  private static _instance: LoginService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  googleSignIn() {}

  appleSignIn() {}

  facebookSignIn() {}
}
