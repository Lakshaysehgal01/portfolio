import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import React from "react";
import { cn } from "../lib/util";
import { GitHubIcon, LeetCodeIcon, LinkedInIcon } from "../components/icons";

const menuItems = [
  //   { name: "Organizations", to: "/organizations" },
  //   { name: "Projects", to: "/projects" },
  //   { name: "Technologies", to: "/tech-stack" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#project" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed left-1/2 -translate-x-1/2 z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-neutral-950/70 max-w-4xl rounded-2xl border border-neutral-800 backdrop-blur-lg lg:px-5",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo */}
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                to="/"
                aria-label="home"
                className="flex items-center space-x-2 font-semibold text-xl text-neutral-100"
              >
                <span>Lakshay</span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-neutral-100"
              >
                <Menu className="m-auto size-6 duration-200" />
                <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="absolute left-1/2 -translate-x-[65%] hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm text-neutral-300">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="hover:text-white hover:font-semibold duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu + Buttons */}
            <div className="bg-neutral-950 in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-neutral-800 p-6 shadow-2xl shadow-black/40 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              {/* Mobile Links */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base text-neutral-400">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="hover:text-white duration-150"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Buttons */}
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={SOCIAL_LINKS.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-100 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800"
                  >
                    <GitHubIcon className="w-4 h-4 stroke-[1.8]" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={SOCIAL_LINKS.leetcode.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-100 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800"
                  >
                    <LeetCodeIcon className="w-4 h-4 stroke-[1.8]" />
                    <span>LeetCode</span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className={cn(isScrolled && "lg:hidden")}
                >
                  <a
                    href={SOCIAL_LINKS.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-100 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800"
                  >
                    <LinkedInIcon className="w-4 h-4 stroke-[1.8]" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const SOCIAL_LINKS = {
  github: {
    href: "https://github.com/Lakshaysehgal01",
    label: "GitHub - Lakshaysehgal01",
  },
  leetcode: {
    href: "https://leetcode.com/u/lakshaysehgal_01/",
    label: "LeetCode - lakshaysehgal_01",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/lakshay-sehgal-a9b426309/",
    label: "LinkedIn",
  },
};
