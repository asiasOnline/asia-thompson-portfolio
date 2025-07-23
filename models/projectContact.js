import mongoose, { Schema } from "mongoose";

const projectContactSchema = new Schema (
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        businessName: { type: String },
        email: { type: String, required: true },
        services: { type: [String], default: [] },
        dateRange: {
            from: { type: Date, required: true},
            to: { type: Date, required: true},
        },
        budget: { type: Number, required: true },
        contactMessage: { type: String }
    }, {
        timestamps: true,
    }
);

const ProjectContact = mongoose.models.ProjectContact || mongoose.model("ProjectContact", projectContactSchema);

export default ProjectContact;