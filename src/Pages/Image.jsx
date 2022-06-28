import React from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import fileDownload from "js-file-download";
import "./image.css";

const Image = () => {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");
  console.log(url);

  const handleClick = (url, filename) => {
    console.log(filename);
    axios
      .get(url, {
        // heb ik { "Access-Control-Allow-Origin": "*" } in de config van xampp gezet om access for all porten te geven.
        // headers: { "Access-Control-Allow-Origin": "*" },
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "filename.png");
      });
  };

  return (
    <>
      <img className="image" src={url} alt="" />
      <button
        className="button"
        onClick={() => {
          handleClick(url, "image");
        }}
      >
        Download the File
      </button>
    </>
  );
};

export default Image;
