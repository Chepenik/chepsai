import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome To MassAdoption(Unprotected)</h1>
      <div style={{ position: "relative", textAlign: "right" }}>
        <DropdownMenu>
          <DropdownMenuTrigger className="mt-4 mr-1 bg-purple z-100">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <Link rel="stylesheet" href="/sign-in">
              <Button>
                Login
              </Button>
            </Link>
            <Link rel="stylesheet" href="/sign-up">
              <Button>
                Register
              </Button>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
        <iframe 
            src="https://btcmap.org/"
            width="100%" 
            height="800px"
            style={{ padding: "100px 100px 100px 100px" }}
        />
    </div>
  );
};

export default LandingPage;