import {Request,Response} from "express";
import {createBusinessContact} from "../Data/createBusinessContact";
import {businessContact} from "../Types/types";

export const postBusinessContact = async(req: Request, res: Response): Promise <void> => {
    try {
        const {email, phone, company_name, person_name_or_position} = req.body as businessContact

        if(!email || !phone || !company_name || !person_name_or_position) {
            
            throw new Error("Por favor, digite as informações.");
        }

         
        const businessData:businessContact = {
            email: email,
            phone: phone,
            company_name: company_name,
            person_name_or_position: person_name_or_position
        }

        await createBusinessContact(businessData)
        
        res.status(200).send("Empresa cadastrada com sucesso")
        
    }catch (error) {
        res.status(error.statusCode || 400).send({error: error.message})
    }
}

