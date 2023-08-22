"use client";
import Typewriter from "react-ts-typewriter";

export default function myComponent() {
  return (
    <h1 className="duration-100 w-[290px] bg-light leading-[24px] p-5 italic absolute mt-[200px] ml-[500px] max-[900px]:ml-0 max-[700px]:mt-[150px] max-[500px]:p-3">
      <Typewriter
        text={[
          "- кофе без лишних гласных.",
          "Добро пожаловать!",
          "ул.Букетова 20",
        ]}
        loop={true}
        delay={5000}
        speed={100}
      />
    </h1>
  );
}
