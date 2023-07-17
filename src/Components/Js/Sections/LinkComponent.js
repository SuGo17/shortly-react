import React from "react";

function LinkComponent({ ele }) {
  const clickHandler = (e) => {
    const target = e.target.parentElement.children[0];
    navigator.clipboard.writeText(target.textContent);
  };
  return (
    <div className="link">
      <p className="main-link">{ele.link}</p>
      <div className="shortened-link-container">
        <p className="shortened-link">{ele.shortLink}</p>
        <button className="copy-link btn" onClick={clickHandler}>
          Copy
        </button>
      </div>
    </div>
  );
}

export default LinkComponent;
