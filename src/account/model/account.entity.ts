import { Column, Entity, PrimaryGeneratedColumn, VersionColumn } from "typeorm";

export enum AccountStatus {
    ACTIVE = 'ACTIVE',
    BLOCKED = 'BLOCKED'
}

@Entity({ name: 'tb_accounts' })
export class Account { 

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    accountNumber: number;

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    balance: number;

    @Column({ type: 'enum', enum: AccountStatus })
    status: AccountStatus;

    // @VersionColumn = controle de concorrência otimista (pleno total).
    // @VersionColumn()
    // version: number;

}