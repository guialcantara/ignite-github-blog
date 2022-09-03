import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { PostCardContainer } from "./styles";



interface PostCardProps {
  title: string;
  createdAt: string;
  text: string;
  number: number;
}

export function PostCard({ number, title, createdAt, text }: PostCardProps) {

  const publishedDateFormatted = format(
    new Date(createdAt),
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <PostCardContainer>

      <header>
        <Link to={`/post/${number}`}>
          <h2>{title}</h2>
        </Link>
        <time
          title={publishedDateFormatted}
          dateTime={createdAt}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <article>
        <ReactMarkdown>
          {text}
        </ReactMarkdown>
      </article>

    </PostCardContainer >
  )
}