import {Request, Response} from "express";
import { getMaterialListById } from "../Data/getMaterialList";
import { materialList } from "../Types/types";

export const findMaterialListById = async(req:Request, res: Response): Promise <void> => {
    try {
        const {id}  = req.body as materialList
        if(!id) {
            throw new Error("Por favor, selecione a lista")
        }

        const findList = await getMaterialListById(id as string)
        if (!findList) {
            throw new Error("Lista não encontrada")
        }

        const ListData = {
            name: findList.name,
            
        }

        res.status(200).send(ListData)

    } catch (error) {
        res.status(error.statusCode || 400).send({error: error.message})
    }
}