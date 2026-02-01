import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, VersionColumn } from "typeorm";

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

    @ApiProperty()
    @Column({ type: 'decimal', precision: 12, scale: 2 })
    balance: number;

    @ApiProperty()
    @Column({ type: 'enum', enum: AccountStatus })
    status: AccountStatus;

    @ApiProperty()
    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    // @VersionColumn = controle de concorrência otimista (pleno total).
    // @VersionColumn()
    // version: number;

}