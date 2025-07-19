import connectMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import GeneralContact from "../../../models/generalContact";

export async function POST(req) {
    const body = await req.json();

    await connectMongoDB();

    const savedContact = await GeneralContact.create(body);

    console.log("Mongo result:", savedContact);
    return NextResponse.json(
        {message: "General Contact Inquiry Recieved", data: savedContact}, 
        {status: 201}
    );
}