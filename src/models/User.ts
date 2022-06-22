import { Schema,model, Model, connection } from "mongoose";


type UserType = {
    name : string,
    email : string,
    state : number,
    passwordHash: string,
    token : string
}

const schema = new Schema<UserType>({
    name : {type: String , required:true},
    email:{ type: String, required: true},
    state:{type: Number,required: true},
    passwordHash: {type: String, required: true},
    token : {type: String}
});

const modelName = 'User';

export default (connection && connection.models[modelName] ? connection.models[modelName] as Model<UserType> : model<UserType>(modelName,schema) );