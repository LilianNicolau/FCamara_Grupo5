import {connection} from "../DatabaseConnection/DatabaseConnection";

export const getSchoolByAddress = async(address: string):Promise<any> =>{
    const result = await connection
        .select("*")
        .from("FCamara_Projeto_School")
        .where({address})
    
    return result[0]
}