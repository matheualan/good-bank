import { Person } from "../model/person.entity";

export interface PersonRepository {

    findAll(): Promise<Person[]>;
    findById(id: number): Promise<Person | null>;
    findByName(name: string): Promise<Person | null>;
    create(person: Person): Promise<Person>;
    update(id: number, person: Partial<Person>): Promise<Person>;
    delete(id: number): Promise<void>;

}