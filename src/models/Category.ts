import { Schema,model, Model, connection } from "mongoose";


type CategoryType = {
    name : string,
    slug: string
}

const schema = new Schema<CategoryType>({
    name : {type: String , required:true},
    slug : {type: String , required:true},
});

const modelName = 'Category';

export default (connection && connection.models[modelName] ? connection.models[modelName] as Model<CategoryType> : model<CategoryType>(modelName,schema) );