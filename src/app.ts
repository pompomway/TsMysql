import express,{Application} from 'express';
import morgan from "morgan";

import IndexRouter from "./routes/index.routes"; 
import DB_Router  from './routes/db.routes';

export class App{
    private app:Application; 
    constructor(private port?:Number | string){
        this.app=express();
        this.setting();
        this.getMorgan();
        this.routes();
    }

    setting(){
        this.app.set("port",this.port || process.env.Port ||3000);
    }

    routes(){
        this.app.use(IndexRouter);
        this.app.use('/db',DB_Router);
    }

    getMorgan(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("Server is run",this.app.get("port"));
    }
}