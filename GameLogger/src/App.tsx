import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const userName = "user";
  const gameName = "XYZ";

  return (
    <main className="app-main">
      <div className="welcome-card">
        <h1>
          Hello, <span className="user-name">{userName}</span>.
        </h1>
        <p>
          You are currently playing <span className="game-name">{gameName}</span>
        </p>
      </div>
    </main>
  );
}

export default App;
