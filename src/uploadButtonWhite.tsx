import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useEffect } from "react";
async function convertImageToBinary(
  file: File
): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target) {
        resolve(event.target.result);
      } else {
        reject("Failed to read the image.");
      }
    };

    reader.onerror = () => {
      reject("Error reading the image.");
    };

    reader.readAsArrayBuffer(file);
  });
}

interface ImageConverterProps {
  onImageElementChange: (imageElement: string | ArrayBuffer | null) => void;
}

const ImageConverter: React.FC<ImageConverterProps> = ({
  onImageElementChange,
}) => {
  const [imageElement, setImageElement] = useState<
    string | ArrayBuffer | null
  >();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const binaryData = await convertImageToBinary(file);
        setImageElement(binaryData);
      } catch (error) {
        console.error("Error converting image to binary:", error);
      }
    }
  };

  useEffect(() => {
    if (imageElement) {
      onImageElementChange(imageElement);
    }
  }, [imageElement, onImageElementChange]);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        placeholder="Select an image"
        // className="relative m-0 block  min-w-0  font-medium flex-auto rounded-lg  border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base  text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary w-72"
        className="      file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-slate-100 file:text-gray-700
        hover:file:bg-slate-50  pr-6 rounded-full"
        
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageConverter;
