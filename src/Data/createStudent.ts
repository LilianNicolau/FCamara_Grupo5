import {connection} from "../DatabaseConnection/DatabaseConnection";
import { student } from "../Types/types"

export const createStudent = async (student:student):Promise<void> =>{
    await connection
        .insert({
            id:student.id,
            school_name: student.school_name,
            name:student.name,
            name_legal_guardian: student.name_legal_guardian,
            cpf: student.cpf,
            cad_unico: student.cad_unico            
        }).into("FCamara_Projeto_Student")
}