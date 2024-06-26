/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/2JvhrgAnSP0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import Image from "next/image";
import lotus from "./logo.png";
import "./top.css";
// import { FaInstagramSquare } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

export function Topblog() {
  return (    
    <header
      id="home"
      className="flex h-16 w-full items-center text-xl justify-evenly    bg-transparent px-4 fixed z-50   md:px-6"
    >
      <Link className="flex items-center gap-2" href="./">
        {/* <MountainIcon className="h-6 w-6" />   */}
        {/* <FaInstagramSquare /> */}
        <Image
          src={lotus}
          alt=""
          className="h-10 w-10  tea  bg-slate-50 "
          srcset=""
        />
        <span className="sr-only"></span>
      </Link>
      <nav className="hidden items-center gap-6     text-lg font-bold md:flex">
        <Link className="hover:underline hover:underline-offset-4" href="./">
          Home
        </Link>
        <Link
          className="hover:underline hover:underline-offset-4"
          href="./blog"
        >
          Blog
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="md:hidden" side="right">
          <div className="grid gap-4 p-4">
            <Link
              className="font-medium hover:underline hover:underline-offset-4"
              href="./"
            >
              Home
            </Link>
            <Link
              className="font-medium hover:underline hover:underline-offset-4"
              href="./blog"
            >
              Blog
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
