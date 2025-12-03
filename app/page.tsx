"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHeart, FaStar } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function HyperUltimateDocs() {
  const [counter, setCounter] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-950 text-white font-sans">
      {/* ---------------- HEADER ---------------- */}
      <header className="sticky top-0 z-50 py-4 px-8 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="flex items-center gap-4 max-w-7xl mx-auto">
          <FaReact className="w-8 h-8 text-[#61DBFB] animate-spin-slow" />
          <SiNextdotjs className="w-8 h-8 text-white animate-pulse" />
          <h1 className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-[#61DBFB] to-[#06b6d4] bg-clip-text text-transparent">
            Hyper Ultimate Docs
          </h1>
        </div>
      </header>

      <div className="h-32" />

      {/* ---------------- HERO ---------------- */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-8 py-20 text-center space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-black bg-linear-to-r from-[#61DBFB] to-[#06b6d4] bg-clip-text text-transparent"
        >
          React + Next.js Hyper Ultimate
        </motion.h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Ultra long, interactive, sexy one-page SPA docs. Click header icons to
          scroll smoothly to sections.
        </p>
      </section>

      <div className="h-32" />

      {/* ---------------- SECTIONS ---------------- */}
      <main className="max-w-7xl mx-auto space-y-56 px-8">
        <Section
          id="react"
          title="React Basics"
          icon={<FaReact className="text-[#61DBFB] w-8 h-8" />}
        >
          <ul className="text-gray-400 space-y-3 text-lg">
            <li>JSX and Virtual DOM</li>
            <li>Components & Props</li>
            <li>State Management</li>
            <li>Hooks: useState, useEffect, useMemo, useCallback</li>
            <li>Context API</li>
            <li>Conditional Rendering & Events</li>
          </ul>
        </Section>

        <Section
          id="next"
          title="Next.js Full Guide"
          icon={<SiNextdotjs className="text-white w-8 h-8" />}
        >
          <ul className="text-gray-400 space-y-3 text-lg">
            <li>File-based Routing</li>
            <li>Server Components</li>
            <li>SSR / SSG / ISR</li>
            <li>Middleware</li>
            <li>API Routes</li>
            <li>App Router Concepts</li>
          </ul>
        </Section>

        <Section
          id="play"
          title="Interactive Playground"
          icon={<FaStar className="text-yellow-400 w-8 h-8" />}
        >
          <div className="flex flex-col md:flex-row gap-10 mt-4 text-lg">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCounter((c) => c - 1)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-800"
              >
                -
              </button>
              <div className="text-xl font-bold px-8 py-2 bg-gray-800 rounded-lg">
                {counter}
              </div>
              <button
                onClick={() => setCounter((c) => c + 1)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-800"
              >
                +
              </button>
            </div>

            <button
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-3 px-6 py-3 border rounded-xl hover:bg-gray-800"
            >
              <FaHeart
                className={`w-6 h-6 ${
                  liked ? "text-pink-500 animate-pulse" : "text-gray-400"
                }`}
              />{" "}
              {liked ? "Liked" : "Like"}
            </button>
          </div>
        </Section>

        <Section
          id="deep"
          title="Deep Concepts"
          icon={<SiTypescript className="text-blue-500 w-8 h-8" />}
        >
          <ul className="text-gray-400 space-y-3 text-lg">
            <li>Reconciliation Algorithm</li>
            <li>Server Context in Next</li>
            <li>Parallel Routing</li>
            <li>Streaming + Suspense</li>
            <li>Optimizing React Rendering</li>
          </ul>
        </Section>

        <Section
          id="performance"
          title="Performance Optimization"
          icon={<FaStar className="text-yellow-400 w-8 h-8" />}
        >
          <ul className="text-gray-400 space-y-3 text-lg">
            <li>Memoization Strategies</li>
            <li>Code Splitting</li>
            <li>Lazy Loading</li>
            <li>React Server Components</li>
            <li>Next.js Image Optimization</li>
            <li>Reducing Bundle Size</li>
          </ul>
        </Section>

        <Section
          id="resources"
          title="Useful Resources"
          icon={<SiTailwindcss className="text-sky-400 w-8 h-8" />}
        >
          <ul className="text-gray-400 space-y-3 text-lg">
            <li>React Docs</li>
            <li>Next.js Docs</li>
            <li>TailwindCSS Docs</li>
            <li>TypeScript Handbook</li>
          </ul>
        </Section>

        <Section
          id="faq"
          title="FAQ"
          icon={<FaStar className="text-yellow-400 w-8 h-8" />}
        >
          <ul className="text-gray-400 space-y-3 text-lg">
            <li>React vs Next?</li>
            <li>What is Server Component?</li>
            <li>How to optimize performance?</li>
            <li>How routing works?</li>
          </ul>
        </Section>
      </main>

      <footer className="text-center py-20 text-gray-500 text-lg">
        Made with ❤️ — Hyper Ultimate SPA Docs
      </footer>
    </div>
  );
}
interface SectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}
function Section({ id, title, icon, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-8 py-20 my-32 bg-white/5 border border-white/10 rounded-3xl shadow-2xl transform transition-transform duration-300 hover:-translate-y-4 hover:shadow-3xl"
    >
      <div className="flex items-center gap-4 mb-8">
        {icon}
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
