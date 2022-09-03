import styled from "styled-components";

export const PostCardContainer = styled.div`
width: 26rem;
height: 16.25rem;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: 2rem;
background-color: ${props => props.theme["base-post"]};
border-radius: 8px ;

  header{
    display: flex;
    align-items: center;

    h2{
      font-size: 1.25rem;
      color: ${props => props.theme["base-title"]};
    }

    time{
      min-width: 5rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  article{
    max-width: 100%; 
    min-width: 100%;
    text-overflow: ellipsis ;
    overflow: hidden ;
  }

  /* article::after{
    content: "";
    position:absolute;
    bottom: 0;
    width: 100%;
    background-color: red;
    height: 100%;
  } */

  a{
    text-decoration: none;
    color: ${props => props.theme["base-text"]}
  }
`