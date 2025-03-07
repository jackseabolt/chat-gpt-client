import { useState } from "react";
import { splitAndCapitalize } from "../../utils/stringUtils";
import { login } from "../../api/authApi";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";
import { useNavigate, Link } from "react-router-dom";

/**
 * Login form shown on the home screen.
 * Handles user submission of log in credentials.
 */
export function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    submission: "",
  });
  const [submitted, setSubmitted] = useState(true);

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));

    if (e.target.value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: "",
      }));
    } else if (submitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: splitAndCapitalize(`${e.target.name} required`),
      }));
    }

    if (submitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        submission: "",
      }));
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!values.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password required",
      }));
    }

    if (!values.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username required",
      }));
    }

    if (!values.username || !values.password) {
      return;
    }

    try {
      await login({
        username: values.username,
        password: values.password,
      });

      navigate("/home");
    } catch (error) {
      console.error("Error", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        submission: "Incorrect credentials",
      }));
    }
  };

  return (
    <main className="bg-white flex items-center justify-center w-full">
      <form className="w-[90%] md:w-[300px]" onSubmit={handleSubmit}>
        <Input
          value={values.username}
          onChange={handleSetValue}
          name="username"
          label="Username"
          styles="pb-6"
          error={errors.username}
        />
        <Input
          value={values.password}
          onChange={handleSetValue}
          name="password"
          label="Password"
          type="password"
          styles="pb-8"
          error={errors.password}
        />
        <Button label="Log In" type="submit" onClick={() => {}} />
        {errors.submission && (
          <p className="text-red-500 text-center pt-2">{errors.submission}</p>
        )}
        <p className="text-center mt-7">
          <Link className="underline" to="/signup">
            Create an account
          </Link>
        </p>
      </form>
    </main>
  );
}
