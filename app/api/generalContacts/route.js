import connectMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import GeneralContact from "../../../models/generalContact.js";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Connecting to DB...");
        await connectMongoDB();
        console.log("DB connected. Creating contact...");
        const savedContact = await GeneralContact.create(body);

        console.log("Mongo result:", savedContact);
        return NextResponse.json(
            {message: "General Contact Inquiry Recieved", data: savedContact}, 
            {status: 201}
        );
    } catch (error) {
        console.error("Contact route error:", {
            name: error.name,
            message: error.message,
            stack: error.stack,
        });

        return NextResponse.json(
            { error: error.message || "Failed to save contact" },
            { status: 500 }
        );
    }
    
}