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
  const [post, setPost] = useState<Post | undefined>({} as Post)


  async function getPost() {
    const response = await api.get(`/repos/guialcantara/ignite-github-blog/issues/${number}`)
    setPost(response.data)
  }
  useEffect(() => {
    getPost()
  }, [])
  console.log(post)

  if (!post) {
    return (
      <h1>Loading...</h1>
    )
  }

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
            <span>
              <FaBuilding />
              {post.created_at}
            </span>

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