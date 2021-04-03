import {Request, Response} from "express";
import { getSchoolByAddress, getSchoolByName } from "../Data/getSchool";
import { school } from "../Types/types";

export const findSchoolByAddress = async(req:Request, res: Response): Promise <void> => {
    try {
        const {address}  = req.body as school
        if(!address) {
            throw new Error("Por favor, escreva o endereço da escola")
        }

        const findSchool = await getSchoolByAddress(address as string)
        if (!findSchool) {
            throw new Error("Escola não encontrada")
        }

        const schoolData = {
            address: findSchool.address,
            name: findSchool.name
        }

        res.status(200).send(schoolData)

    } catch (error) {
        res.status(error.statusCode || 400).send({error: error.message})
    }
}

export const findSchoolByName = async(req:Request, res: Response): Promise <void> => {
    try {
        const {name}  = req.body as school
        if(!name) {
            throw new Error("Por favor, escreva o nome da escola")
        }

        const findSchool = await getSchoolByName(name as string)
        if (!findSchool) {
            throw new Error("Escola não encontrada")
        }

        const schoolData = {
            address: findSchool.address,
            
        }

        res.status(200).send(schoolData)

    } catch (error) {
        res.status(error.statusCode || 400).send({error: error.message})
    }
}