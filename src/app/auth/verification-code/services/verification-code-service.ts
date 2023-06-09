export class VerificationCodeService {
  private static _instance: VerificationCodeService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
