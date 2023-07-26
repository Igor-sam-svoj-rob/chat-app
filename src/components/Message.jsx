import { forwardRef } from "react";
import { style } from "../AppStyle";
import { auth } from "../firebase";

const Message = ({ message }, ref) => {
  const messageClass =
    message.uid === auth.currentUser.id
      ? `${style.receieved}`
      : `${style.sent}`;

  return (
    <div ref={ref} className={`${style.message} ${messageClass}`}>
      <p className={style.name}>{message.name}</p>
      <p>{message.text}</p>
    </div>
  );
};

export default forwardRef(Message);
