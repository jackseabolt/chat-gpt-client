import axios from "axios";

export type LoginRequest = {
  username: string;
  password: string;
};

/**
 * Logs the user into their account. Note
 * that this function does not capture errors.
 * Errors must be handled within the component.
 */
export async function login({
  username,
  password,
}: LoginRequest): Promise<void> {
  await axios.post("http://localhost:8080/auth/login", {
    username,
    password,
  });
}

export type SignUpRequest = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

/**
 * Signs the user up for an account. Note
 * that this function does not capture errors.
 * Errors must be handled within the component.
 */
export async function signUp({
  firstName,
  lastName,
  username,
  password,
}: SignUpRequest): Promise<void> {
  await axios.post("http://localhost:8080/auth/signup", {
    firstName,
    lastName,
    username,
    password,
  });
}
