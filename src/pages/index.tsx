import { useState, useEffect } from "react";
import Link from "next/link";
import { languages } from "@/utils/languages";
import LazyLoad from "react-lazyload";

import { Header } from "@/layout/Header";
import Head from "next/head";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredLanguages =
    searchQuery.length > 0
      ? languages.filter((language) =>
          language.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
      : languages;

  return (
    <>
      <Head>
        <title>Discord Index</title>
        <meta
          name="description"
          content="Discord Index helps developers find all kind of programming language communities on Discord, making it easier to connect and collaborate with like-minded individuals."
        />
        <meta property="og:title" content="Discord Index" />
        <meta
          property="og:description"
          content="Discord Index helps developers find all kind of programming language communities on Discord, making it easier to connect and collaborate with like-minded individuals."
        />
        <meta property="og:url" content="https://discordindex.vercel.app/" />
      </Head>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white darkMode" : ""
        }`}
      >
        <div className="ml-auto">
          <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        </div>
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className={`h-5 w-5 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.5 15a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM15 9.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for a language"
              className={`w-full py-2 pl-10 pr-10 rounded-md border-2 ${
                darkMode ? "border-gray-700 text-white" : "border-gray-300"
              } focus:outline-none focus:border-blue-500 ${
                darkMode ? "bg-gray-800" : ""
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.length > 0 && (
              <button
                className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
                onClick={() => setSearchQuery("")}
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L10 8.586l-2.293-2.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLanguages
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((language) => (
                <Link
                  href={`/language/${encodeURIComponent(language.name)}`}
                  key={language.name}
                  legacyBehavior={true}
                >
                  <a>
                    <LazyLoad height={400} once>
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
                        <h3 className="text-2xl font-bold mb-2">
                          {language.name}
                        </h3>
                        <p className="text-gray-500">{language.description}</p>
                      </div>
                    </LazyLoad>
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
