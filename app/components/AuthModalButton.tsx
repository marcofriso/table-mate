"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";

const AuthModalButton = ({ isSignin }: { isSignin: boolean }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const isSigninContent = (signinContent: string, signupContent: string) => {
    return isSignin ? signinContent : signupContent;
  };

  return (
    <div>
      <button
        className={`${isSigninContent(
          "bg-blue-400 text-white",
          ""
        )} border p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {isSigninContent("Sign in", "Sign up")}
      </button>
      <AuthModal isSignin={isSignin} open={open} setOpen={setOpen} />
    </div>
  );
};

export default AuthModalButton;
