import {connection} from "../DatabaseConnection/DatabaseConnection";

export const getStudentBySchool = async(school:string):Promise<any> =>{
    const result = await connection
        .select("*")
        .from("FCamara_Projeto_Student")
        .where({school})
    
    return result[0]
}