import LiquidEther from "../components/LiquidEther";
import NavBar from "../components/NavBar";

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
      {/* Landing Page*/}
      <NavBar />

      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center pointer-events-none flex flex-col items-center gap-6">
          {/* Welcome Content */}
          <div>
            <h1 className="text-6xl font-black text-white mix-blend-difference mb-4">
              Lazy Journals
            </h1>
            <p className="text-xl text-white mix-blend-difference font-light">
              For keeping track when your day is wack.
            </p>
          </div>

          {/* Clerk Sign in*/}
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
