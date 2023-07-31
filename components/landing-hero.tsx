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
        <h1>AI trained exclusively on Bitcoin data for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-orange-500 py-2">
          <TypewriterComponent
            options={{
              strings: [
                "Builders",
                "Nocoiners",
                "Plebs",
                "Anyone willing to learn"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Our LLM Mr. Nakamoto Is Here To Help
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="default" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Ask Me Anything About Bitcoin
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Lightning payments accepted 
      </div>
    </div>
  );
};