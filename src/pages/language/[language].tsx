import { languages, Language } from "@/utils/languages";
import { useRouter } from "next/router";

const LanguagePage: React.FC = () => {
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
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img
          src={selectedLanguage.logo}
          alt={`${selectedLanguage.name} logo`}
          className="h-16 w-16 mr-4"
        />
        <h1 className="text-2xl font-bold">{selectedLanguage.name}</h1>
      </div>
      <p className="mb-4">{selectedLanguage.description}</p>
      <ul className="mb-4">
        <li>
          <span className="font-bold">Creator:</span>{" "}
          {selectedLanguage.creator}
        </li>
        <li>
          <span className="font-bold">Created:</span>{" "}
          {selectedLanguage.created}
        </li>
        <li>
          <span className="font-bold">Use case:</span>{" "}
          {selectedLanguage.usecase}
        </li>
        <li>
          <span className="font-bold">Facts:</span>
          <ul>
            {selectedLanguage.facts.map((fact: string) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </li>
        <li>
          <span className="font-bold">Discord server:</span>{" "}
          <a href={selectedLanguage.discord}>{selectedLanguage.discord}</a>{" "}
          <button onClick={handleCopy}>Copy</button>
        </li>
        <li>
          <span className="font-bold">Official website:</span>{" "}
          <a href={selectedLanguage.website}>{selectedLanguage.website}</a>
        </li>
      </ul>
    </div>
  );
};

export default LanguagePage;
