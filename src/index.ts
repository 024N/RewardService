import * as dotenv from 'dotenv';
import express from "express";
import { invalidUrlHandler } from './middleware/InvalidUrlHandler';
import { requestLogHandler } from './middleware/RequestLogHandler';
import { getReward, getAllRewards, createReward, assignReward } from './repository/potgreSQL'

dotenv.config();

const app = express();
app.use(requestLogHandler); // Log request
app.use(express.json()) // Parse body

app.get( "/", async ( req, res ) => {
    console.log("Home Page")
    res.send( "ENDPOINTS: <p/> GET /user/:id <p/> GET /users <p/> POST /user" );
});

app.get( "/reward/:id", async ( req, res ) => {
    const allUsers = await getReward(req.params.id);
    res.send( allUsers );
});

app.get( "/rewards", async ( req, res ) => {
    const allUsers = await getAllRewards();
    res.send( allUsers );
});

app.post( "/reward", async ( req, res ) => {
    const reward = await createReward(req.body);
    res.send( reward ? 'Created' : 'Not Created' );
});

app.post( "/reward/assign/", async ( req, res ) => {
    const reward = await assignReward(req.body);
    res.send( reward ? 'Created' : 'Not Created' );
});

app.use('*', invalidUrlHandler); // Catch Invalid Path

app.listen( process.env.PORT, () => {
    console.log( `server started at http://localhost:${ process.env.PORT }` );
});