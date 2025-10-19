"use client";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Message, MessageContent } from "@/components/ai-elements/message";
import type { PromptInputMessage } from "@/components/ai-elements/prompt-input";
import { Input } from "./input";

export default function Chat() {
  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const handleSubmit = (message: PromptInputMessage) => {
    sendMessage({ role: "user", parts: [{ type: "text", text: message.text || "" }] });
  };

  return (
    <div className="mx-auto flex h-screen max-w-screen-md flex-col py-10">
      <div className="flex-1">
        {messages.map((message) => (
          <Message from={message.role} key={message.id}>
            <MessageContent>{message.parts.map((part) => part.type === "text" ? part.text : "").join("")}</MessageContent>
          </Message>
        ))}
      </div>
      <div>
        <Input onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
