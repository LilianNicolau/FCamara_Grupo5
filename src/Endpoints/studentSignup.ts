import {Request,Response} from "express";
import { generateId } from "../Services/IdGenerator";
import { generateToken } from "../Services/Authenticator";
import {createStudent} from "../Data/createStudent";
import {getStudentBySchool} from "../Data/getStudent";
import {student} from "../Types/types";

let errorCode = 400

export const studentSignup = async(req: Request, res: Response): Promise <void> => {
    try {
        const {name, school} = req.body as student

        if(!name || !school) {
            errorCode = 403
            throw new Error("Por favor, digite as informações.");
        }

        const findSchool = getStudentBySchool(school)
        console.log("school:", findSchool)
        
        const studentId: string = generateId()
        const studentData:student = {
            id:studentId,
            name:name,
            school:school,
        }
        await createStudent(studentData)
        const token: string = generateToken({id:studentId})

        res.status(200).send({token:token})
        
    }catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}


