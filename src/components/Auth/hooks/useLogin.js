"use client";

import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    setLoading(true);
    toast.loading("Logging in...  ");
    const res = await fetch(" /api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });
    const { data, error, message } = await res.json();

    if (error) {
      toast.remove();
      toast.error(error);
      setLoading(false);
      return;
    }

    setLoading(false);
    toast.remove();
    toast.success(message);
    console.log(data);
  };

  return { loading  , handleChange, handleLogin };
};
