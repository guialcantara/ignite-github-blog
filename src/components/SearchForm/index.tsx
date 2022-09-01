import { SearchFormContainer } from './styles'
import { memo, useContext, useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce';
import { PostsContext } from '../../contexts/PostsContext';

function SearchFormComponent() {
  const {fetchPosts} = useContext(PostsContext)
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm: string = useDebounce(searchTerm, 500);

  useEffect(() => {
    fetchPosts(debouncedSearchTerm)
  }, [debouncedSearchTerm])
  return (
    <SearchFormContainer>
      <input 
        placeholder="Buscar Conteúdo" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
