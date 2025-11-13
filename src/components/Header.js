import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-[#FFFFFF99]/60 py-4 rounded-full px-4.5">
        <div className="flex justify-between gap-3">
          <div>
            <Image
              src="/images/logo.png"
              width={85}
              height={70}
              alt="logo"
              className="object-cover w-full h-auto"
            />
          </div>
          <ul className="flex gap-7 items-center">
            <li>
              <Link href="#" className="text-[#263146] font-medium text-base ">
                Startseite
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#263146] font-medium text-base ">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#263146] font-medium text-base ">
                Leistungen
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#263146] font-medium text-base ">
                Kundenerfolge
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#263146] font-medium text-base ">
                Presse
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[#263146] font-medium text-base ">
                Räumlichkeiten
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="border border-black rounded-full py-1 px-6 text-[#263146] font-medium"
            >
              Beraternetzwerk
            </Link>
            <Link
              href="#"
              className="bg-[#558469] rounded-full py-1 px-6 text-white text-lg"
            >
              Kostenlose Erstberatung
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
