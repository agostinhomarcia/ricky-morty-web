import { ButtonHTMLAttributes } from "react";
import { StyledBackButton } from "./styles";

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ children, ...props }: BackButtonProps) {
  return <StyledBackButton {...props}>{children}</StyledBackButton>;
}
