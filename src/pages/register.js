import ApplicationLogo from "@/components/ApplicationLogo";
import AuthCard from "@/components/AuthCard";
import Button from "@/components/Button";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Label from "@/components/Label";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";
import { Toggle } from "@/components/Toggle";

const Register = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/dashboard",
  });

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState([]);
  const [errors, setErrors] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();

    register({
      last_name,
      first_name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      role,
      setErrors,
    });

    console.log(role);
  };

  return (
    <>
      <div className="container">
        <GuestLayout>
          <AuthCard
            logo={
              <Link href="/">
                <a>
                  <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </a>
              </Link>
            }
          >
            <form onSubmit={submitForm}>
              {/* Role */}
              <div className="mt-4 role_container">
                <p>Select your Role:</p>

                <input
                  onClick={(e) => {
                    const trainer = e.target.value;
                    setRole(trainer);
                  }}
                  type="radio"
                  id="trainer"
                  name="role"
                  value="trainer"
                  required
                />
                <label for="trainer">Trainer</label>

                <input
                  onClick={(e) => {
                    const trainee = e.target.value;
                    setRole(trainee);
                  }}
                  type="radio"
                  id="trainee"
                  name="role"
                  value="trainee"
                />
                <label for="trainee">Trainee</label>
              </div>

              {/* Name */}
              <div>
                <Label htmlFor="first_name">First name</Label>

                <Input
                  id="first_name"
                  type="text"
                  value={first_name}
                  className="block mt-1 w-full"
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                  autoFocus
                />

                <InputError messages={errors.first_name} className="mt-2" />
              </div>
              <div>
                <Label htmlFor="last_name">Last name</Label>

                <Input
                  id="last_name"
                  type="text"
                  value={last_name}
                  className="block mt-1 w-full"
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  autoFocus
                />

                <InputError messages={errors.last_name} className="mt-2" />
              </div>
              {/* Email Address */}
              <div className="mt-4">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  value={email}
                  className="block mt-1 w-full"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />

                <InputError messages={errors.email} className="mt-2" />
              </div>
              {/* Password */}
              <div className="mt-4">
                <Label htmlFor="password">Password</Label>

                <Input
                  id="password"
                  type="password"
                  value={password}
                  className="block mt-1 w-full"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="new-password"
                />

                <InputError messages={errors.password} className="mt-2" />
              </div>
              {/* Confirm Password */}
              <div className="mt-4">
                <Label htmlFor="passwordConfirmation">Confirm Password</Label>

                <Input
                  id="passwordConfirmation"
                  type="password"
                  value={passwordConfirmation}
                  className="block mt-1 w-full"
                  onChange={(event) =>
                    setPasswordConfirmation(event.target.value)
                  }
                  required
                />

                <InputError
                  messages={errors.password_confirmation}
                  className="mt-2"
                />
              </div>

              <div className="flex items-center justify-end mt-4">
                <Link href="/login">
                  <a className="underline text-sm text-gray-600 hover:text-gray-900">
                    Already registered?
                  </a>
                </Link>

                <Button className="ml-4">Register</Button>
              </div>
            </form>
          </AuthCard>
        </GuestLayout>
      </div>

      <style jsx>
        {`
          .radio-toolbar input[type="radio"] {
            display: none;
          }

          .radio-toolbar label {
            display: inline-block;
            background-color: #ddd;
            padding: 4px 11px;
            font-family: Arial;
            font-size: 16px;
            cursor: pointer;
          }

          .radio-toolbar input[type="radio"]:checked + label {
            background-color: #bbb;
          }

          .role_container {
            display: flex;
            justify-content: center;
            align-items: center;
          }

           {
            /* toggle */
          }
          .role_container label {
            display: inline-block;
            width: 100px;
            padding: 10px;
            border: solid 2px #ccc;
            transition: all 0.3s;
            cursor: pointer;
          }

          .role_container input[type="radio"] {
            display: none;
          }

          .role_container input[type="radio"]:checked + label {
            border: solid 2px #f27d42;
          }
        `}
      </style>
    </>
  );
};

export default Register;
