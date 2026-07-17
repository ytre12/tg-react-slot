import { useEffect, useState } from "react";
import Button from "./Button";
import Bet from "./Bet";

export default function Slot({ setCoinBalance }) {
  const [win, setWin] = useState(0);
  const [bet, setBet] = useState(0);
  const [sesionOpen, setSesionOpen] = useState(false);
  const [slots, setSlots] = useState({
    slot1: undefined,
    slot2: undefined,
    slot3: undefined,
  });

  function slotSelect(slot) {
    const result = Math.random() < 0.8;

    if (!sesionOpen) {
      setCoinBalance((prev) => prev - bet);
      setSesionOpen(true);
    }

    setSlots((prev) => ({
      ...prev,
      [slot]: result,
    }));

    if (result) {
      setWin((prev) => (prev === 0 ? bet * 1.25 : prev * 1.25));
    } else {
      lose();
    }
  }

  function lose() {
    setSlots({
      slot1: false,
      slot2: false,
      slot3: false,
    });
    setWin(0);
    // setBet(0);
    setSesionOpen(false);
  }

  function resetSlot() {
    setCoinBalance((prev) => prev + win);
    setSlots({
      slot1: undefined,
      slot2: undefined,
      slot3: undefined,
    });
    setWin(0);
    // setBet(0);
    setSesionOpen(false);
  }

  if (bet < 0) {
    setBet(0);
  }

  return (
    <>
      <div className="flex justify-center m-8 font-extrabold text-3xl">
        {win.toFixed(2) + "$"}
      </div>
      <section className="flex justify-around">
        <Button slot={slots} numberSlot={"slot1"} slotSelect={slotSelect} />
        <Button slot={slots} numberSlot={"slot2"} slotSelect={slotSelect} />
        <Button slot={slots} numberSlot={"slot3"} slotSelect={slotSelect} />
      </section>
      <div className="m-3">
        <input
          type="number"
          placeholder="0 ..."
          className="bg-gray-500/30 rounded-xl p-2 w-full"
          value={bet}
          onChange={(e) => setBet(Number(e.target.value))}
        />

        <Bet setBet={setBet} />

        <button
          className="text-center w-full p-2 bg-purple-900/80 text-white font-medium rounded-full mt-3"
          onClick={resetSlot}
        >
          Claim
        </button>
      </div>
    </>
  );
}
