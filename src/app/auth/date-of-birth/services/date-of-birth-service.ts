export class DateOfBirthService {
  private static _instance: DateOfBirthService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
