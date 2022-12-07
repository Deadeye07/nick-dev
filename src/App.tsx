import "./App.css";
import React from "react";
import Home from "./components/home/home";
import { useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className={`${enabled ? "dark h-full" : "h-full"}` }>
      <div className="h-full bg-white dark:bg-slate-800">
        <Home enabled={enabled} setEnabled={setEnabled}></Home>
      </div>
    </div>
  );
}

export default App;
