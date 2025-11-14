"use client";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

export default function Home() {
  const [normalCount, setNormalCount] = useState(0);
  const [sqlCount, setSqlCount] = useState(0);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const countNormal = (input: string): number => input.length;

  const countSQL = (input: string): number => {
    if (!input) return 0;
    const newlineCount = (input.match(/\n/g) || []).length;
    return input.length + newlineCount;
  };

  const updateCount = () => {
    const value = textRef.current?.value ?? "";
    setNormalCount(countNormal(value));
    setSqlCount(countSQL(value));
  };

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateCount();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      requestAnimationFrame(updateCount);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">

      {/* H1 สำหรับ SEO */}
      <h1 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">
        นับจำนวนตัวอักษร
      </h1>

      {/* คำอธิบาย SEO */}
      <p className="max-w-xl text-center text-gray-600 mb-6">
        เว็บสำหรับนับจำนวนตัวอักษรออนไลน์
      </p>

      <textarea
        ref={textRef}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="พิมพ์ข้อความที่นี่..."
        className="w-full max-w-screen-xl h-48 p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 text-lg"
        aria-label="พื้นที่พิมพ์ข้อความเพื่อนับจำนวนตัวอักษร"
      />

      <section
        className="mt-6 w-full max-w-xl bg-white p-4 rounded-lg shadow-md"
        aria-label="ผลการนับตัวอักษร"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          🧮 สรุปจำนวนตัวอักษร
        </h2>

        <div className="flex justify-between text-gray-700 text-base">
          <span>แบบปกติ:</span>
          <span className="font-bold text-blue-700">{normalCount}</span>
        </div>

        <div className="flex justify-between text-gray-700 text-base mt-1">
          <span>แบบ SQL Server LEN (Enter = 2):</span>
          <span className="font-bold text-green-700">{sqlCount}</span>
        </div>
      </section>
    </main>
  );
}
