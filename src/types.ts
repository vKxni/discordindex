import { Language } from "@/utils/languages";

export interface LanguagePageProps {
  selectedLanguage: Language | null;
}

export interface LanguageUrls {
  [key: string]: string;
}

export interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}
