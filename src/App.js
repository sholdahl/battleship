import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GameBoardDisplay from "./components/GameBoardDisplay";

function App() {
  return (
    <div className="container-xl">
      <Header />

      <GameBoardDisplay />
    </div>
  );
}

export default App;
