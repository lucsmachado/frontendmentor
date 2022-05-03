import React from "react";
import { StyledContainer } from "./Container.styles";

interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}
