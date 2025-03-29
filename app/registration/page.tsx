"use client"; // Ensure this is a client-side component
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "../../services/api";
import Navbar from "@/components/ui/Navbar";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signup(username, email, mobile, password);
      alert("User created successfully");
      router.push("/scan");
    } catch (err: any) {
      setError(err.response?.data?.message || "Error creating account");
    }
  };

  return (
    <>
      <Navbar />
      {/* Background Images Start */}

      <img
        className="-z-1 absolute w-1/9 lg:w-1/12 top-50 right-10 lg:top-50
         rotate-20 opacity-70"
        src="./bar code.png"
        alt=""
      />
      <img
        className="-z-1 absolute w-1/9 lg:w-1/12 top-85 left-5 lg:top-100
         lg:left-10 rotate-20 opacity-70"
        src="./sthethoscope.png"
        alt=""
      />
      <img
        className="-z-1 absolute w-1/9 lg:w-1/12 top-30 lg:top-120 right-70
         -rotate-20 opacity-70"
        src="./food.png"
        alt=""
      />
      <img
        className="-z-1 absolute w-1/9 lg:w-1/12 top-75 left-75 lg:top-30
         lg:left-90 -rotate-10 opacity-70"
        src="./scanner.png"
        alt=""
      />

      {/* Background Images End */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Sign Up
          </h1>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>{" "}
            {/* Username input field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Email input field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Mobile no.
              </label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {/* Mobile no. input field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>{" "}
            {/* Password input field */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
