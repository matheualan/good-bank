import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./model/account.entity";
import { AccountController } from "./controller/account.controller";
import { AccountService } from "./service/account.service";

@Module({
    imports: [TypeOrmModule.forFeature([Account])],
    controllers: [AccountController],
    providers: [AccountService],
    exports: []
})
export class AccountModule { }