"use client";

import Link from "next/link";
import { ArrowRight, Github, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  // validation schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, values)
        .then((result) => {
          console.log(result.data);
          localStorage.setItem("user", result.data.token);
          toast.success("Login Successfull");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Login failed. Please check your credentials");
        });
    },
    validationSchema: LoginSchema,
  });

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br">
      {/* Header */}
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Login Card */}
          <div className="rounded-xl border border-gray-700 bg-black/50 p-6 shadow-2xl backdrop-blur">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-white-500">
                Welcome back
              </h1>
              <p className="mt-2 text-blue-400">
                Sign in to your PixelCraft account
              </p>
            </div>

            <form onSubmit={loginForm.handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                    className="border-white-800 bg-blue-950/50 text-white placeholder:text-white-500/50 focus:border-blue-500 focus:ring-blue-500"
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.email}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-white-500">
                      Password
                    </Label>
                    <Link
                      href="/forgot-password"
                      className="text-xs text-white-400 hover:text-blue-600"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="border-white-800 bg-blue-950/50 text-white placeholder:text-white-500/50 focus:border-blue-300 focus:ring-blue-500"
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.password}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    // checked={rememberMe}
                    // onCheckedChange={setRememberMe}
                    className="border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white hover:border-white"
                  />
                  <Label htmlFor="remember" className="text-sm text-white-300">
                    Remember me
                  </Label>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-blue-700 text-white hover:bg-blue-700"
                >
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-gray-400"></div>
                  <span className="mx-4 flex-shrink text-xs text-white-400">
                    OR CONTINUE WITH
                  </span>
                  <div className="flex-grow border-t border-gray-400"></div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-white-300 bg-transparent text-white hover:bg-blue-900/50"
                  onClick={() => console.log("GitHub login")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </form>
          </div>

          {/* Sign up link */}
          <div className="text-center text-sm text-blue-400 ">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-blue-300 hover:text-white"
            >
              Sign up
            </Link>
          </div>

          {/* Features */}
          {/* <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-lg border border-blue-900 bg-blue-950/30 p-4">
              <h3 className="mb-2 text-sm font-medium text-blue-300">Pro Features</h3>
              <ul className="space-y-1 text-xs text-blue-400">
                <li>• Advanced filters</li>
                <li>• Layer composition</li>
                <li>• Export in any format</li>
              </ul>
            </div>
            <div className="rounded-lg border border-blue-900 bg-blue-950/30 p-4">
              <h3 className="mb-2 text-sm font-medium text-blue-300">Enterprise Support</h3>
              <ul className="space-y-1 text-xs text-blue-400">
                <li>• 24/7 priority support</li>
                <li>• Custom integrations</li>
                <li>• Dedicated account manager</li>
              </ul>
            </div>
          </div> */}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
