import connectMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import GeneralContact from "../../../models/generalContact";

export async function POST(request) {
    const {firstName, lastName, email, message} = await request.json();

    await connectMongoDB();
    await GeneralContact.create({firstName, lastName, email, message})
    return NextResponse.json({message: "General Contact Inquiry Recieved"}, {status: 201});
}