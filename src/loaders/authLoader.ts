import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

export const authLoader = async () => {
  const isAuthenticated = Cookies.get("session-token");

  console.log("IS AUTHNETICATED", isAuthenticated);

  if (!isAuthenticated) {
    throw redirect("/login");
  }

  return null;
};
