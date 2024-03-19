import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItems from "./sidebar-items";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
type Props = {
  className?: string;
};
const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex lg:w-[256px] h-full lg:fixed border-r-2 left-0 top-0 px-4 flex-col",
        className
      )}
    >
      <Link href={"/learn"}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src={"/logo.svg"} height={40} width={40} alt="Logo" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItems iconSrc="/learn.svg" href="/learn" label="Learn" />
        <SidebarItems iconSrc="/leaderboard.svg" href="/leaderboard" label="Leaderboard" />
        <SidebarItems iconSrc="/quests.svg" href="/quests" label="Quests" />
        <SidebarItems iconSrc="/shop.svg" href="/shop" label="Shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
