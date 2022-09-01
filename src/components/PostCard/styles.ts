import styled from "styled-components";

export const PostCardContainer = styled.div`
width: 26rem;
height: 16.25rem;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;


background-color: ${props => props.theme["base-post"]};
border-radius: 8px ;

  .text{ 
    overflow: hidden;
    text-overflow: ellipsis; 
    max-height: 7rem;
    width: 100%; 
    white-space: pre-wrap; 
  }

  p{ 
    text-overflow: ellipsis ;
    width: 100%;
    
  }

  a{
    text-decoration: none;
    color: ${props =>props.theme["base-text"]}
  }
`