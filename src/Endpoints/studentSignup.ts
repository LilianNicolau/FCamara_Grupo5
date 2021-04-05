import {Request,Response} from "express";
import { generateId } from "../Services/IdGenerator";
import { generateToken } from "../Services/Authenticator";
import {createStudent} from "../Data/createStudent";
import {student} from "../Types/types";

let errorCode = 400

export const studentSignup = async(req: Request, res: Response): Promise <void> => {
    try {
        const {school_name, name, name_legal_guardian, cpf, cad_unico} = req.body as student

        if(!school_name || !name || !name_legal_guardian || !cpf || !cad_unico) {
            
            throw new Error("Por favor, digite as informações.");
        }

        // const findSchool = getStudentBySchool(school_name)
        // if (!findSchool) {
        //     throw new Error("Aluna/Aluno não encontrada/encontrado")
        // }
                
        const studentId: string = generateId()

        const studentData:student = {
            id:studentId,
            school_name: school_name,
            name:name,
            name_legal_guardian: name_legal_guardian,
            cpf: cpf,
            cad_unico: cad_unico
            
        }

        await createStudent(studentData)
        const token: string = generateToken({id:studentId})

        res.status(200).send({token:token})
        
    }catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}


