import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length > 2) setDots(".");
      else setDots(dots + ".");
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [dots]);

  return (
    <div className="p-5 grid grid-row-3 justify-center">
      <div className="relative w-32 h-32 animate-spin">
        <Image
          src="/logo.svg"
          alt="Human"
          fill
          sizes="100%, 100%"
          style={{ objectFit: "contain" }}
          priority
          className="opacity-0 animation-fill-forwards animate-appear-from-bottom animation-delay-300"
        />
      </div>
      <h1 className="mt-4 font-bold">데이터를 로딩중입니다{dots}</h1>
    </div>
  );
}
