export class GenderService {
  private static _instance: GenderService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
