export class PhoneNumberService {
  private static _instance: PhoneNumberService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
