import {Request, Response} from "express";

export const getSchoolByAdress = async(req:Request, res: Response): Promise <void> => {
    try {

    } catch (error) {
        res.status(error.statusCode || 400).send({error: error.message})
    }
}