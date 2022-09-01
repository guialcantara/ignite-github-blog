import styled from "styled-components";

export const PostHeaderContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: -6rem auto 0 auto;
  padding: 0rem 1.5rem;

`


export const PostHeaderContent = styled.div`
  display: flex ;
  flex-direction: column ;
  gap: 2rem;
  background-color: ${props => props.theme["base-profile"]};
  padding: 1.5rem 2rem;
  border-radius: 8px;

>div{
  display: flex;
  justify-content:space-between;
  align-items:center;
  a{
    display: flex ;
    align-items:center;
    gap : 0.25rem
  }
}

  footer{
    display: flex ;
    align-items: center ;
    gap: 1.5rem;
  
    span{
      display: flex ;
      align-items: center ;
      justify-content: center;
      gap: 0.5rem;
    }
  
    svg{
      color: ${props => props.theme["base-label"]}
    }
  }

`

export const PostContent = styled.main`
 width: 100%;
  max-width: 1120px;
  margin: 3rem auto 2rem;
  padding: 0rem 1.5rem;
  overflow-x: hidden ;
  img{
    width: 100%;
  }
  
  h2, h3 {
    margin: 2rem 0 0.5rem;
  }

  p{
    margin: 0.25rem 0
  }
`