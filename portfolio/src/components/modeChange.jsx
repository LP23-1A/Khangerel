import { useTheme } from "next-themes";
import Moon from "./DarkTheme";
import Logo from "./Logoicon";


const ModeChange = () => {
    const { theme, setTheme } = useTheme();

    const themeToggle = () => {
        if (theme === "dark") {
          setTheme("light");
        }
        if (theme === "light") {
          setTheme("dark");
        }
      };
    if ( theme === "dark" ) {
        return (
            <button onClick={themeToggle}>
                <Logo />
            </button>
        )
    } else {
        return (
            <button onClick={themeToggle}>
                <Moon />
            </button>
        )
    }
}


export default ModeChange