import dotenv from 'dotenv';
import { Request,Response } from 'express';
import  express  from 'express';
import cors from 'cors';
import { mongoConnect } from './src/database/mongo';
import fileupload from 'express-fileupload';
dotenv.config();
mongoConnect();

const server = express();
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use(fileupload());

server.use(express.static(__dirname+'/public'));


server.get('/ping',(req: Request, res:Response)=>{
    res.json({pong:true});
});

server.listen(process.env.PORT as string, ()=>{
    console.log(`Rodando no endereço ${process.env.BASE as string}`);
});