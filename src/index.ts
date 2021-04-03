import express, {Express} from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { schoolSignup } from './Endpoints/schoolSignup';
import { findSchoolByAddress, findSchoolByName } from './Endpoints/getSchoolByAddress';
import { studentSignup } from './Endpoints/studentSignup';
import { materialListSignup } from './Endpoints/materialSignup';
import { findMaterialListById } from './Endpoints/getMaterialListById';


const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.post("/school/signup", schoolSignup);
app.get("/school/find", findSchoolByAddress);
app.get("/school/findName", findSchoolByName);
app.post("/student/signup", studentSignup);
app.post("/material/list", materialListSignup);
app.get("/materials", findMaterialListById)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in <http://localhost>: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});