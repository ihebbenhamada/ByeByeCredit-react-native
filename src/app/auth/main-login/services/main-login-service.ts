export class MainLoginService {
  private static _instance: MainLoginService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  googleSignIn() {}

  appleSignIn() {}

  facebookSignIn() {}
}
