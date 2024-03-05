import { Link } from "react-router-dom";
import { Card } from "./styles";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Issue } from "../../../../@types/interfaces";

interface PublicationCardProps {
  issue: Issue;
  index: number;
}

export function PublicationCard({ index, issue }: PublicationCardProps) {
  const titleReduce = (title: string) => {
    const words = title.split(" ");

    if (words && words.length > 6) {
      const reducedText = words.slice(0, 5).join(" ") + "...";

      return reducedText;
    }

    return title;
  };

  const textReduce = (text: string) => {
    const words = text.split(" ");

    if (words && words.length > 20) {
      const reducedText = words.slice(0, 18).join(" ") + "...";

      return reducedText;
    }

    return text;
  };

  return (
    <Link
      to="/publication"
      state={{ issue: issue }}
      style={{ textDecoration: 0 }}
    >
      <Card
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 + index * 0.1 }}
      >
        <header>
          <h3>{titleReduce(issue.title)}</h3>
          <span>
            {formatDistanceToNow(issue.created_at, {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </header>

        <p>{textReduce(issue.body)}</p>
      </Card>
    </Link>
  );
}
