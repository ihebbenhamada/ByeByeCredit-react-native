export class UsernameService {
  private static _instance: UsernameService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
