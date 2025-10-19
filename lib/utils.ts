import { UIMessage } from "ai"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function getResponse(messages: UIMessage[]): Promise<ReadableStream<Uint8Array>> {
  const response = await fetch("/api/chat", {
    method: "POST",
    body: JSON.stringify({ messages }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.body as ReadableStream<Uint8Array>;
}