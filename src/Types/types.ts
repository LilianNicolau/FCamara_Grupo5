export type student = {
    id: string,
    school_name:string,
    name: string,
    name_legal_guardian: string,
    cpf: string,
    cad_unico: string        
}

export type school = {
    id: string,
    name: string,
    address:string,    
}

export type materialList = {
    id: string,
    name: string,
}

export type businessContact = {
    email: string,
    phone: string,
    company_name: string,
    person_name_or_position: string
}

export type authenticationData = {
    id:string
}
