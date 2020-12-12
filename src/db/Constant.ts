import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { config } from 'dotenv';
config();

export const POSTGRES_REWARD_OPTIONS: PostgresConnectionOptions = {
    type: 'postgres',
    host: process.env.REWARD_HOST,
    port: Number(process.env.REWARD_PORT),
    username: process.env.REWARD_USERNAME,
    password: process.env.REWARD_PASSWORD,
    database: process.env.REWARD_DATABASE,
    synchronize: false,
    entities: [ "src/db/entity/**/*.ts"]
}

export const POSTGRES_REWARDED_USER_OPTIONS: PostgresConnectionOptions = {
    type: 'postgres',
    host: process.env.REWARDED_USER_HOST,
    port: Number(process.env.REWARDED_USER_PORT),
    username: process.env.REWARDED_USER_USERNAME,
    password: process.env.REWARDED_USER_PASSWORD,
    database: process.env.REWARDED_USER_DATABASE,
    synchronize: false,
    entities: [ "src/db/entity/**/*.ts"]
}