import { NextResponse } from "next/server";
import { connectToMongoose } from "@/utils/connectDB";
import Mail from "@/models/mail.model";

export const POST = async (req: Request) => {
  const { name, email, profession, contact, message } = await req.json();

  try {
    connectToMongoose();

    const record = await Mail.create({
      name,
      email,
      profession,
      contact,
      message,
    });

    return NextResponse.json(
      { message: "Mail send successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error, success: false },
      { status: 500 }
    );
  }
};
