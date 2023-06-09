export class PrivacyPolicyService {
  private static _instance: PrivacyPolicyService;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}
