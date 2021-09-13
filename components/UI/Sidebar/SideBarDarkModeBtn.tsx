import { Switch } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { darkModeEnabled } from "../../../atoms";
import { moonSVG, sunSVG } from "../../../assets/SideBarDarkModeBtnSVG";
import { useTheme } from "next-themes";

export default function MyToggle() {
  const [enabled, setEnabled] = useRecoilState(darkModeEnabled);
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="m-10 flex dark:text-background">
        <div className="mr-2">{enabled ? moonSVG : sunSVG}</div>

        <Switch
          checked={enabled}
          onChange={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setEnabled(!enabled);
          }}
          className={`${
            enabled ? "bg-background_dark" : "bg-main"
          } relative inline-flex items-center h-6 rounded-full w-16 border-2`}
        >
          <span
            className={`${
              enabled ? "translate-x-10" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-btn_text dark:bg-btn_dark rounded-full`}
          />
        </Switch>
      </div>
    </>
  );
}
