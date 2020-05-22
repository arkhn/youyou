import * as React from "react";
import Header from "../header";
import ExtensionMaker from "../extensionMaker";
import "./style.css";

import JSONViewer from "components/jsonViewer";

const Home = () => {
  const [jsonText, setJSONText] = React.useState("");
  return (
    <>
      <Header />
      <div className="homeContent">
        <div className="extensionMaker">
          <ExtensionMaker setJson={setJSONText} />
        </div>
        <div className="JSONViewer">
          <JSONViewer jsonText={jsonText} />
        </div>
      </div>
    </>
  );
};

export default Home;
