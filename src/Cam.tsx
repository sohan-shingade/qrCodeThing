import * as React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
interface Props {
  returnImg: (imgUri: string) => void;
}
const Cam: React.FC<Props> = (props) => {
  function handleTakePhoto(dataUri: string) {
    props.returnImg(dataUri);
    console.log("takePhoto");
  }

  return (
    <Camera
      onTakePhoto={(dataUri: string) => {
        handleTakePhoto(dataUri);
      }}
    />
  );
};

export default Cam;
