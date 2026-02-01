import { Module } from "@nestjs/common";
import { PersonController } from "./controller/person.controller";
import { PersonService } from "./service/person.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Person } from "./model/person.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    controllers: [PersonController],
    providers: [PersonService],
    exports: []
})
export class PersonModule { }