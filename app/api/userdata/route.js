import connectDB from '../../../utils/database'; // Update the path to the database utility
import Userdata from '../../../models/userdata'; // Update the path to the Userdata model
import { NextResponse } from 'next/server';


export const GET= async(request)=>{
    try {
    await connectDB();
    const data = await Userdata.find()
    return NextResponse.json({data}, {status: 201})
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error(error); 
    }
    
}
export const POST=async(request)=>{
    try {
        const { name, email, phone, city, gender } = await request.json();
        await connectDB();
        const newUser = new Userdata({
            name,
            email,
            phone,
            city,
            gender
        })
        await newUser.save();
        return NextResponse.json({ message: "User Created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.error(error); // Return an error response if something goes wrong
    }
}
export const DELETE=async(request)=>{
        const id = request.nextUrl.searchParams.get("id")
        await connectDB();
        await Userdata.findByIdAndDelete(id);
        return NextResponse.json({ message: "Deleted successfully" }, { status: 201 });

}