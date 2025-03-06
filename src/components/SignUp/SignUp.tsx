import { useState } from "react";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import { splitAndCapitalize } from "../../utils/stringUtils";
import { signUp } from "../../api/authApi";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    submission: "",
  });
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevVals) => ({
      ...prevVals,
      [e.target.name]: e.target.value,
    }));

    if (e.target.value) {
      setErrors((prevVal) => ({
        ...prevVal,
        [e.target.name]: "",
      }));
    } else if (submitted) {
      setErrors((prevVal) => ({
        ...prevVal,
        [e.target.name]: splitAndCapitalize(`${e.target.name} is required`),
      }));
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (!values.firstName) {
      setErrors((prevVal) => ({
        ...prevVal,
        firstName: "First name required",
      }));
    }

    if (!values.lastName) {
      setErrors((prevVal) => ({
        ...prevVal,
        lastName: "Last name required",
      }));
    }

    if (!values.username) {
      setErrors((prevVal) => ({
        ...prevVal,
        username: "Username required",
      }));
    }

    if (!values.password) {
      setErrors((prevVal) => ({
        ...prevVal,
        password: "Password required",
      }));
    }

    if (
      !values.firstName ||
      !values.lastName ||
      !values.username ||
      !values.password
    ) {
      return;
    }

    try {
      await signUp(values);
      navigate("/login");
    } catch (e) {
      console.log("Error:", e);
      setErrors((prevVal) => ({
        ...prevVal,
        submission: "Something went wrong",
      }));
    }
  };

  return (
    <main className="bg-white flex items-center justify-center w-full">
      <form className="w-[90%] md:w-[300px]" onSubmit={handleSubmit}>
        <Input
          value={values.firstName}
          onChange={handleSetValue}
          name="firstName"
          label="First Name"
          styles="pb-6"
          error={errors.firstName}
        />
        <Input
          value={values.lastName}
          onChange={handleSetValue}
          name="lastName"
          label="Last Name"
          styles="pb-6"
          error={errors.lastName}
        />
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
        <Button label="Sign Up" type="submit" onClick={() => {}} />
        {errors.submission && (
          <p className="text-red-500 text-center pt-2">{errors.submission}</p>
        )}
        <p className="text-center mt-7">
          <Link className="underline" to="/login">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
}
