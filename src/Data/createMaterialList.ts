import {connection} from "../DatabaseConnection/DatabaseConnection";
import { materialList } from "../Types/types"

export const createMaterialList = async (materialList: materialList):Promise<void> =>{
    await connection
        .insert({
            id:materialList.id,
            name:materialList.name
            
        }).into("FCamara_Projeto_MaterialList")
}