import { redirect } from "react-router-dom";

export const authLoader = async () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    throw redirect("/login");
  }

  return null;
};
