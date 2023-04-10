import Image from "next/image";
import { useEffect, useState } from "react";

export default function Humans() {
  const [imgUrl1, setImgUrl1] = useState("/human1.svg");
  const [imgUrl2, setImgUrl2] = useState("/human5.svg");
  const rand1 = Math.floor(Math.random() * 4) + 1;
  const rand2 = Math.floor(Math.random() * 3) + 5;

  useEffect(() => {
    setImgUrl1(`/human${rand1}.svg`);
    setImgUrl2(`/human${rand2}.svg`);
  }, [rand1, rand2]);

  return (
    <>
      <div className="absolute bottom-0 -left-[24%] w-full h-[85%]">
        <Image
          src={imgUrl1}
          alt="Human"
          fill
          sizes="100%, 100%"
          style={{ objectFit: "contain" }}
          priority
          className="opacity-0 animation-fill-forwards animate-appear-from-bottom animation-delay-300"
        />
      </div>
      <div className="absolute bottom-0 w-full h-[78%] z-10">
        <Image
          src={`/logo.svg`}
          alt="Human"
          fill
          sizes="100%, 100%"
          style={{ objectFit: "contain" }}
          priority
          className="opacity-0 animation-fill-forwards animate-appear-from-bottom animation-delay-100"
        />
      </div>
      <div className="absolute bottom-0 left-[24%] w-full h-[80%]">
        <Image
          src={imgUrl2}
          alt="Human"
          fill
          sizes="100%, 100%"
          style={{ objectFit: "contain" }}
          priority
          className="opacity-0 animation-fill-forwards animate-appear-from-bottom animation-delay-500"
        />
      </div>
    </>
  );
}
