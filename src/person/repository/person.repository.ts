import { Person } from "../model/person.entity";

export interface PersonRepository {

    findById(id: number): Promise<Person | null>;
    findByName(name: string): Promise<Person | null>;
    listAll(): Promise<Person[]>;
    create(person: Person): Promise<Person>;
    update(id: number, person: Person): Promise<Person>;
    delete(id: number): Promise<void>;

}