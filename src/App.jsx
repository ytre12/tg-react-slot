import { useState } from "react";
import Header from "./components/Header";
import Slot from "./components/Slot";

function App() {
  const [coinBalance, setCoinBalance] = useState(1000);

  return (
    <>
      <Header coinBalance={coinBalance} />
      <Slot setCoinBalance={setCoinBalance} />
    </>
  );
}

export default App;
