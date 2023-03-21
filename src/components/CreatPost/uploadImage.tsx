import { ChangeEvent, Dispatch, SetStateAction } from "react";
import ImagePreview from "./imagePreview";

type UploadImageProps = {
  image: File | null;
  setImage: Dispatch<SetStateAction<File | null>>;
};

export default function UploadImage({ image, setImage }: UploadImageProps) {
  const onImageSelected = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!e.target.files) return;

    setImage(e.target.files[0]);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-64">
      {image ? (
        <ImagePreview image={image} setImage={setImage} />
      ) : (
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-full border-2 
          border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z" />
              <path d="M8 11l-3 4h11l-4-6-3 4z" />
              <path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              사진을
              <span className="font-semibold"> 클릭 또는 드래그</span>
              해서 업로드해보세요
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG, JPEG (MAX. 5MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="image/svg, image/png, image/jpg, image/jpeg"
            onChange={onImageSelected}
          />
        </label>
      )}
    </div>
  );
}
