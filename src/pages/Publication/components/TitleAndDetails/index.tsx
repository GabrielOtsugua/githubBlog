import {
  ArrowSquareOut,
  ArrowUUpLeft,
  Calendar,
  ChatCircle,
  GithubLogo,
} from "@phosphor-icons/react";
import { TitleAndDetailsBox } from "./styles";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Issue } from "../../../../@types/interfaces";

interface TitleAndDetailsProps {
  issue: Issue;
}

export function TitleAndDetails({ issue }: TitleAndDetailsProps) {
  return (
    <TitleAndDetailsBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <nav>
        <Link to="/" style={{ textDecoration: 0 }}>
          <span>
            <ArrowUUpLeft size={20} weight="fill" />
            <p>VOLTAR</p>
          </span>
        </Link>

        <Link
          to={issue?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 0 }}
        >
          <span>
            <p>VER NO GITHUB</p>
            <ArrowSquareOut size={20} weight="fill" />
          </span>
        </Link>
      </nav>

      <h1>{issue?.title}</h1>

      <div>
        <span>
          <GithubLogo size={20} weight="fill" />
          <p>{issue?.user.login}</p>
        </span>
        <span>
          <Calendar size={20} weight="fill" />
          <p>
            {formatDistanceToNow(issue.created_at, {
              addSuffix: true,
              locale: ptBR,
            })}
          </p>
        </span>
        <span>
          <ChatCircle size={20} weight="fill" />
          <p>{issue?.comments} comentários</p>
        </span>
      </div>
    </TitleAndDetailsBox>
  );
}
