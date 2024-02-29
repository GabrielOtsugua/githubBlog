import header from "../../assets/header.svg";
import { HeaderBox } from "./styles";

export function Header() {
  return (
    <HeaderBox>
      <figure>
        <img src={header} alt="" />
      </figure>
    </HeaderBox>
  );
}
