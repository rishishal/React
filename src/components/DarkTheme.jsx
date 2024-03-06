import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useTheme } from "../context/themeContext";

const DarkTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='flex item-center gap-2'>
      <button className='' onClick={toggleTheme}>
        {theme === "light" ? <Moon /> : <Sun className='text-stone-200' />}
      </button>
    </div>
  );
};
export default DarkTheme;
