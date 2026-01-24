import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_accounts' })
export class Account { 

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    accountNumber: number;

}