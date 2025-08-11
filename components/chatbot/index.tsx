"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useChat } from "@ai-sdk/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IconLoader, IconSend } from "@tabler/icons-react";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

// Typing Indicator Component - Memoized to prevent re-renders
const TypingIndicator = React.memo(() => {
  return (
    <div className={`mb-4 text-left`}>
      <div
        className={`text-secondary-foreground inline-block rounded-[6px] px-3 py-2`}
      >
        <div className="flex items-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 animate-pulse rounded-full bg-current opacity-60"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
TypingIndicator.displayName = "TypingIndicator";

// Message Bubble Component - Memoized to prevent unnecessary re-renders
interface MessageBubbleProps {
  message: { role: string; content: string };
}
const MessageBubble = React.memo(({ message }: MessageBubbleProps) => {
  const content = message.content;
  const getMessageDimensions = () => {
    return {
      width: "fit-content",
      maxWidth: "80%",
    };
  };
  const dimensions = message.role !== "user" ? getMessageDimensions() : {};

  return (
    <div
      className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}
    >
      <div
        className={`inline-block rounded-[6px] px-3 py-2 text-sm ${
          message.role === "user"
            ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white dark:text-white"
            : "bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
        }`}
        style={dimensions}
      >
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={{
              code({
                inline,
                className,
                children,
                ...props
              }: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
              > & { inline?: boolean }) {
                return inline ? (
                  <code {...props} className="rounded bg-neutral-200 px-1">
                    {children}
                  </code>
                ) : (
                  <pre className="rounded bg-neutral-200 p-2">
                    <code className={className}>{children}</code>
                  </pre>
                );
              },
              ul: ({ children, ...props }) => (
                <ul {...props} className="list-disc pl-5 text-left">
                  {children}
                </ul>
              ),
              ol: ({ children, ...props }) => (
                <ol {...props} className="list-decimal pl-5 text-left">
                  {children}
                </ol>
              ),
              li: ({ children, ...props }) => (
                <li {...props} className="mb-1">
                  {children}
                </li>
              ),
              a: ({ children, ...props }) => (
                <a
                  {...props}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {children}
                </a>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
});
MessageBubble.displayName = "MessageBubble";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    reload,
    error,
  } = useChat({
    api: "/api/gemini",
    initialMessages: [
      {
        id: "initial",
        role: "assistant",
        content:
          "Hi! I am Shubbi, ask me anything about Shubham Patil (projects, work, blogs, etc.)",
      },
    ],
  });

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div className="px-6 py-3">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-10 w-20 items-center justify-center rounded-[6px] border border-neutral-200 bg-neutral-100 text-xs font-semibold text-neutral-700 shadow-buttonLightInset transition-all duration-200 hover:bg-neutral-200 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-buttonDarkInset dark:hover:bg-neutral-700 sm:px-4 sm:text-sm"
          >
            Hey
            <motion.span
              animate={isOpen ? { rotate: 15 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-1"
            >
              👋
            </motion.span>
          </motion.button>
        </PopoverTrigger>
        <PopoverContent className="relative right-1 h-[35rem] w-[23rem] overflow-hidden rounded-[6px] border bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800 sm:w-[25.5rem]">
          <div className="flex h-full flex-col justify-between">
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-4">
                {messages?.map((message, idx) => (
                  <MessageBubble key={message.id || idx} message={message} />
                ))}
                {isLoading && messages.length ? (
                  <TypingIndicator key="typing-indicator" />
                ) : null}
                {isLoading && messages.length === 0 && (
                  <div className="flex w-full items-center justify-center gap-3">
                    <IconLoader className="size-5 animate-spin text-primary" />
                    <button className="underline" onClick={() => stop()}>
                      abort
                    </button>
                  </div>
                )}
                {error && (
                  <div className="flex w-full items-center justify-center gap-3">
                    <div>An error occurred</div>
                    <button className="underline" onClick={() => reload()}>
                      retry
                    </button>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="mt-4">
              <div className="relative">
                <form onSubmit={handleSubmit}>
                  <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="w-full rounded-[6px] bg-white px-4 py-3 pr-[90px] text-sm text-neutral-700 shadow-custom focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200"
                    type="text"
                  />
                  <button
                    disabled={isLoading}
                    className="absolute right-1 top-[0.3rem] rounded-[6px] border border-neutral-200 bg-neutral-100 px-4 py-1 text-sm text-neutral-700 shadow-buttonLightInset transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-buttonDarkInset"
                  >
                    <IconSend />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
