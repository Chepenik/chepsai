import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";

const LandingPage = () => {
  return (
    <div>
      {/* <h1>(Unprotected landing page route)</h1> */}
      <div style={{ position: "relative" }}>
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;