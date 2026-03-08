import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "../../person/model/person.entity";

export enum AccountStatus {
    ACTIVE = 'ACTIVE',
    BLOCKED = 'BLOCKED'
}

@Entity({ name: 'tb_accounts' })
export class Account {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ unique: true, nullable: false })
    accountNumber: number;

    @Column({ nullable: false })
    agencyNumber: number;

    @ApiProperty()
    @Column({ type: 'decimal', precision: 12, scale: 2 })
    balance: number;

    @ApiProperty()
    @Column({ type: 'enum', enum: AccountStatus })
    status: AccountStatus;

    @ApiProperty()
    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @ManyToOne(() => Person, person => person.accounts)
    person: Person;

}