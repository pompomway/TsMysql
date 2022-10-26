import {Router}  from "express";
import {getTitle,getSave,getDelete,getUpdate,getData} from "../controllers/db.controller";


const DB_Router =Router();

DB_Router.route("/")
      .get(getTitle)
      .post(getSave);

DB_Router.route("/:pk")
         .get(getData)
         .delete(getDelete)
         .put(getUpdate); 


export default DB_Router;