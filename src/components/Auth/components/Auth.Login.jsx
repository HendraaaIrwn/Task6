"use client";

import Image from "next/image";
import Avatar from "@/assets/avatar.jpg";
import React from "react";
import { Input, Button, Link } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";

export const AuthLogin = () => {
  const { loading, handleChange, handleLogin } = useLogin();

  return (
    <main className="h-screen flex justify-center items-center backgroundStyle ">
      <div className="flex flex-col justify-center items-center">
        <Image className="rounded-full" src={Avatar} width={50} height={50} />
        <div class="text-2xl font-bold pb-10">hendrairwn</div>

        <div className=" bg-white px-16 pt-6 pb-8 rounded-3xl w-[420px] space-y-6">
          <h1 className=" text-2xl font-semibold text-center pb-4">
            Login Form
          </h1>
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
            onClick={handleLogin}
          >
            Login
          </Button>
          <div className=" flex justify-center items-center pt-8 gap-2">
            <h3>Don't have an Account?</h3>
            <Link href="./register">Register</Link>
          </div>
        </div>
      </div>
    </main>
  );
};
