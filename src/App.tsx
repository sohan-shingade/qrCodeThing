import * as React from "react";
import Cam from "./Cam";
import "./App.css";

const App: React.FC = () => {
  const [imgs, setImgs] = React.useState<Array<string>>([]);
  const addImg = (imgUri: string) => {
    setImgs((prevImgs: Array<string>) => [imgUri, ...prevImgs]);
  };

  const displayImgs = imgs.map((imgUri) => (
    <li>
      <img src={imgUri} alt="Cool img" />
    </li>
  ));

  return (
    <div>
      <Cam returnImg={addImg} />
      <ul>{displayImgs}</ul>
    </div>
  );
};

export default App;
