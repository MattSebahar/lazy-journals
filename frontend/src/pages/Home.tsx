import LiquidEther from "../components/LiquidEther";
import GlassSurface from "../components/GlassSurface";
import { Link } from "react-router";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/react-router";

/**
 * Home Page Component
 *
 * The landing page for the app, containing navigation to other sections.
 * TODO : Add a login section, add intro and welcome.
 */
export default function Home() {
  const { user } = useUser();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* The nav bar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <GlassSurface width={"100%"} height={60} borderRadius={40}>
          {/* <div className="flex h-full w-full items-center justify-between px-8">
            <span className="font-bold text-[#5227FF] tracking-tight">
              Lazy Journals
            </span>
          </div> */}
          <div className="flex gap-4">
            <Link
              to="/journal"
              className="px-4 py-2 bg-[#5227FF] bg-opacity-50 text-white font-semibold rounded-full hover:bg-opacity-80 transition"
            >
              Journal
            </Link>
            <Link
              to="/work"
              className="px-4 py-2 bg-[#5227FF] bg-opacity-50 text-white font-semibold rounded-full hover:bg-opacity-80 transition"
            >
              Work
            </Link>
            <Link
              to="/calendar"
              className="px-4 py-2 bg-[#5227FF] bg-opacity-50 text-white font-semibold rounded-full hover:bg-opacity-80 transition"
            >
              Calendar
            </Link>
            <Link
              to="/todos"
              className="px-4 py-2 bg-[#5227FF] bg-opacity-50 text-white font-semibold rounded-full hover:bg-opacity-80 transition"
            >
              To-Dos
            </Link>
          </div>
        </GlassSurface>
      </div>

      {/* The Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      {/* The Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center pointer-events-none flex flex-col items-center gap-6">
          <div>
            <h1 className="text-6xl font-black text-white mix-blend-difference mb-4">
              Lazy Journals
            </h1>
            <p className="text-xl text-white mix-blend-difference font-light">
              For keeping track when your day is wack.
            </p>
          </div>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-[#5227FF] bg-opacity-60 text-white font-semibold rounded-full hover:bg-opacity-80 transition pointer-events-auto">
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex flex-col items-center gap-3 pointer-events-auto">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
              <span className="text-[#5227FF] font-medium text-lg">
                Welcome back Jack! <br /> ... <br /> I mean{" "}
                {user?.firstName || "guess you never told us"}!
              </span>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
