import React, { useEffect, useState } from "react";

interface BinaryToImageProps {
  binaryData: string | ArrayBuffer | null | undefined;
}

const BinaryToImage: React.FC<BinaryToImageProps> = ({ binaryData }) => {
  const [image, setImage] = useState<string | null>(null);

  const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    const uint8Array = new Uint8Array(buffer);
    const binaryString = uint8Array.reduce((str, byte) => str + String.fromCharCode(byte), "");
    return btoa(binaryString);
  };

  useEffect(() => {
    if (binaryData !== undefined) {
      let base64String: string;
      if (typeof binaryData === "string") {
        base64String = binaryData; // Assume it's already in base64 format
      } else if (binaryData instanceof ArrayBuffer) {
        base64String = arrayBufferToBase64(binaryData);
      } else {
        console.error("Invalid binary data type. Expected string or ArrayBuffer.");
        return;
      }

      setImage(`data:image/jpeg;base64,${base64String}`);
    }
  }, [binaryData]);

  return (
    <div>
      {image ? (
        <img src={image} alt="Converted" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BinaryToImage;
