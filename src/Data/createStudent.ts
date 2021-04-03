import {connection} from "../DatabaseConnection/DatabaseConnection";
import { student } from "../Types/types"

export const createStudent = async (student:student):Promise<void> =>{
    await connection
        .insert({
            id:student.id,
            name:student.name,
            school_name: student.school_name,
        }).into("FCamara_Projeto_Student")
}