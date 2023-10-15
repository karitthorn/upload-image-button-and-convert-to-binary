import React, { useState } from "react";
import "./input.css";
import UploadButtonWhite from "./uploadButtonWhite";
import BinaryToImage from "./BinaryToImage";
import UploadButtonBlack from "./uploadButtonBlack";
import UploadButtonPure from "./uploadButtonPure";

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
      <UploadButtonWhite getImageBinary={handleImageElementChange} />
      <UploadButtonBlack getImageBinary={handleImageElementChange}/>
      <UploadButtonPure getImageBinary={handleImageElementChange} InputClassName=""/>
      <BinaryToImage binaryData={img} />
      </div>
    </>
  );
}

export default App;
