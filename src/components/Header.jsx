import TG from "../tg.js";

export default function Header({ coinBalance }) {
  return (
    <header className="p-2 bg-gray-400/45 rounded-b-[27px]">
      <header className="flex justify-between items-center bg-purple-600/80 rounded-3xl p-2 px-6">
        <div className="flex items-center gap-2">
          <img
            src={TG.initDataUnsafe?.user?.photo_url ?? ""}
            alt="user"
            className="w-10 rounded-full"
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
