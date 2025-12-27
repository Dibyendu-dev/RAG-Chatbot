"use client";

import { Fragment, useState } from "react";
import { useChat } from "@ai-sdk/react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";

import {
  PromptInput,
  PromptInputBody,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";

import { Message, MessageContent } from "@/components/ai-elements/message";
import { Loader } from "@/components/ai-elements/loader";
// import { Response } from "@/components/ai-elements/response";

export default function Page() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    if (!message.text.trim()) return;

    sendMessage({ text: message.text });
    setInput("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full h-[calc(100vh-4rem)]">
      <div className="flex flex-col h-full">
        {/* Conversation */}
        <Conversation className="flex-1 overflow-hidden">
          <ConversationContent className="px-6 py-8 space-y-6">
            {messages.length === 0 && (
              <div className="mt-24 text-center text-zinc-400 text-sm">
                Ask anything. I’m listening 👋
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id}>
                {message.parts.map((part, i) => {
                  if (part.type !== "text") return null;

                  return (
                    <Fragment key={`${message.id}-${i}`}>
                      <Message from={message.role}>
                        <MessageContent>
                          {/* <Response>{part.text}</Response> */}
                          {part.text}
                        </MessageContent>
                      </Message>
                    </Fragment>
                  );
                })}
              </div>
            ))}

            {(status === "submitted" || status === "streaming") && <Loader />}
          </ConversationContent>

          <ConversationScrollButton />
        </Conversation>

        {/* ChatGPT-style Input Bar */}
        <PromptInput
          onSubmit={handleSubmit}
          className="mt-4"
          
        >
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools></PromptInputTools>
            <PromptInputSubmit disabled={!input && !status} status={status} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
}
