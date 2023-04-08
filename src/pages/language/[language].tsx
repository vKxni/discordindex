import {
  FaDiscord,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaExclamationTriangle,
} from "react-icons/fa";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { LanguagePageProps } from "@/types";
import { Language, languages } from "@/utils/languages";
import { languageUrls } from "@/utils/urls";
import { Header } from "@/layout/Header";

const LanguagePage: NextPage<LanguagePageProps> = ({ selectedLanguage }) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    typeof window !== "undefined" && localStorage.getItem("darkMode") === "true"
  );
  const [discordCopied, setDiscordCopied] = useState<boolean>(false);

  if (!selectedLanguage) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="rounded-lg shadow-lg p-8 flex flex-col items-center bg-white">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-500 text-white mb-4">
              <FaExclamationTriangle className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-center mb-2">
              Oops! Page not found
            </h1>
            <p className="text-gray-700 text-center mb-4">
              The page you are looking for might have been removed or is
              temporarily unavailable.
            </p>
            <div className="mt-1 sm:mt-8">
              <Link href="/" legacyBehavior={true}>
                <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer">
                  <FaArrowLeft className="mr-2" />
                  Back to home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const imagePath = languageUrls[selectedLanguage!.name];
  const themeClass = darkMode ? "bg-gray-900 text-white" : "";
  const languageBoxClass = `rounded-lg shadow-lg p-8 flex flex-col items-center ${
    darkMode ? "bg-gray-800" : "bg-white"
  } mt-n12 !important`;

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedLanguage?.discord || "");
    setDiscordCopied(true);
    setTimeout(() => {
      setDiscordCopied(false);
    }, 2000);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  return (
    <>
      <Head>
        <title>{`${selectedLanguage.name} - Language`}</title>
        <meta
          name="description"
          content={`Want to learn ${selectedLanguage.name} and join their Discord server? Grab the link here!`}
        />
        <meta
          property="og:description"
          content="Want to learn a programming language and/or join their Discord server? Grab the link here!"
        />
        <meta
          property="og:title"
          content={`${selectedLanguage.name} - Programming Language`}
        />

        <meta
          property="og:image"
          content={`https://discordindex.vercel.app/${imagePath}`}
        />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta
          property="og:url"
          content={`https://discordindex.vercel.app/language/${encodeURIComponent(
            selectedLanguage.name
          )}`}
        />
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

export const getServerSideProps: GetServerSideProps<
  LanguagePageProps
> = async ({ params }) => {
  const { language } = params || {};
  const selectedLanguage =
    languages.find((lang: Language) => lang.name === language) || null;
  return {
    props: {
      selectedLanguage,
    },
  };
};

export default LanguagePage;
