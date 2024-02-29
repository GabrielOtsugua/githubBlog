import {
  ArrowSquareOut,
  ArrowUUpLeft,
  Calendar,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";
import { TitleAndDetailsBox } from "./styles";
import { Link } from "react-router-dom";

export function TitleAndDetails() {
  return (
    <TitleAndDetailsBox>
      <nav>
        <Link to="/" style={{ textDecoration: 0 }}>
          <span>
            <ArrowUUpLeft size={20} weight="fill" />
            <p>VOLTAR</p>
          </span>
        </Link>

        <Link to="" style={{ textDecoration: 0 }}>
          <span>
            <p>VER NO GITHUB</p>
            <ArrowSquareOut size={20} weight="fill" />
          </span>
        </Link>
      </nav>

      <h1>JavaScript data types and data structures</h1>

      <div>
        <span>
          <GithubLogo size={20} weight="fill" />
          <p>gabriel</p>
        </span>
        <span>
          <Calendar size={20} weight="fill" />
          <p>Há 1 dia</p>
        </span>
        <span>
          <ChatCircle size={20} weight="fill" />
          <p>5 comentários</p>
        </span>
      </div>
    </TitleAndDetailsBox>
  );
}
