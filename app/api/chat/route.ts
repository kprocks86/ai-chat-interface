import { anthropic } from "@ai-sdk/anthropic";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export async function POST(request: Request) {
  const { messages }: { messages: UIMessage[] } = await request.json();

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
