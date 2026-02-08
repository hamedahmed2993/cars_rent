import CarCard from "@/components/CarCard";
import HeaderDesktop from "./HeaderDesktop";
import Head from "next/head";
import HeaderMobile from "./HeaderMobile";
export default function HomeCarRent() {
  return (
    <div className="w-full h-[100vh] bg-[#F6F7F9]">
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>
      <div className="block md:hidden">
        <HeaderMobile />
      </div>

      {/* BODY */}
      <div className="mx-16 h-screen overflow-auto no-scrollbar">
        <div className="p-5 text-[#90A3BF] font-4">Popular Cars</div>
        <div className="grid gap-4 grid-cols-3">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
      {/*=== BODY ===*/}
    </div>
  );
}
