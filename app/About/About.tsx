import React from "react";
import { SparklesIcon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <SparklesIcon className="w-10 h-10 text-blue-500 dark:text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-blue-500 dark:text-yellow-400">Tasbeeh Counter</span>
        </h1>
        <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
          The <strong>Tasbeeh Counter</strong> app is a modern digital tool for Muslims to keep track of their dhikr (remembrance of Allah). With a clean, responsive interface and light/dark mode support, it provides a smooth and distraction-free experience for your daily Tasbeeh sessions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">🕌 Purpose</h2>
            <p>
              Designed for simplicity and spirituality. Helps users maintain focus during dhikr sessions and stay consistent in their remembrance.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">📱 Features</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Easy counter reset and increment</li>
              <li>Light/Dark theme toggle</li>
              <li>Responsive on all devices</li>
              <li>Clean, user-friendly UI</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          Built with <span className="text-blue-500 dark:text-yellow-400 font-medium">Next.js</span>, <span className="text-blue-500 dark:text-yellow-400 font-medium">Tailwind CSS</span>, and ❤️ by Eng Abdalla.
        </div>
      </div>
    </div>
  );
};

export default About;
