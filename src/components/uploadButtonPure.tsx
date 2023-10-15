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
  getImageBinary: (imageElement: string | ArrayBuffer | null) => void;
}

interface UploadButtonProps extends ImageConverterProps {
    InputClassName: string ;
  }

const UploadButtonPure: React.FC<UploadButtonProps> = ({
  getImageBinary, InputClassName = "" }) => {
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
      getImageBinary(imageElement);
    }
  }, [imageElement, getImageBinary]);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        placeholder="Select an image"
        className= {InputClassName}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadButtonPure;