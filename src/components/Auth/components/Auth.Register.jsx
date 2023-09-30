"use client";

import { Input, Button } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";

export const AuthRegister = () => {
  const { loading, registerData, handleChange, handleSubmitRegister } =
    useRegister();

  return (
    <main className="h-screen w-full grid grid-cols-2">
      <div className=" bg-cyan-600 "></div>
      <div className=" flex justify-center items-center">
        <div className=" w-[320px] space-y-2">
          <Input name="name" placeholder="Name" onChange={handleChange} />
          <Input name="email" placeholder="Email" onChange={handleChange} />
          <Input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
          />
          <Button isLoading={loading} onClick={handleSubmitRegister}>
            Register
          </Button>
        </div>
      </div>
    </main>
  );
};
