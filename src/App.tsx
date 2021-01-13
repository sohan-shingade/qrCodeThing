import * as React from "react";
import Cam from "./Cam";
import "./App.css";

const App: React.FC = () => {
  const [imgs, setImgs] = React.useState<Array<string>>([]);
  const openURL = (link: string | null) => {
    if (typeof link === "string") {
      window.open(link, "_blank");
    }
  };

  return (
    <div>
      <Cam openURL={(link: string | null) => openURL(link)} />
      {/* <ul>{displayImgs}</ul> */}
    </div>
  );
};

export default App;
