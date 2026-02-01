import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PersonRepository } from "../repository/person.repository";
import { Person } from "../model/person.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PersonService implements PersonRepository {

    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>
    ) { }

    async findAll(): Promise<Person[]> {
        return await this.personRepository.find();
    }

    async findById(id: number): Promise<Person | null> {
        const findPerson = await this.personRepository.findOne({
            where: { id: id }
        });

        if (!findPerson) throw new HttpException('Pessoa não encontrada!', HttpStatus.NOT_FOUND);

        return findPerson;
    }

    async findByName(name: string): Promise<Person | null> {
        const findPerson = await this.personRepository.findOne({
            where: {
                name
            }
        });

        if (!findPerson) throw new HttpException('Pessoa nao encontrada', HttpStatus.NOT_FOUND);

        return findPerson;
    }

    create(person: Person): Promise<Person> {
        throw new Error("Method not implemented.");
    }

    update(id: number, person: Person): Promise<Person> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}