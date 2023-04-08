import { useState, useEffect } from "react";
import Link from "next/link";
import { languages } from "@/utils/languages";

import { Header } from "@/layout/Header";
import Head from "next/head";
import { FiGithub } from "react-icons/fi";
import { HiSun, HiMoon } from "react-icons/hi";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode !== null) {
      setDarkMode(storedMode === "true");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Discord Index</title>
        <meta name="description" content="Discord Index helps developers find all kind of programming language communities on Discord, making it easier to connect and collaborate with like-minded individuals." />
        <meta property="og:title" content="Discord Index" />
        <meta property="og:description" content="Discord Index helps developers find all kind of programming language communities on Discord, making it easier to connect and collaborate with like-minded individuals." />
        <meta property="og:url" content="https://discordindex.vercel.app/" />
      </Head>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : ""
        }`}
      >
        <div className="ml-auto">
          <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        </div>
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((language) => (
                <Link
                  href={`/language/${encodeURIComponent(language.name)}`}
                  key={language.name}
                  legacyBehavior={true}
                >
                  <a>
                    <div
                      className={`p-6 border rounded-md shadow-md hover:shadow-lg transition duration-200 ease-in-out ${
                        darkMode
                          ? "bg-gray-900 text-white hover:bg-gray-800"
                          : ""
                      }`}
                      style={{ height: "400px", overflow: "hidden" }}
                    >
                      <div className="h-20 w-20 mx-auto mb-4">
                        <img
                          src={language.logo}
                          alt={`${language.name} logo`}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <h2 className="text-xl font-bold text-center mb-2">
                        {language.name}
                      </h2>
                      <p
                        className="text-gray-700 text-center overflow-hidden"
                        style={{ maxHeight: "200px", textOverflow: "ellipsis" }}
                      >
                        {language.description}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
          </div>
        </div>
        <div className="fixed bottom-0 right-0 p-4">
          <button
            onClick={toggleDarkMode}
            className="text-2xl mr-4 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <HiSun className="mr-2" /> : <HiMoon className="mr-2" />}
          </button>
          <a
            href="https://github.com/vKxni/discordindex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 focus:outline-none mr-4"
            aria-label="GitHub repository"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;