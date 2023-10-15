import React, { useState } from "react";
import "./input.css";
import ImageConverter from "./uploadButtonWhite";
import BinaryToImage from "./BinaryToImage";

function App() {
  const [img, setImg] = useState<string | ArrayBuffer | null>();
  const handleImageElementChange = (
    imageElement: string | ArrayBuffer | null
  ) => {
    // Handle the imageElement in the parent component
    setImg(imageElement)
    console.log("Image element received in parent:", img);
  };
  return (
    <>
    <div className="flex justify-center items-center pt-20">
      <ImageConverter onImageElementChange={handleImageElementChange} />
      <BinaryToImage binaryData={img} />
      </div>
    </>
  );
}

export default App;
