import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

import ProfileIcon from "@/lib/icons/profileIcon";
import AddImageIcon from "@/lib/icons/addImageIcon";
import CloseIcon from "@/lib/icons/closeIcon";

type ProfileImageProps = {
  imageUrl: string;
  setImage: Dispatch<SetStateAction<File | null>>;
};

export default function ProfileImage({
  imageUrl,
  setImage,
}: ProfileImageProps) {
  const [blobURL, setBlobURL] = useState<string>("");

  const onImageSelected = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;

    setImage(e.target.files[0]);
    setBlobURL(URL.createObjectURL(e.target.files[0]));
  };

  const onDeleteImageClicked = () => {
    setImage(null);
    setBlobURL("");
  };

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-48 h-48">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          {blobURL || imageUrl ? (
            <Image
              src={blobURL ? blobURL : imageUrl}
              alt="Image"
              fill
              sizes="100%, 100%"
              style={{ objectFit: "cover" }}
              priority
            />
          ) : (
            <ProfileIcon width="full" height="full" color="text-gray-400" />
          )}
        </div>

        {!blobURL ? (
          <label
            htmlFor="dropzone-file"
            className="absolute bottom-2 right-2 flex flex-col items-center justify-center w-12 h-12
          rounded-full cursor-pointer bg-gray-600 hover:bg-gray-500"
          >
            <AddImageIcon
              width={8}
              height={8}
              color="text-white"
              style="ml-1"
            />
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/svg, image/png, image/jpg, image/jpeg"
              onChange={onImageSelected}
            />
          </label>
        ) : (
          <button
            type="button"
            className="absolute bottom-2 right-2 flex flex-col items-center justify-center w-12 h-12
            rounded-full cursor-pointer bg-red-500 hover:bg-red-600"
            onClick={onDeleteImageClicked}
          >
            <span className="sr-only">delete image</span>
            <CloseIcon width={8} height={8} color="text-white" />
          </button>
        )}
      </div>
    </div>
  );
}
