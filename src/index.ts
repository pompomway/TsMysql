//index.ts
import {App} from "./app";
async function main(){ //非同期
    const app=new App();
    await app.listen();  
}
main();