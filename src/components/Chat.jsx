import { useRef, useEffect, useState } from "react";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { style } from "../AppStyle";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "Message"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let poruke = [];
      querySnapshot.forEach((doc) => {
        poruke.push({ ...doc.data(), id: doc.id });
      });
      setMessages(poruke);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, scroll]);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message, index) => (
            <Message
              key={message.id}
              message={message}
              ref={(el) =>
                index === messages.length - 1 ? (scroll.current = el) : null
              }
            />
          ))}
      </main>
      <SendMessage />
    </>
  );
};

export default Chat;
