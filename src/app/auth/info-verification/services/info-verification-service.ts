export class InfoVerificationService {
  private static _instance: InfoVerificationService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
