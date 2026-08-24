"use client";

import { MonitorIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const themeOptions = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: MonitorIcon },
] as const;

const defaultTheme = "system";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const selectedTheme = mounted ? (theme ?? defaultTheme) : defaultTheme;
  const currentTheme = themeOptions.find((option) => option.value === selectedTheme) ?? themeOptions[1];
  const currentThemeIndex = themeOptions.indexOf(currentTheme);
  const nextTheme = themeOptions[(currentThemeIndex + 1) % themeOptions.length];
  const CurrentIcon = currentTheme.icon;

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="border-none"
            aria-label={`Switch to ${nextTheme.label.toLowerCase()} theme`}
            onClick={() => setTheme(nextTheme.value)}
          />
        }
      >
        <CurrentIcon aria-hidden="true" />
      </TooltipTrigger>
      <TooltipContent>Switch to {nextTheme.label.toLowerCase()} theme</TooltipContent>
    </Tooltip>
  );
}
