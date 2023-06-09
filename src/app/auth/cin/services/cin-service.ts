export class CinService {
  private static _instance: CinService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
