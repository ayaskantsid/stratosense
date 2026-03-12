import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Select,
} from "../ui/select";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <Select value={location} onValueChange={(value) => setLocation(value)}>
      <SelectTrigger className="w-full xs:w-[150px]">
        <SelectValue placeholder="Location" />
      </SelectTrigger>
      <SelectContent className="max-h-none overflow-visible z-1001">
        {location === "custom" && (
          <SelectItem value="custom">Custom</SelectItem>
        )}
        {locations.map((location) => (
          <SelectItem value={location} key={location}>
            {location}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const locations = [
  "Bangkok",
  "Tokyo",
  "Seoul",
  "Dubai",
  "London",
  "New York",
  "Paris",
  "Madrid",
  "Rome",
  "Berlin",
  "Lisbon",
  "Amsterdam",
];
