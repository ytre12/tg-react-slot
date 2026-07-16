import { useState, useEffect } from "react";
import Header from "./components/Header";
import Slot from "./components/Slot";

function App() {
  const [coinBalance, setCoinBalance] = useState(1000);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) return;

    tg.ready();
    setUser(tg.initDataUnsafe.user);
  }, []);

  return (
    <>
      <Header coinBalance={coinBalance} user={user} />
      <Slot setCoinBalance={setCoinBalance} />
    </>
  );
}

export default App;
