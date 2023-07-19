"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
  const route = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout succesful");
      route.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-5 hover:bg-blue-700
      text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
