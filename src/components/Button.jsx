export default function Button({ slot, numberSlot, slotSelect }) {
  return (
    <button
      disabled={slot[numberSlot] !== undefined}
      className="bg-purple-800/70 p-7 font-extrabold rounded-xl"
      onClick={() => {
        slotSelect(numberSlot);
      }}
    >
      {slot[numberSlot] === undefined && "?"}
      {slot[numberSlot] === true && "W"}
      {slot[numberSlot] === false && "L"}
    </button>
  );
}
