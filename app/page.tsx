"use client";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";

export default function Home() {
  const [normalCount, setNormalCount] = useState(0);
  const [sqlCount, setSqlCount] = useState(0);
  const textRef = useRef<HTMLTextAreaElement>(null);

  // --- ฟังก์ชันนับ ---
  const countNormal = (input: string): number => input.length;

  const countSQL = (input: string): number => {
    if (!input) return 0;
    const newlineCount = (input.match(/\n/g) || []).length;
    return input.length + newlineCount; // เพราะ \n นับเป็น 2 ตัว
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
      // รอให้ browser เพิ่ม \n เสร็จก่อน แล้วค่อยอัปเดต
      requestAnimationFrame(updateCount);
    }
  };

  // --- UI ---
  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-extrabold mb-4 text-gray-800">
        Character Counter
      </h1>

      <textarea
        ref={textRef}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="พิมพ์ข้อความที่นี่..."
        className="w-full max-w-xl h-48 p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 text-lg"
      />

      <div className="mt-6 w-full max-w-xl bg-white p-4 rounded-lg shadow-md">
        <div className="text-lg font-semibold text-gray-800 mb-2">
          🧮 สรุปจำนวนตัวอักษร:
        </div>

        <div className="flex justify-between text-gray-700 text-base">
          <span>แบบปกติ (Enter = 1):</span>
          <span className="font-bold text-blue-700">{normalCount}</span>
        </div>

        <div className="flex justify-between text-gray-700 text-base mt-1">
          <span>แบบ SQL Server LEN (Enter = 2):</span>
          <span className="font-bold text-green-700">{sqlCount}</span>
        </div>
      </div>
    </main>
  );
}
