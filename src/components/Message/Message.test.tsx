import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Message from "./Message";

describe("Message", () => {
  it("Displays the content of the message", () => {
    const props = {
      type: "query" as const,
      text: "Some test text",
      createdAt: "9:38:26 AM",
    };

    render(<Message message={props} />);
    const createdAt = screen.getByText("9:38:26 AM");
    const text = screen.getByText("Some test text");
    expect(text).toBeInTheDocument();
    expect(createdAt).toBeInTheDocument();
  });
});
