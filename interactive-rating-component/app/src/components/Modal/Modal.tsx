import React from "react";
import { StyledModal } from "./Modal.styles";

interface Props {
  children: React.ReactNode;
}

export function Modal({ children }: Props) {
  return <StyledModal>{children}</StyledModal>;
}
