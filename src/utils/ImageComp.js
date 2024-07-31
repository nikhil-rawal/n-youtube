import React from "react";

const ImageComp = ({ classname, altname, srcname }) => {
  return (
    <>
      <img className={classname} alt={altname} src={srcname} />
    </>
  );
};

export default ImageComp;
