"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { SideMenu } from "./SideMenu";

export function Header() {
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
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
}
