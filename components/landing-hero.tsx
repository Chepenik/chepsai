"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-black font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>AI built on love, open source code, and a bunch of APIs</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-orange-500 py-2">
          <TypewriterComponent
            options={{
              strings: [
                "Did you really build this?",
                "You didn't build this.",
                "You learned from Youtube?",
                "OK, but seriously who built this?",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        My Mom still can not believe I built this.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="default" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Proompt Time
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Working on adding lightning payments
      </div>
    </div>
  );
};