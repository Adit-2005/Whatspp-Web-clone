import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../context/socketContext";
import "./chat.css";

export default function Chat() {
  const { id } = useParams();
  const [messages, setMessages] = useState([
    { from: "them", text: "Hello!" },
    { from: "me", text: "Hi — this is a demo chat." }
  ]);
  const [text, setText] = useState("");
  const socket = useContext(SocketContext);

  const send = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const m = { from: "me", text: text.trim() };
    setMessages(prev => [...prev, m]);
    setText("");
    // emit to socket if provided (no-op in mock)
    if (socket && socket.emit) socket.emit("message", { chatId: id, message: m });
  };

  return (
    <section className="chat">
      <header className="chat__header">Chat with #{id}</header>
      <div className="chat__messages">
        {messages.map((m, i) => (
          <div key={i} className={"chat__message " + (m.from === "me" ? "me" : "them")}>
            {m.text}
          </div>
        ))}
      </div>
      <form className="chat__form" onSubmit={send}>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message..." />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
