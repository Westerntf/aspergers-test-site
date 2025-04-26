'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 text-center space-y-8 animate-fadeIn">
      <h1 className="text-5xl font-bold tracking-wide leading-tight">
        Welcome to the Asperger’s Assessment
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
        Take a quick and easy quiz to better understand your neurodivergent traits.
      </p>
      <Link href="/quiz">
        <button className="w-60 px-6 py-4 text-lg font-semibold bg-black dark:bg-white dark:text-black text-white rounded-lg shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">
          Start Quiz
        </button>
      </Link>
    </main>
  );
}
