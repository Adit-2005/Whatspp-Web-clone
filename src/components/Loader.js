import React from "react";
import "./loader.css";

export default function Loader({ done }) {
  return (
    <div className="loader-wrap">
      <div className={"loader " + (done ? "done" : "")} />
      <p className="loader-text">Loading…</p>
    </div>
  );
}
