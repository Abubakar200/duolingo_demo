"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import path from "path";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};
const SidebarItems = ({ href, iconSrc, label }: Props) => {
  const pathName = usePathname();

  const active = pathName === href;
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      asChild
      className="justify-start h-[52px]"
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          width={32}
          height={32}
          className="mr-5"
        />
        {label}
      </Link>
    </Button>
  );
};

export default SidebarItems;
