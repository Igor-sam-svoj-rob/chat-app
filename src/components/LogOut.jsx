import React from "react";
import { style } from "../AppStyle";
import { auth } from "../firebase";

const LogOut = () => {
  const SignOut = () => {
    SignOut(auth);
  };
  return (
    <div className={style.button} onClick={() => auth.signOut()}>
      LogOut
    </div>
  );
};

export default LogOut;
