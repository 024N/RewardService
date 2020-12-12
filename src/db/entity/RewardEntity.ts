import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RewardEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    amount: string;

    @Column()
    expiry_date: string;
}
