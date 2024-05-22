type ClockInfoProps = {
  difference: number;
  text: string;
};

export default function ClockInfo({ difference, text }: ClockInfoProps) {
  return (
    <div className="flex flex-col border-double rounded-md border-[4px] border-[#A47E3B] font-cormorant font-light">
      <div
        id="days"
        className="w-20 h-16 bg-white text-2xl items-center justify-center flex  flex-col"
      >
        {difference > 0 ? difference : 0}
        <p className="w-20 text-center text-sm">{text}</p>
      </div>
    </div>
  );
}
