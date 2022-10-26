import {Request,Response} from "express";

export function IndexController(req:Request,res:Response):Response{
    return res.json("API Index");
}
