export default function Nav() {
  return (
    <nav className="flex gap-6 font-medium">
      <a href="/" className="hover:underline">
        Home
      </a>
      <a href="/projects" className="hover:underline">
        Projects
      </a>
      <a href="/about" className="hover:underline">
        About
      </a>
    </nav>
  );
}
