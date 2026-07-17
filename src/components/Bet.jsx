export default function Bet({ setBet }) {
  return (
    <nav>
      <div className="flex justify-around items-center my-2 font-mono text-white text-[13px]">
        <button
          className="px-5 py-1 bg-purple-600/80 rounded-2xl"
          onClick={() => setBet(10)}
        >
          10
        </button>
        <button
          className="px-5 py-1 bg-purple-600/80 rounded-2xl"
          onClick={() => setBet(50)}
        >
          50
        </button>
        <button
          className="px-4 py-1 bg-purple-600/80 rounded-2xl"
          onClick={() => setBet(100)}
        >
          100
        </button>
        <button
          className="px-3 py-1 bg-purple-600/80 rounded-2xl"
          onClick={() => setBet(1000)}
        >
          1000
        </button>
      </div>
      <div className="flex justify-around gap-1">
        <button
          className="w-full text-center font-extrabold bg-green-400/65 py-4 rounded-2xl border-2 border-purple-900"
          onClick={() => setBet((prev) => prev + 10)}
        >
          +10
        </button>
        <button
          className="w-full text-center font-extrabold bg-red-400/75 py-4 rounded-2xl border-2 border-purple-900"
          onClick={() => setBet((prev) => prev - 10)}
        >
          -10
        </button>
      </div>
    </nav>
  );
}
