import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RewardedUserEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    uid: string;

    @Column()
    rid: string;
}
