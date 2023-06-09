export class InfoCorrectionService {
  private static _instance: InfoCorrectionService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
