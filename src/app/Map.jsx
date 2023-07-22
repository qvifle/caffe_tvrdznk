import React from "react";
import Mapgl from "./Mapgl";
import { second_font } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

const Map = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-dark">
      <div className="container  flex flex-row-reverse justify-between items-center w-full h-[700px]]">
        <div className="flex flex-col items-end w-1/2 ">
          <div
            className={` mb-4 text-[84px] w-full text-right font-semibold text-light leading-[90px]  ${second_font.className}`}
          >
            Где нас найти?
          </div>
          <ul className="flex w-full gap-4 justify-end mr-5">
            <li className="bg-light rounded-2xl text-dark p-2  ">
              <Link className="text-dark  flex gap-1" href="https://2gis.kz/petropavlovsk/firm/70000001039525448?m=69.135126%2C54.870528%2F20" target="_blank">
                <Image src="/icons/geo.svg" width={24} height={24} alt="geo" />
                <div>Улица им. Евнея Букетова, 20</div>
              </Link>
            </li>
            <li className="bg-primary rounded-2xl p-2 ">
            <Link className="text-dark flex gap-1" href="https://2gis.kz/petropavlovsk/firm/70000001039525448?m=69.135126%2C54.870528%2F20" target="_blank">
              <Image src="/icons/clock.svg" width={24} height={24} alt="time" />
              <div> Каждый День c 10:00 до 22:00</div>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Mapgl />
        </div>
      </div>
    </div>
  );
};

export default Map;
