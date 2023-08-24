import { StyledInput } from "./style";

function Input({ type, id, value, onChange, placeholder }) {
  return (
    <StyledInput
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  );
}
export default Input;
