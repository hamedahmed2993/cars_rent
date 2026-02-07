import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  HeartIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

export default function HomeCarRent() {
  return (
    <div className="w-full h-[100vh] bg-[#F6F7F9]">
      {/* HEADER */}
      <div className="relative bg-white w-full h-[124px]">
        {/* TITLE */}
        <div className="absolute left-[60px] top-[40px] w-[148px] h-[44px] ">
          <div
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="text-[#3563E9] text-4xl font-bold"
          >
            MORENT
          </div>
        </div>
        {/*=== TITLE ===*/}

        {/* SEARCH BAR */}
        <div className="text-[#596780] absolute left-[272px] top-[40px] w-[492px] h-[44px] border border-[#C3D4E9] rounded-full flex items-center justify-between px-6">
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

        {/* OPTIONS */}
        <div className="text-[#596780] w-[236px] h-[44px] absolute top-[40px] left-[1172px] flex items-center justify-between">
          {/* FAVORITE */}
          <div className="w-[44px] h-[44px] border border-[#C3D4E9] rounded-full flex items-center justify-center">
            <HeartIcon className="w-[24px] h-[24px]" />
          </div>
          {/*=== FAVORITE ===*/}

          {/* NOTIFICATION */}
          <div className=" relative w-[44px] h-[44px] border border-[#C3D4E9] rounded-full ">
            <div className="flex items-center justify-center w-full h-full">
              <BellIcon className="w-[24px] h-[24px]" />
            </div>
            <div className="absolute top-0 right-0 w-[11px] h-[11px] border rounded-full bg-[#FF4423] border-[#FF4423]"></div>
          </div>

          {/*=== NOTIFICATION ===*/}

          {/* SETTINGS */}
          <div className="w-[44px] h-[44px] border border-[#C3D4E9] rounded-full flex items-center justify-center">
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
      <div className="">body</div>
      {/*=== BODY ===*/}
    </div>
  );
}
