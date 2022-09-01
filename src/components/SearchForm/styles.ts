import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 0rem 1.5rem;
  display: flex;
  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['base-input']};
    color:  ${(props) => props.theme['base-text']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
