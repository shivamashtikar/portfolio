import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  /* ------------------------------
   * 1️⃣  Type‑writer hook
   * ------------------------------ */
  const [text] = useTypewriter({
    words: ['Shivam Ashtikar', 'Software Engineer', 'AI Enthusiast'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  /* ------------------------------
   * 2️⃣  Scroll‑to‑content button
   * ------------------------------ */
  const scrollToContent = () => {
    const content = document.getElementById('content');
    if (content) content.scrollIntoView({ behavior: 'smooth' });
  };

  /* ------------------------------
   * 3️⃣  Render
   * ------------------------------ */
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-[60vh] px-6 py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* The typewriter headline */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
        Hi, I’m
        <span className="block text-6xl md:text-7xl font-bold text-blue-600 dark:text-blue-400 min-h-[3.75rem] md:min-h-[4.5rem]">
          {text}
          <Cursor />
        </span>
      </h1>

      {/* Short tagline */}
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
        Passionate about building scalable, high‑performance software. Currently working as an SDE II at Juspay.
      </p>

      {/* CTA / Scroll button */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll to content"
        className="absolute bottom-12 animate-bounce inline-flex items-center p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <ArrowDownIcon className="h-6 w-6" />
      </button>
    </section>
  );
}
