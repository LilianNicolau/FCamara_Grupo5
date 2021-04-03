import {connection} from "../DatabaseConnection/DatabaseConnection";

export const getSchoolByAddress = async(address: string):Promise<any> =>{
    const result = await connection
        .select("*")
        .from("FCamara_Projeto_School")
        .where({address})
    
    return result[0]
}

export const getSchoolByName = async(name: string):Promise<any> =>{
    const result = await connection
        .select("*")
        .from("FCamara_Projeto_School")
        .where({name})
    
    return result[0]
}