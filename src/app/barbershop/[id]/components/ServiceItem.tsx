"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@prisma/client";
import { signIn } from "next-auth/react";

import Image from "next/image";

interface ServiceItemProps {
  service: Service;
  isAuthenticated: boolean;
}

export function ServiceItem({ service, isAuthenticated }: ServiceItemProps) {
  const handleBookingClick = () => {
    if (!isAuthenticated) {
      return signIn();
    }

    // TODO: abrir modal de agendamento
  };

  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col w-full">
            <h1 className="font-bold">{service.name}</h1>
            <p className="text-sm text-gray-400 mt-2">{service.description}</p>

            <div className="flex items-center justify-between mt-4">
              <p className="text-primary font-bold text-sm">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(service.price))}
              </p>

              <Button variant="secondary" onClick={handleBookingClick}>
                Reservar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
