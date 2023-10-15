import React, { useState } from "react";
import "./input.css";
import UploadButtonWhite from "./components/uploadButtonWhite";
import BinaryToImage from "./components/BinaryToImage";
import UploadButtonBlack from "./components/uploadButtonBlack";
import UploadButtonPure from "./components/uploadButtonPure";

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
    </>
  );
}

export default App;
