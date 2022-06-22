import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const mongoConnect = async () => {
    try{
        console.log("Conectando...");
        await connect(process.env.DATABASE as string);
        console.log("Conectado ao Mongo");
    }catch(error){
        console.log("Erro conexão mongoDB",error);
    }
}