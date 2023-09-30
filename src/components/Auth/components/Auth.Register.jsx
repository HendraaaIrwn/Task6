"use client";

import Image from "next/image";
import Avatar from "@/assets/avatar.jpg";
import { Input, Button, Link } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";

export const AuthRegister = () => {
  const { loading, registerData, handleChange, handleSubmitRegister } =
    useRegister();

  return (
    <main className="h-screen flex justify-center items-center backgroundStyle ">
      <div className="flex flex-col justify-center items-center">
        <div className=" bg-white px-16 pt-6 pb-8 rounded-3xl w-[420px] space-y-6">
          <div className=" flex flex-col justify-center items-center rounded-xl ">
            <Image
              className="rounded-full"
              src={Avatar}
              width={50}
              height={50}
            />
            <div class="text-2xl font-bold tracking-tight bg-gradient-to-r from-rose-500 to-yellow-500 text-transparent bg-clip-text">
              hendrairwn
            </div>
          </div>
          <h1 className=" text-2xl font-semibold text-center pb-4">
            Login Form
          </h1>
          <Input
            type="name"
            label="Name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <Input
            type="password"
            label="Password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Button
            className=" w-full"
            color="primary"
            isLoading={loading}
            onClick={handleSubmitRegister}
          >
            Register
          </Button>
          <div className=" flex justify-center items-center pt-8 gap-2">
            <h3>have an Account?</h3>
            <Link href="./">Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
