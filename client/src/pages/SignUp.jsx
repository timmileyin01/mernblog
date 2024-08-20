import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex gap-5 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1">BlogM</span>
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
            modi. Lorem ipsum dolor sit amet.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Enter Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Enter Email" />
              <TextInput type="text" placeholder="name@example.com" id="email" />
            </div>
            <div>
              <Label value="Enter Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-600">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
