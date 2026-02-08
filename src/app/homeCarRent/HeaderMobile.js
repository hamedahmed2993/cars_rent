"use client";

import { useDispatch, useSelector } from "react-redux";
import { updateSearchField } from "@/lib/features/filters/filtersSlice";
import { useState } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  HeartIcon,
  Cog6ToothIcon,
  BellIcon,
} from "@heroicons/react/24/solid";

export default function HeaderMobile() {
  const [openOptions, setOpenOptions] = useState(false);
  const searchField = useSelector((state) => state.filters.searchField);
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-full h-[200px] flex flex-col items-center justify-between p-[20px]">
      {/* TITLE + OPTIONS */}
      <div
        className=" 
            w-full
            flex flex-row items-center justify-between gap-[50px]
          "
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

        {/* OPTIONS */}
        <div className=" text-[#596780] w-[236px] h-[44px] flex items-center justify-end gap-[10px]">
          {openOptions && (
            <>
              {/* FAVORITE */}
              <div
                className="w-[44px] h-[44px] border border-[#C3D4E9] rounded-full flex items-center justify-center
              "
              >
                <HeartIcon className="w-[24px] h-[24px]" />
              </div>
              {/*=== FAVORITE ===*/}

              {/* NOTIFICATION */}
              <div className="relative w-[44px] h-[44px] border border-[#C3D4E9] rounded-full ">
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
            </>
          )}
          {/* PROFILE IMAGE */}
          <div
            onClick={() => {
              setOpenOptions(!openOptions);
            }}
            className="hover:cursor-pointer w-[44px] h-[44px] border border-[#C3D4E9] rounded-full overflow-hidden flex items-center justify-center"
          >
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
      {/*=== TITLE + OPTIONS ===*/}

      <div className="w-full h-[48px]  text-[#596780] flex items-center justify-between gap-[20px]">
        {/* SEARCH BAR */}
        <div className="h-full w-full border border-[#C3D4E9] hover:border-[#3563E9] rounded-[10px] flex items-center justify-between px-6">
          <div
            className="w-full flex"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <MagnifyingGlassIcon className="w-[25px] h-[25px] " />
            <input
              type="text"
              placeholder="Search something here"
              className="ml-[10px] w-full border-none outline-none"
              value={searchField || ""}
              onChange={(e) => {
                dispatch(updateSearchField(e.target.value));
              }}
            ></input>
          </div>
        </div>
        <div className=" h-full aspect-square border border-[#C3D4E9] rounded-[10px] flex items-center justify-center">
          <AdjustmentsHorizontalIcon className="w-[25px] h-[25px] " />
        </div>
        {/*=== SEARCH BAR ===*/}
      </div>
    </div>
  );
}
