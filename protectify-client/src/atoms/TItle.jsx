import React from "react";
import "./atoms.css";

export default function (obj) {
  let style = {};
  if (obj.warn) {
    style = { color: "red" };
  }
  return (
    <>
      <div className="containerHeadTitle">
        <h1 className="headTitle" style={style}>
          {obj.text}
        </h1>
      </div>
    </>
  );
}
