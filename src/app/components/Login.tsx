'use client';

import { useActionState, useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';
import { useFormStatus } from 'react-dom';
import { loginHandler } from '@/actions/login.action';

export function LoginPage() {
  const [togglePassword, setTogglePassword] = useState(false);
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(loginHandler, undefined);
  const handleTogglePassword = () => {
    setTogglePassword((prev) => !prev);
  };

  return (
    <div className=" w-full justify-center h-screen flex">
      {/* Right Section - Form */}
      <div className="w-1/2 flex flex-col justify-center items-center text-white">
        <div className="w-3/4 max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Hello! Welcome Back
          </h1>
          <form action={formAction} className="space-y-4">
            {/* Email Input */}
            <div>
              {state?.error?.email && (
                <p className="text-red-500">{state?.error?.email}</p>
              )}
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              {state?.error.password && (
                <p className="text-red-500">{state.error.password}</p>
              )}
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <div className="flex px-4 py-2 rounded-md border text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <input
                  name="password"
                  type={togglePassword ? 'password' : 'text'}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full outline-none h-full "
                />
                <div onClick={handleTogglePassword}>
                  {togglePassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2 ">
              <button
                disabled={pending}
                type="submit"
                className="w-full mt-4 bg-black hover:bg-neutral-700 text-white py-2 px-4 rounded-md font-medium"
              >
                Sign In
              </button>
              <div className="flex justify-center space-x-4"></div>
            </div>
          </form>
          {/* <div className="flex justify-between">
            <SignIn provider="google" handler={googleSignIn} />
            <SignIn provider="github" handler={gitHubSignIn} />
          </div> */}

          <p className="text-sm text-center mt-4">
            Don’t have an account?{' '}
            <a href="/signup" className="text-black hover:underline">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
