import {Request, Response} from "express";
import { getStudentByName} from "../Data/getStudent"
import { student } from "../Types/types";


export const findStudentByName = async(req:Request, res: Response): Promise <void> => {
    try {
        const {name}  = req.body as student
        if(!name) {
            throw new Error("Por favor, selecione o nome do aluno")
        }

        const findStudentName = await getStudentByName(name as string)
        if (!findStudentName) {
            throw new Error("Aluno/a não encontrada")
        }

        const studentNameData = {
            name: findStudentName.name,
            school: findStudentName.school
        }

        res.status(200).send(studentNameData)

    } catch (error) {
        res.status(error.statusCode || 400).send({error: error.message})
    }
}