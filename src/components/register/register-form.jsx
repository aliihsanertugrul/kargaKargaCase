"use client";
import React from "react";
import { useFormState } from "react-dom";
import { initialResponse } from "@/helpers/form-validation";

import Link from "next/link";
import SubmitButton from "../common/submit-button";
import { registerAction } from "@/actions/register-action";

const RegisterForm = () => {
  const [state, dispatch] = useFormState(registerAction, initialResponse);

  return (
    <>
           
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action={dispatch} noValidate>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register</h5>
        <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Fullname</label>
            <input type="fullName" name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name surname" />
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" name="email" id="email" placeholder="email@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        </div>

        <div className="text-center my-5">
          <SubmitButton title="Register" width="w-full" variant="bg-karga-renk"/>
        </div>
       
        <h5 className="text-sm text-center">
          If you already have an account. 
          <Link className="login text-red-700 font-bold underline underline-offset-1 " href="/login">
            Login now!
          </Link>
          <br />
            or 
            <br />
            go to <Link href="/"
              className="text-karga2 font-bold underline underline-offset-1 ">Homepage </Link>
        </h5>
        
    </form>
</div>


    </>
  );
};

export default RegisterForm;
