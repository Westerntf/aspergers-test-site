'use client';

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 text-center animate-fadeIn">
      <h1 className="text-5xl font-bold tracking-wide">Thank You!</h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300 mt-6">
        We’ve received your email. Check your inbox soon!
      </p>
      <Link href="/">
        <button className="w-60 mt-8 px-6 py-4 text-lg font-semibold bg-black dark:bg-white dark:text-black text-white rounded-lg shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

