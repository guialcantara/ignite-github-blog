import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaBuilding, FaGithub, FaUserFriends } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { PostContent, PostHeaderContainer, PostHeaderContent } from "./styles";

interface Post {
  id: number;
  created_at: string;
  title: string;
  body: string;
  comments: number;
  user: {
    login: string
  }
  number: number;
  html_url: string
}

export function Post() {
  const { number } = useParams<{ number: string }>();
  const [post, setPost] = useState<Post | undefined>();

  async function getPost() {
    const response = await api.get(`/repos/guialcantara/ignite-github-blog/issues/${number}`)
    setPost(response.data)
  }
  useEffect(() => {
    getPost()
  }, [])

  if (!post) {
    return (
      <h1>Loading...</h1>
    )
  }


  const publishedDateFormatted = format(
    new Date(post?.created_at),
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(post?.created_at), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <>
      <Header />
      <PostHeaderContainer>
        <PostHeaderContent>
          <div>
            <Link to="/"><MdArrowBackIosNew /> Voltar</Link>
            <a href={post.html_url}> VER NO GITHUB <BsBoxArrowUpRight /> </a>
          </div>

          <h2>{post.title}</h2>

          <footer>
            <span>
              <FaGithub />
              {post.user?.login}
            </span>

            <time
              title={publishedDateFormatted}
              dateTime={post.created_at}
            >
              <FaBuilding />
              {publishedDateRelativeToNow}
            </time>

            <span>
              <FaUserFriends />
              {post.comments} comentários
            </span>

          </footer>
        </PostHeaderContent>
      </PostHeaderContainer>

      <PostContent>
        <ReactMarkdown>
          {post.body}
        </ReactMarkdown>
      </PostContent>
    </>
  )
}