import PageTitle from "../../components/PageTitle";
import { getEntries } from "./actions";
import GuestbookForm from "./GuestbookForm";

export const revalidate = 0;

export default async function GuestBook() {
  const entries = await getEntries();

  const oldest =
    entries.length > 0
      ? new Date(entries[entries.length - 1].created_at)
      : null;
  const since = oldest
    ? oldest.toLocaleDateString("en-US", { year: "numeric", month: "short" })
    : null;

  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      <PageTitle
        title="guestbook"
        description="Feel free to write anything or say hi :) "
      />
      {since && (
        <p className="microsoftFont text-md mb-7 border-b border-indigo-300/50 text-indigo-300/50">
          {entries.length} {entries.length === 1 ? "entry" : "entries"} since{" "}
          {since}
        </p>
      )}

      <div className="flex-1 overflow-y-auto [scrollbar-width:none]">
        <div className="flex flex-col gap-4 pb-4">
          {entries.length === 0 && (
            <p className="text-sm text-indigo-300/60">
              no entries yet — be the first!
            </p>
          )}
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="border-b border-indigo-300/10 pb-4 last:border-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="microsoftFont text-sm font-semibold text-indigo-200">
                  {entry.name}
                </span>
                <span className="text-xs text-indigo-300/40">
                  {new Date(entry.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="mt-1 font-mono text-sm whitespace-pre-wrap text-[#fffdf7]/80">
                {entry.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      <GuestbookForm />
    </div>
  );
}
