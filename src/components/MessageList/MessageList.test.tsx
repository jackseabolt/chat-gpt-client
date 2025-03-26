import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MessageList from "./MessageList";
import { ChatBlock } from "../../types/chat.types";

describe("MessageList", () => {
  it("renders passed messages", () => {
    const chatBlocks: ChatBlock[] = [
      {
        text: "Text A",
        type: "query" as const,
        createdAt: "9:38:26 AM",
      },
    ];

    render(<MessageList chatBlocks={chatBlocks} />);
    const textA = screen.getByText("Text A");
    expect(textA).toBeInTheDocument();
  });
});
