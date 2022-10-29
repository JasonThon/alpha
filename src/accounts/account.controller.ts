import { Body, Controller, Post } from "@nestjs/common";
import { AccountService } from "./account.service";
import { CreateAccountRequest } from "./account.request";
import { AccountView } from "./account.view";

@Controller("accounts")
export class AccountController {
  constructor(private readonly accountService: AccountService) {
  }

  @Post("create")
  createAccount(@Body() req: CreateAccountRequest): AccountView {
    return this.accountService.createAccount(req.toAccountModel());
  }
}
