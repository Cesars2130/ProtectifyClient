import React from "react";
import "./atoms.css"

export default function (obj) {
  return (
    <>
        <div className="containerHeadTitle">
            <h1 className="headTitle">
                {obj.text}
            </h1>
        </div>
    </>
  )
}
