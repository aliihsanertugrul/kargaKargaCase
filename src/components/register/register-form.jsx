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
    <div >
      <div >
        <div >
          <div >
            <div >
              {!state?.success && state?.message ? (
                <div >{state?.message}</div>
              ) : (
                ""
              )}

              <form action={dispatch} noValidate>
                <div>
                  <label htmlFor="fullName">Full Name</label>

                  <input
                    type="text"
                    className={`form-control rounded-3 ${
                      state?.errors?.fullName ? "is-invalid" : ""
                    }`}
                    id="fullName"
                    name="fullName"
                  />
                  <div className="invalid-feedback">
                    {state?.errors?.fullName}
                  </div>
                </div>

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
                  <SubmitButton title="Register" width="w-50" />
                </div>

                <h5 className="register-line mt-3">
                  If you already have an account,
                  <Link className="login" href="/login">
                    Login now!
                  </Link>
                </h5>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
