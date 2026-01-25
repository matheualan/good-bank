import { Injectable } from "@nestjs/common";
import { PersonRepository } from "../repository/person.repository";
import { Person } from "../model/person.entity";

@Injectable()
export class PersonService implements PersonRepository {

    findById(id: number): Promise<Person | null> {
        throw new Error("Method not implemented.");
    }

    findByName(name: string): Promise<Person | null> {
        throw new Error("Method not implemented.");
    }

    listAll(): Promise<Person[]> {
        throw new Error("Method not implemented.");
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