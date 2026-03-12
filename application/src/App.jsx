export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="m-4 px-4 py-2 border"
      >
        Toggle Dark
      </button>

      <h1 className="p-4 text-3xl">Dark Mode funktioniert 🌗</h1>
    </div>
  );
}
