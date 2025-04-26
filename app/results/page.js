'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const score = Number(searchParams.get('score') || 0);

  let summary = "Your results are neutral.";
  if (score <= 6) {
    summary = "You show few or no Asperger’s traits.";
  } else if (score <= 13) {
    summary = "You may show some signs of Asperger’s traits.";
  } else if (score <= 20) {
    summary = "You show strong Asperger’s traits — consider speaking to a specialist.";
  } else {
    summary = "Score out of range. Please retake the quiz.";
  }

  return (
    <div className="min-h-screen flex flex-col justify-between p-6 text-center animate-fadeIn bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-black dark:text-white transition-all duration-500">

      {/* Results Section */}
      <div className="flex-grow flex flex-col justify-center items-center space-y-8">
        <h1 className="text-5xl font-bold tracking-wide">Your Results</h1>
        <p className="text-2xl text-gray-800 dark:text-gray-300">{summary}</p>
        <p className="text-lg italic text-gray-600 dark:text-gray-400">
          Your score: {score} / 20
        </p>

        <Link href="/quiz">
          <button className="w-60 mt-8 px-6 py-4 text-lg font-semibold bg-black dark:bg-white dark:text-black text-white rounded-lg shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">
            Retake Quiz
          </button>
        </Link>
      </div>

      {/* Email Form Section */}
      <div className="flex flex-col items-center space-y-4 p-8">
        <form
          action="https://formsubmit.co/dgosley22@gmail.com"
          method="POST"
          className="flex flex-col items-center space-y-4 w-full max-w-md"
        >
          {/* Redirect to Thank You */}
          <input
            type="hidden"
            name="_next"
            value="https://your-site.vercel.app/thank-you"
          />
          {/* Send score inside email */}
          <input type="hidden" name="score" value={score} />

          <input
            type="email"
            name="email"
            placeholder="Enter your email to receive your results"
            className="w-full px-5 py-4 bg-white text-black placeholder:text-black border border-gray-300 rounded-lg text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-4 text-lg font-semibold bg-black dark:bg-white dark:text-black text-white rounded-lg shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300"
          >
            Send Results to Email
          </button>
        </form>
      </div>

    </div>
  );
}
