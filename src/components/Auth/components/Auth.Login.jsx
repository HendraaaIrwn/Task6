"use client";
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";

export const AuthLogin = () => {
  const { loading, handleChange, handleLogin } = useLogin();

  return (
    <main className="h-screen w-full grid grid-cols-2">
      <div className=" bg-cyan-600 "></div>
      <div className=" flex justify-center items-center">
        <div className=" w-[320px] space-y-2">
          <Input name="email" placeholder="Email" onChange={handleChange} />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
          />
          <Button isLoading={loading} onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </main>
  );
};
