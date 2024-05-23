import { differenceInMilliseconds } from "date-fns";
import ClockInfo from "./ClockInfo";
import { useEffect, useState } from "react";

type ClockProps = {
  targetDate: Date;
};

export default function Clock({ targetDate }: ClockProps) {
  const [today, setToday] = useState(new Date());
  const diff = differenceInMilliseconds(targetDate, today);

  const remainingDays = Math.floor(diff / 1000 / 60 / 60 / 24);
  const remainingHours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const remainingMinutes = Math.floor(diff / 1000 / 60) % 60;
  const remainingSeconds = Math.floor(diff / 1000) % 60;

  useEffect(() => {
    if (targetDate < today) {
      console.log("first");
      return;
    }
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row space-x-4 xs:flex-col xs:space-x-0 xs:space-y-4">
      <ClockInfo difference={remainingDays} text="Días" />
      <ClockInfo difference={remainingHours} text="Horas" />
      <ClockInfo difference={remainingMinutes} text="Minutos" />
      <ClockInfo difference={remainingSeconds} text="Segundos" />
    </div>
  );
}
