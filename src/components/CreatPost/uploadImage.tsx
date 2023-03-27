import { ChangeEvent, Dispatch, SetStateAction } from "react";

import ImagePreview from "./imagePreview";
import AddImageIcon from "@/lib/icons/addImageIcon";

type UploadImageProps = {
  image: File | string | null;
  setImage: Dispatch<SetStateAction<File | string | null>>;
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
            <AddImageIcon
              width={10}
              height={10}
              color="text-gray-400"
              style="mb-3"
            />
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
