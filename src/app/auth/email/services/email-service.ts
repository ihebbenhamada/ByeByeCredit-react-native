export class EmailService {
  private static _instance: EmailService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
