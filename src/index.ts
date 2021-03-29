import express, {Express} from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { schoolSignup } from './Endpoints/schoolSignup';
import { findSchoolByAddress } from './Endpoints/getSchoolByAddress';


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.post("/school/signup", schoolSignup);
app.get("/school/find", findSchoolByAddress)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in <http://localhost>: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});