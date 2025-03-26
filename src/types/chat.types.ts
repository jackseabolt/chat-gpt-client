export type ChatBlock = {
  type: "query" | "response";
  text: string;
  createdAt: string;
};
