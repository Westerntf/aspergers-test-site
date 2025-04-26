'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  { question: "Do you find it difficult to maintain eye contact with people?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you prefer routines and dislike unexpected changes?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you often focus deeply on topics that interest you?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you find small talk difficult or meaningless?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you sometimes not realize when someone is bored or annoyed with you?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you have very strong reactions to sensory input (lights, sounds, textures)?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you often need time alone to recharge after social interactions?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you prefer to communicate by writing rather than speaking?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you often notice small details that others miss?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you find it hard to imagine what others are thinking or feeling?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you sometimes take things literally and miss implied meanings?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you feel overwhelmed in busy places like malls or airports?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you have strict routines that you follow every day?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you struggle with interpreting facial expressions?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you prefer to spend time with a few close friends rather than large groups?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you dislike being touched unexpectedly?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you often lose track of time when doing something you enjoy?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you feel confused by jokes, sarcasm, or metaphors?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you find it hard to manage several tasks at once?", options: ["Yes", "No"], score: [1, 0] },
  { question: "Do you have specific interests that you talk about a lot?", options: ["Yes", "No"], score: [1, 0] },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedIndex = localStorage.getItem('quizIndex');
    const savedScore = localStorage.getItem('quizScore');
    if (savedIndex && savedScore) {
      setCurrent(Number(savedIndex));
      setScore(Number(savedScore));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('quizIndex', current);
      localStorage.setItem('quizScore', score);
    }
  }, [current, score, isLoaded]);

  const handleAnswer = (index) => {
    const nextScore = score + questions[current].score[index];
    if (current + 1 < questions.length) {
      setScore(nextScore);
      setCurrent(current + 1);
    } else {
      localStorage.removeItem('quizIndex');
      localStorage.removeItem('quizScore');
      router.push(`/results?score=${nextScore}`);
    }
  };

  if (!isLoaded) return null; // Prevent early render flash

  return (
    <div className="min-h-screen flex flex-col justify-between p-6 text-center animate-fadeIn bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-black dark:via-gray-900 dark:to-gray-800 text-black dark:text-white transition-all duration-500">

      {/* Question Section */}
      <div className="flex-grow flex flex-col justify-center items-center space-y-8">
        <h1 className="text-5xl font-bold tracking-wide">
          Question {current + 1} of {questions.length}
        </h1>

        <h2 className="text-2xl text-gray-800 dark:text-gray-300 max-w-2xl leading-relaxed">
          {questions[current].question}
        </h2>

        <div className="flex flex-col gap-6 items-center">
          {questions[current].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="w-60 px-6 py-4 text-lg font-semibold bg-black dark:bg-white dark:text-black text-white rounded-lg shadow-lg hover:scale-105 hover:opacity-90 transition-all duration-300"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar at the bottom */}
      <div className="w-full">
        <div className="bg-gray-300 h-3 w-full">
          <div
            className="bg-blue-600 h-3 transition-all duration-500"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

    </div>
  );
}
