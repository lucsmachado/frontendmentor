import React from "react";
import { Label } from "./Radio.styles";

interface Props extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export function Radio({ label, ...props }: Props) {
  return (
    <Label>
      <input type="radio" {...props} />
      <span>{label}</span>
    </Label>
  );
}
