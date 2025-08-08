"use client";
import React from "react";
import LoginForm from "./LoginForm";

export default function LoginPage(): React.ReactElement {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 pb-20 gap-16 sm:p-20 selection:bg-[#FFB48C] selection:text-amber-50">
      <main className="mx-auto max-w-[500px] p-8">
        {/* Heading of login page and short description */}
        <div className="grid grid-cols-1 text-center mb-8">
          <h3 className="text-[32px] sm:text-[40px] font-medium">
            Sign in to{" "}
            <span className="text-[#FD5900]">
              Evo<i className="news-reader-italic">Event</i>
            </span>
          </h3>
          <p className="px-5 text-[16px] sm:text-xl text-[#06060680] text-center font-[400]">
            Welcome to evento, please enter your login details below
          </p>
        </div>

        {/* Login form */}
        <LoginForm />
      </main>
    </div>
  );
}
