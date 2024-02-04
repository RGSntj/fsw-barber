import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/prisma";
import { BarbershopInfo } from "./components/BarbershopInfo";
import { ServiceItem } from "./components/ServiceItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarberShopDetailsParams {
  params: {
    id?: string;
  };
}

export default async function BarbershopDetails({
  params,
}: BarberShopDetailsParams) {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    // TODO: redirecionar para a home page ..
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    // TODO: Redirecionar para a home page ...
    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <Separator className="my-4" />

      <div className="px-5 flex flex-col gap-4 my-6">
        {barbershop.services.map((service) => {
          return (
            <ServiceItem
              key={service.id}
              service={service}
              barbershop={barbershop}
              isAuthenticated={!!session?.user}
            />
          );
        })}
      </div>
    </div>
  );
}
