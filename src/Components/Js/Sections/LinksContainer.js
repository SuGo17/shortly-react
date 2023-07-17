import React from "react";
import useLinksContext from "../../../CustomHooks/useLinksContext";
import LinkComponent from "./LinkComponent";
function LinksContainer() {
  let { allLinks } = useLinksContext();
  return (
    <div className="links-container">
      {allLinks &&
        allLinks.map((ele, i) => <LinkComponent ele={ele} key={i} />)}
    </div>
  );
}

export default LinksContainer;
