import "reflect-metadata";
import { createConnection } from "typeorm";
import { POSTGRES_REWARD_OPTIONS, POSTGRES_REWARDED_USER_OPTIONS } from "../db/Constant";
import { RewardEntity } from "../db/entity/RewardEntity";
import { RewardedUserEntity } from "../db/entity/RewardedUserEntity";

export async function getReward(id: any){
    return createConnection(POSTGRES_REWARDED_USER_OPTIONS).then(async connection => {
        console.log("Loading users from the database...");
        const rewards = await connection.manager.find(RewardedUserEntity);
        console.log(`Loaded users for ${id} : `, rewards);
        connection.close();
        return rewards;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

export async function getAllRewards(){
    return createConnection(POSTGRES_REWARD_OPTIONS).then(async connection => {
        console.log("Loading rewards from the database...");
        const rewards = await connection.manager.find(RewardEntity);
        console.log("Loaded rewards: ", rewards);
        connection.close();
        return rewards;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

export async function createReward(body: RewardEntity): Promise<boolean> {
    return createConnection(POSTGRES_REWARD_OPTIONS).then(async (connection) => {
        console.log("Inserting a new reward into the database...");
        console.log(body);
        const reward = new RewardEntity();
        reward.name = body.name;
        reward.amount = body.amount;
        reward.expiry_date = body.expiry_date;
        await connection.manager.save(reward);
        connection.close();
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}

export async function assignReward(body: RewardedUserEntity): Promise<boolean> {
    return createConnection(POSTGRES_REWARD_OPTIONS).then(async (connection) => {
        console.log("Assign a new reward to user...");
        const rewardedUser = new RewardedUserEntity();
        rewardedUser.uid = body.uid;
        rewardedUser.rid = body.rid;
        await connection.manager.save(rewardedUser);
        connection.close();
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
}