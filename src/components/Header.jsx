import TG from "../tg.js";

export default function Header({ coinBalance }) {
  return (
    <header className="p-2 bg-gray-400/45 rounded-b-[27px]">
      <header className="flex justify-between items-baseline bg-purple-600/80 rounded-3xl p-3 px-5">
        <div className="flex items-baseline gap-1">
          <img
            src={TG.initDataUnsafe?.user?.photo_url ?? ""}
            alt="user"
            className="w-2"
          />
          <h5 className="font-mono font-medium text-[13px] text-white">
            @{TG.initDataUnsafe?.user?.username ?? "tester"}
          </h5>
        </div>
        <p className="font-medium text-[13px] font-mono text-white">
          {coinBalance + "$"}
        </p>
      </header>
    </header>
  );
}
