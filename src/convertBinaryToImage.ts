// Function to convert binary data to image
function convertBinaryToImage(binaryData: string | ArrayBuffer | null): HTMLImageElement {
    const img = new Image();
  
    if (binaryData instanceof ArrayBuffer) {
      const blob = new Blob([binaryData]);
      const url = URL.createObjectURL(blob);
      img.src = url;
    } else if (typeof binaryData === 'string') {
      img.src = `data:image/jpeg;base64,${binaryData}`;
    }
  
    return img;
  }
  
  export default convertBinaryToImage;