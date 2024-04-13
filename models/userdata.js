import mongoose from 'mongoose'
import { Schema } from 'mongoose';

const userDataSchema = new Schema ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: {type: String, required: true},
    city: {type: String, required: true},
    gender: {type: String, required: true},
},
{
    timestamps: true,
})

const Userdata = mongoose.models.Userdata || mongoose.model("Userdata", userDataSchema);
export default Userdata;