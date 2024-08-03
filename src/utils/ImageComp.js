import React from "react";

const ImageComp = ({ classname, altname, srcname, onclick }) => {
  return (
    <>
      <img
        className={classname}
        alt={altname}
        src={srcname}
        onClick={onclick}
      />
    </>
  );
};

export default ImageComp;
