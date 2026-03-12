import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  return (
    <header className="px-6 py-4 flex justify-between items-center gap-4">
      <Nav />
      <div className="flex gap-3">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
