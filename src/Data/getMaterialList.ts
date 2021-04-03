import {connection} from "../DatabaseConnection/DatabaseConnection";

export const getMaterialListById = async(id: string):Promise<any> =>{
    const result = await connection
        .select("*")
        .from("FCamara_Projeto_MaterialList")
        .where({id})
    
    return result[0]
}