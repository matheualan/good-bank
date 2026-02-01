import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PersonRepository } from "../repository/person.repository";
import { Person } from "../model/person.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";

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
        const person = await this.personRepository.findOne({
            where: { id: id }
        });

        if (!person) {
            throw new HttpException('Nada foi achado, confira a busca e tente novamente.', HttpStatus.NOT_FOUND);
        }

        return person;
    }

    async findByName(name: string): Promise<Person[]> {
        return await this.personRepository.find({
            where: {
                name: ILike(`%${name}%`) 
            }
        });
    }

    async create(person: Person): Promise<Person> {
        return await this.personRepository.save(person);
    }

    async update(id: number, person: Person): Promise<Person> {
        await this.findById(id);
        return await this.personRepository.save(person);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return this.personRepository.delete(id);
    }

}