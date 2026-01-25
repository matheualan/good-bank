import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tb_persons' })
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 11, nullable: false, unique: true })
    cpf: string;

    @Column({ type: 'date' })
    birthdate: Date;

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'datetime' })
    lastUpdate: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

}