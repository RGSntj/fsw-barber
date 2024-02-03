"use client";

import {
  LogOutIcon,
  UserIcon,
  LogInIcon,
  HomeIcon,
  CalendarDays,
} from "lucide-react";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";

export function SideMenu() {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn("google");
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      {data?.user ? (
        <div className="flex items-center justify-between px-5 py-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={data.user.image!} />
            </Avatar>
            <h2 className="font-semibold text-sm">{data.user.name}</h2>
          </div>

          <Button
            size="icon"
            variant="secondary"
            className="size-8"
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 px-5 py-6">
          <div className="flex items-center gap-2">
            <UserIcon size={32} />
            <h2 className="font-semibold text-sm">Olá. Faça seu login!</h2>
          </div>

          <Button
            variant="secondary"
            className="w-full justify-start"
            onClick={handleLoginClick}
          >
            <LogInIcon size={18} className="mr-2" />
            Fazer Login
          </Button>
        </div>
      )}
      <div className="px-5 py-4 space-y-2">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/">
            <HomeIcon size={18} className="mr-2" />
            Início
          </Link>
        </Button>
        {status === "authenticated" && (
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/bookings">
              <CalendarDays size={18} className="mr-2" />
              Agendamentos
            </Link>
          </Button>
        )}
      </div>
    </>
  );
}
