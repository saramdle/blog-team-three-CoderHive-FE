import Image from "next/image";

export default function Humans() {
  const rand1 = Math.floor(Math.random() * 2) + 1;
  const rand2 = Math.floor(Math.random() * 2) + 3;
  const rand3 = Math.floor(Math.random() * 3) + 5;

  return (
    <>
      <div className="absolute bottom-0 -left-[20%] w-full h-[85%]">
        <Image
          src={`/human${rand1}.svg`}
          alt="Human"
          fill
          sizes="100%, 100%"
          style={{ objectFit: "contain" }}
          priority
          className="opacity-0 animation-fill-forwards animate-appear-from-bottom animation-delay-300"
        />
      </div>
      <div className="absolute bottom-0 w-full h-[78%]">
        <Image
          src={`/human${rand2}.svg`}
          alt="Human"
          fill
          sizes="100%, 100%"
          style={{ objectFit: "contain" }}
          priority
          className="opacity-0 animation-fill-forwards animate-appear-from-bottom animation-delay-100"
        />
      </div>
      <div className="absolute bottom-0 left-[20%] w-full h-[80%]">
        <Image
          src={`/human${rand3}.svg`}
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
