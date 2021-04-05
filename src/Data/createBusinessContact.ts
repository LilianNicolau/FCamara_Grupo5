import {connection} from "../DatabaseConnection/DatabaseConnection";
import { businessContact } from "../Types/types"

export const createBusinessContact = async (businessContact: businessContact):Promise<void> =>{
    await connection
        .insert({
            email:businessContact.email,
            phone:businessContact.phone,
            company_name: businessContact.company_name,
            person_name_or_position: businessContact.person_name_or_position
        }).into("FCamara_Projeto_BusinessContact")
}