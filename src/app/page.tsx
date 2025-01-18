'use client';

import { counterState } from "@/Recoil/atoms";
import { useRecoilState } from "recoil";

export default function Home() {
  const [countValue, setCountValue] = useRecoilState(counterState)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>
        counter: {countValue}
      </h1>

      <button onClick={() => setCountValue(countValue + 1)}>
        increment
      </button>

      <button onClick={() => setCountValue(countValue - 1)}>
        decrement
      </button>
    </div>
  );
}
