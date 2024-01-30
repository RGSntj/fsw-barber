import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Header } from "@/components/Header";
import Image from "next/image";

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
    </div>
  );
}
