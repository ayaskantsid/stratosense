import Sun from "/src/assets/sun.svg?react";
import Moon from "/src/assets/moon.svg?react";
import { Switch } from "./ui/switch";
import { useTheme } from "./ThemeProvider";

export default function LightDarkToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <Moon className="size-5" />
      <Switch checked={theme === "light"} onCheckedChange={toggleTheme} />
      <Sun className="size-5" />
    </div>
  );
}
