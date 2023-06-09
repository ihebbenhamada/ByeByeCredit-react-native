export class CountryService {
  private static _instance: CountryService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
