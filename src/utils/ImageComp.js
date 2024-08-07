import React from "react";

const ImageComp = ({
  classNameSource,
  altSource,
  srcSource,
  onClickSource,
}) => {
  return (
    <>
      <img
        className={classNameSource}
        alt={altSource}
        src={srcSource}
        onClick={onClickSource}
      />
    </>
  );
};

export default ImageComp;
