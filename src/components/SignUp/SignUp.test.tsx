import { describe, it, expect, beforeEach } from "vitest";
import SignUp from "./SignUp";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../utils/testUtils";

describe("SignUp", () => {
  beforeEach(() => {
    renderWithRouter(<SignUp />);
  });

  it("renders inputs", async () => {
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  describe("validation", () => {
    describe("on submit", () => {
      it("validates missing first name", async () => {
        const signUpButton = screen.getByText("Sign Up");
        await userEvent.click(signUpButton);
        expect(screen.getByText("First name required")).toBeInTheDocument();
      });

      it("validates missing last name", async () => {
        const signUpButton = screen.getByText("Sign Up");
        await userEvent.click(signUpButton);
        expect(screen.getByText("Last name required")).toBeInTheDocument();
      });

      it("validates missing username", async () => {
        const signUpButton = screen.getByText("Sign Up");
        await userEvent.click(signUpButton);
        expect(screen.getByText("Username required")).toBeInTheDocument();
      });

      it("validates missing password", async () => {
        const signUpButton = screen.getByText("Sign Up");
        await userEvent.click(signUpButton);
        expect(screen.getByText("Password required")).toBeInTheDocument();
      });
    });

    describe("post submit", () => {
      it("removes error message after submission blocked by validation", async () => {
        const signUpButton = screen.getByText("Sign Up");
        await userEvent.click(signUpButton);
        expect(screen.getByText("First name required")).toBeInTheDocument();
        const input = screen.getByLabelText("First Name");
        await userEvent.type(input, "Bob");
        expect(
          screen.queryByText("First name required")
        ).not.toBeInTheDocument();
      });
    });
  });

  describe("form functionality", () => {
    it("shows text in the first name input", async () => {
      const input = screen.getByLabelText("First Name");
      await userEvent.type(input, "Bob");
      expect(input).toHaveValue("Bob");
    });

    it("shows text in the last name input", async () => {
      const input = screen.getByLabelText("Last Name");
      await userEvent.type(input, "Smith");
      expect(input).toHaveValue("Smith");
    });

    it("shows text in the username input", async () => {
      const input = screen.getByLabelText("Username");
      await userEvent.type(input, "myuser");
      expect(input).toHaveValue("myuser");
    });

    it("shows text in the last password input", async () => {
      const input = screen.getByLabelText("Password");
      await userEvent.type(input, "mypass");
      expect(input).toHaveValue("mypass");
    });
  });
});
