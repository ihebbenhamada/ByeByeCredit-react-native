export class ProfilePictureService {
  private static _instance: ProfilePictureService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
