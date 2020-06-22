import React from "react";
import dataNew from "../connections.json";
import dataOld from "../connections_old.json";
import * as jsondiffpatch from "jsondiffpatch";
// import "./App.css";

class Diff extends React.Component {
  componentDidMount() {
    console.log(dataNew);
    console.log(dataOld);
    console.log(jsondiffpatch);
    const delta = jsondiffpatch.diff(dataOld, dataNew);
    console.log(delta);
    document.getElementById(
      "the-diff"
    ).innerHTML = jsondiffpatch.formatters.annotated.format(delta, dataOld);
    jsondiffpatch.formatters.html.showUnchanged();
    jsondiffpatch.formatters.html.hideUnchanged();
  }

  render() {
    return (
      <div id="the-diff">
        <p>ashish</p>
      </div>
    );
  }
}

export default Diff;
