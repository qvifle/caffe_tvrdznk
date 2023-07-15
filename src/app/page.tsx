import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container flex h-[825px]">
        <div className="w-3/5 h-full flex flex-col justify-center">
          <h1 className="text-[96px] leading-[130px] font-bold mb-[16px]">
            Твердый Знак
          </h1>
          <p className="text-[64px] leading-[50px] italic text-light bg-primary w-fit p-3 rounded-tl-2xl rounded-bl-2xl">- кофе без лишних  гласных.</p>
        </div>

        <div className="relative w-[700px] h-[825px]">
          <Image src={"/images/hero.jpg"} fill={true} alt={"hero"} />
        </div>
      </div>
    </>
  );
}
