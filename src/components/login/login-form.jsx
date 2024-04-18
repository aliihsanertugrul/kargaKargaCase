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
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action={dispatch} noValidate>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Login</h5>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
       
        <div className="text-center my-5">
          <SubmitButton title="Login" width="w-full" variant="bg-karga-renk"/>
        </div>

        <div class="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link href="#" class= "text-red-700 font-bold underline underline-offset-1 ">Create account</Link>
        </div>
    </form>
</div>


{/* <form action={dispatch} noValidate>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className={`form-control rounded-3 ${
                      state?.errors?.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                  />
                  <div className="invalid-feedback">{state?.errors?.email}</div>
                </div>

				<div>
                  <label htmlFor="password">Password</label>

                  <input
                    type="password"
                    className={`form-control rounded-3 ${
                      state?.errors?.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    name="password"
                  />
                  <div className="invalid-feedback">
                    {state?.errors?.password}
                  </div>
                </div>

                <div className="text-center my-5">
                  <SubmitButton title="Login" width="w-50" />
                </div>

                <h5 className="register-line mt-3">
                  If you already have an account,
                  <Link className="login" href="/login">
                    Login now!
                  </Link>
                </h5>
              </form> */}
    </>
              
       
  );
};

export default LoginForm;
