import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { style } from "../AppStyle";
import { auth, db } from "../firebase";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");
  const sendMess = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Molimo Vas upišite poruku");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "Message"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <form className={style.form} onSubmit={sendMess}>
      <input
        type="text"
        placeholder="Poruka"
        className={style.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className={style.buttonsend}>
        Pošalji
      </button>
    </form>
  );
};

export default SendMessage;
