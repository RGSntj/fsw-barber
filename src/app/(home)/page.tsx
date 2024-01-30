import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Header } from "@/components/Header";
import Image from "next/image";
import { Search } from "./components/Search";
import { BookingItem } from "@/components/BookingItem";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2>Olá, miguel !</h2>
        <p className="capitalize">
          {format(new Date(), "EEEE',' dd 'de' MMMM", { locale: ptBR })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-sm uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>
    </div>
  );
}
