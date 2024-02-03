"use client";

import { Button } from "@/components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from "lucide-react";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  barbershop: Barbershop;
}

export function BarbershopInfo({ barbershop }: Props) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <div className="h-[250px] w-full relative">
        <Button
          variant="outline"
          size="icon"
          onClick={handleBackClick}
          className="absolute z-50 top-4 left-4 size-8"
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute z-50 top-4 right-4 size-8"
        >
          <MenuIcon />
        </Button>

        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="object-cover opacity-75"
        />
      </div>

      <div className="px-5 py-3">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (889 avaliações)</p>
        </div>
      </div>
    </div>
  );
}
