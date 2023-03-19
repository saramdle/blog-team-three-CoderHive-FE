import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type ImagePreviewProps = {
  image: File;
  setImage: Dispatch<SetStateAction<File | null>>;
};

export default function ImagePreview({ image, setImage }: ImagePreviewProps) {
  const blobURL = URL.createObjectURL(image);

  const onDeleteClicked = () => {
    setImage(null);
  };

  return (
    <div className="relative flex justify-end items-start w-full h-full">
      <Image
        key={"image"}
        src={blobURL}
        alt="Image"
        fill
        style={{ objectFit: "fill" }}
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
