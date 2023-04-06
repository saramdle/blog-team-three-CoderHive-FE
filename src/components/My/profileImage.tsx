import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

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
            <svg
              className="h-full w-full text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm7 4v2a3 3 0 106 0V6a3 3 0 10-6 0zm11 9.14A15.93 15.93 0 0010 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
            </svg>
          )}
        </div>

        {!blobURL ? (
          <label
            htmlFor="dropzone-file"
            className="absolute bottom-2 right-2 flex flex-col items-center justify-center w-12 h-12
          rounded-full cursor-pointer bg-gray-600 hover:bg-gray-500"
          >
            <svg
              aria-hidden="true"
              className="ml-1 w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z" />
              <path d="M8 11l-3 4h11l-4-6-3 4z" />
              <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
            </svg>
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
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
