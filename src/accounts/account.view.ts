import { Account } from "./account";

export class AccountView {
  email: string;
  token: string;

  constructor(email: string, token: string) {
    this.email = email;
    this.token = token;
  }

  static fromModel(model: Account): AccountView {
    return new AccountView(model.email, model.token);
  }
}