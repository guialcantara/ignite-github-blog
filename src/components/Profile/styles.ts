import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: -6rem auto 0 auto;
  padding: 0rem 1.5rem;

`

export const ProfileContent = styled.div`
  display: flex ;
  gap: 2rem;
  background-color: ${props => props.theme["base-profile"]};
  padding: 1.5rem 2rem;
  border-radius: 8px;

  img{
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px ;
  }

`

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex ;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  
  header{
    display: flex ;
    align-items: center;
    justify-content: space-between;
   
    a{
      font-size: 12px ;
      font-weight: bold ;
    }
  
    h2{
      color: ${props => props.theme["base-title"]}
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