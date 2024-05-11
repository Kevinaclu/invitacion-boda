type ClockInfoProps = {
  difference: number;
  text: string;
};

export default function ClockInfo({ difference, text }: ClockInfoProps) {
  return (
    <div className="flex flex-col">
      <div
        id="days"
        className="w-20 h-16 bg-slate-400 text-2xl items-center justify-center flex text-white"
      >
        {difference > 0 ? difference : 0}
      </div>
      <div className="flex flex-row space-x-4 mt-2 bg-slate-400 text-white">
        <p className="w-20 text-center text-sm">{text}</p>
      </div>
    </div>
  );
}
