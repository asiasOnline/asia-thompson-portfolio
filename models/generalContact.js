import mongoose, { Schema } from "mongoose";

const generalContactSchema = new Schema (
    {
        firstName: String,
        lastName: String,
        email: String,
        contactMessage: String
    }, {
        timestamps: true,
    }
);

const GeneralContact = mongoose.models.GeneralContact || mongoose.model("GeneralContact", generalContactSchema);

export default GeneralContact;