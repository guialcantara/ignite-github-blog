import styled from "styled-components";
import cover from "../../assets/Cover.svg"

export const HeaderContainer = styled.header`
width: 100vw;
height : 18.5rem;
background-image: url(${cover});
background-repeat: no-repeat;
background-size: cover;
display: flex ;
align-items: flex-start ;
justify-content: center;

img{ 
  margin-top: 3rem ;
}
`