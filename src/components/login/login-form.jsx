"use client";
import { useFormState } from "react-dom";

import { initialResponse } from "@/helpers/form-validation";
import { loginAction } from "@/actions/auth-actions";
import Link from "next/link";
import SubmitButton from "../common/submit-button";

const LoginForm = () => {
  const [state, dispatch] = useFormState(loginAction, initialResponse);

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              {!state?.success && state?.message ? (
                <div>{state?.message}</div>
              ) : (
                ""
              )}

              <form action={dispatch} noValidate>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
