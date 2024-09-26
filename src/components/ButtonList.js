import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex text-sm font-semibold">
      <Button topic="Olympics" />
      <Button topic="Motivational" />
      <Button topic="Football" />
      <Button topic="Toronto" />
      <Button topic="Wildfires" />
      <Button topic="Live" />
      <Button topic="Mixes" />
      <Button topic="Comedy Club" />
      <Button topic="Trump" />
      <Button topic="New to you" />
      <Button topic="USA Top 10" />
      <Button topic="Coldplay" />
      <Button topic="Diljit Dosanjh" />
    </div>
  );
};

export default ButtonList;
