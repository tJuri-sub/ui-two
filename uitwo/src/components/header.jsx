import { SettingsLogo } from "./icons";

export const Header = () => {
  return (
    <div className="w-full p-3 flex items-center justify-between">
      <h1 className="text-2xl text-white">VigiWheel</h1>
      <div>
        <SettingsLogo />
      </div>
    </div>
  );
};
