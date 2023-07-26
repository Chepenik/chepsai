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
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="mt-4 mr-1 bg-purple z-100 rounded">
            Open
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href="/dashboard">
              <DropdownMenuLabel className="text-lg font-semibold">
                MassAdoption
              </DropdownMenuLabel>
            </Link>
            <DropdownMenuSeparator />
            <Link href="/about">
              <DropdownMenuItem className="py-3">About</DropdownMenuItem>
            </Link>
            <Link href="/videos">
              <DropdownMenuItem className="py-3">Videos</DropdownMenuItem>
            </Link>
            <Link href="/team">
              <DropdownMenuItem className="py-3">Team</DropdownMenuItem>
            </Link>
            <Link href="/merch">
              <DropdownMenuItem className="py-3">Merch</DropdownMenuItem>
            </Link>
            <Link href="/freedom-festival-2024">
              <DropdownMenuItem className="py-3">
                Freedom Festival 2024
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <iframe
          src="https://btcmap.org/"
          width="100%"
          height="800px"
          style={{ padding: "100px 100px 100px 100px" }}
        />
      </div>
    </div>
  );
};

export default LandingPage;