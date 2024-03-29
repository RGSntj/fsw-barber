import { Prisma } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { format, isFuture, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Props {
  booking?: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>;
}

export function BookingItem({ booking }: Props) {
  const isBookingConfirmed = isFuture(booking!.date);

  return (
    <Card className="min-w-full">
      <CardContent className="flex py-0 px-0">
        <div className="flex flex-col gap-2 py-5 flex-[3] pl-4">
          <Badge
            variant={isBookingConfirmed ? "default" : "secondary"}
            className="w-fit"
          >
            {isBookingConfirmed ? "Confirmado" : "Finalizado"}
          </Badge>
          <h2 className="font-bold">{booking?.service.name}</h2>

          <div className="flex items-center gap-2">
            <Avatar className="size-6">
              <AvatarImage src={booking?.barbershop.imageUrl} />
            </Avatar>

            <h3 className="text-sm">{booking?.barbershop.name}</h3>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-center border-l px-3 border-solid border-secondary">
          <p className="text-sm capitalize">
            {format(booking?.date!, "MMMM", { locale: ptBR })}
          </p>
          <p className="text-2xl">{format(booking?.date!, "dd")}</p>
          <p className="text-sm">{format(booking?.date!, "HH:mm")}</p>
        </div>
      </CardContent>
    </Card>
  );
}
