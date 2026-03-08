import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Account } from "../../account/model/account.entity";

@Entity({ name: 'tb_persons' })
export class Person {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ length: 100, nullable: false })
    name: string;

    @ApiProperty()
    @Column({ type: 'varchar', length: 11, nullable: false, unique: true })
    cpf: string;

    @ApiProperty()
    @Column({ type: 'date' })
    birthdate: Date;

    @ApiProperty()
    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({ type: 'datetime' })
    lastUpdate: Date;

    @ApiProperty()
    @DeleteDateColumn({ nullable: true })
    deletedAt?: Date;

    @OneToMany(() => Account, account => account.person)
    accounts: Account[];

}