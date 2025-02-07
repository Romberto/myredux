import React, { useState } from "react";
import styled from "./Button.module.css";
import { ButtonProps } from "../../../utils/types";
import { useAppSelector } from "../../../app/hooks";

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  btnState,
  type = "button",
  ...rest
}) => {
  console.log("render");
  const btnClass = `${styled.btn} ${className ? className : ""}`;
  return (
    <button {...rest} className={btnClass} type={type}>
      {btnState ? "add" : "remove"}
    </button>
  );
};
