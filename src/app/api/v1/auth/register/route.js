import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { name, email, password } = await req.json();
  try {
    // console.time("hash");
    const useHash = await bcrypt.hash(password, 10);
    // console.timeEnd("hash");

    const createUsers = await prisma.user.create({
      data: {
        name,
        email,
        password: useHash,
      },
    });

    return NextResponse.json(
      { data: createUsers, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
