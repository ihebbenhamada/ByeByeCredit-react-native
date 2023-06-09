export class PasswordService {
  private static _instance: PasswordService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
