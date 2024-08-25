import React from "react";

const Button = ({ topic }) => {
  return (
    <div>
      <button className="bg-gray-100 p-[0.40rem] mx-2 rounded-lg hover:bg-gray-300">
        {topic}
      </button>
    </div>
  );
};

export default Button;
