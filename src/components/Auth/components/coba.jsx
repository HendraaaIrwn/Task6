import React from "react";

export const coba = () => {
  return (
    <div>
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
  );
};
