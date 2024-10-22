"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative pt-[35px] pb-[15px] flex items-center justify-center bg-[#F3F3F3] px-[15px]">
      <Image src="https://i.imgur.com/GWjbpyB.png" width={230} height={28} className="w-[270px]" alt="logo" />
    </div>
  );
}
