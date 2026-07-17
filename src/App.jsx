import { useState, useEffect } from "react";
import Header from "./components/Header";
import Slot from "./components/Slot";

function App() {
  const [coinBalance, setCoinBalance] = useState(1000);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header coinBalance={coinBalance} />
      <Slot setCoinBalance={setCoinBalance} />
    </div>
  );
}

export default App;
