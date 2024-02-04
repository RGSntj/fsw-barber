"use server";

import { db } from "@/lib/prisma";

interface SaveBookingParams {
  serviceId: string;
  barbershopId: string;
  userId: string;
  date: Date;
}

export async function saveBooking(params: SaveBookingParams) {
  await db.booking.create({
    data: {
      barbershopId: params.barbershopId,
      serviceId: params.serviceId,
      userId: params.userId,
      date: params.date,
    },
  });
}
