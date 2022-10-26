import {Request,Response} from "express";
import {connect} from "../database";
import {Person} from "../interface/person";


export async function getTitle(req:Request,res:Response):Promise<Response>{
    //const conn=await connect();
    //const rs=await conn.query("select id,pass from login where pk=1");
    return res.json("DB API");
}

export async function getSave(req:Request,res:Response){
    const pn:Person=req.query as unknown as Person;
    const conn=await connect();
    await conn.query("insert into login set ?",[pn]);
    //const conn=await connect();
    return res.json("Insert OK!");

}

export async function getDelete (req:Request,res:Response){
    let pk:Number=+req.params["pk"]
    try {
        const conn=await connect();
        await conn.query("delete from login where pk=?",[pk]);
        return res.json("Delete OK!");
    } catch (error) {
        console.log(error);
    }
    return res.json("Delete NG!Check Your Pk!");
}

export async function getUpdate(req:Request,res:Response){
    let pn:Person =req.query as unknown as Person;
    let pk:Number =+req.params["pk"];
    console.log(pn);
    console.log(pk);
    try {
        const conn=await connect();
        await conn.query("update login set ? where pk=?",[pn,pk]);
        return res.json("Update OK!");
    } catch (error) {
        console.log(error);
    }
    return res.json("Update NG!");
}

export async function getData(req:Request,res:Response):Promise<Response> {
    let pk:Number =+req.params["pk"]
    try {
        const conn=await connect();
        const rs=await conn.query("select id,pass from login where pk=?",[pk]);
        return res.json(rs[0]);
    } catch (error) {
        console.log(error);
    }
    return res.json("getData");
}