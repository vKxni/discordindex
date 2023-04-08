import { useState, useEffect } from "react";
import Link from "next/link";
import { languages } from "@/utils/languages";

import { Header } from "@/layout/Header";
import Head from "next/head";

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
      </Head>
      <div
        className={`${darkMode ? "bg-gray-900 text-white" : ""} min-h-screen`}
      >
        <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl">
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
      </div>
    </>
  );
};

export default Home;
