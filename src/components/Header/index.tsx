import logo from "../../assets/img/Logo-Nu.png"
import { StyledHeader } from "./style";

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="logo_nuKenzie" />
      
    </StyledHeader>
  );
}

export default Header;
