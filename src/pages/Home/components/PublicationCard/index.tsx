import { Link } from "react-router-dom";
import { Card } from "./styles";

interface PublicationCardProps {
  index: number;
}

export function PublicationCard({ index }: PublicationCardProps) {
  return (
    <Link to="/publication" style={{ textDecoration: 0 }}>
      <Card
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 + index * 0.1 }}
      >
        <header>
          <h3>JavaScript data types and data structures</h3>
          <span>Há 1 dia</span>
        </header>

        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </p>
      </Card>
    </Link>
  );
}
