import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

export const authLoader = async () => {
  const isAuthenticated = Cookies.get("session-token");

  if (!isAuthenticated) {
    throw redirect("/login");
  }

  return null;
};
