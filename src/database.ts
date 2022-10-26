import {createPool} from "mysql2/promise";

export async function connect(){
    const connection= await createPool({
        host:"aws-tokyo.cmvw70di9ch0.ap-northeast-1.rds.amazonaws.com",
        user:"admin",
        password:"ai4a83ai4a83",
        database:"dbconnection",
        connectionLimit:3

    });
    
    return connection;
}

