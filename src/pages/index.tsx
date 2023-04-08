import Link from "next/link";
import { languages } from "@/utils/languages";
import { FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="mx-auto py-4 px-4 sm:px-6 lg:px-8 max-w-screen-xl flex justify-between items-center">
          <h1 className="text-2xl font-bold">Discord Programming Index</h1>
          <a
            href="https://github.com/vKxni/discordindex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition duration-200 ease-in-out"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language) => (
            <Link
              href={`/language/${encodeURIComponent(language.name)}`}
              key={language.name}
              legacyBehavior={true}
            >
              <a>
                <div className="p-6 border rounded-md shadow-md hover:bg-white hover:shadow-lg transition duration-200 ease-in-out">
                  <div className="h-20 w-20 mx-auto mb-4">
                    <img
                      src={language.logo}
                      alt={`${language.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-center mb-2">{language.name}</h2>
                  <p className="text-gray-700 text-center">{language.description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
