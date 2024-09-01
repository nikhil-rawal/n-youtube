import React from "react";
import Button from "./Button";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const ButtonList = () => {
  return (
    <div className="flex text-sm font-semibold">
      <Button topic="Olympics" />
      <Button topic="Motivational" />
      <Button topic="Devotional" />
      <Button topic="Ambani Family" />
      <Button topic="Football" />
      <Button topic="Toronto" />
      <Button topic="Modi" />
      <Button topic="Wildfires" />
      <Button topic="Live" />
      <Button topic="Mixes" />
      <Button topic="Comedy Club" />
      <Button topic="Trump" />
      <Button topic="New to you" />
    </div>
  );
};

export default ButtonList;
