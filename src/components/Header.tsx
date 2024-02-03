"use client";

import {
  CalendarDays,
  HomeIcon,
  LogInIcon,
  LogOut,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AuthProvider } from "@/app/providers/auth";
import Link from "next/link";

export function Header() {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn("google");
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="rounded-none">
      <CardContent className="p-5 flex items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={120} height={22} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="size-8">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SheetHeader className="text-left border-b border-solid border-secondary p-5">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
              <div className="flex items-center justify-between px-5 py-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={data.user.image!} />
                  </Avatar>
                  <h2 className="font-bold text-sm">{data.user.name}</h2>
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
                  <h2 className="font-semibold text-sm">
                    Olá. Faça seu login!
                  </h2>
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
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
              >
                <Link href="/">
                  <HomeIcon size={18} className="mr-2" />
                  Início
                </Link>
              </Button>
              {status === "authenticated" && (
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/bookings">
                    <CalendarDays size={18} className="mr-2" />
                    Agendamentos
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
}
