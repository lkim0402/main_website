'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-5 py-[0.375rem] w-fit cursor-pointer hover:text-indigo-300 transition-colors"
    >
      ← Back
    </button>
  );
}