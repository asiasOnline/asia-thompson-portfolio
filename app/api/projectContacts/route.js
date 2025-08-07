import connectMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import ProjectContact from "../../../models/projectContact.js";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Connecting to DB...");
        await connectMongoDB();
        console.log("DB connected. Creating contact...");
        const savedContact = await ProjectContact.create(body);

        console.log("Mongo result:", savedContact);

        return NextResponse.json(
            {message: "Project Inquiry Recieved", data: savedContact}, 
            {status: 201}
        );
    } catch (error) {
        console.error("Project contact route error:", error);
        return NextResponse.json(
            { error: "Failed to save project contact" },
            { status: 500 }
        );
    }
}