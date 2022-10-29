import { Account } from "./account";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";


@Injectable()
export class AccountRepo {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>
  ) {
  }

  create(model: Account) {
    this.accountRepository.insert(model)
      .then(result => model.id = result.identifiers["id"])
      .catch(reason => console.log(reason));
  }
}