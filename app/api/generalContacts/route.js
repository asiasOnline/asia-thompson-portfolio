import connectMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import GeneralContact from "../../../models/generalContact.js";

export async function POST(req) {
    try {
        const body = await req.json();
        await connectMongoDB();
        const savedContact = await GeneralContact.create(body);

        console.log("Mongo result:", savedContact);
        return NextResponse.json(
            {message: "General Contact Inquiry Recieved", data: savedContact}, 
            {status: 201}
        );
    } catch (error) {
        console.error("Contact route error:", error);
        return NextResponse.json(
            { error: "Failed to save contact" },
            { status: 500 }
        );
    }
    
}