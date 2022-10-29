import { Account } from "./account";

export class CreateAccountRequest {
  email: string;

  toAccountModel(): Account {
    return new Account(this.email);
  }
}