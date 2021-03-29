import {Request,Response} from "express";
import { generateId } from "../Services/IdGenerator";
import { generateToken } from "../Services/Authenticator";
import {createSchool} from "../Data/createSchool";
//import {getSchoolByAddress} from "../Data/getSchool";
import {school} from "../Types/types";

export const schoolSignup = async(req: Request, res: Response): Promise <void> => {
    try {
        const {name, address} = req.body as school

        if(!name || !address) {
         
            throw new Error("Por favor, digite as informações.");
        }

        // const findAddress = getSchoolByAddress(address)
        // console.log("address:", findAddress)
        
        const schoolId: string = generateId()
        const schoolData:school = {
            id:schoolId,
            name:name,
            address:address,
        }
        await createSchool(schoolData)
        const token: string = generateToken({id:schoolId})
       
        res.status(200).send({token:token})
              
    } catch (error) {
        res.status(error.statusCode || 400).send({error: error.message})
    }
}


