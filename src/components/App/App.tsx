import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { authLoader } from "../../loaders/authLoader";
import { Login } from "../Login/Login";
import { Main } from "../Main/Main";
import { Layout } from "../Layout/Layout";
import SignUp from "../SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "home", element: <Main />, loader: authLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
