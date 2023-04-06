import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type ImagePreviewProps = {
  image: File | string;
  setImage: Dispatch<SetStateAction<File | string | null>>;
};

export default function ImagePreview({ image, setImage }: ImagePreviewProps) {
  let url = "";
  if (typeof image === "string") url = image;
  else url = URL.createObjectURL(image);

  const onDeleteClicked = () => {
    setImage(null);
  };

  return (
    <div className="relative flex justify-end items-start w-full h-full">
      <Image
        src={url}
        alt="Image"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <button
        className="z-10 mr-4 mt-4 px-4 py-2 h-fit text-xs text-white rounded-md 
        bg-gray-600 hover:bg-gray-500"
        onClick={onDeleteClicked}
      >
        이미지 삭제
      </button>
    </div>
  );
}
