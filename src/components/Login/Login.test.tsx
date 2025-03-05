import { describe, it, expect } from "vitest";
import { Login } from "./Login";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../utils/testUtils";

describe("Login", () => {
  it("displays form content", () => {
    renderWithRouter(<Login />, {});
    expect(screen.getByText("Log In")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
  });

  it("validates missing username and password", async () => {
    renderWithRouter(<Login />, {});
    const buttons = screen.getAllByRole("button");
    await userEvent.click(buttons[0]);
    expect(screen.getByText("Username required")).toBeInTheDocument();
    expect(screen.getByText("Password required")).toBeInTheDocument();
  });

  it("validates password when username is filled", async () => {
    renderWithRouter(<Login />, {});
    const usernameInput = screen.getByLabelText("Username");
    await userEvent.type(usernameInput, "myuser");
    const button = screen.getByText("Log In");
    await userEvent.click(button);
    expect(screen.queryByText("Username required")).not.toBeInTheDocument();
    expect(screen.getByText("Password required")).toBeInTheDocument();
  });

  it("validates username when password is filled", async () => {
    renderWithRouter(<Login />, {});
    const passwordInput = screen.getByLabelText("Password");
    await userEvent.type(passwordInput, "mypass");
    const button = screen.getByText("Log In");
    await userEvent.click(button);
    expect(screen.getByText("Username required")).toBeInTheDocument();
    expect(screen.queryByText("Password required")).not.toBeInTheDocument();
  });

  it("removes password validation warning when input is corrected", async () => {
    renderWithRouter(<Login />, {});
    const button = screen.getByText("Log In");
    await userEvent.click(button);
    expect(screen.getByText("Password required")).toBeInTheDocument();
    const passwordInput = screen.getByLabelText("Password");
    await userEvent.type(passwordInput, "mypass");
    expect(screen.queryByText("Password required")).not.toBeInTheDocument();
  });
});
