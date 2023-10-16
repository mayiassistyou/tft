"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";

type NavItemProps = {
  label: string;
  url: string;
  pathname: string;
};

function NavItem({ label, url, pathname }: NavItemProps): JSX.Element {
  const isActive = pathname.replace("/", "").startsWith(url.replace("/", ""));

  return (
    <Link href={url}>
      <div
        className={`px-8 pt-3 pb-2 font-bold cursor-pointer hover:text-white 
        ${isActive ? "text-white" : ""}`}
      >
        {label}
      </div>
      <div
        className={`border-b-4 border-amber-600 w-full duration-500 ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>
    </Link>
  );
}

export default function Header(): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      <Container className="flex justify-between items-center py-2">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/images/duckbill.png"
              alt="Duckbill"
              width={0}
              height={0}
              sizes="32px"
              className="w-full h-auto"
            />
            <span className="text-3xl font-bold text-white ml-1">tft</span>
          </div>
        </Link>
      </Container>
      <div className="bg-cyan-950 border-y border-cyan-900 flex justify-center">
        <NavItem label="Team Comps" url="/comps" pathname={pathname} />
        <NavItem label="Meta Report" url="/report" pathname={pathname} />
        <NavItem label="Champions" url="/champions" pathname={pathname} />
        <NavItem label="Tier List" url="/tier-list" pathname={pathname} />
        <NavItem label="Item Builder" url="/items" pathname={pathname} />
        <NavItem label="Team builder" url="/team-builder" pathname={pathname} />
      </div>
    </>
  );
}
