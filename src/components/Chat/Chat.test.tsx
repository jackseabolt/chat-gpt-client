import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Chat from "./Chat";

describe("Chat", () => {
  it("displays content", async () => {
    render(<Chat />);
    const input = await screen.findByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});
