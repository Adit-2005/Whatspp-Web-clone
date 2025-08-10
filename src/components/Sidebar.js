import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const chats = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: "Charlie" }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" className="sidebar__logo" />
        <h2 className="sidebar__title">MyChat</h2>
      </div>
      <div className="sidebar__list">
        {chats.map(c => (
          <Link key={c.id} to={`/chat/${c.id}`} className="sidebar__item">
            {c.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
