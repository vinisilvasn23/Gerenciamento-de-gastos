import { IButtonProps } from "../../../interfaces";
import { StyledButton } from "./style";

function Button({ onClick, children }:IButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
