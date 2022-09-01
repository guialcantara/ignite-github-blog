import { useContext } from "react";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { PostsContext } from "../../contexts/PostsContext";
import { PostCardList } from "./styles";

export function Home() {
  const { posts } = useContext(PostsContext)
  return (
    <>
      <Header />
      <Profile />
      <SearchForm />

      <PostCardList>
        {posts.map((postItem) => {
          return (
            <PostCard key={postItem.id} number={postItem.number} createdAt={postItem.created_at} title={postItem.title} text={postItem.body} />
          )
        })}
      </PostCardList>
    </>
  )
}