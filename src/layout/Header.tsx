import { FiGithub } from "react-icons/fi";
import { HiSun, HiMoon } from "react-icons/hi";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, onToggleDarkMode }) => {
  const themeClass = darkMode ? "bg-gray-900 text-white" : "";

  return (
    <div className={`shadow-md ${themeClass}`}>
      <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-screen-xl flex justify-between items-center">
        <h1 className="text-2xl font-bold">Discord Language Index</h1>
        <div className="flex items-center">
          <button
            onClick={onToggleDarkMode}
            className="text-2xl mr-4 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>
          <a
            href="https://github.com/vKxni/discordindex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 focus:outline-none"
            aria-label="GitHub repository"
            style={{ marginLeft: "1rem" }}
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
};