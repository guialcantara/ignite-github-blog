import { createContext, ReactNode, useState } from "react";
import { api } from "../lib/axios";

interface PostsProviderProps {
  children: ReactNode
}

interface Post {
  id: number;
  created_at: string;
  title: string;
  body: string;
  comments:number;
  number: number
}

interface PostsContextType {
  posts: Post[],
  fetchPosts: (searchTerm?: string) => Promise<void>,
}

export const PostsContext = createContext<PostsContextType>({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts(searchTerm?: string) {

    const response = await api.get(`search/issues?q=${searchTerm}%20repo:guialcantara/ignite-github-blog`)
    console.log(response.data.items)
    setPosts(response.data.items)
  }

  return (
    <PostsContext.Provider value={{ fetchPosts, posts }}>
      {children}
    </PostsContext.Provider>
  )
}


