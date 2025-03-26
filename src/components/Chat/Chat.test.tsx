import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chat from "./Chat";

describe("Chat", () => {
  it("displays content", async () => {
    render(<Chat />);
    const input = await screen.findByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("clears input value on submission", async () => {
    render(<Chat />);
    const input: HTMLInputElement = await screen.findByRole("textbox");
    await userEvent.type(input, "Hello");
    expect(input.value).toBe("Hello");
    await userEvent.keyboard("{Enter}");
    expect(input.value).toBe("");
  });
});
