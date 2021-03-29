import {connection} from "../DatabaseConnection/DatabaseConnection";

export const getMaterialListByName = async(name: string):Promise<any> =>{
    const result = await connection
        .select("*")
        .from("FCamara_Projeto_MaterialList")
        .where({name})
    
    return result[0]
}