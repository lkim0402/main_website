"use client";

import { useState } from "react";
import { addEntry } from "./actions";

export default function GuestbookForm() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute right-0 bottom-0 left-0 flex flex-col items-center pb-2">
      {open && (
        <form
          action={async (formData) => {
            await addEntry(formData);
            setOpen(false);
          }}
          className="flex w-full max-w-md flex-col gap-3 border border-indigo-300/20 bg-[#232338] p-4"
        >
          <input
            name="name"
            placeholder="your name"
            maxLength={50}
            required
            className="border border-indigo-300/30 bg-[#232338] px-3 py-2 text-sm text-[#fffdf7] placeholder-indigo-300/50 outline-none focus:border-indigo-300/60"
          />
          <textarea
            name="message"
            placeholder="leave a message..."
            maxLength={300}
            required
            rows={3}
            className="resize-none border border-indigo-300/30 bg-[#232338] px-3 py-2 text-sm text-[#fffdf7] placeholder-indigo-300/50 outline-none focus:border-indigo-300/60"
          />
          <button
            type="submit"
            className="microsoftFont self-end border border-indigo-300/40 px-4 py-1.5 text-sm text-indigo-200 transition-colors hover:bg-indigo-300/10"
          >
            sign
          </button>
        </form>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="microsoftFont text-md cursor-pointer border border-indigo-300/30 px-3 py-1 text-indigo-300/60 transition-all hover:border-indigo-300 hover:bg-indigo-300/10 hover:text-indigo-300"
      >
        {open ? "▼ close" : "▲ sign the guestbook"}
      </button>
    </div>
  );
}
