import React from "react";

import { Button } from "./components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import Signin from "./Signin";
import ForgotPassword from "./ForgotPassword";
import Signup from "./Signup";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-screen relative w-full">
      <div className=" absolute top-0 right-0 left-0 bottom-0 ">
        <div className="flex flex-col card bgBlure absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70%] w-[65%] lg:w-[30%] lg:h-[70%] bg-slate-200 shadow-2xl shadow-slate-500">
          <div className="flex flex-col p-4 ">
            <h1 className="text-6xl text-center mt-5">TradeBite</h1>
            {location.pathname == "/signup" ? (
              <section className="space-y-4">
                <Signup/>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <span>have already account</span>
                  <Button
                    onClick={() => {
                      navigate("/signin");
                    }}
                  >
                    Sign in
                  </Button>
                </div>
              </section>
            ) : location.pathname == "/forgot-password" ? (
              <section className="mt-9">
                <ForgotPassword />
                <div className="flex items-center justify-center gap-2 mt-5">
                  <span>Back to Login</span>
                  <Button
                    onClick={() => {
                      navigate("/signin");
                    }}
                  >
                    Login
                  </Button>
                </div>
              </section>
            ) : (
              <section className="flex flex-col space-y-5">
                <Signin />
                <div className="flex items-center justify-center gap-2">
                  <span>Dont have account</span>
                  <Button
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Sign up
                  </Button>
                </div>
                <div>
                  <Button
                    className="w-full py-5"
                    onClick={() => {
                      navigate("/forgot-password");
                    }}
                  >
                    Forgot Password
                  </Button>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
