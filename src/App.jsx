import { useState, useEffect } from "react";
import Header from "./components/Header";
import Slot from "./components/Slot";
import { initStorage } from "./initStorage";
import TG from "./tg.js";

function App() {
  const [coinBalance, setCoinBalance] = useState(1000);

  useEffect(() => {
    initStorage();

    TG.CloudStorage.getItem("balance", (error, value) => {
      if (error) return;

      setCoinBalance(Number(value));
    });
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header coinBalance={coinBalance} />
      <Slot setCoinBalance={setCoinBalance} />
    </div>
  );
}

export default App;
