import {connection} from "../DatabaseConnection/DatabaseConnection";
import { school } from "../Types/types"

export const createSchool = async (school: school):Promise<void> =>{
    await connection
        .insert({
            id:school.id,
            name:school.name,
            address: school.address,
        }).into("FCamara_Projeto_School")
}