import React from "react";
import { useNavigate } from "react-router-dom";

const SigninOptions = ({ signIn, image }) => {
  const navigate = useNavigate();
  return (
    <div
      className=" border rounded-md h-14 w-3/5 font-semibold gap-2 text-base flex items-center justify-center cursor-pointer hover:border-blue-400"
      onClick={() => navigate("/")}
    >
      <img src={image} alt="image" className=" h-4 w-4" />
      {signIn}
    </div>
  );
};

export default SigninOptions;
