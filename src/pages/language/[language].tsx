import { useState } from "react";
import Link from "next/link";
import { Language, languages } from "@/utils/languages";
import { useRouter } from "next/router";
import { Header } from "@/layout/Header";
import { FaDiscord, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Head from "next/head";

const LanguagePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("darkMode") === "true"
  );
  const [discordCopied, setDiscordCopied] = useState(false);

  const router = useRouter();
  const { language } = router.query;

  const selectedLanguage = languages.find(
    (lang: Language) => lang.name === language
  );

  if (!selectedLanguage) {
    return <div>Language not found</div>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedLanguage.discord);
    setDiscordCopied(true);
    setTimeout(() => {
      setDiscordCopied(false);
    }, 2000);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  const themeClass = darkMode ? "bg-gray-900 text-white" : "";
  const languageBoxClass = `rounded-lg shadow-lg p-8 flex flex-col items-center ${
    darkMode ? "bg-gray-800" : "bg-white"
  } mt-n12 !important`;

  return (
    <>
      <Head>
        <title>{`${selectedLanguage.name} - Language`}</title>
        <meta name="description" content={selectedLanguage.description} />
        <meta
          property="og:title"
          content={`${selectedLanguage.name} - Programming Language`}
        />
        <meta
          property="og:description"
          content={selectedLanguage.description}
        />
        <meta property="og:image" content={selectedLanguage.logo} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta
          property="og:image:alt"
          content={`${selectedLanguage.name} logo`}
        />
        <meta property="og:site_name" content="Discord Language Index" />
      </Head>
      <div className={`${themeClass} min-h-screen`}>
        <Header darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
        <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className={languageBoxClass}>
            <img
              src={selectedLanguage.logo}
              alt={`${selectedLanguage.name} logo`}
              className="h-32 w-32 object-contain mb-4"
            />
            <h1
              className={`text-3xl font-bold text-center mb-2 ${
                darkMode ? "text-white" : ""
              }`}
            >
              {selectedLanguage.name}
            </h1>
            <div className="flex flex-col items-center mb-4">
              <a
                onClick={handleCopy}
                className={`bg-[#7289da] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer ${
                  darkMode ? "text-white" : ""
                }`}
              >
                <FaDiscord className="mr-2" />
                {discordCopied ? "Link copied!" : selectedLanguage.discord}
              </a>
            </div>
            <div className="flex flex-col items-center mb-4">
              <a
                href={selectedLanguage.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer ${
                  darkMode ? "text-white" : ""
                }`}
              >
                <FaExternalLinkAlt className="mr-2" />
                {selectedLanguage.website}
              </a>
            </div>
            <div className="card mx-auto p-4 mb-4">
              <ul className={`mb-4 ${darkMode ? "text-white" : ""}`}>
                <li className="mb-2">
                  <span className="font-bold">Creator:</span>{" "}
                  {selectedLanguage.creator}
                </li>
                <li className="mb-2">
                  <span className="font-bold">Created:</span>{" "}
                  {selectedLanguage.created}
                </li>
                <li className="mb-2">
                  <span className="font-bold">Use case:</span>{" "}
                  {selectedLanguage.usecase}
                </li>
                <li className="mb-2">
                  <span className="font-bold">Facts:</span>
                  <ul className="list-disc ml-4">
                    {selectedLanguage.facts.map((fact: string) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className={`mt-1 sm:mt-8 ${darkMode ? "text-white" : ""}`}>
              <Link href="/" legacyBehavior={true}>
                <a
                  className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer ${
                    darkMode ? "text-white hover:text-white" : ""
                  }`}
                >
                  <FaArrowLeft className="mr-2" />
                  Back to home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguagePage;
