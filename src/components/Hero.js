import React from "react";
import { HeroLeftIcon } from "../../public/icons/Icons";
import Link from "next/link";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <section className="bg-[url('/images/hero-image.png')] bg-cover h-[850px] bg-center mb-40 relative">
        <HeroLeftIcon className="absolute left-10 -bottom-10" />
        <div className="container">
          <div className="pt-7">
            <Header />
          </div>
          {/* hero content */}
          <div className="pt-40">
            <div className="pt-2 pb-1.5 px-4 rounded-full border border-white inline-flex text-white font-semibold text-sm">
              IfFB – Institut für Fortbildung & Beratung
            </div>
            <h1 className="text-white font-medium text-[90px] leading-[70px] max-w-5xl pt-3">
              Fortbildung & Beratung neu gedacht.
            </h1>
            <p className="text-white text-xl font-medium pt-6 max-w-[750px]">
              Du kennst das vermutlich: Hoher Druck, lange Meetings ohne
              Ergebnis und Konflikte, die nicht gelöst werden. Genau hier setzt
              das IfFB an. Wir begleiten dich, dein Team und deine Organisation
              mit modernen Seminaren, Coachings und Trainings. Unser Ziel ist,
              dass du klarer führst, leichter arbeitest und nachhaltige
              Ergebnisse erzielst.
            </p>

            <div className="flex items-center gap-5 mt-6">
              <Link
                href="#"
                className="bg-[#D0C3B1] py-1 px-6 rounded-full text-black font-normal text-lg"
              >
                Kostenlose Erstberatung
              </Link>
              <Link
                href="#"
                className="border border-[#FFFFFF] py-1 px-6 rounded-full text-white font-normal text-lg"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
