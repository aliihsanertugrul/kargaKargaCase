"use client";
import { useFormState } from "react-dom";

import { initialResponse } from "@/helpers/form-validation";
import { loginAction } from "@/actions/auth-actions";
import Link from "next/link";
import SubmitButton from "../common/submit-button";

const LoginForm = () => {
  const [state, dispatch] = useFormState(loginAction, initialResponse);

  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action={dispatch} noValidate>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Login
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className="text-center my-5">
            <SubmitButton
              title="Login"
              width="w-full"
              variant="bg-karga-renk"
            />
          </div>

          <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              href="/register"
              className="text-red-700 font-bold underline underline-offset-1 "
            >
              Create account
            </Link>
            <br />
            or 
            <br />
            go to <Link href="/"
              className="text-karga2 font-bold underline underline-offset-1 ">Homepage </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
