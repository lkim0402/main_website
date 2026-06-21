"use server";

import { supabase } from "../../lib/supabase";
import { revalidatePath } from "next/cache";

// fetches all the rows from the db
export async function getEntries() {
  const { data, error } = await supabase
    .from("guestbook")
    .select("id, name, message, created_at")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data ?? [];
}

// called when someone adds a row in the table (signs)
export async function addEntry(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !message) return;

  const { error } = await supabase.from("guestbook").insert({ name, message });
  if (error) throw new Error(error.message);

  revalidatePath("/guestbook");
}
