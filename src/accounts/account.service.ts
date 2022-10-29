import { Injectable } from "@nestjs/common";
import { AccountView } from "./account.view";
import { Account } from "./account";
import { AccountRepo } from "./account.repo";

@Injectable()
export class AccountService {
  constructor(private readonly accountRepo: AccountRepo) {
  }

  createAccount(model: Account): AccountView {
    this.accountRepo.create(model);

    return AccountView.fromModel(model)
  }
}
