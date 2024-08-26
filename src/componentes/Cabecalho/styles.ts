import styled from "styled-components";

const ContainerCabecalho = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;
  
  div{
    background-image: url('/imagens/logo.png');
    width: 351px;
    height: 117px;
  }
  
  img{
    z-index: 1;
  }

  @media screen and (max-width: 800px){
    padding-top: 60px;
    flex-direction: column;
    align-items: center;

    div{
      background-image: url("/imagens/logo-pequeno.png");
      width: 235px;
      height: 199px;
    }
  
  }

`;
export default ContainerCabecalho;