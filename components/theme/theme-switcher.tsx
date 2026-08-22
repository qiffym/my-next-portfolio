"use client";

import { MonitorIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const themeOptions = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: MonitorIcon },
] as const;

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const selectedTheme = mounted ? (theme ?? "system") : "system";
  const CurrentIcon = themeOptions.find((option) => option.value === selectedTheme)?.icon ?? MonitorIcon;

  return (
    <Select
      items={themeOptions}
      value={selectedTheme}
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
    >
      <SelectTrigger
        className="h-10 w-full min-w-32 border-border bg-background/70 px-3 hover:bg-muted"
        aria-label={`Theme: ${selectedTheme}`}
      >
        <CurrentIcon aria-hidden="true" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} className="w-fit min-w-32">
        <SelectGroup>
          {themeOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <option.icon aria-hidden="true" />
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
