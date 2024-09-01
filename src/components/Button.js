import React from "react";

const Button = ({ topic }) => {
  return (
    <div>
      <button className="bg-gray-100 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 p-[0.40rem] mx-2 rounded-lg ">
        {topic}
      </button>
    </div>
  );
};

export default Button;
