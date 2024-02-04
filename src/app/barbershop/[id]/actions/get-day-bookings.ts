"use server";

import { db } from "@/lib/prisma";
import { endOfDay, startOfDay } from "date-fns";

export async function getDaysBookings(date: Date, barbershopId: string) {
  const bookings = await db.booking.findMany({
    where: {
      barbershopId,
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  });

  return bookings;
}
