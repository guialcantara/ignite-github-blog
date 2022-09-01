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
  return (
    <PostCardContainer>

      <div>
        <Link to={`/post/${number}`}>
          <h2>{title}</h2>
        </Link>
        <span>{createdAt}</span>
      </div>
      <div className="text">
        <ReactMarkdown>
          {text}
        </ReactMarkdown>
      </div>

    </PostCardContainer >
  )
}