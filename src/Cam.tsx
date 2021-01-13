import * as React from "react";
import QrReader from "react-qr-reader";

/**
 *
 *
 */
interface Props {
  openURL: (url: string | null) => void;
}
const Cam: React.FC<Props> = (props) => {
  function handleTakePhoto(link: string | null) {
    props.openURL(link);
    //console.log(dataUri);
  }

  return (
    <QrReader
      delay={300}
      onError={(err: string) => {
        console.error(err);
      }}
      onScan={(link: string | null) => handleTakePhoto(link)}
      style={{ width: "50%", alignSelf: "center" }}
    />
  );
};

export default Cam;
