import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // find user that exist
    if (!findUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const matchPassword = await bcrypt.compare(password, findUser.password);

    // compare hash password
    // const hashedPass = findUser.password;
    // const isPassValid = await bcrypt.compare(password, hashedPass);
    //check is password valid

    if (!matchPassword) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 404 }
      );
    }

    //payload
    const userData = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
    };

    const accessToken = sign(userData, process.env.JWT_ACCESS_KEY, {
      expiresIn: "3d",
    });

    console.log(accessToken);

    //send userData
    const res = NextResponse.json({
      accessToken,
      data: userData,
      message: "Login Successfully",
    });
    res.cookies.set("token", accessToken);
    return res;

    // return NextResponse.json({
    //   accessToken,
    //   data: userData,
    //   message: "Login Successfully",
    // }).cookies.set("token", accessToken);

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
