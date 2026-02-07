import { HeartIcon } from "@heroicons/react/24/outline";
export default function CarCard() {
  return (
    <div
      className="relative bg-white border rounded-[10px] w-[304px] h-[388px] p-[24px]
    flex flex-col justify-between"
    >
      {/* NAME & TYPE */}
      <div className="flex items-center justify-between ">
        <div
          className="w-[24px] h-[24px] font-bold"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <div className="text-[#1A202C] text-[20px]">Kosfsjiee</div>
          <div className="text-[#90A3BF] text-[14px]">sport</div>
        </div>
        <HeartIcon className="w-[24px] h-[24px] text-[#90A3BF]" />
      </div>
      {/*=== NAME & TYPE ===*/}

      {/* IMAGE */}
      <div className="w-[272px] h-[84px]">
        <img
          src="/car.png"
          alt="car"
          className="w-full h-full object-cover"
        ></img>
      </div>
      {/*=== IMAGE ===*/}

      {/* DETAILS */}
      <div className="h-[24px] flex items-center justify-between gap-[8px] text-[#90A3BF]">
        <div className="flex gap-[4px]">
          <img src="/icons/gas-station.svg"></img>
          <div>90L</div>
        </div>
        <div className="flex gap-[4px]">
          <img src="/icons/weel.svg"></img>
          <div>Manual</div>
        </div>
        <div className="flex gap-[4px]">
          <img src="/icons/profile-2user.svg"></img>
          <div>2 People</div>
        </div>
      </div>
      {/*=== DETAILS ===*/}

      {/* PRICS & RENT */}
      <div className="w-full h-[44px] flex justify-between items-center">
        <div
          className="text-[#1A202C] text-[20px] font-bold"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          $99.00/<span className="text-[#90A3BF] text-[14px]">day</span>
        </div>
        <div className="bg-[#3563E9] w-[116px] h-44px border rounded-[4px] flex items-center justify-center text-[16px]">
          Rent Now
        </div>
      </div>
      {/*=== PRICS & RENT ===*/}
    </div>
  );
}
