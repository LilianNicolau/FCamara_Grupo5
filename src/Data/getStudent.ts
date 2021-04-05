import {connection} from "../DatabaseConnection/DatabaseConnection";

export const getStudentByName = async(name:string):Promise<any> =>{
    const result = await connection
        .select("*")
        .from("FCamara_Projeto_Student")
        .where({name})
    
    return result[0]
}