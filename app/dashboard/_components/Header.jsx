"use client";

import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import { SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import dynamic from "next/dynamic";

// Dynamically import Clerk UserButton with SSR disabled
const UserButtonNoSSR = dynamic(() => import("@/components/UserButtonWrapper"), {
  ssr: false,
});

function Header() {
  const path = usePathname();
  const router = useRouter();
  const { isSignedIn } = useUser();

  // Mount guard to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const navigateTo = (url) => router.push(url);

  return (
    <>
      <div className="relative flex p-4 justify-between items-center shadow-sm text-gray-600">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 z-[-1]"
          style={{ backgroundImage: "url('/bgnew1.jpg')" }}
        ></div>

        {/* Navigation */}
        <div className="flex gap-10">
          <Image
            src="/logo4.png"
            width={35}
            height={35}
            alt="CareerBoost-AI Logo"
          />
          <ul className="hidden md:flex gap-2 font-semibold">
            <li
              className="flex gap-1 font-extrabold hover:bg-slate-800 hover:rounded-md hover:text-slate-200 pr-4 pl-4 text-center transition-all cursor-pointer p-2"
              onClick={() => navigateTo("/")}
            >
              <span className="p-1">
                <AiFillHome className="w-4 h-4" />
              </span>
              Home
            </li>
            <li
              className="flex gap-1 font-extrabold pr-4 pl-4 hover:bg-slate-800 hover:rounded-md hover:text-slate-200 transition-all cursor-pointer p-2"
              onClick={() => navigateTo("/dashboard")}
            >
              <span className="p-1">
                <MdDashboardCustomize className="w-4 h-4" />
              </span>
              Dashboard
            </li>
            <li
              className="flex gap-1 font-extrabold pr-4 pl-4 hover:bg-slate-800 hover:rounded-md hover:text-slate-200 transition-all cursor-pointer p-2"
              onClick={() => navigateTo("/#howitworks")}
            >
              <span className="p-1">
                <BsFillQuestionSquareFill className="w-4 h-4" />
              </span>
              How it works
            </li>
            <li
              className="flex gap-1 font-extrabold pr-4 pl-4 hover:bg-slate-800 hover:rounded-md hover:text-slate-200 transition-all cursor-pointer p-2"
              onClick={() => navigateTo("/aboutdeveloper")}
            >
              <span className="p-1">
                <FaUserCircle className="w-4 h-4" />
              </span>
              About Developer
            </li>
          </ul>
        </div>

        {/* Sign in / User Button (hydration safe) */}
        {mounted && (
          isSignedIn ? (
            <UserButtonNoSSR />
          ) : (
            <SignInButton>
              <Button className="flex gap-2 justify-center bg-transparent font-bold text-black hover:bg-slate-800 hover:text-slate-300 w-[100px]">
                Login
                <FaUser />
              </Button>
            </SignInButton>
          )
        )}
      </div>
    </>
  );
}

export default Header;
