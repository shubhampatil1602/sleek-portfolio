"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./button";
import { IconLoader } from "@tabler/icons-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred while sending the message");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <form
      className="mx-auto my-6 border-y border-neutral-100 px-4 py-12 shadow-sectionInset dark:border-neutral-800 dark:shadow-sectionInsetDark"
      onSubmit={handleSubmit}
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium tracking-tight text-neutral-600"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Max Mayfield"
            className="rounded-[6px] bg-transparent px-2 py-2 text-sm shadow-custom focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium tracking-tight text-neutral-600"
            htmlFor="name"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="mayfield@projectmax.com"
            className="rounded-[6px] bg-transparent px-2 py-2 text-sm shadow-custom focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-medium tracking-tight text-neutral-600"
            htmlFor="name"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="You are crazy good, never change."
            className="resize-none rounded-[6px] bg-transparent px-2 py-1 text-sm shadow-custom focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <IconLoader className="mx-auto size-5 animate-spin text-center" />
          ) : (
            "Send message"
          )}
        </Button>
      </div>
    </form>
  );
}
