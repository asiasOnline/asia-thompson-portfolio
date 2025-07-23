import mongoose, { Schema } from "mongoose";

const generalContactSchema = new Schema (
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        contactMessage: { type: String, required: true }
    }, {
        timestamps: true,
    }
);

const GeneralContact = mongoose.models.GeneralContact || mongoose.model("GeneralContact", generalContactSchema);

export default GeneralContact;