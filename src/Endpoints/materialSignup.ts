import {Request,Response} from "express";
import { generateId } from "../Services/IdGenerator";
import { generateToken } from "../Services/Authenticator";
import {createMaterialList} from "../Data/createMaterialList";
import {getMaterialListByName} from "../Data/getMaterialList";
import {materialList} from "../Types/types";

let errorCode = 400

export const materialListSignup = async(req: Request, res: Response): Promise <void> => {
    try {
        const {name} = req.body as materialList

        if(!name) {
            errorCode = 403
            throw new Error("Por favor, digite as informações.");
        }

        const findName = getMaterialListByName(name)
        console.log("name:", findName)
        
        const materialListId: string = generateId()
        const materialListData:materialList = {
            id:materialListId,
            name:name,
            
        }
        await createMaterialList(materialListData)
        const token: string = generateToken({id:materialListId})

        res.status(200).send({token:token})
        
    }catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}
