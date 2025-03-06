import axios from "axios";

export type ChatRequest = {
  query: string;
};

/**
 * Logs the user into their account. Note
 * that this function does not capture errors.
 * Errors must be handled within the component.
 */
export async function submitChat({ query }: ChatRequest): Promise<void> {
  await axios.post(
    "http://localhost:8080/chat",
    {
      query,
    },
    {
      withCredentials: true, // Ensures cookies are sent/received
    }
  );
}
