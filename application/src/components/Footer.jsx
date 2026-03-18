import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

export default function Footer() {
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  const [inputSequence, setInputSequence] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...inputSequence, e.key];
      setInputSequence(newSequence.slice(-konamiCode.length));

      if (
        newSequence.slice(-konamiCode.length).join("") === konamiCode.join("")
      ) {
        setKonamiUnlocked(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputSequence]);

  const handleCarrotClick = () => {
    if (konamiUnlocked) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      console.log("You may touch the carrot, if you know the Konami-Code?");
      alert(
        "Don’t touch my carrot, unless you know how the bunny hops...up, up, down...?",
      );
    }
  };

  return (
    <footer className="px-6 py-6 text-sm text-center opacity-70 flex flex-col gap-5">
      <div className="flex  justify-between gap-2 w-">
        <button
          onClick={handleCarrotClick}
          className="inline-flex items-center transition-transform duration-200 hover:scale-110"
        >
          <img src="/moehre.webp" alt="icon" className="w-9 h-6" />
        </button>
        <span>{new Date().getFullYear()} Melanie Heß</span>
        <Link
          to="/impressum"
          className="underline-offset-4 hover:opacity-100 transition"
        >
          Impressum
        </Link>
      </div>
    </footer>
  );
}
