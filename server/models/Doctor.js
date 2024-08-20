import { model,Schema } from "mongoose";

const doctorSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
    },
    speciality : {
        type : String,
        required : true,
    },
    opdTimings : {
        type : String,
    }
},{
    timestamps : true
})

export default  model('Doctor',doctorSchema);
