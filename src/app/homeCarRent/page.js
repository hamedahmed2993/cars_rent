import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  HeartIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import CarCard from "@/components/CarCard";
export default function HomeCarRent() {
  return (
    <div className="w-full h-[100vh] bg-[#F6F7F9]">
      {/* HEADER */}
      <div className="bg-white w-full h-[124px] flex items-center justify-between px-[20px]">
        {/* TITLE + SEARCH BAR */}
        <div
          className="flex 
        flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-[50px]"
        >
          {/* TITLE */}
          <div className="w-[148px] h-[44px] ">
            <div
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              className="text-[#3563E9] text-4xl font-bold"
            >
              MORENT
            </div>
          </div>
          {/*=== TITLE ===*/}

          {/* SEARCH BAR */}
          <div className="text-[#596780] w-[492px] h-[44px] border border-[#C3D4E9] rounded-full flex items-center justify-between px-6">
            <div
              className="flex"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <MagnifyingGlassIcon className="w-[25px] h-[25px] " />
              Search something here
            </div>
            <AdjustmentsHorizontalIcon className="w-[25px] h-[25px] " />
          </div>
          {/*=== SEARCH BAR ===*/}
        </div>
        {/*=== TITLE + SEARCH BAR ===*/}

        {/* OPTIONS */}
        <div className="text-[#596780] w-[236px] h-[44px] flex items-center justify-between">
          {/* FAVORITE */}
          <div className="invisible md:visible w-[44px] h-[44px] border border-[#C3D4E9] rounded-full flex items-center justify-center">
            <HeartIcon className="w-[24px] h-[24px]" />
          </div>
          {/*=== FAVORITE ===*/}

          {/* NOTIFICATION */}
          <div className="invisible md:visible relative w-[44px] h-[44px] border border-[#C3D4E9] rounded-full ">
            <div className="flex items-center justify-center w-full h-full">
              <BellIcon className="w-[24px] h-[24px]" />
            </div>
            <div className="absolute top-0 right-0 w-[11px] h-[11px] border rounded-full bg-[#FF4423] border-[#FF4423]"></div>
          </div>

          {/*=== NOTIFICATION ===*/}

          {/* SETTINGS */}
          <div className="invisible md:visible w-[44px] h-[44px] border border-[#C3D4E9] rounded-full flex items-center justify-center">
            <Cog6ToothIcon className="w-[24px] h-[24px]" />
          </div>
          {/*=== SETTINGS ===*/}

          {/* PROFILE IMAGE */}
          <div className="w-[44px] h-[44px] border border-[#C3D4E9] rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/profileIcon.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            ></img>
          </div>
          {/*=== PROFILE IMAGE ===*/}
        </div>
        {/*=== OPTIONS ===*/}
      </div>
      {/*=== HEADER ===*/}

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
