"use client";

import { cn } from "@/lib/utils";
import Container from "./container";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import MainNav from "./MainNav";
import { useEffect, useState } from "react";

interface HeaderProps {
  userId: string | null;
}
const Header = ({ userId }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "w-full z-50 transition",
        scrolled ? "fixed top-0 left-0 bg-white shadow-lg" : "bg-transparent"
      )}
    >
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-12 flex h-16 items-center">
          <Link
            href={"/"}
            className="upprcase flex gap-x-2 font-bold text-neutral-700 text-lg md:text-xl"
          >
            {" "}
            Fooddy
          </Link>
          {/* Main Naviagation */}
          <MainNav scrolled={scrolled} />
          {userId ? (
            <div className="ml-4 flex items-center space-x-4">
              <UserButton afterSignOutUrl="/sign-in" />
            </div>
          ) : (
            <div className="flex items-center space-x-2 ml-4">
              <Link href={"/sign-in"}>
                <Button className="bg-green-400 text-black hover:bg-green-600">
                  Sign In
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
