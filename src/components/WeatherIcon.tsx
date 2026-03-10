import { twMerge } from "tailwind-merge";
type Props = {
  src: string;
  className?: string;
};

export default function WeatherIcon({ src, className }: Props) {
  return (
    <img
      className={twMerge("size-8", className ?? "")}
      src={`https://openweathermap.org/img/wn/${src}.png`}
      alt="Weather Icon"
    />
  );
}
