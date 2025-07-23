import connectMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import ProjectContact from "../../../models/projectContact";

export async function POST(req) {
    const body = await req.json();

    await connectMongoDB();

    const savedContact = await ProjectContact.create(body);

    console.log("Mongo result:", savedContact);
    return NextResponse.json(
        {message: "Project Inquiry Recieved", data: savedContact}, 
        {status: 201}
    );
}