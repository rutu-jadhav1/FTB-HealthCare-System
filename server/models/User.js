import { model,Schema } from "mongoose";

const userSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    mobile : {
        type : Number,
        required : true,
        unique : true,
    },
    email : {
        type : String,
    },
    address : {
        type : String,
    },
    password :{
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    gender : {
        type : String,
        enum : ['male','female','other'],
    },
    role : {
        type : String,
        enum : ['admin','doctor','patient'],
        default : 'patient',
    }
},{
    timestamps : true
})

export default  model('User',userSchema);
